"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/#about" },
    { label: "Skills", href: "/#skills" },
    { label: "Work", href: "/#work" },
    { label: "Contact", href: "/#contact" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-surface/80 backdrop-blur-md border-b border-border py-4"
            : "bg-transparent border-b border-transparent py-6"
        }`}
      >
        <div className="max-w-[1280px] mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a
            href="/"
            className="font-display text-3xl font-extrabold tracking-wider text-accent select-none"
            aria-label="Salman Khan Portfolio Home"
          >
            SK.
          </a>

          {/* Desktop Nav Links */}
          <nav className="hidden min-[900px]:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-sans text-sm font-medium text-text-dim hover:text-text transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Right Controls */}
          <div className="hidden min-[900px]:flex items-center space-x-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-dim hover:text-text hover:border-border-strong hover:bg-surface-2 transition-all duration-200"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                // Sun Icon
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0-4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm0 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1ZM5.64 6.64a1 1 0 0 0 1.41-1.41l-1.41-1.41a1 1 0 0 0-1.41 1.41Zm12.72 12.72a1 1 0 0 0 1.41-1.41l-1.41-1.41a1 1 0 0 0-1.41 1.41ZM3 12a1 1 0 0 0 1-1H2a1 1 0 0 0 0 2h2a1 1 0 0 0-1-1Zm18 0a1 1 0 0 0 1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0-1-1ZM5.64 17.36a1 1 0 0 0-1.41 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41Zm12.72-12.72a1 1 0 0 0-1.41 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41Z" />
                </svg>
              ) : (
                // Moon Icon
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 0-.67-3.4 6.78 6.78 0 0 1-6.93 6.93 6.8 6.8 0 0 1-4.8-11.83A9.54 9.54 0 0 0 12 3Z" />
                </svg>
              )}
            </button>

            {/* Let's Talk Button */}
            <a
              href="#contact"
              className="btn-shine-container bg-accent hover:bg-accent/90 text-bg font-sans text-xs font-semibold px-6 py-2.5 rounded-full shadow-lg hover:shadow-accent/20 transition-all duration-200 select-none"
            >
              Let&apos;s Talk
            </a>
          </div>

          {/* Mobile Menu Button + Toggle (below 900px) */}
          <div className="flex min-[900px]:hidden items-center space-x-3">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-text-dim hover:text-text hover:border-border-strong hover:bg-surface-2 transition-all duration-200"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 7a5 5 0 1 0 5 5 5 5 0 0 0-5-5Zm0-4a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0V4a1 1 0 0 0-1-1Zm0 14a1 1 0 0 0-1 1v2a1 1 0 0 0 2 0v-2a1 1 0 0 0-1-1ZM5.64 6.64a1 1 0 0 0 1.41-1.41l-1.41-1.41a1 1 0 0 0-1.41 1.41Zm12.72 12.72a1 1 0 0 0 1.41-1.41l-1.41-1.41a1 1 0 0 0-1.41 1.41ZM3 12a1 1 0 0 0 1-1H2a1 1 0 0 0 0 2h2a1 1 0 0 0-1-1Zm18 0a1 1 0 0 0 1-1h-2a1 1 0 0 0 0 2h2a1 1 0 0 0-1-1ZM5.64 17.36a1 1 0 0 0-1.41 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41Zm12.72-12.72a1 1 0 0 0-1.41 1.41l1.41 1.41a1 1 0 0 0 1.41-1.41Z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 3a9 9 0 1 0 9 9 9.75 9.75 0 0 0-.67-3.4 6.78 6.78 0 0 1-6.93 6.93 6.8 6.8 0 0 1-4.8-11.83A9.54 9.54 0 0 0 12 3Z" />
                </svg>
              )}
            </button>

            {/* Hamburger Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-10 h-10 rounded-full border border-border flex flex-col items-center justify-center space-y-1 hover:border-border-strong hover:bg-surface-2 transition-all duration-200"
              aria-label="Toggle Navigation Menu"
              aria-expanded={isMobileMenuOpen}
            >
              <span
                className={`w-5 h-[2px] bg-text transition-transform duration-300 ${
                  isMobileMenuOpen ? "translate-y-[6px] rotate-45" : ""
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-text transition-opacity duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`w-5 h-[2px] bg-text transition-transform duration-300 ${
                  isMobileMenuOpen ? "-translate-y-[6px] -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer (below 900px) */}
      <div
        className={`fixed inset-0 z-40 bg-bg/95 backdrop-blur-md flex flex-col justify-center items-center space-y-8 transition-all duration-300 min-[900px]:hidden ${
          isMobileMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col items-center space-y-6">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-display text-4xl font-extrabold tracking-wider text-text-dim hover:text-accent transition-colors duration-200"
            >
              {link.label.toUpperCase()}
            </a>
          ))}
        </nav>

        {/* Let's Talk Button on Mobile Drawer */}
        <a
          href="#contact"
          onClick={() => setIsMobileMenuOpen(false)}
          className="btn-shine-container bg-accent hover:bg-accent/90 text-bg font-sans text-sm font-semibold px-8 py-3.5 rounded-full shadow-lg transition-all duration-200 select-none"
        >
          Let&apos;s Talk
        </a>
      </div>
    </>
  );
}
