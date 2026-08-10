"use client";

import { useEffect, useState, useRef, MouseEvent } from "react";
import Image from "next/image";

// Custom client-side Counter component with IntersectionObserver
function CountUp({
  end,
  duration = 2000,
  suffix = "",
}: {
  end: number;
  duration?: number;
  suffix?: string;
}) {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLSpanElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = elementRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    if (!hasStarted) return;

    let startTimestamp: number | null = null;
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) {
        window.requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    window.requestAnimationFrame(step);
  }, [hasStarted, end, duration]);

  return (
    <span ref={elementRef}>
      {count}
      {suffix}
    </span>
  );
}

// 3D Tilt Wrapper Component
function TiltCard({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((centerY - y) / centerY) * 10;
    const rotateY = ((x - centerX) / centerX) * 10;

    card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  };

  const handleMouseLeave = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transform = "perspective(1000px) rotateX(0deg) rotateY(0deg)";
    card.style.transition = "transform 0.5s ease";
  };

  const handleMouseEnter = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = "none";
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="relative w-full h-full transition-transform duration-500 ease-out"
      style={{ transformStyle: "preserve-3d" }}
    >
      {children}
    </div>
  );
}

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative w-full min-h-screen pt-32 pb-16 flex items-center overflow-hidden">
      {/* Aurora Drift Background — deferred so blobs don't block initial paint */}
      {mounted && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-[10%] left-[5%] w-[45rem] h-[45rem] rounded-full bg-glow/15 blur-[130px] animate-aurora-drift-1" />
          <div className="absolute bottom-[10%] right-[5%] w-[38rem] h-[38rem] rounded-full bg-glow/10 blur-[110px] animate-aurora-drift-2" />
        </div>
      )}

      <div className="max-w-[1280px] mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column - Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          {/* Pill Tag */}
          <div
            className={`flex items-center space-x-2 w-fit px-4 py-1.5 rounded-full border border-accent/20 bg-accent-soft text-accent font-mono text-xs font-semibold uppercase tracking-wider mb-8 transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            <span>Available for new projects</span>
          </div>

          {/* Headline */}
          <h1
            className={`font-display text-7xl sm:text-8xl lg:text-[7.5rem] leading-[0.9] font-black tracking-tight text-text flex flex-col mb-6 transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            <span>BUILDING</span>
            <span className="text-accent">INTELLIGENT</span>
            <span>FULL-STACK</span>
            <span>SYSTEMS.</span>
          </h1>

          {/* Description */}
          <p
            className={`font-sans text-lg sm:text-xl text-text-dim max-w-xl mb-10 transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "450ms" }}
          >
            I build intelligent full-stack systems that merge high-scale backend
            engineering with applied machine learning. Based in Lahore, Pakistan,
            I design and ship high-performance digital products from architecture to
            production.
          </p>

          {/* Buttons */}
          <div
            className={`flex flex-col sm:flex-row items-stretch sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-14 transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "600ms" }}
          >
            <a
              href="#work"
              className="btn-shine-container bg-accent hover:bg-accent/90 text-bg font-sans font-bold py-3.5 px-8 rounded-full shadow-lg shadow-accent/10 hover:shadow-accent/20 transition-all duration-200 text-center select-none"
            >
              View Projects &rarr;
            </a>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                alert("Résumé download feature triggered!");
              }}
              className="border border-border-strong hover:border-text text-text font-sans font-bold py-3.5 px-8 rounded-full hover:bg-surface-2 transition-all duration-200 text-center select-none"
            >
              Download Résumé
            </a>
          </div>

          {/* Stats Grid */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-border transition-all duration-700 ${
              mounted
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-6"
            }`}
            style={{ transitionDelay: "750ms" }}
          >
            {[
              { end: 2, suffix: "+", label: "Years Building" },
              { end: 5, suffix: "+", label: "Live Projects" },
              { end: 3, suffix: "", label: "ML Frameworks" },
              { end: 10, suffix: "+", label: "Tools Mastered" },
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="font-display text-5xl font-black text-text mb-1 tracking-tight">
                  <CountUp end={stat.end} suffix={stat.suffix} />
                </span>
                <span className="font-mono text-xs uppercase tracking-wider text-text-dim">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Column - Image Card */}
        <div
          className={`lg:col-span-5 flex justify-center items-center transition-all duration-1000 ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-12 scale-95"
          }`}
          style={{ transitionDelay: "900ms" }}
        >
          <div className="relative w-[340px] h-[450px] sm:w-[400px] sm:h-[520px] max-w-full">
            {/* Background Glow */}
            <div className="absolute inset-0 bg-accent/15 rounded-3xl blur-3xl pointer-events-none -z-10" />

            <TiltCard>
              <div
                className="relative w-full h-full bg-surface-2 border border-border-strong rounded-3xl overflow-hidden flex items-end justify-center group shadow-2xl"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Portrait Image */}
                <div className="relative w-[90%] h-[90%] flex items-end justify-center select-none pointer-events-none">
                  <Image
                    src="/portrait.png"
                    alt="Muhammad Salman Khan Portrait"
                    fill
                    sizes="(max-width: 768px) 340px, 400px"
                    priority
                    className="object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Floating Chips */}
                <div
                  className="absolute top-8 left-6 bg-surface border border-border-strong px-4 py-2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 select-none"
                  style={{ transform: "translateZ(30px)" }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-mono text-xs font-semibold text-text uppercase">
                      Full-Stack Dev
                    </span>
                  </div>
                </div>

                <div
                  className="absolute bottom-8 right-6 bg-surface border border-border-strong px-4 py-2 rounded-xl shadow-lg transition-transform duration-300 hover:scale-105 select-none"
                  style={{ transform: "translateZ(40px)" }}
                >
                  <div className="flex items-center space-x-2">
                    <span className="w-2 h-2 rounded-full bg-accent" />
                    <span className="font-mono text-xs font-semibold text-text uppercase">
                      ML Engineer
                    </span>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
