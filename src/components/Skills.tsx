"use client";

import { useEffect, useState } from "react";
import { SkillCategory } from "@/data/api";

export default function Skills() {
  const [categories, setCategories] = useState<SkillCategory[]>([]);

  useEffect(() => {
    fetch(`${process.env.NEXT_PUBLIC_API_BASE_URL || 'http://127.0.0.1:8000/api/v1'}/skills/`)
      .then(r => r.json())
      .then(data => setCategories(data))
      .catch(err => console.error("Error loading skills:", err));
  }, []);

  const getIcon = (title: string) => {
    switch (title.toLowerCase()) {
      case "frontend":
        return (
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
          </svg>
        );
      case "backend":
        return (
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.58 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.58 4 8 4s8-1.79 8-4M4 7c0-2.21 3.58-4 8-4s8 1.79 8 4m0 5c0 2.21-3.58 4-8 4s-8-1.79-8-4" />
          </svg>
        );
      case "ai/ml":
      case "ai":
      case "ml":
        return (
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
          </svg>
        );
      default:
        return (
          <svg className="w-5 h-5 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
          </svg>
        );
    }
  };

  const defaultCategories = [
    { category: "Frontend", skills: ["React/Next.js", "HTML/CSS/JS", "Tailwind/Bootstrap", "jQuery"] },
    { category: "Backend", skills: ["Django/DRF", "Laravel/PHP", "Node.js/Express", "PostgreSQL/MySQL/Mongo"] },
    { category: "AI/ML", skills: ["scikit-learn/Pandas", "PyTorch/Transformers", "OpenAI Agent SDK", "ChromaDB"] },
    { category: "Tooling", skills: ["Git/GitHub", "Firebase", "Kotlin/Android", "WordPress/Design"] }
  ];

  const categoriesToRender = categories.length ? categories : defaultCategories;


  return (
    <section id="skills" className="py-24 w-full bg-bg border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        {/* Section Label */}
        <div className="mb-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            {'// Technical skills'}
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="font-display text-4xl sm:text-5xl font-black text-text tracking-tight uppercase mb-12">
          Technical Toolbox
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categoriesToRender.map((category, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border rounded-2xl p-6 sm:p-8 hover:border-border-strong hover:shadow-lg transition-all duration-300 group"
            >
              {/* Header */}
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-9 h-9 rounded-lg bg-accent-soft flex items-center justify-center">
                  {getIcon(category.category)}
                </div>
                <h3 className="font-display text-2xl font-extrabold text-text tracking-tight uppercase">
                  {category.category}
                </h3>
              </div>

              {/* Skills List */}
              <ul className="space-y-4">
                {category.skills.map((skill, skillIdx) => (
                  <li key={skillIdx} className="flex items-center space-x-3 group/item">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent opacity-50 group-hover/item:opacity-100 group-hover/item:scale-125 transition-all duration-200" />
                    <span className="font-mono text-xs sm:text-sm text-text-dim group-hover/item:text-text transition-colors duration-200">
                      {skill}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
