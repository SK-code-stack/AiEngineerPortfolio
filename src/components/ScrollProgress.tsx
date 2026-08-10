"use client";

import { useEffect } from "react";

export default function ScrollProgress() {
  useEffect(() => {
    const handleScroll = () => {
      const fillEl = document.getElementById("scroll-progress-fill");
      if (!fillEl) return;

      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;

      fillEl.style.height = `${scrollPercent}%`;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="scroll-progress" aria-hidden="true">
      <div
        id="scroll-progress-fill"
        className="w-full transition-[height] duration-75 ease-out"
        style={{ height: "0%" }}
      />
    </div>
  );
}
