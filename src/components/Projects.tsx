"use client";

import { MouseEvent, useRef } from "react";
import Link from "next/link";
import { Project, projectsData } from "@/data/projects";

// Helper to render responsive diagrams per project type
export function ProjectDiagram({ type }: { type: Project["type"] }) {
  if (type === "dashboard") {
    return (
      <svg viewBox="0 0 240 140" fill="none" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
        <rect x="10" y="10" width="40" height="120" rx="4" fill="var(--surface-2)" stroke="var(--border)" />
        <line x1="20" y1="25" x2="40" y2="25" stroke="var(--text-dim)" strokeWidth="2" />
        <line x1="20" y1="45" x2="35" y2="45" stroke="var(--border-strong)" strokeWidth="2" />
        <line x1="20" y1="65" x2="38" y2="65" stroke="var(--border-strong)" strokeWidth="2" />
        <rect x="60" y="10" width="170" height="20" rx="4" fill="var(--surface-2)" stroke="var(--border)" />
        <rect x="60" y="40" width="75" height="40" rx="6" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
        <circle cx="75" cy="55" r="5" fill="var(--accent)" />
        <line x1="90" y1="55" x2="120" y2="55" stroke="var(--accent)" strokeWidth="2" />
        <rect x="155" y="40" width="75" height="40" rx="6" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="170" cy="55" r="5" fill="var(--border-strong)" />
        <line x1="185" y1="55" x2="215" y2="55" stroke="var(--border-strong)" strokeWidth="2" />
        <rect x="60" y="90" width="75" height="40" rx="6" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="75" cy="105" r="5" fill="var(--border-strong)" />
        <line x1="90" y1="105" x2="115" y2="105" stroke="var(--border-strong)" strokeWidth="2" />
        <rect x="155" y="90" width="75" height="40" rx="6" fill="var(--surface)" stroke="var(--border)" />
        <circle cx="170" cy="105" r="5" fill="var(--border-strong)" />
        <line x1="185" y1="105" x2="210" y2="105" stroke="var(--border-strong)" strokeWidth="2" />
      </svg>
    );
  }

  if (type === "ml") {
    return (
      <svg viewBox="0 0 240 140" fill="none" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
        <rect x="15" y="35" width="50" height="70" rx="6" fill="var(--surface-2)" stroke="var(--border)" />
        <line x1="25" y1="50" x2="55" y2="50" stroke="var(--border-strong)" strokeWidth="2" />
        <line x1="25" y1="65" x2="50" y2="65" stroke="var(--border-strong)" strokeWidth="2" />
        <line x1="25" y1="80" x2="45" y2="80" stroke="var(--accent)" strokeWidth="2" />
        <path d="M 75 70 L 95 70" stroke="var(--accent)" strokeWidth="1.5" strokeDasharray="4 4" />
        <rect x="105" y="35" width="50" height="70" rx="6" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
        <text x="130" y="65" fill="var(--accent)" fontSize="9" fontFamily="var(--font-display)" fontWeight="900" textAnchor="middle">EMBED</text>
        <text x="130" y="80" fill="var(--text-dim)" fontSize="7" fontFamily="var(--font-mono)" textAnchor="middle">ChromaDB</text>
        <path d="M 165 70 L 185 70" stroke="var(--border-strong)" strokeWidth="1.5" strokeDasharray="4 4" />
        <circle cx="210" cy="70" r="20" fill="var(--surface-2)" stroke="var(--border-strong)" />
        <text x="210" y="73" fill="var(--text)" fontSize="9" fontFamily="var(--font-display)" fontWeight="900" textAnchor="middle">RAG</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 240 140" fill="none" className="w-full h-full opacity-80" xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="15" width="210" height="110" rx="6" fill="var(--surface)" stroke="var(--border)" />
      <rect x="15" y="15" width="210" height="20" rx="6" fill="var(--surface-2)" stroke="var(--border)" />
      <circle cx="27" cy="25" r="3" fill="var(--accent)" />
      <rect x="25" y="45" width="55" height="70" rx="4" fill="var(--surface)" stroke="var(--border)" />
      <rect x="30" y="85" width="45" height="6" rx="2" fill="var(--surface-2)" />
      <circle cx="37" cy="102" r="3" fill="var(--border-strong)" />
      <rect x="92" y="45" width="55" height="70" rx="4" fill="var(--surface)" stroke="var(--accent)" strokeWidth="1.5" />
      <rect x="97" y="85" width="45" height="6" rx="2" fill="var(--accent-soft)" />
      <circle cx="104" cy="102" r="3" fill="var(--accent)" />
      <rect x="160" y="45" width="55" height="70" rx="4" fill="var(--surface)" stroke="var(--border)" />
      <rect x="165" y="85" width="45" height="6" rx="2" fill="var(--surface-2)" />
      <circle cx="172" cy="102" r="3" fill="var(--border-strong)" />
    </svg>
  );
}

// Single Project Card with cursor-glow
export function ProjectCard({ project }: { project: Project }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
    card.style.setProperty("--mx", `${x}px`);
    card.style.setProperty("--my", `${y}px`);
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      className="project-card-glow relative overflow-hidden bg-surface border border-border rounded-2xl group hover:border-border-strong hover:shadow-xl transition-all duration-300 grid grid-cols-1 lg:grid-cols-12"
    >
      {/* Cursor Glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none -z-10"
        style={{
          background: "radial-gradient(350px circle at var(--mouse-x, 0px) var(--mouse-y, 0px), var(--glow), transparent 80%)",
        }}
      />

      {/* Browser Top Bar */}
      <div className="lg:col-span-12 h-9 bg-surface border-b border-border px-4 flex items-center justify-between">
        <div className="flex space-x-1.5 select-none">
          <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56] opacity-75" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E] opacity-75" />
          <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F] opacity-75" />
        </div>
        <div className="w-[140px] sm:w-[220px] h-5 bg-surface-2 border border-border rounded-md flex items-center justify-center">
          <span className="font-mono text-[9px] text-text-dim truncate px-2 select-none">{project.url}</span>
        </div>
        <div className="w-8" />
      </div>

      {/* Left Visual Panel */}
      <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-border bg-surface-2 p-8 flex items-center justify-center min-h-[180px]">
        <div className="w-full max-w-[240px] h-[140px] flex items-center justify-center">
          <ProjectDiagram type={project.type} />
        </div>
      </div>

      {/* Right Info Panel */}
      <div className="lg:col-span-7 p-8 flex flex-col justify-between">
        <div>
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-2 block">{project.tag}</span>
          <h3 className="font-display text-3xl font-extrabold text-text tracking-tight uppercase mb-4">{project.title}</h3>
          <p className="font-sans text-sm sm:text-base text-text-dim leading-relaxed mb-6">{project.description}</p>
        </div>
        <div>
          <div className="flex flex-wrap gap-2 mb-6">
            {project.stack.map((tech, idx) => (
              <span key={idx} className="px-2.5 py-1 bg-surface-2 border border-border rounded-full font-mono text-[10px] sm:text-xs text-text-dim">
                {tech}
              </span>
            ))}
          </div>
          <a
            href="#"
            onClick={(e) => e.preventDefault()}
            className="font-mono text-xs sm:text-sm font-semibold text-text hover:text-accent flex items-center transition-colors duration-200"
          >
            <span>View source</span>
            <span className="ml-1 transition-transform duration-200 group-hover:translate-x-1">&rarr;</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="work" className="py-24 w-full bg-surface-2 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        <div className="mb-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            {'// Recent projects'}
          </span>
        </div>
        <h2 className="font-display text-4xl sm:text-5xl font-black text-text tracking-tight uppercase mb-12">
          Engineered Work
        </h2>
        <div className="space-y-10 mb-16">
          {projectsData.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <div className="flex justify-center">
          <Link
            href="/projects"
            className="btn-shine-container bg-surface border border-border-strong hover:border-text text-text font-sans font-bold py-3.5 px-8 rounded-full hover:bg-surface-2 transition-all duration-200 text-center select-none"
          >
            View All Projects &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
