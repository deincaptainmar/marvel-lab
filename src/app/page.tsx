import Image from "next/image";
import Reveal from "@/components/Reveal";
import ToolboxSection from "@/components/ToolboxSection";

const journeyCards = [
  {
    title: "Zimbabwe",
    flag: "🇿🇼",
    text: "Roots, faith, family, early dreams and the place where the story began.",
  },
  {
    title: "Turkey",
    flag: "🇹🇷",
    text: "A chapter of aviation studies, culture, discipline and becoming more aware of the world.",
  },
  {
    title: "Germany",
    flag: "🇩🇪",
    text: "Growth, language, work discipline, systems and learning to rebuild life step by step.",
  },
  {
    title: "United Kingdom",
    flag: "🇬🇧",
    text: "Travel memories, family moments and questions people ask about moving across borders.",
  },
  {
    title: "Netherlands",
    flag: "🇳🇱",
    text: "Short trips, European movement and quiet observations from crossing into new places.",
  },
  {
    title: "Ethiopia",
    flag: "🇪🇹",
    text: "Airport routes, layovers, African movement and reflections from the journey.",
  },
  {
    title: "South Africa",
    flag: "🇿🇦",
    text: "Southern African connections, movement, culture and stories still being shaped.",
  },
  {
    title: "More to Come",
    flag: "🌍",
    text: "The map is not complete. More countries, more stories and more lessons are still ahead.",
  },
];

const germanyLifeCards = [
  {
    title: "Starting Again",
    text: "The honest reality of rebuilding life in a new country.",
    icon: "🌱",
  },
  {
    title: "Language Growth",
    text: "Learning German through daily life, mistakes and small wins.",
    icon: "🗣️",
  },
  {
    title: "Work Culture",
    text: "Discipline, systems, responsibility and lessons from the environment.",
    icon: "⏱️",
  },
  {
    title: "Faith Abroad",
    text: "Walking with God while far from home and becoming stronger inside.",
    icon: "✝️",
  },
];

const creativeWorlds = [
  {
    title: "Marvel’s Space",
    text: "The main room for personal storytelling, faith, travel, creativity and growth.",
    icon: "🌌",
  },
  {
    title: "WildTwist Studios",
    text: "Animated stories, playful characters and creative experiments.",
    icon: "🐒",
  },
  {
    title: "Faith & Growth",
    text: "Reflections, lessons and honest thoughts from the journey.",
    icon: "🌿",
  },
  {
    title: "Travel Notes",
    text: "Countries, movement, airport stories and cultural observations.",
    icon: "🧭",
  },
  {
    title: "Media Experiments",
    text: "Video ideas, editing practice, storytelling tests and visual direction.",
    icon: "🎬",
  },
  {
    title: "Learning Journal",
    text: "Things I am discovering while building, creating and improving.",
    icon: "📓",
  },
];

const mazeRooms = [
  "Home",
  "Welcome",
  "Journey",
  "Germany",
  "Travel",
  "Creative",
  "Resources",
  "Videos",
  "Contact",
];

export default function Home() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-black text-white light:bg-white light:text-black"
    >
      {/* GLOBAL BACKGROUND */}
      <div className="fixed inset-0 -z-10 bg-black light:bg-white" />
      <div className="fixed inset-0 -z-10 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.18),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.16),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(255,255,255,0.05),transparent_35%)] light:bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.14),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.12),transparent_30%),radial-gradient(circle_at_50%_90%,rgba(0,0,0,0.04),transparent_35%)]" />
      <div className="fixed inset-0 -z-10 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px] light:opacity-[0.09] light:[background-image:linear-gradient(rgba(0,0,0,0.14)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.14)_1px,transparent_1px)]" />

      {/* FLOATING MAZE PATH */}
      <div className="pointer-events-none fixed left-5 top-1/2 z-30 hidden -translate-y-1/2 xl:block">
        <div className="relative rounded-full border border-white/10 bg-black/35 px-3 py-4 shadow-2xl backdrop-blur-xl light:border-black/10 light:bg-white/60">
          <div className="absolute left-[21px] top-8 h-[calc(100%-64px)] w-px bg-gradient-to-b from-blue-400/20 via-orange-300/30 to-blue-400/20" />

          <div className="flex flex-col gap-4">
            {mazeRooms.map((room, index) => {
              const href =
                room === "Germany"
                  ? "#germany-life"
                  : room === "Creative"
                    ? "#creative-worlds"
                    : room === "Resources"
                      ? "#toolbox"
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

      {/* HERO DECOR */}
      <div className="absolute left-[12%] top-[22%] hidden rotate-[-10deg] rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-3xl backdrop-blur-md light:border-black/10 light:bg-white/70 md:block">
        ✈️
      </div>

      <div className="absolute right-[13%] top-[24%] hidden rotate-[10deg] rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-3xl backdrop-blur-md light:border-black/10 light:bg-white/70 md:block">
        🎬
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl scroll-mt-24 flex-col items-center justify-center gap-12 px-6 py-28 lg:flex-row lg:gap-16">
        <Reveal direction="right" className="max-w-3xl text-center lg:text-left">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-blue-200/80 light:text-blue-700 md:text-sm">
            Welcome To
          </p>

          <h1 className="bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent light:from-black light:via-blue-900 light:to-orange-700 md:text-7xl lg:text-8xl">
            Marvel&apos;s Space
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300 light:text-gray-700 md:text-2xl">
            Watering The Garden Together
          </p>

          <p className="mt-6 text-sm text-gray-400 light:text-gray-600 md:text-lg">
            Faith • Travel • Germany Life • Creativity • Media • Aviation •
            Growth
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#welcome"
              className="rounded-2xl bg-white px-8 py-4 text-center font-semibold text-black transition hover:scale-105 hover:bg-orange-50 light:bg-black light:text-white light:hover:bg-orange-600"
            >
              Enter The Space
            </a>

            <a
              href="#videos"
              className="rounded-2xl border border-blue-300/30 bg-white/5 px-8 py-4 text-center font-semibold text-white transition hover:scale-105 hover:border-orange-300/40 hover:bg-white/10 light:border-black/20 light:bg-white light:text-black light:hover:bg-blue-50"
            >
              Watch Videos
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.15} direction="left" className="relative w-full max-w-xl">
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

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
                Marvel • Faith • Germany Life
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* WELCOME STORY SECTION */}
      <section
        id="welcome"
        className="relative z-10 scroll-mt-24 border-y border-white/10 bg-slate-950 px-6 py-28 text-white light:border-black/10 light:bg-gradient-to-br light:from-orange-50 light:via-white light:to-blue-50 light:text-black"
      >
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <Reveal direction="right">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300 light:text-orange-600">
              Start Here
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              This is not just a page. It is a living space.
            </h2>

            <div className="mt-6 space-y-5 text-lg leading-8 text-gray-300 light:text-gray-600">
              <p>
                I&apos;m Marvel — a Zimbabwean creative, believer, learner and
                builder currently growing in Germany.
              </p>

              <p>
                This space brings together the rooms of my journey: faith,
                travel, Germany life, media, storytelling, aviation curiosity,
                creative experiments and the lessons that come from starting
                again.
              </p>

              <p>
                Some parts are polished. Some are still growing. That is the
                point. Marvel&apos;s Space is a garden, a maze and a journal —
                built one step at a time.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.15} direction="left">
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                ["Faith", "Reflections, growth and lessons.", "🌿", "#journey"],
                ["Travel", "Countries, movement and stories.", "🧭", "#travel"],
                ["Media", "Videos, visuals and experiments.", "🎬", "#videos"],
                ["Resources", "Tools and ideas I’m exploring.", "🧰", "#toolbox"],
              ].map(([title, text, icon, href]) => (
                <a
                  key={title}
                  href={href}
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-blue-50"
                >
                  <p className="text-4xl transition group-hover:scale-110">
                    {icon}
                  </p>
                  <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {text}
                  </p>
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section
        id="journey"
        className="relative z-10 scroll-mt-24 border-b border-white/10 bg-gradient-to-b from-black via-slate-950 to-slate-900 px-6 py-28 text-white light:border-black/10 light:from-white light:via-blue-50 light:to-orange-50 light:text-black"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal direction="up">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300/80 light:text-orange-600">
              The Journey
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
                <div className="group relative min-h-[240px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm">
                  <div className="absolute inset-0 flex items-center justify-center text-8xl opacity-20 blur-[2px] transition duration-500 group-hover:scale-125 group-hover:opacity-10 group-hover:blur-md">
                    {card.flag}
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent light:from-white/95 light:via-white/55 light:to-transparent" />

                  <div className="relative z-10 flex min-h-[190px] flex-col justify-end">
                    <p className="text-5xl">{card.flag}</p>
                    <h3 className="mt-4 text-2xl font-bold">{card.title}</h3>

                    <p className="mt-4 max-h-0 overflow-hidden text-sm leading-6 text-gray-300 opacity-0 transition-all duration-500 group-hover:max-h-40 group-hover:opacity-100 light:text-gray-600">
                      {card.text}
                    </p>

                    <p className="mt-4 text-xs uppercase tracking-[0.25em] text-orange-300 light:text-orange-600">
                      Reveal
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* GERMANY LIFE SECTION */}
      <section
        id="germany-life"
        className="relative z-10 scroll-mt-24 bg-slate-950 px-6 py-28 text-white light:bg-white light:text-black"
      >
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <Reveal direction="right">
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
              Germany Life
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Real lessons from life, growth and starting again.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400 light:text-gray-600">
              Not everything needs to be public. This section keeps the focus on
              useful reflections: language, discipline, faith abroad, systems
              and the quiet lessons of becoming stronger in a new country.
            </p>

            <a
              href="#travel"
              className="mt-8 inline-flex rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105 hover:bg-orange-50 light:bg-black light:text-white light:hover:bg-orange-600"
            >
              Continue to Travel →
            </a>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {germanyLifeCards.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.06} direction="left">
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-orange-50 light:hover:bg-blue-50">
                  <p className="text-3xl transition group-hover:scale-110">
                    {item.icon}
                  </p>
                  <h3 className="mt-5 text-xl font-bold">{item.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {item.text}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* TRAVEL SECTION */}
      <section
        id="travel"
        className="relative z-10 scroll-mt-24 bg-gradient-to-br from-slate-950 via-black to-blue-950 px-6 py-28 text-white light:from-blue-50 light:via-white light:to-orange-50 light:text-black"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300 light:text-orange-600">
              Travel
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-6xl">
              Travel notes, culture and movement.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
              A growing space for stories, questions, routes and reflections
              from countries I have visited — written carefully, personally and
              without exposing what should stay private.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {journeyCards.slice(0, 6).map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06} direction="scale">
                <a
                  href="#contact"
                  className="group block h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.09] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-blue-50"
                >
                  <p className="text-4xl">{card.flag}</p>
                  <h3 className="mt-5 text-2xl font-bold">{card.title}</h3>

                  <p className="mt-4 min-h-24 text-sm leading-6 text-gray-300 light:text-gray-600">
                    {card.text}
                  </p>

                  <p className="mt-6 font-semibold text-orange-300 transition group-hover:text-orange-200 light:text-orange-600">
                    Stories coming soon →
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CREATIVE WORLDS SECTION */}
<section
  id="creative-worlds"
  className="relative z-10 scroll-mt-24 bg-slate-950 px-6 py-28 text-white light:bg-gradient-to-br light:from-orange-50 light:via-white light:to-blue-50 light:text-black"
>
  <div className="mx-auto max-w-6xl">
    <Reveal>
      <p className="text-sm uppercase tracking-[0.35em] text-orange-300 light:text-orange-600">
        Creative Worlds
      </p>

      <h2 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-6xl">
        Different rooms inside the same garden.
      </h2>

      <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
        These are the public-facing worlds I am building around story,
        faith, travel, media and learning.
      </p>
    </Reveal>

    <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          title: "Marvel’s Space",
          text: "The main room for personal storytelling, faith, travel, creativity and growth.",
          icon: "🌌",
        },
        {
          title: "WildTwist Studios",
          text: "Animated stories, playful characters and creative experiments.",
          icon: "🐒",
        },
        {
          title: "Faith & Growth",
          text: "Reflections, lessons and honest thoughts from the journey.",
          icon: "🌿",
        },
        {
          title: "Travel Notes",
          text: "Countries, movement, airport stories and cultural observations.",
          icon: "🧭",
        },
        {
          title: "Media Experiments",
          text: "Video ideas, editing practice, storytelling tests and visual direction.",
          icon: "🎬",
        },
        {
          title: "Learning Journal",
          text: "Things I am discovering while building, creating and improving.",
          icon: "📓",
        },
      ].map((card, index) => (
        <Reveal key={card.title} delay={index * 0.06} direction="scale">
          <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:hover:bg-blue-50">
            <p className="text-4xl transition group-hover:scale-110">
              {card.icon}
            </p>

            <h3 className="mt-6 text-2xl font-bold">{card.title}</h3>

            <p className="mt-4 leading-7 text-gray-400 light:text-gray-600">
              {card.text}
            </p>
          </div>
        </Reveal>
      ))}
    </div>
  </div>
</section>
      <ToolboxSection />

      {/* VIDEOS SECTION */}
      <section
        id="videos"
        className="relative z-10 scroll-mt-24 bg-black px-6 py-28 text-white light:bg-slate-100 light:text-black"
      >
        <div className="mx-auto max-w-6xl text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
              Videos
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Watch the worlds inside Marvel&apos;s Space.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
              Reflections, faith stories, Germany life and creative experiments
              live on the main channel, while WildTwist Studios carries the
              animated and playful storytelling side.
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
                  Faith, Germany life, personal growth, travel, media and the
                  journey of building.
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

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative z-10 scroll-mt-24 bg-slate-950 px-6 py-28 text-white light:bg-gradient-to-b light:from-white light:to-blue-50 light:text-black"
      >
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Let&apos;s build, film, create or collaborate.
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
                href="https://www.instagram.com/marvelexplores"
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