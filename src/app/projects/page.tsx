"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ProjectCard } from "@/components/Projects";
import ChatWidget from "@/components/ChatWidget";

import { ProjectData } from "@/data/api";

export default function ProjectsPage() {
  const [filter, setFilter] = useState<"all" | "fullstack" | "ai">("all");
  const [projects, setProjects] = useState<ProjectData[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api/v1'}/projects/`)
      .then(r => r.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Error loading projects page:", err));
  }, []);

  const filteredProjects = projects.filter((project) => {
    if (filter === "all") return true;
    if (filter === "fullstack") {
      return project.category === "fullstack" || project.category === "fullstack+ai";
    }
    if (filter === "ai") {
      return project.category === "ai" || project.category === "fullstack+ai";
    }
    return true;
  });

  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-bg">
        <div className="max-w-[1280px] mx-auto px-6 w-full">
          {/* Breadcrumb */}
          <div className="flex items-center space-x-2 font-mono text-xs text-text-dim mb-8">
            <Link href="/" className="hover:text-accent transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-accent">Projects</span>
          </div>

          {/* Header */}
          <div className="mb-4">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
              {'// All projects'}
            </span>
          </div>
          <h1 className="font-display text-5xl sm:text-6xl font-black text-text tracking-tight uppercase mb-4 leading-[0.95]">
            Full Project<br />Catalog
          </h1>
          <p className="font-sans text-base sm:text-lg text-text-dim max-w-xl mb-12 leading-relaxed">
            Every full-stack and machine learning project built by Salman — from early explorations
            to production-shipped systems.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap gap-3 mb-12">
            {[
              { id: "all", label: "All Projects" },
              { id: "fullstack", label: "Full-Stack" },
              { id: "ai", label: "Artificial Intelligence / ML" },
            ].map((btn) => (
              <button
                key={btn.id}
                onClick={() => setFilter(btn.id as "all" | "fullstack" | "ai")}
                className={`font-mono text-xs font-semibold uppercase tracking-wider px-6 py-2.5 rounded-full border transition-all duration-300 ${
                  filter === btn.id
                    ? "bg-accent border-accent text-bg shadow-lg shadow-accent/20"
                    : "bg-surface border-border hover:border-text-dim text-text-dim hover:text-text"
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>

          {/* 2-Column Dense Grid */}
          <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>

          {/* Back Link */}
          <div className="mt-16 flex justify-center">
            <Link
              href="/"
              className="font-mono text-sm text-text-dim hover:text-accent transition-colors"
            >
              &larr; Back to Portfolio
            </Link>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </>
  );
}
