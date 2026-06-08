"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Journey", href: "#journey" },
  { name: "Germany Life", href: "#germany-life" },
  { name: "Travel", href: "#travel" },
  { name: "Missions", href: "#missions" },
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
    <nav className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/75 backdrop-blur-xl light:border-black/10 light:bg-white/80">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#home" className="text-lg font-bold text-white light:text-black">
          Marvel&apos;s Space
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 text-sm text-gray-400 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="transition hover:text-white light:text-gray-700 light:hover:text-black"
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

        <div className="flex items-center gap-3 md:hidden">
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
        <div className="border-t border-white/10 bg-black/95 px-6 py-4 light:border-black/10 light:bg-white/95 md:hidden">
          <div className="flex flex-col gap-4 text-gray-300 light:text-gray-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-3 py-2 transition hover:bg-white/10 hover:text-white light:hover:bg-black/5 light:hover:text-black"
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