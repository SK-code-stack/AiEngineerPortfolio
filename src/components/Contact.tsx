"use client";

import { useState, FormEvent, ChangeEvent } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Please fill out all fields.");
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setErrorMessage(data.error || "Failed to send message. Please try again.");
        setStatus("error");
      }
    } catch {
      setErrorMessage("An unexpected network error occurred. Please check your connection.");
      setStatus("error");
    }
  };

  const socials = [
    {
      name: "GitHub",
      tooltip: "GitHub Profile",
      href: "https://github.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.579.688.481C19.137 20.162 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      tooltip: "LinkedIn Connect",
      href: "https://linkedin.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
        </svg>
      ),
    },
    {
      name: "Upwork",
      tooltip: "Hire on Upwork",
      href: "https://upwork.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M18.57 0c-2.77 0-4.66 1.48-5.32 3.63C12.39 1.5 10.45 0 7.82 0H5.87v9.42c0 2.21 1.79 4.01 4 4.01h.46a3.996 3.996 0 004-3.99V4.28c.45-1.42 1.66-2.43 3.19-2.43 2.01 0 3.63 1.62 3.63 3.63v4.06c0 2.01-1.62 3.63-3.63 3.63-.51 0-1.02-.11-1.48-.32l-1.39 1.39c.87.5 1.84.78 2.87.78 3.01 0 5.48-2.45 5.48-5.48V5.48C24.05 2.45 21.58 0 18.57 0zM10.33 9.44c0 1.1-.9 2-2 2h-.46c-1.1 0-2-.9-2-2V1.85h4.46v7.59zm2.46-3.8c-.01-.1-.02-.2-.04-.3V1.85h1.99c.35.91.87 1.73 1.52 2.44-.75.76-1.57 1.15-3.47 1.35z" />
        </svg>
      ),
    },
    {
      name: "Email",
      tooltip: "Send Direct Email",
      href: "mailto:salman@example.com",
      icon: (
        <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="contact" className="py-24 w-full bg-surface-2 border-t border-border">
      <div className="max-w-[1280px] mx-auto px-6 w-full">
        {/* Large Rounded Banner Card */}
        <div className="relative rounded-3xl bg-surface border border-border-strong p-8 sm:p-12 md:p-16 mb-20 overflow-hidden shadow-2xl flex flex-col items-center text-center">
          {/* Radial Glow Overlay */}
          <div className="absolute inset-0 bg-accent/[0.04] blur-3xl pointer-events-none -z-10" />

          <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-6">
            {'// Start a project'}
          </span>

          <h2 className="font-display text-4xl sm:text-6xl font-black text-text tracking-tight uppercase leading-[0.95] max-w-3xl mb-6">
            LET&apos;S BUILD SOMETHING <span className="text-accent">INTELLIGENT.</span>
          </h2>

          <p className="font-sans text-base sm:text-lg text-text-dim max-w-xl mb-8 leading-relaxed">
            Need a high-performance backend, an applied machine learning pipeline, or a polished web
            application? Let&apos;s turn your vision into optimized code.
          </p>

          <a
            href="#contact-form"
            className="btn-shine-container bg-accent hover:bg-accent/90 text-bg font-sans font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-accent/20 transition-all duration-200 select-none"
          >
            Start a Project &rarr;
          </a>
        </div>

        {/* Contact Form & Get In Touch Grid */}
        <div id="contact-form" className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-start scroll-mt-24">
          {/* Left Column - Socials */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full">
            <div>
              <span className="font-mono text-xs font-semibold uppercase tracking-wider text-accent mb-4 block">
                {'// Get in touch'}
              </span>
              <h3 className="font-display text-4xl sm:text-5xl font-black text-text tracking-tight uppercase mb-6 leading-none">
                Reach Out
              </h3>
              <p className="font-sans text-base text-text-dim leading-relaxed mb-8 max-w-md">
                Have an inquiry or project proposal? Fill out the form, or reach out directly on
                professional networks. I am always open to discussing new opportunities.
              </p>
            </div>

            {/* Icon-only social buttons */}
            <div className="flex items-center space-x-4">
              {socials.map((social) => (
                <div key={social.name} className="relative group flex justify-center">
                  {/* Tooltip */}
                  <span className="absolute bottom-full mb-2 bg-surface border border-border text-text font-mono text-[10px] px-2.5 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none select-none whitespace-nowrap shadow-lg z-10">
                    {social.tooltip}
                  </span>
                  {/* Button */}
                  <a
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl bg-surface border border-border flex items-center justify-center text-text hover:text-accent hover:border-accent hover:-translate-y-1.5 hover:rotate-3 transition-all duration-300 shadow-md"
                    aria-label={social.tooltip}
                  >
                    {social.icon}
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Form */}
          <div className="lg:col-span-7 bg-surface border border-border rounded-2xl p-8 sm:p-10 shadow-2xl relative">
            <h3 className="font-display text-2xl font-extrabold text-text tracking-tight uppercase mb-8">
              Send a Message
            </h3>

            {status === "success" ? (
              <div className="flex flex-col items-center justify-center text-center py-8">
                <div className="w-16 h-16 rounded-full bg-accent-soft text-accent flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 stroke-current" fill="none" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h4 className="font-display text-2xl font-extrabold text-text uppercase mb-2">
                  Message Sent!
                </h4>
                <p className="font-sans text-sm text-text-dim max-w-sm mb-6">
                  Thank you for reaching out. I have received your message and will get back to you shortly.
                </p>
                <button
                  onClick={() => setStatus("idle")}
                  className="font-mono text-xs font-semibold text-accent hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name Input */}
                  <div className="flex flex-col">
                    <label htmlFor="name" className="font-mono text-[10px] uppercase text-text-dim mb-1 tracking-wider">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="Your Name"
                      className="border-b border-border bg-transparent py-2.5 text-sm sm:text-base text-text focus:outline-none focus:border-accent disabled:opacity-50 transition-colors duration-200"
                    />
                  </div>

                  {/* Email Input */}
                  <div className="flex flex-col">
                    <label htmlFor="email" className="font-mono text-[10px] uppercase text-text-dim mb-1 tracking-wider">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      disabled={status === "loading"}
                      placeholder="you@example.com"
                      className="border-b border-border bg-transparent py-2.5 text-sm sm:text-base text-text focus:outline-none focus:border-accent disabled:opacity-50 transition-colors duration-200"
                    />
                  </div>
                </div>

                {/* Message Input */}
                <div className="flex flex-col">
                  <label htmlFor="message" className="font-mono text-[10px] uppercase text-text-dim mb-1 tracking-wider">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    disabled={status === "loading"}
                    placeholder="Tell me about your project..."
                    className="border-b border-border bg-transparent py-2.5 text-sm sm:text-base text-text focus:outline-none focus:border-accent resize-none disabled:opacity-50 transition-colors duration-200"
                  />
                </div>

                {/* Error Banner */}
                {status === "error" && (
                  <div className="bg-red-500/10 border border-red-500/20 text-red-500 text-xs sm:text-sm px-4 py-3 rounded-lg flex items-center space-x-2">
                    <svg className="w-4 h-4 shrink-0 stroke-current" fill="none" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
                    </svg>
                    <span>{errorMessage}</span>
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="btn-shine-container bg-accent hover:bg-accent/90 disabled:bg-accent/50 text-bg font-sans font-bold py-3.5 px-8 rounded-full shadow-lg hover:shadow-accent/20 transition-all duration-200 flex items-center justify-center space-x-2 select-none w-full"
                >
                  {status === "loading" ? (
                    <>
                      {/* Spinner */}
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-bg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Sending message...</span>
                    </>
                  ) : (
                    <span>Send Message &rarr;</span>
                  )}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
