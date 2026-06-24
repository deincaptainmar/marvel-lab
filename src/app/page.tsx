import Image from "next/image";
import Reveal from "@/components/Reveal";
import ToolboxSection from "@/components/ToolboxSection";
import HeroGeometryBackground from "@/components/HeroGeometryBackground";

const firstReflection = {
  title: "Starting Again in Germany: What Rebuilding Life Is Teaching Me",
  author: "Marvel Marodza",
  publishedDisplay: "12 June 2026",
  datePublished: "2026-06-12",
  category: "Germany Life / Faith & Growth",
  excerpt:
    "A personal reflection on growth, discipline, faith, language, work, loneliness, responsibility and rebuilding life step by step in a new country — with the quiet question beneath it all: what is Truth, and where does a life really find its way?",
};

const firstReflectionJsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: firstReflection.title,
  author: {
    "@type": "Person",
    name: firstReflection.author,
  },
  publisher: {
    "@type": "Organization",
    name: "Marvel’s Space",
  },
  datePublished: firstReflection.datePublished,
  dateModified: firstReflection.datePublished,
  description: firstReflection.excerpt,
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id": "https://marvel-lab.vercel.app/",
  },
};

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
    text: "Media resources, creator notes and useful tools I’m exploring.",
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

export default function Home() {
  return (
    <main
      id="home"
      className="relative min-h-screen overflow-hidden bg-transparent text-white light:text-black"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(firstReflectionJsonLd),
        }}
      />

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

          <p className="mt-5 max-w-2xl text-lg text-gray-300 light:text-gray-700 md:text-2xl">
            Watering The Garden Together
          </p>

          <p className="mt-4 inline-flex rounded-full border border-white/10 bg-white/[0.05] px-4 py-2 text-sm font-semibold text-orange-200 backdrop-blur-md light:border-black/10 light:bg-white/70 light:text-orange-700">
            A living digital garden by Marvel Marodza
          </p>

          <p className="mt-6 max-w-2xl text-sm leading-7 text-gray-400 light:text-gray-600 md:text-lg">
            A living digital space where I explore faith, Germany life, travel,
            aviation curiosity, creativity and growth through honest stories and
            useful lessons.
          </p>

          <p className="mt-5 max-w-2xl text-sm font-semibold text-orange-200 light:text-orange-700 md:text-base">
            Beyond the horizon lies another horizon.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#garden-gate"
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
                alt="Marvel Marodza theme picture for Marvel’s Space"
                fill
                sizes="(max-width: 768px) 100vw, 560px"
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
                Marvel Marodza • Explorer • Faith • Perspective
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* GARDEN GATE */}
      <section
        id="garden-gate"
        className="relative z-10 scroll-mt-24 border-y border-white/10 bg-slate-950/52 px-6 py-28 text-white backdrop-blur-[1px] light:border-black/10 light:bg-gradient-to-br light:from-orange-50/72 light:via-white/68 light:to-blue-50/72 light:text-black"
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
                I&apos;m Marvel Marodza — not the hero of the story, but the
                explorer walking through it.
              </p>

              <p>
                Marvel&apos;s Space is where faith-based curiosity meets real
                life: travel, culture, systems, media, technology, stewardship,
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
                  className="group rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white/70 light:shadow-sm light:hover:bg-blue-50"
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
        className="relative z-10 scroll-mt-24 border-b border-white/10 bg-gradient-to-b from-black/52 via-slate-950/48 to-slate-900/52 px-6 py-28 text-white backdrop-blur-[1px] light:border-black/10 light:from-white/72 light:via-blue-50/68 light:to-orange-50/72 light:text-black"
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
                  className={`group relative min-h-[250px] overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br ${card.gradient} p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white/70 light:shadow-sm`}
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
            {currentChapterCards.map((card, index) => (
              <Reveal key={card.title} delay={index * 0.06} direction="scale">
                <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-orange-50/78 light:hover:bg-blue-50">
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

          <Reveal delay={0.15} direction="up">
            <article className="mt-12 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.055] shadow-[0_0_70px_rgba(59,130,246,0.12)] backdrop-blur-md light:border-black/10 light:bg-white/82 light:shadow-xl">
              <div className="grid gap-0 lg:grid-cols-[0.9fr_1.1fr]">
                <div className="relative min-h-[280px] border-b border-white/10 bg-gradient-to-br from-blue-600/24 via-black/20 to-orange-500/24 p-8 light:border-black/10 light:from-blue-100 light:via-white light:to-orange-100">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.14),transparent_24%),radial-gradient(circle_at_80%_80%,rgba(249,115,22,0.16),transparent_28%)]" />

                  <div className="relative z-10 flex h-full flex-col justify-between">
                    <div>
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

                        <span className="rounded-full border border-white/10 bg-black/25 px-3 py-2 light:border-black/10 light:bg-white/60">
                          {firstReflection.category}
                        </span>
                      </div>
                    </div>

                    <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-md light:border-black/10 light:bg-white/70">
                      <p className="text-xs uppercase tracking-[0.25em] text-blue-200 light:text-blue-700">
                        Scripture seed
                      </p>

                      <p className="mt-3 text-sm leading-7 text-gray-200 light:text-gray-700">
                        “Your word is a lamp to my feet and a light to my
                        path.” — Psalm 119:105
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-8 md:p-10">
                  <p className="text-lg leading-8 text-gray-300 light:text-gray-700">
                    {firstReflection.excerpt}
                  </p>

                  <div className="mt-6 grid gap-3 text-sm sm:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-black/10 light:bg-black/[0.03]">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Article title
                      </p>
                      <p className="mt-2 font-semibold">
                        {firstReflection.title}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-black/10 light:bg-black/[0.03]">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Author
                      </p>
                      <p className="mt-2 font-semibold">
                        {firstReflection.author}
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-black/10 light:bg-black/[0.03]">
                      <p className="text-xs uppercase tracking-[0.2em] text-gray-500">
                        Published
                      </p>
                      <p className="mt-2 font-semibold">
                        {firstReflection.publishedDisplay}
                      </p>
                    </div>
                  </div>

                  <div className="mt-6 rounded-3xl border border-orange-300/20 bg-orange-500/10 p-5 text-sm leading-7 text-orange-100 light:border-orange-200 light:bg-orange-50 light:text-orange-900">
                    <strong>Truth-seeking note:</strong> This reflection is
                    written from faith, but not to force anyone. It is an
                    invitation to consider whether rebuilding life is only about
                    success — or whether the deeper question is what life is
                    being built on.
                  </div>

                  <details className="group mt-7 rounded-3xl border border-white/10 bg-black/25 p-5 backdrop-blur-md light:border-black/10 light:bg-black/[0.03]">
                    <summary className="cursor-pointer list-none font-semibold text-orange-300 transition hover:text-orange-200 light:text-orange-700 light:hover:text-orange-800">
                      Read preview
                      <span className="ml-2 text-sm text-gray-500">
                        opening inside this card
                      </span>
                    </summary>

                    <div className="mt-6 space-y-5 text-sm leading-7 text-gray-300 light:text-gray-700 md:text-base md:leading-8">
                      <p>
                        Germany is not the whole story, but it is one of the
                        chapters shaping me deeply.
                      </p>

                      <p>
                        Starting again in a new country teaches you things that
                        comfort could never teach. It teaches patience when the
                        language does not come out the way you want. It teaches
                        humility when simple tasks suddenly feel difficult. It
                        teaches discipline when nobody is watching, and faith
                        when familiar support feels far away.
                      </p>

                      <p>
                        For me, rebuilding life in Germany has not only been
                        about work, school, documents, transport, or learning
                        how systems function. It has also been about becoming.
                        Becoming more responsible. Becoming more patient.
                        Becoming more aware of time, words, people,
                        opportunities, and the quiet decisions that shape a
                        life.
                      </p>

                      <p>
                        But the deeper question is not only, “How do I rebuild
                        my life?” The deeper question is, “What is my life being
                        built on?”
                      </p>

                      <blockquote className="rounded-3xl border-l-4 border-orange-400 bg-white/[0.05] p-5 text-orange-100 light:bg-orange-50 light:text-orange-900">
                        Jesus said, “I am the way, and the truth, and the
                        life.” — John 14:6
                      </blockquote>

                      <p>
                        That verse is not just a religious sentence to me. It
                        is a compass. In a world full of opinions, pressure,
                        confusion, ambition and noise, I am learning that Truth
                        is not just information. Truth is a Person. And if that
                        is true, then rebuilding life is not only about becoming
                        more successful. It is about being transformed.
                      </p>

                      <p>
                        Romans 12:2 speaks about being transformed by the
                        renewing of the mind. That is what this season has been
                        teaching me: new language, new systems, new discipline,
                        but also a renewed way of seeing life.
                      </p>

                      <p>
                        There are days when growth feels exciting. There are
                        also days when it feels heavy. But even then, I am
                        learning that being planted in a difficult season does
                        not mean being forgotten. Sometimes the garden grows
                        underground before anyone sees the fruit.
                      </p>

                      <p>
                        Marvel’s Space exists because I do not want to waste the
                        lessons. I want to observe, learn, reflect, and share
                        what may help someone else who is also rebuilding,
                        starting again, or quietly searching for Truth.
                      </p>

                      <p>
                        Germany is teaching me that progress is not always
                        loud. Sometimes it looks like waking up again, trying
                        again, studying again, praying again, and choosing not
                        to give up.
                      </p>

                      <p>This is not the end of the story.</p>

                      <p>It is one horizon.</p>

                      <p className="font-semibold text-orange-300 light:text-orange-700">
                        And beyond the horizon lies another horizon.
                      </p>
                    </div>
                  </details>

                  <p className="mt-5 text-sm text-gray-500 light:text-gray-600">
                    Full article page opening later. For now, this preview is
                    planted here as the first real reflection seed by{" "}
                    <span className="font-semibold text-gray-300 light:text-gray-800">
                      Marvel Marodza
                    </span>{" "}
                    in the garden.
                  </p>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </section>

      {/* GARDEN MAP */}
      <section
        id="garden-map"
        className="relative z-10 scroll-mt-24 bg-gradient-to-br from-slate-950/52 via-black/48 to-blue-950/52 px-6 py-28 text-white backdrop-blur-[1px] light:from-blue-50/72 light:via-white/68 light:to-orange-50/72 light:text-black"
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
                <div className="group relative h-full overflow-hidden rounded-3xl border border-white/10 bg-white/[0.05] p-6 shadow-sm backdrop-blur transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white/78 light:hover:bg-blue-50">
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
        className="relative z-10 scroll-mt-24 bg-black/50 px-6 py-28 text-white backdrop-blur-[1px] light:bg-slate-100/72 light:text-black"
      >
        <div className="mx-auto max-w-6xl">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
              Creative Studio
            </p>

            <h2 className="mt-4 max-w-4xl text-4xl font-extrabold md:text-6xl">
              Where ideas become stories.
            </h2>

            <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
              Marvel’s Space carries the personal storytelling, faith, growth,
              Germany life and travel reflections. WildTwist Studios carries
              the playful, animated and faceless creative experiments.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <Reveal delay={0.1} direction="scale">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md light:border-black/10 light:bg-white/78 light:shadow-sm">
                <div className="flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-5xl">
                  ▶
                </div>

                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-blue-300 light:text-blue-600">
                  Featured
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Marvel’s Space Video
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                  A future embedded video for reflections, Germany life, faith
                  and the journey of building this digital garden.
                </p>

                <a
                  href="https://www.youtube.com/@marvel.marodza"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
                >
                  Open YouTube
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.2} direction="scale">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md light:border-black/10 light:bg-white/78 light:shadow-sm">
                <div className="flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500/20 to-blue-500/20 text-5xl">
                  🐒
                </div>

                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-orange-300 light:text-orange-600">
                  WildTwist
                </p>

                <h3 className="mt-3 text-2xl font-bold">WildTwist Studios</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                  The creative side for animated, funny, playful and faceless
                  storytelling concepts.
                </p>

                <a
                  href="https://www.youtube.com/@WildTwistStudios"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black light:hover:bg-black/5"
                >
                  Open Studio
                </a>
              </div>
            </Reveal>

            <Reveal delay={0.3} direction="scale">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md light:border-black/10 light:bg-white/78 light:shadow-sm">
                <div className="flex aspect-video items-center justify-center rounded-2xl bg-gradient-to-br from-white/10 to-blue-500/20 text-5xl">
                  ✨
                </div>

                <p className="mt-6 text-sm uppercase tracking-[0.25em] text-white/50 light:text-black/50">
                  Coming soon
                </p>

                <h3 className="mt-3 text-2xl font-bold">Latest Upload Space</h3>

                <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                  This card will later hold the latest upload or a real embedded
                  video once the next featured story is ready.
                </p>

                <span className="mt-6 inline-flex rounded-2xl border border-white/10 px-5 py-3 font-semibold text-gray-500 light:border-black/10 light:text-gray-500">
                  Embed coming
                </span>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* JOIN */}
      <section
        id="contact"
        className="relative z-10 scroll-mt-24 bg-slate-950/50 px-6 py-28 text-white backdrop-blur-[1px] light:bg-gradient-to-b light:from-white/72 light:to-blue-50/72 light:text-black"
      >
        <div className="mx-auto max-w-5xl text-center">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-300 light:text-blue-600">
              Contact
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Let’s connect with purpose.
            </h2>

            <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
              I am open to meaningful collaborations, creative projects,
              faith-based conversations, travel stories, media work and future
              community building.
            </p>
          </Reveal>

          <div className="mt-12 grid gap-4 sm:grid-cols-3">
            <Reveal delay={0.1} direction="scale">
              <a
                href="mailto:marvels.space@outlook.com"
                className="block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-gray-200 light:bg-white/78 light:hover:bg-blue-50"
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
                className="block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-gray-200 light:bg-white/78 light:hover:bg-orange-50"
              >
                <p className="text-3xl">📸</p>
                <h3 className="mt-4 text-xl font-bold">Instagram</h3>
                <p className="mt-2 text-sm text-gray-400 light:text-gray-600">
                  deincaptainmar
                </p>
              </a>
            </Reveal>

            <Reveal delay={0.3} direction="scale">
              <a
                href="https://www.tiktok.com/@marvelexplores"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 shadow-sm transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-gray-200 light:bg-white/78 light:hover:bg-gray-50"
              >
                <p className="text-3xl">🎬</p>
                <h3 className="mt-4 text-xl font-bold">TikTok</h3>
                <p className="mt-2 text-sm text-gray-400 light:text-gray-600">
                  @marvelexplores
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}