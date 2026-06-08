"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Journey", href: "#journey" },
  { name: "Germany Life", href: "#germany-life" },
  { name: "Travel", href: "#travel" },
  { name: "Creative", href: "#creative-worlds" },
  { name: "Toolbox", href: "#toolbox" },
  { name: "Videos", href: "#videos" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "dark";

    setTheme(savedTheme);
    document.documentElement.classList.toggle("light", savedTheme === "light");
  }, []);

  function toggleTheme() {
    const newTheme = theme === "dark" ? "light" : "dark";

    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    document.documentElement.classList.toggle("light", newTheme === "light");
  }

  return (
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl light:border-black/10 light:bg-white/85">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-6">
        <a
          href="#home"
          onClick={() => setIsOpen(false)}
          className="group flex items-center gap-3"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/10 text-sm font-black text-white shadow-[0_0_30px_rgba(59,130,246,0.18)] light:border-black/10 light:bg-black light:text-white">
            M
          </span>

          <span className="text-lg font-bold text-white transition group-hover:text-orange-200 light:text-black light:group-hover:text-orange-700">
            Marvel&apos;s Space
          </span>
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-5 text-sm text-gray-400 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="rounded-full px-3 py-2 transition hover:bg-white/10 hover:text-white light:text-gray-700 light:hover:bg-black/5 light:hover:text-black"
            >
              {link.name}
            </a>
          ))}

          <button
            onClick={toggleTheme}
            className="rounded-full border border-white/10 px-4 py-2 text-white transition hover:bg-white/10 light:border-black/10 light:text-black light:hover:bg-black/5"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
          </button>
        </div>

        {/* Tablet / Mobile controls */}
        <div className="flex items-center gap-3 lg:hidden">
          <button
            onClick={toggleTheme}
            className="rounded-xl border border-white/10 px-3 py-2 text-white light:border-black/10 light:text-black"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? "☀️" : "🌙"}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-xl border border-white/10 px-3 py-2 text-white light:border-black/10 light:text-black"
            aria-label="Toggle menu"
          >
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="border-t border-white/10 bg-black/95 px-5 py-4 light:border-black/10 light:bg-white/95 lg:hidden">
          <div className="grid gap-2 text-gray-300 light:text-gray-700 sm:grid-cols-2">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl px-4 py-3 transition hover:bg-white/10 hover:text-white light:hover:bg-black/5 light:hover:text-black"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}