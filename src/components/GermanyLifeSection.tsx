"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const germanyLifeCards = [
  {
    id: "language",
    title: "Language & Becoming",
    icon: "🗣️",
    short:
      "Learning to express myself, understand systems and grow through daily mistakes and small wins.",
    label: "Identity through language",
    content: [
      "Learning German is not only about grammar, vocabulary or pronunciation. It is also about becoming patient with yourself.",
      "When you live in another language, even simple things can feel heavy: explaining yourself, asking questions, understanding letters, speaking at work, or joining normal conversations.",
      "This chapter is teaching me that confidence grows slowly. Every mistake becomes part of the learning process. Every corrected sentence is a small step forward.",
      "Language also teaches humility. It reminds me that intelligence is not always shown by perfect words. Sometimes courage is simply trying again.",
    ],
    lesson:
      "Growth is not always loud. Sometimes it sounds like one corrected sentence, one brave conversation, and one more attempt.",
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
    content: [
      "Being far from home can reveal what your faith is really standing on.",
      "When familiar voices, places and routines are far away, you start asking deeper questions: Who am I when nobody from home is watching? What carries me when I feel alone?",
      "Faith away from home has been teaching me that God is not limited to one country, one room or one season. He is present in the quiet, in the waiting, and in the rebuilding.",
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

export default function GermanyLifeSection() {
  const [selectedCard, setSelectedCard] = useState(germanyLifeCards[0]);

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
          {germanyLifeCards.map((card, index) => {
            const isActive = selectedCard.id === card.id;

            return (
              <Reveal key={card.id} delay={index * 0.06} direction="scale">
                <button
                  type="button"
                  onClick={() => setSelectedCard(card)}
                  className={`group h-full rounded-3xl border p-6 text-left backdrop-blur-md transition hover:-translate-y-2 light:shadow-sm ${
                    isActive
                      ? "border-orange-300/50 bg-orange-500/10 shadow-[0_0_45px_rgba(249,115,22,0.12)] light:border-orange-400/50 light:bg-orange-50"
                      : "border-white/10 bg-white/[0.04] hover:bg-white/[0.08] light:border-black/10 light:bg-orange-50/78 light:hover:bg-blue-50"
                  }`}
                >
                  <p className="text-4xl transition group-hover:scale-110">
                    {card.icon}
                  </p>

                  <h3 className="mt-5 text-xl font-bold">{card.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {card.short}
                  </p>

                  <p
                    className={`mt-5 text-sm font-semibold ${
                      isActive
                        ? "text-orange-300 light:text-orange-700"
                        : "text-gray-500 light:text-gray-500"
                    }`}
                  >
                    {isActive ? "Opened below ↓" : "Open note →"}
                  </p>
                </button>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.15} direction="up">
          <div className="mt-10 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-[0_0_70px_rgba(59,130,246,0.12)] backdrop-blur-md light:border-black/10 light:bg-white/82 light:shadow-xl">
            <div className="grid gap-0 lg:grid-cols-[0.8fr_1.2fr]">
              <div className="relative min-h-[260px] border-b border-white/10 bg-gradient-to-br from-blue-600/24 via-black/20 to-orange-500/24 p-8 light:border-black/10 light:from-blue-100 light:via-white light:to-orange-100">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.16),transparent_28%)]" />

                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-orange-300 light:text-orange-700">
                      Open Germany Note
                    </p>

                    <p className="mt-6 text-6xl">{selectedCard.icon}</p>

                    <h3 className="mt-5 text-3xl font-extrabold leading-tight md:text-4xl">
                      {selectedCard.title}
                    </h3>

                    <p className="mt-4 text-sm uppercase tracking-[0.2em] text-blue-200 light:text-blue-700">
                      {selectedCard.label}
                    </p>
                  </div>

                  <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-md light:border-black/10 light:bg-white/70">
                    <p className="text-xs uppercase tracking-[0.25em] text-blue-200 light:text-blue-700">
                      Scripture seed
                    </p>

                    <p className="mt-3 text-sm leading-7 text-gray-200 light:text-gray-700">
                      {selectedCard.scripture}
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-8 md:p-10">
                <p className="text-sm uppercase tracking-[0.3em] text-orange-300 light:text-orange-700">
                  Reflection note
                </p>

                <div className="mt-6 space-y-5 text-base leading-8 text-gray-300 light:text-gray-700">
                  {selectedCard.content.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-7 rounded-3xl border border-orange-300/20 bg-orange-500/10 p-5 text-sm leading-7 text-orange-100 light:border-orange-200 light:bg-orange-50 light:text-orange-900">
                  <strong>Lesson:</strong> {selectedCard.lesson}
                </div>

                <p className="mt-5 text-sm text-gray-500 light:text-gray-600">
                  These notes are public-safe reflections from the Germany Life
                  chapter by{" "}
                  <span className="font-semibold text-gray-300 light:text-gray-800">
                    Marvel Marodza
                  </span>
                  . They are meant to encourage growth without exposing private
                  details.
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}