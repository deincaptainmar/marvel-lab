"use client";

import { useEffect, useState } from "react";
import Reveal from "@/components/Reveal";

const germanyLifeCards = [
  {
    id: "language",
    title: "Language & Becoming",
    icon: "🗣️",
    short:
      "Learning to express myself, understand systems and grow through daily mistakes and small wins.",
    label: "Identity through language",
    command: "LANGUAGE_SCAN",
    content: [
      "Learning German is not only about grammar, vocabulary or pronunciation. It is also about becoming patient with yourself.",
      "When you live in another language, even simple things can feel heavy: explaining yourself, asking questions, understanding letters, speaking at work, or joining normal conversations.",
      "This chapter is teaching me that confidence grows slowly. Every mistake becomes part of the learning process. Every corrected sentence is a small step forward.",
      "Language also teaches humility. It reminds me that intelligence is not always shown by perfect words. Sometimes courage is simply trying again.",
    ],
    lesson:
      "Growth is not always loud. Sometimes it sounds like one corrected sentence, one brave conversation and one more attempt.",
    scripture:
      "“Let every person be quick to hear, slow to speak, slow to anger.” — James 1:19",
  },
  {
    id: "discipline",
    title: "Work, Discipline & Systems",
    icon: "⏱️",
    short:
      "Observing how structure, time, responsibility and consistency shape life in a new country.",
    label: "Structure builds strength",
    command: "SYSTEMS_MAP",
    content: [
      "Germany has taught me to respect systems: time, planning, documents, responsibility, transport, work rhythm and daily structure.",
      "At first, systems can feel strict. But slowly I started seeing how structure protects progress. It reduces chaos and teaches responsibility.",
      "Discipline is not only about being strong when life is easy. Discipline is choosing the next right step even when emotions are tired.",
      "This part of the journey is teaching me that dreams need structure. Vision without discipline can become only imagination.",
    ],
    lesson:
      "If the garden is going to grow, it needs rhythm: watering, pruning, waiting and showing up again.",
    scripture:
      "“The plans of the diligent lead surely to abundance.” — Proverbs 21:5",
  },
  {
    id: "faith",
    title: "Faith Away From Home",
    icon: "🌿",
    short:
      "Walking with God while far from familiar places, family rhythms and old comfort zones.",
    label: "Faith in unfamiliar places",
    command: "FOUNDATION_CHECK",
    content: [
      "Being far from home can reveal what your faith is really standing on.",
      "When familiar voices, places and routines are far away, you start asking deeper questions: Who am I when nobody from home is watching? What carries me when I feel alone?",
      "Faith away from home has been teaching me that God is not limited to one country, one room or one season. He is present in the quiet, in the waiting and in the rebuilding.",
      "This is why Marvel’s Space is built on faith-based curiosity. I do not want to only ask how life works. I also want to ask what life is truly built on.",
    ],
    lesson:
      "Sometimes distance removes comfort, but it can also reveal where your real foundation is.",
    scripture:
      "“Your word is a lamp to my feet and a light to my path.” — Psalm 119:105",
  },
  {
    id: "starting-again",
    title: "Lessons From Starting Again",
    icon: "🧭",
    short:
      "Germany is teaching patience, humility, resilience and the value of rebuilding step by step.",
    label: "Rebuilding with purpose",
    command: "REBUILDING_ROUTE",
    content: [
      "Starting again is not romantic every day. Some days it feels exciting. Other days it feels slow, lonely and heavy.",
      "But rebuilding teaches lessons that comfort could never teach. It teaches patience, responsibility, humility, faith and the value of small progress.",
      "The deeper question is not only, “How do I rebuild my life?” The deeper question is, “What is my life being built on?”",
      "For me, this points back to Truth. Jesus said, “I am the way, and the truth, and the life.” That verse keeps reminding me that rebuilding is not only about success. It is about transformation.",
    ],
    lesson:
      "Being planted in a difficult season does not mean being forgotten. Sometimes the garden grows underground before anyone sees the fruit.",
    scripture:
      "“I am the way, and the truth, and the life.” — John 14:6",
  },
];

const firstReflection = {
  title: "Starting Again in Germany: What Rebuilding Life Is Teaching Me",
  author: "Marvel Marodza",
  publishedDisplay: "12 June 2026",
  category: "Germany Life / Faith & Growth",
  scripture:
    "“Your word is a lamp to my feet and a light to my path.” — Psalm 119:105",
  excerpt:
    "A personal reflection on growth, discipline, faith, language, work, loneliness, responsibility and rebuilding life step by step in a new country — with the quiet question beneath it all: what is Truth, and where does a life really find its way?",
  truthNote:
    "This reflection is written from faith, but not to force anyone. It is an invitation to consider whether rebuilding life is only about success — or whether the deeper question is what life is being built on.",
  preview: [
    "Germany is not the whole story, but it is one of the chapters shaping me deeply.",
    "Starting again in a new country teaches you things that comfort could never teach. It teaches patience when the language does not come out the way you want. It teaches humility when simple tasks suddenly feel difficult. It teaches discipline when nobody is watching, and faith when familiar support feels far away.",
    "But the deeper question is not only, “How do I rebuild my life?” The deeper question is, “What is my life being built on?”",
    "Jesus said, “I am the way, and the truth, and the life.” — John 14:6",
    "That verse is not just a religious sentence to me. It is a compass. In a world full of opinions, pressure, confusion, ambition and noise, I am learning that Truth is not just information. Truth is a Person.",
    "And beyond the horizon lies another horizon.",
  ],
};

export default function GermanyLifeSection() {
  const [selectedCard, setSelectedCard] =
    useState<(typeof germanyLifeCards)[number] | null>(null);

  const [reflectionOpen, setReflectionOpen] = useState(false);

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedCard(null);
        setReflectionOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);

    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  return (
    <section
      id="current-chapter"
      className="relative z-10 scroll-mt-24 bg-slate-950/50 px-6 py-28 text-white backdrop-blur-[1px] light:bg-white/70 light:text-black"
    >
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
            Germany Life
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-6xl">
            Germany is the current chapter, not the whole identity.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
            This room holds useful reflections from life in Germany: language,
            systems, growth, discipline, faith abroad and the quiet lessons of
            rebuilding in a new place — without exposing what should stay
            private.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {germanyLifeCards.map((card, index) => (
            <Reveal key={card.id} delay={index * 0.06} direction="scale">
              <button
                type="button"
                onClick={() => setSelectedCard(card)}
                className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-md transition hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_55px_rgba(34,211,238,0.16)] light:border-black/10 light:bg-orange-50/78 light:shadow-sm light:hover:bg-blue-50"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                  <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-orange-300/60 to-transparent" />
                  <div className="absolute -right-12 -top-12 h-32 w-32 rounded-full border border-cyan-300/20" />
                  <div className="absolute -bottom-16 left-8 h-28 w-28 rounded-full border border-orange-300/20" />
                </div>

                <div className="relative z-10">
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-4xl transition group-hover:scale-110">
                      {card.icon}
                    </p>

                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200 opacity-0 transition group-hover:opacity-100 light:text-cyan-700">
                      Scan
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold">{card.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {card.short}
                  </p>

                  <p className="mt-5 text-sm font-semibold text-gray-500 transition group-hover:text-cyan-300 light:text-gray-500 light:group-hover:text-cyan-700">
                    Open hologram →
                  </p>
                </div>
              </button>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} direction="up">
          <button
            type="button"
            onClick={() => setReflectionOpen(true)}
            className="group relative mt-12 w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] p-0 text-left shadow-[0_0_70px_rgba(59,130,246,0.12)] backdrop-blur-md transition hover:-translate-y-1 hover:border-orange-300/35 hover:bg-white/[0.075] light:border-black/10 light:bg-white/82 light:shadow-xl light:hover:bg-orange-50"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.10),transparent_24%),radial-gradient(circle_at_82%_80%,rgba(249,115,22,0.14),transparent_28%)]" />

            <div className="relative z-10 grid gap-0 lg:grid-cols-[0.85fr_1.15fr]">
              <div className="border-b border-white/10 bg-gradient-to-br from-blue-600/24 via-black/20 to-orange-500/24 p-8 light:border-black/10 light:from-blue-100 light:via-white light:to-orange-100">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300 light:text-orange-700">
                  First Reflection
                </p>

                <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                  {firstReflection.title}
                </h3>

                <div className="mt-6 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.16em] text-gray-300 light:text-gray-700">
                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-2 light:border-black/10 light:bg-white/60">
                    Written by {firstReflection.author}
                  </span>

                  <span className="rounded-full border border-white/10 bg-black/25 px-3 py-2 light:border-black/10 light:bg-white/60">
                    Published: {firstReflection.publishedDisplay}
                  </span>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-lg leading-8 text-gray-300 light:text-gray-700">
                  {firstReflection.excerpt}
                </p>

                <div className="mt-6 rounded-3xl border border-orange-300/20 bg-orange-500/10 p-5 text-sm leading-7 text-orange-100 light:border-orange-200 light:bg-orange-50 light:text-orange-900">
                  <strong>Truth-seeking note:</strong>{" "}
                  {firstReflection.truthNote}
                </div>

                <p className="mt-7 text-sm font-semibold text-cyan-300 transition group-hover:translate-x-1 light:text-cyan-700">
                  Open reflection hologram →
                </p>
              </div>
            </div>
          </button>
        </Reveal>
      </div>

      {selectedCard && (
        <GermanyLifeHologram
          selectedCard={selectedCard}
          onClose={() => setSelectedCard(null)}
        />
      )}

      {reflectionOpen && (
        <FirstReflectionHologram onClose={() => setReflectionOpen(false)} />
      )}
    </section>
  );
}

function GermanyLifeHologram({
  selectedCard,
  onClose,
}: {
  selectedCard: (typeof germanyLifeCards)[number];
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-5 py-10 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_35%,rgba(34,211,238,0.12),transparent_30%),radial-gradient(circle_at_70%_70%,rgba(249,115,22,0.12),transparent_28%)]" />

      <div
        className="relative max-h-[88vh] w-full max-w-5xl overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-slate-950/90 text-white shadow-[0_0_100px_rgba(34,211,238,0.22)] backdrop-blur-xl light:bg-white/95 light:text-black"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
          <div className="absolute left-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-cyan-300 to-transparent" />
          <div className="absolute right-0 top-0 h-full w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent" />
          <div className="absolute left-8 top-8 h-28 w-28 rounded-full border border-cyan-300/30" />
          <div className="absolute right-10 top-12 h-40 w-40 rounded-full border border-orange-300/20" />
          <div className="absolute bottom-10 left-1/2 h-32 w-32 -translate-x-1/2 rounded-full border border-cyan-300/20" />
        </div>

        <div className="relative z-10 grid max-h-[88vh] overflow-y-auto lg:grid-cols-[0.8fr_1.2fr]">
          <div className="relative border-b border-cyan-300/20 bg-gradient-to-br from-cyan-500/14 via-black/25 to-orange-500/16 p-8 light:border-black/10 light:from-cyan-50 light:via-white light:to-orange-50">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200 light:text-cyan-700">
                  Explorer HUD
                </p>

                <p className="mt-5 text-6xl">{selectedCard.icon}</p>

                <h3 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
                  {selectedCard.title}
                </h3>

                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
                  {selectedCard.label}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="pointer-events-auto rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 light:border-black/10 light:bg-black/5 light:text-black"
                aria-label="Close hologram"
              >
                ✕
              </button>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-3 text-xs uppercase tracking-[0.18em] text-gray-300 light:text-gray-700">
              <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                Status
                <p className="mt-2 font-bold text-cyan-200 light:text-cyan-700">
                  Online
                </p>
              </div>

              <div className="rounded-2xl border border-orange-300/20 bg-orange-300/10 p-4">
                Mode
                <p className="mt-2 font-bold text-orange-200 light:text-orange-700">
                  Reflection
                </p>
              </div>
            </div>

            <div className="mt-5 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-md light:border-black/10 light:bg-white/70">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200 light:text-cyan-700">
                Scripture seed
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-200 light:text-gray-700">
                {selectedCard.scripture}
              </p>
            </div>
          </div>

          <div className="p-8 md:p-10">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200 light:text-cyan-700">
                {selectedCard.command}
              </span>

              <span className="rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-orange-200 light:text-orange-700">
                Germany Life
              </span>
            </div>

            <div className="mt-7 space-y-5 text-base leading-8 text-gray-300 light:text-gray-700">
              {selectedCard.content.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="mt-7 rounded-3xl border border-orange-300/20 bg-orange-500/10 p-5 text-sm leading-7 text-orange-100 light:border-orange-200 light:bg-orange-50 light:text-orange-900">
              <strong>Lesson:</strong> {selectedCard.lesson}
            </div>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
              >
                Full room opening soon
              </button>

              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl border border-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black light:hover:bg-black/5"
              >
                Close hologram
              </button>
            </div>

            <p className="mt-6 text-sm text-gray-500 light:text-gray-600">
              Reflection by{" "}
              <span className="font-semibold text-gray-300 light:text-gray-800">
                Marvel Marodza
              </span>
              . Built for public-safe encouragement, not private exposure.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function FirstReflectionHologram({ onClose }: { onClose: () => void }) {
  return (
    <div
      className="fixed inset-0 z-[95] flex items-center justify-center bg-black/78 px-5 py-10 backdrop-blur-md"
      onClick={onClose}
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_35%_20%,rgba(59,130,246,0.16),transparent_32%),radial-gradient(circle_at_75%_75%,rgba(249,115,22,0.14),transparent_30%)]" />

      <article
        className="relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-[2rem] border border-orange-300/25 bg-slate-950/94 p-8 text-white shadow-[0_0_100px_rgba(249,115,22,0.18)] backdrop-blur-xl light:bg-white/96 light:text-black md:p-10"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
          <div className="absolute -right-16 -top-16 h-52 w-52 rounded-full border border-cyan-300/20" />
          <div className="absolute -bottom-20 left-10 h-44 w-44 rounded-full border border-orange-300/20" />
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-5">
            <div>
              <p className="text-xs uppercase tracking-[0.35em] text-orange-300 light:text-orange-700">
                Reflection Hologram
              </p>

              <h3 className="mt-4 text-4xl font-extrabold leading-tight md:text-5xl">
                {firstReflection.title}
              </h3>

              <div className="mt-5 flex flex-wrap gap-3 text-xs font-medium uppercase tracking-[0.16em] text-gray-300 light:text-gray-700">
                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 light:border-black/10 light:bg-black/[0.03]">
                  Written by {firstReflection.author}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 light:border-black/10 light:bg-black/[0.03]">
                  Published: {firstReflection.publishedDisplay}
                </span>

                <span className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-2 light:border-black/10 light:bg-black/[0.03]">
                  {firstReflection.category}
                </span>
              </div>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 light:border-black/10 light:bg-black/5 light:text-black"
              aria-label="Close reflection"
            >
              ✕
            </button>
          </div>

          <div className="mt-8 rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5 text-sm leading-7 text-cyan-100 light:border-cyan-200 light:bg-cyan-50 light:text-cyan-900">
            <p className="text-xs uppercase tracking-[0.25em] text-cyan-200 light:text-cyan-700">
              Scripture seed
            </p>

            <p className="mt-3">{firstReflection.scripture}</p>
          </div>

          <div className="mt-8 rounded-3xl border border-orange-300/20 bg-orange-500/10 p-5 text-sm leading-7 text-orange-100 light:border-orange-200 light:bg-orange-50 light:text-orange-900">
            <strong>Truth-seeking note:</strong> {firstReflection.truthNote}
          </div>

          <div className="mt-8 space-y-6 text-base leading-8 text-gray-300 light:text-gray-700 md:text-lg md:leading-9">
            {firstReflection.preview.map((paragraph) => (
              <p
                key={paragraph}
                className={
                  paragraph.includes("Jesus said")
                    ? "rounded-3xl border-l-4 border-orange-400 bg-white/[0.05] p-5 text-orange-100 light:bg-orange-50 light:text-orange-900"
                    : paragraph.includes("beyond the horizon")
                      ? "font-semibold text-orange-300 light:text-orange-700"
                      : ""
                }
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-10 flex flex-col gap-3 sm:flex-row">
            <button
              type="button"
              className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
            >
              Full article page opening later
            </button>

            <button
              type="button"
              onClick={onClose}
              className="rounded-2xl border border-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black light:hover:bg-black/5"
            >
              Close reflection
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}