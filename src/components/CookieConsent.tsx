"use client";

import { useEffect, useState } from "react";

type ConsentChoice = "accepted" | "essential";

export default function CookieConsent() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const savedConsent = localStorage.getItem("marvels-space-cookie-consent");

    if (!savedConsent) {
      const timer = setTimeout(() => {
        setIsVisible(true);
      }, 900);

      return () => clearTimeout(timer);
    }
  }, []);

  function saveConsent(choice: ConsentChoice) {
    localStorage.setItem("marvels-space-cookie-consent", choice);
    localStorage.setItem(
      "marvels-space-cookie-consent-date",
      new Date().toISOString()
    );

    setIsVisible(false);
  }

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed bottom-4 left-4 right-4 z-[100] mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/90 p-5 text-white shadow-2xl backdrop-blur-xl light:border-black/10 light:bg-white/95 light:text-black md:bottom-6 md:p-6">
      <div className="grid gap-5 md:grid-cols-[1fr_auto] md:items-center">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-orange-300 light:text-orange-600">
            Privacy & Cookies
          </p>

          <h3 className="mt-2 text-xl font-bold">
            Welcome to Marvel&apos;s Space.
          </h3>

          <p className="mt-2 text-sm leading-6 text-gray-300 light:text-gray-600">
            We use essential storage to remember your preferences, like theme
            choice. Later, this site may also use analytics, affiliate tracking,
            and advertising tools to support the project. You can accept all or
            continue with essential-only settings.
          </p>

          <p className="mt-3 text-xs leading-5 text-gray-500 light:text-gray-500">
            Affiliate note: some future product links may earn a small
            commission at no extra cost to you.
          </p>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row md:flex-col">
          <button
            onClick={() => saveConsent("accepted")}
            className="rounded-2xl bg-white px-5 py-3 text-sm font-semibold text-black transition hover:scale-105 hover:bg-orange-50 light:bg-black light:text-white light:hover:bg-orange-600"
          >
            Accept all
          </button>

          <button
            onClick={() => saveConsent("essential")}
            className="rounded-2xl border border-white/10 px-5 py-3 text-sm font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black light:hover:bg-black/5"
          >
            Essential only
          </button>
        </div>
      </div>
    </div>
  );
}