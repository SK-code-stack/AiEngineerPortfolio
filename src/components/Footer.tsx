export default function Footer() {
  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ];

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-surface border-t border-border py-12">
      <div className="max-w-[1280px] mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo */}
        <a
          href="/"
          className="font-display text-2xl font-extrabold tracking-wider text-accent select-none shrink-0"
          aria-label="Salman Khan Portfolio Home"
        >
          SK.
        </a>

        {/* Nav Links */}
        <nav className="flex flex-wrap items-center justify-center gap-x-8 gap-y-2">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-sans text-sm text-text-dim hover:text-text transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Copyright */}
        <p className="font-mono text-xs text-text-dim shrink-0 text-center sm:text-right">
          &copy; {currentYear} Muhammad Salman Khan
        </p>
      </div>
    </footer>
  );
}
