"use client";

import { useRef } from "react";

interface Course {
  title: string;
  subtitle: string;
  icon: React.ReactNode;
}

export default function Credentials() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const courses: Course[] = [
    {
      title: "Full Stack Web Development",
      subtitle: "Certificate Course • Web Engineering & APIs",
      icon: (
        <svg
          className="w-5 h-5 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
    {
      title: "Python Programming",
      subtitle: "Applied, Project-Based • Core & Automation",
      icon: (
        <svg
          className="w-5 h-5 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "Graphic Designing",
      subtitle: "Visual Systems, UI Layouts & Typography",
      icon: (
        <svg
          className="w-5 h-5 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.414-1.414a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
          />
        </svg>
      ),
    },
    {
      title: "Machine Learning Fundamentals",
      subtitle: "scikit-learn, Regression & Applied Stats",
      icon: (
        <svg
          className="w-5 h-5 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
  ];

  const scroll = (direction: "left" | "right") => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const scrollAmount = 320;
    if (direction === "left") {
      carousel.scrollLeft -= scrollAmount;
    } else {
      carousel.scrollLeft += scrollAmount;
    }
  };

  return (
    <section id="credentials" className="py-24 w-full bg-bg border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        {/* Section Label */}
        <div className="mb-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            {'// Academic foundation'}
          </span>
        </div>

        {/* Top 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          {/* Column 1 - Education */}
          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-border-strong transition-all duration-300">
            <h3 className="font-display text-3xl font-extrabold text-text tracking-tight uppercase mb-6 flex items-center space-x-3">
              <span>Education</span>
            </h3>
            <div className="border-l-2 border-accent/30 pl-6 space-y-2">
              <h4 className="font-sans text-lg font-bold text-text">
                BS Information Technology
              </h4>
              <p className="font-mono text-xs text-accent uppercase font-semibold">
                In Progress
              </p>
              <p className="font-sans text-sm text-text-dim leading-relaxed">
                Focusing on core computing systems, network infrastructures, software architecture,
                and databases. Combining classroom theory with intensive full-stack product building.
              </p>
            </div>
          </div>

          {/* Column 2 - Focus Areas */}
          <div className="bg-surface border border-border rounded-2xl p-8 hover:border-border-strong transition-all duration-300">
            <h3 className="font-display text-3xl font-extrabold text-text tracking-tight uppercase mb-6 flex items-center space-x-3">
              <span>Focus Areas</span>
            </h3>
            <ul className="space-y-6">
              <li className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-mono text-xs text-accent font-bold">01</span>
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-text leading-snug">
                    Full-Stack Web Apps
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-text-dim mt-1">
                    Building modular user interfaces in React/Next.js integrated with secure, high-scale REST APIs in Django and FastAPI.
                  </p>
                </div>
              </li>

              <li className="flex items-start space-x-4">
                <div className="w-8 h-8 rounded-lg bg-accent-soft flex items-center justify-center shrink-0 mt-0.5">
                  <span className="font-mono text-xs text-accent font-bold">02</span>
                </div>
                <div>
                  <h4 className="font-sans text-base font-bold text-text leading-snug">
                    Applied Machine Learning
                  </h4>
                  <p className="font-sans text-xs sm:text-sm text-text-dim mt-1">
                    Structuring Retrieval-Augmented Generation (RAG), text embeddings, vector databases (ChromaDB), and custom LLM agent pipelines.
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Carousel Heading & Controls */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
          <h3 className="font-display text-3xl font-extrabold text-text tracking-tight uppercase">
            Certifications &amp; Coursework
          </h3>

          {/* Nav Buttons */}
          <div className="flex space-x-2.5">
            <button
              onClick={() => scroll("left")}
              className="w-10 h-10 rounded-full border border-border hover:border-border-strong hover:bg-surface-2 flex items-center justify-center text-text transition-colors duration-200"
              aria-label="Scroll Carousel Left"
            >
              &larr;
            </button>
            <button
              onClick={() => scroll("right")}
              className="w-10 h-10 rounded-full border border-border hover:border-border-strong hover:bg-surface-2 flex items-center justify-center text-text transition-colors duration-200"
              aria-label="Scroll Carousel Right"
            >
              &rarr;
            </button>
          </div>
        </div>

        {/* Horizontal Scrollable Carousel */}
        <div
          ref={carouselRef}
          className="flex overflow-x-auto no-scrollbar scroll-smooth gap-6 py-4 -my-4 snap-x snap-mandatory"
        >
          {courses.map((course, idx) => (
            <div
              key={idx}
              className="min-w-[280px] sm:min-w-[320px] max-w-[320px] bg-surface border border-border rounded-xl p-6 snap-start hover:border-border-strong transition-colors duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-accent-soft flex items-center justify-center mb-6">
                {course.icon}
              </div>
              <h4 className="font-display text-2xl font-extrabold text-text tracking-tight uppercase mb-2 leading-tight">
                {course.title}
              </h4>
              <p className="font-sans text-xs sm:text-sm text-text-dim">
                {course.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
