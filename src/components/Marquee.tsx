/**
 * Marquee strip — matches the HTML reference:
 * - JetBrains Mono, 14px, var(--text-dim) text
 * - Each item has a leading "/" in accent colour
 * - 60px gap between items
 * - Seamless 55s scroll via doubled track
 */
export default function Marquee() {
  const techStack = [
    "React.js",
    "Django",
    "Tailwind CSS",
    "Python",
    "Laravel",
    "PostgreSQL",
    "PyTorch",
    "Node.js",
    "MongoDB",
    "Transformers",
  ];

  return (
    <div className="w-full border-y border-border py-6 overflow-hidden select-none bg-bg">
      {/* Single flex row; translateX(-50%) lands on the seam between track-1 and track-2 */}
      <div className="flex w-max marquee-infinite-scroll">
        {[0, 1].map((trackIdx) => (
          <div
            key={trackIdx}
            className="flex items-center"
            style={{ gap: "60px", paddingRight: "60px" }}
            aria-hidden={trackIdx === 1}
          >
            {techStack.map((tech, idx) => (
              <span
                key={`${trackIdx}-${idx}`}
                className="font-mono text-sm text-text-dim whitespace-nowrap flex items-center"
                style={{ gap: "10px" }}
              >
                <span className="text-accent" aria-hidden="true">
                  /
                </span>
                {tech}
              </span>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
