import Image from "next/image";

export default function About() {
  const features = [
    {
      title: "Full-Stack Delivery",
      description:
        "Building scalable, interactive interfaces and APIs with React, Next.js, and robust Django engines.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "ML That Ships",
      description:
        "Bringing model prediction, vector embeddings, and RAG systems out of Jupyter and into production apps.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M4.5 12a7.5 7.5 0 0015 0m-15 0a7.5 7.5 0 1115 0m-15 0H3m16.5 0H21m-1.5 0H12m-8.457 3.077l1.41-1.41m12.102-12.102l1.41-1.41m0 12.102l-1.41-1.41M5.91 5.91l-1.41-1.41"
          />
        </svg>
      ),
    },
    {
      title: "Fast, Clean Execution",
      description:
        "Delivering modular, well-tested code quickly, with semantic HTML, accessibility, and high performance.",
      icon: (
        <svg
          className="w-6 h-6 text-accent"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  const badges = ["Lahore, Pakistan", "Open to opportunities", "Remote-friendly"];

  return (
    <section id="about" className="py-24 w-full bg-surface-2 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        {/* Header Label */}
        <div className="mb-4">
          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent">
            {'// What I bring to the table'}
          </span>
        </div>

        {/* Profile Row — matches reference exactly */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 mb-16">
          {/* Avatar with spinning conic-gradient border (mask-composite technique) */}
          <div className="avatar overflow-hidden">
            <Image
              src="/avatar.png"
              alt="Muhammad Salman Khan Avatar"
              fill
              sizes="96px"
              loading="lazy"
              className="object-cover rounded-[20px]"
            />
          </div>

          <div>
            <p className="font-display text-2xl font-bold text-text tracking-tight mb-1">
              Muhammad Salman Khan
            </p>
            <p className="font-mono text-xs font-semibold uppercase tracking-widest text-accent mt-1">
              Full-Stack Developer &amp; ML Engineer
            </p>
            <div className="flex items-center space-x-1.5 text-text-dim text-xs font-mono mt-1.5">
              <svg className="w-3.5 h-3.5 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M12 21s7-6.5 7-12a7 7 0 1 0-14 0c0 5.5 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.4" />
              </svg>
              <span>Lahore, Pakistan</span>
            </div>
          </div>
        </div>

        {/* Feature Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20">
          {features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-surface border border-border rounded-2xl p-8 hover:border-border-strong hover:shadow-xl transition-all duration-300 group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent-soft flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-2xl font-extrabold text-text tracking-tight uppercase mb-3">
                {feature.title}
              </h3>
              <p className="font-sans text-sm text-text-dim leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Two Column - Bio + Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center pt-8 border-t border-border">
          {/* Bio Text */}
          <div className="lg:col-span-6 flex flex-col justify-center">
            <div className="space-y-5 mb-8">
              <p className="font-sans text-base text-text leading-relaxed">
                Based in Lahore, Pakistan, I am currently pursuing a BS in Information
                Technology. I focus on bridging the gap between high-level frontend interfaces and robust backend logic, combining them with production-ready AI systems.
              </p>
              <p className="font-sans text-base text-text leading-relaxed">
                My workflow is split across building clean React environments, structuring resilient API endpoints with Django and FastAPI, and fine-tuning applied Machine Learning modules (Retrieval-Augmented Generation, sentence embeddings, and model pipelines).
              </p>
              <p className="font-sans text-base text-text leading-relaxed">
                I believe in writing clean, modular code that ships fast, meets high performance standards, and remains easily maintainable. I enjoy turning complex system designs into simple, reliable software solutions.
              </p>
            </div>

            {/* Badge Pills */}
            <div className="flex flex-wrap gap-2.5">
              {badges.map((badge, idx) => (
                <span
                  key={idx}
                  className="px-3.5 py-1.5 bg-surface border border-border rounded-full font-mono text-xs text-text-dim select-none"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Architecture Diagram */}
          <div className="lg:col-span-6 flex items-center justify-center bg-surface border border-border rounded-2xl p-6 sm:p-8 shadow-inner overflow-hidden">
            <div className="w-full max-w-[460px]">
              <svg
                viewBox="0 0 400 220"
                className="w-full h-auto select-none overflow-visible"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <style>{`
                  @keyframes flow {
                    from { stroke-dashoffset: 0; }
                    to { stroke-dashoffset: -26; }
                  }
                  .flow-line {
                    animation: flow 2.5s linear infinite;
                  }
                `}</style>

                {/* Connections (Background Lines) */}
                <path
                  d="M 140 45 Q 200 30 260 45"
                  stroke="var(--border)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 80 70 Q 110 120 170 150"
                  stroke="var(--border)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
                <path
                  d="M 320 70 Q 290 120 230 150"
                  stroke="var(--border)"
                  strokeWidth="2"
                  strokeLinecap="round"
                />

                {/* Flowing Dots (Foreground Lines) */}
                <path
                  d="M 140 45 Q 200 30 260 45"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 20"
                  className="flow-line"
                />
                <path
                  d="M 80 70 Q 110 120 170 150"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 20"
                  className="flow-line"
                />
                <path
                  d="M 320 70 Q 290 120 230 150"
                  stroke="var(--accent)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeDasharray="6 20"
                  className="flow-line"
                />

                {/* FRONTEND Box */}
                <rect
                  x="20"
                  y="20"
                  width="120"
                  height="50"
                  rx="8"
                  fill="var(--surface)"
                  stroke="var(--border-strong)"
                  strokeWidth="1"
                />
                <text
                  x="80"
                  y="44"
                  fill="var(--text)"
                  fontFamily="var(--font-display)"
                  fontSize="13"
                  fontWeight="800"
                  textAnchor="middle"
                  className="tracking-wider uppercase"
                >
                  FRONTEND
                </text>
                <text
                  x="80"
                  y="57"
                  fill="var(--text-dim)"
                  fontFamily="var(--font-mono)"
                  fontSize="8"
                  textAnchor="middle"
                >
                  React / Tailwind
                </text>

                {/* BACKEND Box */}
                <rect
                  x="260"
                  y="20"
                  width="120"
                  height="50"
                  rx="8"
                  fill="var(--surface)"
                  stroke="var(--border-strong)"
                  strokeWidth="1"
                />
                <text
                  x="320"
                  y="44"
                  fill="var(--text)"
                  fontFamily="var(--font-display)"
                  fontSize="13"
                  fontWeight="800"
                  textAnchor="middle"
                  className="tracking-wider uppercase"
                >
                  BACKEND
                </text>
                <text
                  x="320"
                  y="57"
                  fill="var(--text-dim)"
                  fontFamily="var(--font-mono)"
                  fontSize="8"
                  textAnchor="middle"
                >
                  Django / FastAPI
                </text>

                {/* ML LAYER Box (Outlined in Accent) */}
                <rect
                  x="140"
                  y="150"
                  width="120"
                  height="50"
                  rx="8"
                  fill="var(--surface)"
                  stroke="var(--accent)"
                  strokeWidth="2"
                />
                <text
                  x="200"
                  y="174"
                  fill="var(--accent)"
                  fontFamily="var(--font-display)"
                  fontSize="13"
                  fontWeight="800"
                  textAnchor="middle"
                  className="tracking-wider uppercase"
                >
                  ML LAYER
                </text>
                <text
                  x="200"
                  y="187"
                  fill="var(--text-dim)"
                  fontFamily="var(--font-mono)"
                  fontSize="8"
                  textAnchor="middle"
                >
                  PyTorch / RAG
                </text>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
