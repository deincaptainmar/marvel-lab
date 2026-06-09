import Image from "next/image";
import Reveal from "@/components/Reveal";
import ToolboxSection from "@/components/ToolboxSection";
import HeroGeometryBackground from "@/components/HeroGeometryBackground";

const journeyCards = [
  {
    title: "Zimbabwe",
    code: "ZW",
    flag: "🇿🇼",
    gradient: "from-green-500/20 via-yellow-400/10 to-red-500/20",
    text: "Roots, faith, family, early dreams and the place where the story began.",
  },
  {
    title: "Turkey",
    code: "TR",
    flag: "🇹🇷",
    gradient: "from-red-500/25 via-white/5 to-red-900/20",
    text: "A chapter of aviation studies, culture, discipline and becoming more aware of the world.",
  },
  {
    title: "Germany",
    code: "DE",
    flag: "🇩🇪",
    gradient: "from-black via-red-500/20 to-yellow-400/20",
    text: "Growth, language, work discipline, systems and learning to rebuild life step by step.",
  },
  {
    title: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    gradient: "from-blue-600/25 via-white/10 to-red-500/20",
    text: "Travel memories, family moments and questions people ask about moving across borders.",
  },
  {
    title: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    gradient: "from-red-500/20 via-white/10 to-blue-500/25",
    text: "Short trips, European movement and quiet observations from crossing into new places.",
  },
  {
    title: "Ethiopia",
    code: "ET",
    flag: "🇪🇹",
    gradient: "from-green-500/20 via-yellow-400/15 to-red-500/20",
    text: "Airport routes, layovers, African movement and reflections from the journey.",
  },
  {
    title: "South Africa",
    code: "ZA",
    flag: "🇿🇦",
    gradient: "from-green-500/20 via-blue-500/20 to-yellow-400/15",
    text: "Southern African connections, movement, culture and stories still being shaped.",
  },
  {
    title: "More to Come",
    code: "🌍",
    flag: "🌍",
    gradient: "from-blue-500/20 via-orange-400/15 to-green-400/10",
    text: "The map is not complete. More countries, more stories and more lessons are still ahead.",
  },
];

const currentChapterCards = [
  {
    title: "Language & Becoming",
    text: "Learning to express myself, understand systems and grow through daily mistakes and small wins.",
    icon: "🗣️",
  },
  {
    title: "Work, Discipline & Systems",
    text: "Observing how structure, time, responsibility and consistency shape life in a new country.",
    icon: "⏱️",
  },
  {
    title: "Faith Away From Home",
    text: "Walking with God while far from familiar places, family rhythms and old comfort zones.",
    icon: "🌿",
  },
  {
    title: "Lessons From Starting Again",
    text: "Germany is teaching patience, humility, resilience and the value of rebuilding step by step.",
    icon: "🧭",
  },
];

const gardenRooms = [
  {
    title: "Garden Gate",
    text: "Faith, reflections, stewardship and the reason Marvel explores.",
    icon: "🌿",
  },
  {
    title: "Journey & Travel Notes",
    text: "Countries, cultures, movement, stories and lessons from the road.",
    icon: "🧭",
  },
  {
    title: "Movement & Systems",
    text: "Transport, infrastructure, logistics, aviation and how the world moves.",
    icon: "🛫",
  },
  {
    title: "Future & Innovation",
    text: "AI, automation, digital tools, technology and emerging possibilities.",
    icon: "🧠",
  },
  {
    title: "Ecclesiastes Diversification",
    text: "Stewardship, opportunities, business, finance and many branches.",
    icon: "🌳",
  },
  {
    title: "Building Tomorrow",
    text: "Real estate, smart homes, sustainability and future communities.",
    icon: "🏗️",
  },
  {
    title: "Field to Table",
    text: "Agriculture, farming, food systems, sustainability and harvest.",
    icon: "🌾",
  },
  {
    title: "Food & Places",
    text: "Experiences, recommendations, cautions and places worth noting.",
    icon: "🍽️",
  },
  {
    title: "Creative Studio",
    text: "Filmmaking, photography, storytelling, editing and WildTwist Studios.",
    icon: "🎬",
  },
  {
    title: "Join the Explorers",
    text: "Future community, newsletter, interests and explorer updates.",
    icon: "🚪",
  },
];

const currentRooms = [
  {
    title: "Current Chapter",
    text: "Life in Germany, growth, language, discipline and becoming stronger.",
    icon: "🇩🇪",
    href: "#current-chapter",
  },
  {
    title: "Explorer Journal",
    text: "Countries visited, cultural notes and travel stories still unfolding.",
    icon: "🗺️",
    href: "#journey",
  },
  {
    title: "Resource Room",
    text: "Media resources, camera comparisons, learning notes and useful tools.",
    icon: "🧰",
    href: "#toolbox",
  },
  {
    title: "Creative Studio",
    text: "Videos, storytelling, editing experiments and creative worlds.",
    icon: "🎥",
    href: "#videos",
  },
];

const mazeRooms = [
  "Horizon",
  "Garden",
  "Journey",
  "Map",
  "Resources",
  "Studio",
  "Join",
];

export default function Home() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white light:bg-white light:text-black"
    >
      <div className="fixed inset-0 -z-10 bg-black light:bg-white" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.05),transparent_35%)] light:bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(0,0,0,0.04),transparent_35%)]" />

      {/* Floating journey path */}
      <div className="pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
        <div className="relative rounded-full border border-white/10 bg-black/35 px-3 py-4 shadow-2xl backdrop-blur-xl light:border-black/10 light:bg-white/60">
          <div className="absolute left-[21px] top-8 h-[calc(100%-64px)] w-px bg-gradient-to-b from-blue-400/20 via-orange-300/30 to-blue-400/20" />

          <div className="flex flex-col gap-4">
            {mazeRooms.map((room, index) => {
              const href =
                room === "Horizon"
                  ? "#home"
                  : room === "Garden"
                    ? "#garden-gate"
                    : room === "Map"
                      ? "#garden-map"
                      : room === "Resources"
                        ? "#toolbox"
                        : room === "Studio"
                          ? "#videos"
                          : room === "Join"
                            ? "#contact"
                            : `#${room.toLowerCase()}`;

              return (
                <a
                  key={room}
                  href={href}
                  className="pointer-events-auto group relative flex items-center gap-3"
                >
                  <span className="relative z-10 flex h-4 w-4 items-center justify-center rounded-full border border-white/20 bg-black shadow-[0_0_20px_rgba(59,130,246,0.18)] transition group-hover:border-orange-300 group-hover:bg-orange-400 light:border-black/20 light:bg-white">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/50 transition group-hover:bg-black light:bg-black/50" />
                  </span>

                  <span className="translate-x-1 rounded-full border border-white/10 bg-black/80 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/50 opacity-0 shadow-lg transition group-hover:translate-x-0 group-hover:text-white group-hover:opacity-100 light:border-black/10 light:bg-white light:text-black/60 light:group-hover:text-black">
                    {index + 1}. {room}
                  </span>
                </a>
              );
            })}
          </div>
        </div>
      </div>

      {/* HERO / HORIZON GATE */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl scroll-mt-24 flex-col items-center justify-center gap-12 px-6 py-28 lg:flex-row lg:gap-16">
        <HeroGeometryBackground />

        <Reveal
          direction="right"
          className="relative z-10 max-w-3xl text-center lg:text-left"
        >
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-blue-200/80 light:text-blue-700 md:text-sm">
            Horizon Gate
          </p>

          <h1 className="bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent light:from-black light:via-blue-900 light:to-orange-700 md:text-7xl lg:text-8xl">
            Marvel&apos;s Space
          </h1>

          <p className="mt-6 max-w-2xl text-xl font-semibold text-orange-200 light:text-orange-700 md:text-3xl">
            Beyond the horizon lies another horizon.
          </p>

          <p className="mt-5 max-w-2xl text-lg text-gray-300 light:text-gray-700 md:text-2xl">
            Watering the Garden Together.
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 light:text-gray-600 md:text-lg">
            A Space where Marvel is the Explorer, guided by faith-based
            curiosity — exploring life, systems, stories, opportunities and
            stewardship from a higher perspective.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#garden-gate"
              className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-black transition hover:scale-105 hover:bg-orange-50 light:bg-black light:text-white light:hover:bg-orange-600"
            >
              Enter The Space
            </a>

            <a
              href="#garden-map"
              className="rounded-2xl border border-blue-300/30 bg-white/5 px-8 py-4 text-center font-semibold text-white transition hover:scale-105 hover:border-orange-300/40 hover:bg-white/10 light:border-black/20 light:bg-white light:text-black light:hover:bg-blue-50"
            >
              View Garden Map
            </a>
          </div>
        </Reveal>

        <Reveal
          delay={0.15}
          direction="left"
          className="relative z-10 w-full max-w-xl"
        >
          <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-blue-500/25 via-orange-400/15 to-white/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_60px_rgba(59,130,246,0.18)] backdrop-blur-md transition hover:scale-[1.02] light:border-black/10 light:bg-white/70 light:shadow-xl">
            <div className="relative aspect-video w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/marvel-theme.png"
                alt="Marvel theme picture"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
                Explorer • Faith • Perspective
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GARDEN GATE */}
      <section
        id="garden-gate"
        className="relative z-10 scroll-mt-24 border-y border-white/10 bg-slate-950 px-6 py-28 text-white light:border-black/10 light:bg-gradient-to-br light:from-orange-50 light:via-white light:to-blue-50 light:text-black"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal direction="right">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300 light:text-orange-600">
              Garden Gate
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Welcome to the garden behind the horizon.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-300 light:text-gray-600">
              <p>
                I&apos;m Marvel — not the hero of the story, but the explorer
                walking through it.
              </p>

              <p>
                This space is where faith-based curiosity meets real life:
                travel, culture, systems, media, technology, stewardship,
                lessons and the quiet process of becoming.
              </p>

              <p>
                Some rooms are already open. Others are still seeds in the
                ground. The goal is not fame. The goal is to steward what God
                gives, learn deeply and share what may help others grow.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              {currentRooms.map((room) => (
                <a
                  key={room.title}
                  href={room.href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-blue-50"
                >
                  <p className="text-4xl transition group-hover:scale-110">
                    {room.icon}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold">{room.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {room.text}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY */}
      <section
        id="journey"
        className="relative z-10 scroll-mt-24 border-b border-white/10 bg-gradient-to-b from-black via-slate-950 to-slate-900 px-6 py-28 text-white light:border-black/10 light:from-white light:via-blue-50 light:to-orange-50 light:text-black"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300/80 light:text-orange-600">
              Journey & Travel Notes
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
              Countries, chapters and quiet lessons.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
              Every country carries a different layer of the story. Hover or tap
              a card to reveal the note behind it.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {journeyCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06} direction="scale">
                <div
                  className={`group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${card.gradient} p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm`}
                >
                  <div className="absolute inset-0 flex items-center justify-center text-[8rem] opacity-10 blur-sm transition duration-500 group-hover:scale-125 group-hover:opacity-5 group-hover:blur-md">
                    {card.flag}
                  </div>

                  <div className="absolute right-6 top-6 text-6xl opacity-0 transition duration-500 group-hover:opacity-100">
                    {card.flag}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent light:from-white/95 light:via-white/60 light:to-transparent" />

                  <div className="relative z-10 flex min-h-[200px] flex-col justify-end">
                    <p className="text-4xl font-black tracking-tight text-white/80 light:text-black/80">
                      {card.code}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold">{card.title}</h3>

                    <p className="mt-4 max-h-0 overflow-hidden text-sm leading-6 text-gray-300 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 light:text-gray-600">
                      {card.text}
                    </p>

                    <p className="mt-5 text-xs uppercase tracking-[0.25em] text-orange-300 light:text-orange-600">
                      Reveal note
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CURRENT CHAPTER */}
      <section
        id="current-chapter"
        className="relative z-10 scroll-mt-24 bg-slate-950 px-6 py-28 text-white light:bg-white light:text-black"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
              Current Chapter
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
            {currentChapterCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06} direction="scale">
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-orange-50 light:hover:bg-blue-50">
                  <p className="text-4xl transition group-hover:scale-110">
                    {card.icon}
                  </p>

                  <h3 className="mt-5 text-xl font-bold">{card.title}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {card.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GARDEN MAP */}
      <section
        id="garden-map"
        className="relative z-10 scroll-mt-24 bg-gradient-to-br from-slate-950 via-black to-blue-950 px-6 py-28 text-white light:from-blue-50 light:via-white light:to-orange-50 light:text-black"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300 light:text-orange-600">
              Garden Map
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-6xl">
              The rooms that will grow inside Marvel&apos;s Space.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
              Some rooms are open now. Others are future branches. Together,
              they form one connected garden of exploration, stewardship and
              growth.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {gardenRooms.map((room, index) => (
              <Reveal key={room.title} delay={index * 0.05} direction="scale">
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:hover:bg-blue-50">
                  <div className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-white/40 light:border-black/10 light:bg-black/5 light:text-black/40">
                    {index < 4 ? "Open soon" : "Future room"}
                  </div>

                  <p className="text-4xl transition group-hover:scale-110">
                    {room.icon}
                  </p>

                  <h3 className="mt-8 text-2xl font-bold">{room.title}</h3>

                  <p className="mt-4 leading-7 text-gray-400 light:text-gray-600">
                    {room.text}
                  </p>

                  <p className="mt-6 text-sm font-semibold text-orange-300 opacity-0 transition group-hover:opacity-100 light:text-orange-600">
                    Enter room →
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <ToolboxSection />

      {/* CREATIVE STUDIO / VIDEOS */}
      <section
        id="videos"
        className="relative z-10 scroll-mt-24 bg-black px-6 py-28 text-white light:bg-slate-100 light:text-black"
      >
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
              Creative Studio
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Where ideas become stories.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
              Main reflections, faith stories, travel notes and creative
              experiments live on the main channel, while WildTwist Studios
              carries the playful storytelling side.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            <Reveal delay={0.1} direction="right">
              <a
                href="https://www.youtube.com/@marvel.marodza"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.07] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-blue-50"
              >
                <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-6xl transition group-hover:scale-[1.02]">
                  ▶
                </div>

                <h3 className="mt-6 text-3xl font-bold">Marvel&apos;s Space</h3>

                <p className="mt-3 leading-7 text-gray-400 light:text-gray-600">
                  Faith, growth, travel, media and the journey of building a
                  digital garden.
                </p>

                <p className="mt-6 font-semibold text-orange-300 light:text-orange-600">
                  Open YouTube →
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.2} direction="left">
              <a
                href="https://www.youtube.com/@WildTwistStudios"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.07] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-orange-50"
              >
                <div className="flex h-44 items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 text-6xl transition group-hover:scale-[1.02]">
                  🐒
                </div>

                <h3 className="mt-6 text-3xl font-bold">WildTwist Studios</h3>

                <p className="mt-3 leading-7 text-gray-400 light:text-gray-600">
                  Animated stories, fun characters, short episodes and playful
                  visual experiments.
                </p>

                <p className="mt-6 font-semibold text-orange-300 light:text-orange-600">
                  Open WildTwist →
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section
        id="contact"
        className="relative z-10 scroll-mt-24 bg-slate-950 px-6 py-28 text-white light:bg-gradient-to-b light:from-white light:to-blue-50 light:text-black"
      >
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
              Join the Explorers
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Follow the journey as the garden grows.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-400 light:text-gray-600">
              Whether it&apos;s media, storytelling, travel, faith content or
              future collaborations, Marvel&apos;s Space is open for meaningful
              connections.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Reveal delay={0.1} direction="scale">
              <a
                href="mailto:marvels.space@outlook.com"
                className="block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-gray-200 light:bg-white light:hover:bg-blue-50"
              >
                <p className="text-3xl">✉️</p>
                <h3 className="mt-4 text-xl font-bold">Email</h3>
                <p className="mt-2 break-words text-sm text-gray-400 light:text-gray-600">
                  marvels.space@outlook.com
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.2} direction="scale">
              <a
                href="https://www.instagram.com/deincaptainmar"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-gray-200 light:bg-white light:hover:bg-orange-50"
              >
                <p className="text-3xl">📸</p>
                <h3 className="mt-4 text-xl font-bold">Instagram</h3>
                <p className="mt-2 text-sm text-gray-400 light:text-gray-600">
                  Follow visuals and updates.
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.3} direction="scale">
              <a
                href="https://www.tiktok.com/@marvelexplores"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-gray-200 light:bg-white light:hover:bg-gray-50"
              >
                <p className="text-3xl">🎬</p>
                <h3 className="mt-4 text-xl font-bold">TikTok</h3>
                <p className="mt-2 text-sm text-gray-400 light:text-gray-600">
                  Short videos and creative moments.
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}