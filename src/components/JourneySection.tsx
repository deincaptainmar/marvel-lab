"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import Reveal from "@/components/Reveal";

type CountryStory = {
  id: string;
  title: string;
  shortTitle: string;
  code: string;
  flag: string;
  subtitle: string;
  cardPreview: string;
  hologramOpening: string;
  background: string;
  culture: string;
  reflection: string;
  lesson: string;
  tourism: string;
  currentAffairs: string;
  futureIdeas: string[];
};

type LayerKey =
  | "opening"
  | "history"
  | "culture"
  | "reflection"
  | "lessons"
  | "tourism"
  | "current"
  | "future";

const rootCountries: CountryStory[] = [
  {
    id: "zimbabwe",
    title: "Zimbabwe — Roots and Beginning",
    shortTitle: "Zimbabwe",
    code: "ZW",
    flag: "🇿🇼",
    subtitle: "Roots / Home Country",
    cardPreview:
      "The root country. The place where the first seeds of faith, responsibility, resilience, family and imagination were planted.",
    hologramOpening:
      "Zimbabwe is not just a country on the map for me. It is the soil where the journey began — the place of roots before branches, lessons before platforms, and faith before visibility.",
    background:
      "Zimbabwe carries deep historical and cultural importance in Southern Africa. It is known for ancient civilizations such as Great Zimbabwe, strong oral traditions, rich landscapes, agriculture, music, language, and a people shaped by resilience and creativity.",
    culture:
      "Zimbabwean culture values respect, family, community, hospitality, faith, hard work and endurance. Languages such as Shona, Ndebele and English carry stories across generations. Food and everyday life connect people around patience, humor and togetherness.",
    reflection:
      "As Marvel Marodza, Zimbabwe is my beginning. It is where I learned that life does not always start with perfect conditions, but it can still produce strong roots. My story does not run away from Zimbabwe; it grows from it.",
    lesson:
      "Zimbabwe taught me that roots matter. A tree with no roots cannot survive strong winds. Home taught me resilience, responsibility, faith, family, creativity and dignity.",
    tourism:
      "A beginner exploring Zimbabwe may want to learn about Victoria Falls, Great Zimbabwe, Lake Kariba, Matobo Hills, national parks, local food, music, markets and village/city life.",
    currentAffairs:
      "Future notes may explore youth opportunity, agriculture, education, entrepreneurship, tourism, infrastructure, technology, migration, culture and faith communities.",
    futureIdeas: [
      "Zimbabwe: The Roots Behind Marvel’s Space",
      "Great Zimbabwe, Victoria Falls, and the Dignity of Home",
      "What Zimbabwe Taught Me About Resilience and Responsibility",
    ],
  },
  {
    id: "germany",
    title: "Germany — Current Chapter",
    shortTitle: "Germany",
    code: "DE",
    flag: "🇩🇪",
    subtitle: "Current Chapter",
    cardPreview:
      "The current chapter. A place of rebuilding, discipline, language, systems, faith away from home and becoming.",
    hologramOpening:
      "Germany is where the journey entered a new climate. New language. New systems. New silence. New pressure. New growth. It became a chapter where roots from Zimbabwe had to learn how to survive in different soil.",
    background:
      "Germany is one of Europe’s influential countries, known for engineering, education, industry, transport systems, history and strong public structures. It is a country where systems matter.",
    culture:
      "German culture often values punctuality, planning, privacy, direct communication, rules, structure and quality work. Learning German is not only about grammar; it is about entering the rhythm of the society.",
    reflection:
      "As Marvel Marodza, Germany represents my current chapter of becoming. It is where I am learning discipline, patience, language, independence and responsibility in a deeper way.",
    lesson:
      "Germany taught me that dreams need systems. Faith needs endurance. Growth needs discipline. A new country can expose weaknesses, but it can also train strength.",
    tourism:
      "A beginner exploring Germany may want to understand trains, city layouts, local rules, regional differences, castles, forests, museums, Christmas markets, football culture, bakeries and historic cities.",
    currentAffairs:
      "Future notes may explore skilled work, migration, Ausbildung, transport, energy transition, technology, language learning, housing, industry and Europe’s changing future.",
    futureIdeas: [
      "Germany: Building Discipline in a New Chapter",
      "What Moving to Germany Taught Me About Systems",
      "Faith, Language, and Growth Away From Home",
    ],
  },
];

const archiveCountries: CountryStory[] = [
  {
    id: "turkey",
    title: "Turkey — The Bridge of Worlds",
    shortTitle: "Turkey",
    code: "TR",
    flag: "🇹🇷",
    subtitle: "Bridge of Worlds",
    cardPreview:
      "A bridge between continents, cultures and dreams. Turkey opened a wider view of aviation, discipline, study and life beyond the familiar.",
    hologramOpening:
      "Turkey felt like a doorway between worlds — Europe and Asia, tradition and modern movement, history and ambition. It became a chapter of learning how wide the world really is.",
    background:
      "Turkey has deep historical importance because of its position between Europe, Asia, the Middle East and the Mediterranean world. It carries layers of ancient civilizations, Byzantine history, Ottoman history, trade routes, architecture and cultural exchange.",
    culture:
      "Turkish culture is known for hospitality, tea culture, food, family values, respect, markets, faith influence, music and strong social connection.",
    reflection:
      "As Marvel Marodza, Turkey connects to a season of study, aviation dreams, discipline and discovering the wider world. Sometimes a country itself becomes a classroom.",
    lesson:
      "Turkey taught me that some places are bridges. They help you cross from one version of yourself into another.",
    tourism:
      "A beginner exploring Turkey may want to learn about Istanbul, Cappadocia, Turkish food, bazaars, mosques, coastlines, tea culture and public transport.",
    currentAffairs:
      "Future notes may explore aviation, tourism, education, regional transport, culture, migration routes, youth ambition, technology and architecture.",
    futureIdeas: [
      "Turkey: The Country That Felt Like a Bridge",
      "Aviation Dreams and Life Lessons in Turkey",
      "What Turkey Taught Me About Perspective",
    ],
  },
  {
    id: "united-kingdom",
    title: "United Kingdom — Movement and Memory",
    shortTitle: "United Kingdom",
    code: "GB",
    flag: "🇬🇧",
    subtitle: "Movement and Memory",
    cardPreview:
      "A chapter of movement, connection and reflection. The United Kingdom represents travel, family links and the wider rhythm of Europe.",
    hologramOpening:
      "The United Kingdom enters the archive like a chapter of movement — airports, roads, family connections, changing weather, familiar language and unfamiliar systems.",
    background:
      "The United Kingdom has shaped global history through language, law, literature, education, industry, migration, transport and political systems.",
    culture:
      "British culture includes politeness, queues, humor, tea, football, public transport, diverse cities, historic buildings and strong regional identities.",
    reflection:
      "As Marvel Marodza, the United Kingdom fits into my journey as a movement chapter — a place connected to travel, people, family and reflection.",
    lesson:
      "The UK teaches that movement carries history. Language can connect people, but it does not automatically mean cultures are the same.",
    tourism:
      "A beginner exploring the United Kingdom may want to visit London, Birmingham, Manchester, museums, countryside, churches, football stadiums and cultural neighborhoods.",
    currentAffairs:
      "Future notes may explore migration, education, transport, multicultural identity, youth opportunities, African diaspora stories, creative industries and housing.",
    futureIdeas: [
      "United Kingdom: Movement, Memory, and Connection",
      "What the UK Teaches About Language and Culture",
      "Travel Notes From a Familiar but Different Place",
    ],
  },
  {
    id: "netherlands",
    title: "Netherlands — Water, Design, and Crossing Borders",
    shortTitle: "Netherlands",
    code: "NL",
    flag: "🇳🇱",
    subtitle: "Water and Design",
    cardPreview:
      "A chapter of design, movement, water, cities and quiet observation. The Netherlands shows how systems can shape everyday life.",
    hologramOpening:
      "The Netherlands appears in the archive like a clean line across the map — water, bicycles, bridges, trains, cities and borders that feel close enough to touch.",
    background:
      "The Netherlands is historically important for trade, maritime history, water management, design, art, agriculture and global connections.",
    culture:
      "Dutch culture is often associated with cycling, direct communication, practical design, efficient transport, canals, urban planning and innovation.",
    reflection:
      "As Marvel Marodza, the Netherlands feels like a chapter of observation. It makes me think about how design affects life.",
    lesson:
      "The Netherlands teaches that small places can carry big ideas. Systems become visible when you slow down and observe.",
    tourism:
      "A beginner exploring the Netherlands may want to visit Amsterdam, Rotterdam, canals, museums, cycling routes, windmills, markets and coastal areas.",
    currentAffairs:
      "Future notes may explore water management, urban design, transport, agriculture innovation, housing, sustainability, migration, European trade and technology.",
    futureIdeas: [
      "Netherlands: What Water Teaches About Design",
      "Cycling, Cities, and Systems Thinking",
      "A Small Country With Big Movement Lessons",
    ],
  },
  {
    id: "ethiopia",
    title: "Ethiopia — Ancient Routes and Higher Perspective",
    shortTitle: "Ethiopia",
    code: "ET",
    flag: "🇪🇹",
    subtitle: "Ancient Routes",
    cardPreview:
      "A chapter of ancient culture, African connection, aviation routes, history and reflection. Ethiopia feels like a doorway into deeper time.",
    hologramOpening:
      "Ethiopia enters the archive with weight and depth — ancient history, highlands, faith, coffee, language, airports, routes and the feeling of Africa speaking through time.",
    background:
      "Ethiopia is one of Africa’s historically significant countries, known for ancient kingdoms, unique scripts, Christian heritage, coffee origins, highland landscapes and strong cultural identity.",
    culture:
      "Ethiopian culture includes food traditions, coffee ceremonies, music, languages, Orthodox Christian heritage, family life, hospitality and regional diversity.",
    reflection:
      "As Marvel Marodza, Ethiopia connects to the feeling of African routes and movement. It reminds me that Africa is not one simple story.",
    lesson:
      "Ethiopia teaches that history is not only found in books. It can be felt in language, food, architecture, faith and movement.",
    tourism:
      "A beginner exploring Ethiopia may want to learn about Addis Ababa, Lalibela, Axum, coffee culture, highlands, churches, markets and food.",
    currentAffairs:
      "Future notes may explore aviation, African Union connections, infrastructure, tourism, education, agriculture, culture, technology and youth opportunity.",
    futureIdeas: [
      "Ethiopia: Ancient Routes and African Memory",
      "What Airports Teach About African Connection",
      "Coffee, Faith, and History in the Horn of Africa",
    ],
  },
  {
    id: "south-africa",
    title: "South Africa — Complexity, Creativity, and Southern Connection",
    shortTitle: "South Africa",
    code: "ZA",
    flag: "🇿🇦",
    subtitle: "Southern Connection",
    cardPreview:
      "A Southern African chapter of movement, culture, creativity, opportunity and complexity. South Africa carries both beauty and questions.",
    hologramOpening:
      "South Africa appears in the archive with energy — cities, coastlines, languages, music, movement, business, history, contrast and creativity.",
    background:
      "South Africa has a major place in African and global history because of its struggle against apartheid, cultural diversity, mineral wealth, cities, music, sport, politics and economic influence.",
    culture:
      "South Africa is culturally rich, with many languages, communities, foods, music styles, traditions and landscapes. It carries strong creative energy and deep social complexity.",
    reflection:
      "As Marvel Marodza, South Africa feels connected to the wider Southern African story. It is close enough to feel familiar, yet large and complex enough to demand humility.",
    lesson:
      "South Africa teaches that beauty and complexity can exist together. It encourages the explorer to avoid shallow opinions and learn from both light and tension.",
    tourism:
      "A beginner exploring South Africa may want to learn about Cape Town, Johannesburg, Durban, national parks, music, food, beaches, history museums, mountains and road travel.",
    currentAffairs:
      "Future notes may explore youth culture, business, transport, energy, inequality, tourism, creative industries, migration, education and food systems.",
    futureIdeas: [
      "South Africa: Beauty, Complexity, and Creativity",
      "What Southern Africa Teaches About Opportunity",
      "Travel Lessons From a Country of Many Layers",
    ],
  },
  {
    id: "more-to-come",
    title: "More to Come — Future Routes",
    shortTitle: "More to Come",
    code: "NEXT",
    flag: "🌍",
    subtitle: "Future Routes",
    cardPreview:
      "The map is not finished. More routes, rooms, lessons and horizons will be added as the journey grows.",
    hologramOpening:
      "The archive does not end here. Some countries are already planted as seeds. Others are still beyond the horizon, waiting for the right season.",
    background:
      "Future routes will not be added only for decoration. Each new country should help expand the garden through learning: history, culture, systems, people, faith, transport, food, technology, creativity and perspective.",
    culture:
      "Every future country room should respect the people and culture it represents. The writing should avoid stereotypes, shallow travel language and fake authority.",
    reflection:
      "As Marvel Marodza, I want the journey to keep growing with honesty. Some places I have already passed through. Some I will study deeper. Some I may visit in the future.",
    lesson:
      "The future routes teach that the explorer is still becoming. Not every chapter is ready at once.",
    tourism:
      "Future travel notes can include beginner guides, cultural respect tips, route maps, food notes, transport observations, history summaries, airport experiences and personal lessons.",
    currentAffairs:
      "Future rooms can later connect to youth opportunity, transport systems, technology, migration, education, agriculture, tourism, culture, faith, cities and global movement.",
    futureIdeas: [
      "Beyond the Horizon: Countries Still Waiting to Be Explored",
      "Why Marvel’s Space Is Not Collecting Flags",
      "How Every Country Can Become a Classroom",
    ],
  },
];

export default function JourneySection() {
  const [selectedCountry, setSelectedCountry] = useState<CountryStory | null>(
    null
  );
  const [archiveOpen, setArchiveOpen] = useState(false);
  const [archiveIndex, setArchiveIndex] = useState(0);
  const archiveModalRef = useRef<HTMLDivElement | null>(null);
  const [archiveZoomLevel, setArchiveZoomLevel] = useState(1);
  const [archiveIsFullscreen, setArchiveIsFullscreen] = useState(false);

  const activeArchiveCountry = archiveCountries[archiveIndex];

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedCountry(null);
        setArchiveOpen(false);
      }
    }

    function handleFullscreenChange() {
      setArchiveIsFullscreen(Boolean(document.fullscreenElement));
    }

    window.addEventListener("keydown", closeOnEscape);
    document.addEventListener("fullscreenchange", handleFullscreenChange);

    return () => {
      window.removeEventListener("keydown", closeOnEscape);
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
    };
  }, []);

  function nextCountry() {
    setArchiveIndex((current) =>
      current === archiveCountries.length - 1 ? current : current + 1
    );
  }

  function previousCountry() {
    setArchiveIndex((current) => (current === 0 ? current : current - 1));
  }

  async function handleArchiveFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await archiveModalRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Archive fullscreen toggle failed:", error);
    }
  }

  function handleArchiveZoomIn() {
    setArchiveZoomLevel((current) => Math.min(current + 0.1, 1.6));
  }

  function handleArchiveZoomOut() {
    setArchiveZoomLevel((current) => Math.max(current - 0.1, 0.9));
  }

  return (
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
            Roots, current chapter and hidden routes.
          </h2>

          <p className="mt-6 max-w-3xl text-lg leading-8 text-gray-400 light:text-gray-600">
            The journey begins with roots and the current chapter. Other
            countries are hidden inside the Explorer Travel Archive, ready to be
            opened one by one.
          </p>
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {rootCountries.map((country, index) => (
            <Reveal key={country.id} delay={index * 0.06} direction="scale">
              <button
                type="button"
                onClick={() => setSelectedCountry(country)}
                className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-left backdrop-blur-md transition hover:-translate-y-2 hover:border-cyan-300/50 hover:bg-cyan-400/[0.06] hover:shadow-[0_0_55px_rgba(34,211,238,0.14)] light:border-black/10 light:bg-white/78 light:shadow-sm light:hover:bg-blue-50"
              >
                <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100">
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
                  <div className="absolute -right-16 -top-16 h-40 w-40 rounded-full border border-cyan-300/20" />
                  <div className="absolute -bottom-16 left-10 h-28 w-28 rounded-full border border-orange-300/20" />
                </div>

                <div className="relative z-10 flex min-h-[250px] flex-col justify-between">
                  <div>
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-5xl">{country.flag}</p>
                      <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-cyan-200 light:text-cyan-700">
                        Open
                      </span>
                    </div>

                    <p className="mt-8 text-4xl font-black tracking-tight text-white/80 light:text-black/80">
                      {country.code}
                    </p>

                    <h3 className="mt-4 text-2xl font-bold">
                      {country.shortTitle}
                    </h3>

                    <p className="mt-2 text-sm uppercase tracking-[0.2em] text-orange-300 light:text-orange-600">
                      {country.subtitle}
                    </p>
                  </div>

                  <div>
                    <p className="mt-5 text-sm leading-6 text-gray-400 light:text-gray-600">
                      {country.cardPreview}
                    </p>

                    <p className="mt-6 text-sm font-semibold text-cyan-300 light:text-cyan-700">
                      Open country note →
                    </p>
                  </div>
                </div>
              </button>
            </Reveal>
          ))}

          <Reveal delay={0.12} direction="scale">
            <button
              type="button"
              onClick={() => {
                setArchiveIndex(0);
                setArchiveOpen(true);
              }}
              className="group relative min-h-[300px] overflow-hidden rounded-3xl border border-orange-300/20 bg-gradient-to-br from-orange-500/10 via-white/[0.04] to-blue-500/10 p-6 text-left backdrop-blur-md transition hover:-translate-y-2 hover:border-orange-300/60 hover:shadow-[0_0_65px_rgba(249,115,22,0.16)] light:border-orange-200 light:bg-orange-50/80 light:shadow-sm"
            >
              <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-8 top-8 h-24 w-24 rounded-full border border-orange-300/20" />
                <div className="absolute bottom-8 right-8 h-36 w-36 rounded-full border border-cyan-300/20" />
              </div>

              <div className="relative z-10 flex min-h-[250px] flex-col justify-between">
                <div>
                  <div className="flex items-start justify-between gap-4">
                    <p className="text-5xl">🌍</p>
                    <span className="rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-[10px] uppercase tracking-[0.18em] text-orange-200 light:text-orange-700">
                      Archive
                    </span>
                  </div>

                  <p className="mt-8 text-4xl font-black tracking-tight text-white/80 light:text-black/80">
                    +6
                  </p>

                  <h3 className="mt-4 text-2xl font-bold">
                    More Countries Visited
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.2em] text-orange-300 light:text-orange-600">
                    Hidden Routes
                  </p>
                </div>

                <div>
                  <p className="mt-5 text-sm leading-6 text-gray-400 light:text-gray-600">
                    Turkey, United Kingdom, Netherlands, Ethiopia, South Africa
                    and future routes are hidden inside the archive.
                  </p>

                  <p className="mt-6 text-sm font-semibold text-orange-300 light:text-orange-700">
                    Open travel archive →
                  </p>
                </div>
              </div>
            </button>
          </Reveal>
        </div>
      </div>

      {selectedCountry && (
        <CountryHologram
          country={selectedCountry}
          onClose={() => setSelectedCountry(null)}
          footerAction={
            selectedCountry.id === "germany" ? (
              <a
                href="#current-chapter"
                onClick={() => setSelectedCountry(null)}
                className="rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
              >
                Open Germany Life section
              </a>
            ) : (
              <button
                type="button"
                className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
              >
                Full country room opening soon
              </button>
            )
          }
        />
      )}

      {archiveOpen && (
        <div
          className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-5 py-10 backdrop-blur-md"
          onClick={() => setArchiveOpen(false)}
        >
          <div
            ref={archiveModalRef}
            className={`relative overflow-hidden border border-cyan-300/30 bg-slate-950/92 text-white shadow-[0_0_100px_rgba(34,211,238,0.22)] backdrop-blur-xl light:bg-white/95 light:text-black ${
              archiveIsFullscreen
                ? "h-full max-h-full w-full max-w-full rounded-none"
                : "max-h-[88vh] w-full max-w-6xl rounded-[2rem]"
            }`}
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-cyan-300/20" />
              <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full border border-orange-300/20" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            </div>

            <div
              className={`relative z-10 grid overflow-y-auto lg:grid-cols-[0.75fr_1.25fr] ${
                archiveIsFullscreen ? "h-full max-h-full" : "max-h-[88vh]"
              }`}
            >
              <div className="relative border-b border-cyan-300/20 bg-gradient-to-br from-cyan-500/14 via-black/25 to-orange-500/16 p-8 light:border-black/10 light:from-cyan-50 light:via-white light:to-orange-50">
                <div className="flex items-start justify-between gap-5">
                  <div>
                    <p className="text-xs uppercase tracking-[0.35em] text-cyan-200 light:text-cyan-700">
                      Explorer Travel Archive
                    </p>

                    <p className="mt-5 text-6xl">{activeArchiveCountry.flag}</p>

                    <h3 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
                      {activeArchiveCountry.shortTitle}
                    </h3>

                    <p className="mt-4 text-sm uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
                      {activeArchiveCountry.subtitle}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setArchiveOpen(false)}
                    className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 light:border-black/10 light:bg-black/5 light:text-black"
                    aria-label="Close travel archive"
                  >
                    ✕
                  </button>
                </div>

                <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-md light:border-black/10 light:bg-white/70">
                  <p className="text-xs uppercase tracking-[0.25em] text-cyan-200 light:text-cyan-700">
                    Country {archiveIndex + 1} of {archiveCountries.length}
                  </p>

                  <p className="mt-3 text-sm leading-7 text-gray-200 light:text-gray-700">
                    {activeArchiveCountry.cardPreview}
                  </p>
                </div>

                {archiveIndex === archiveCountries.length - 1 && (
                  <div className="mt-5 rounded-3xl border border-orange-300/25 bg-orange-400/10 p-5 shadow-[0_0_35px_rgba(249,115,22,0.12)] light:border-orange-200 light:bg-orange-50">
                    <p className="text-xs uppercase tracking-[0.25em] text-orange-200 light:text-orange-700">
                      Archive checkpoint
                    </p>

                    <p className="mt-3 text-sm leading-7 text-orange-100 light:text-orange-900">
                      So far, these are the places explored. More chapters will
                      be planted as the journey grows.
                    </p>
                  </div>
                )}

                <div className="mt-7 flex gap-3">
                  <button
                    type="button"
                    onClick={previousCountry}
                    disabled={archiveIndex === 0}
                    className="flex-1 rounded-2xl border border-white/10 px-5 py-3 font-semibold text-white transition hover:bg-white/10 disabled:cursor-not-allowed disabled:opacity-35 light:border-black/10 light:text-black"
                  >
                    ← Previous
                  </button>

                  <button
                    type="button"
                    onClick={nextCountry}
                    disabled={archiveIndex === archiveCountries.length - 1}
                    className="flex-1 rounded-2xl bg-white px-5 py-3 font-semibold text-black transition hover:scale-105 disabled:cursor-not-allowed disabled:opacity-35 light:bg-black light:text-white"
                  >
                    Next →
                  </button>
                </div>
              </div>

              <CountryContent
                country={activeArchiveCountry}
                zoomLevel={archiveZoomLevel}
              />
            </div>

            <ReaderControls
              zoomLevel={archiveZoomLevel}
              onZoomIn={handleArchiveZoomIn}
              onZoomOut={handleArchiveZoomOut}
              onToggleFullscreen={handleArchiveFullscreen}
              isFullscreen={archiveIsFullscreen}
            />
          </div>
        </div>
      )}
    </section>
  );
}

function ReaderControls({
  zoomLevel,
  onZoomIn,
  onZoomOut,
  onToggleFullscreen,
  isFullscreen,
}: {
  zoomLevel: number;
  onZoomIn: () => void;
  onZoomOut: () => void;
  onToggleFullscreen: () => void;
  isFullscreen: boolean;
}) {
  return (
    <div className="absolute bottom-5 right-5 z-30 flex items-center gap-2 rounded-2xl border border-cyan-300/30 bg-slate-950/75 p-2 shadow-[0_0_35px_rgba(34,211,238,0.18)] backdrop-blur-xl light:border-black/10 light:bg-white/85">
      <button
        type="button"
        onClick={onZoomOut}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200 light:border-black/10 light:bg-black/[0.03] light:text-black light:hover:bg-blue-50"
        aria-label="Zoom out"
        title="Zoom out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
          <path d="M8 11h6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onZoomIn}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white transition hover:border-cyan-300/40 hover:bg-cyan-300/10 hover:text-cyan-200 light:border-black/10 light:bg-black/[0.03] light:text-black light:hover:bg-blue-50"
        aria-label="Zoom in"
        title="Zoom in"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="7" />
          <path d="M21 21l-4.3-4.3" />
          <path d="M11 8v6" />
          <path d="M8 11h6" />
        </svg>
      </button>

      <button
        type="button"
        onClick={onToggleFullscreen}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-orange-300/30 bg-orange-300/10 text-orange-200 transition hover:bg-orange-300/20 light:border-orange-200 light:text-orange-700"
        aria-label={isFullscreen ? "Exit fullscreen" : "Open fullscreen"}
        title={isFullscreen ? "Exit fullscreen" : "Open fullscreen"}
      >
        {isFullscreen ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M9 3H5v4" />
            <path d="M15 3h4v4" />
            <path d="M9 21H5v-4" />
            <path d="M19 21h-4v-4" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M15 3h6v6" />
            <path d="M9 21H3v-6" />
            <path d="M21 3l-7 7" />
            <path d="M3 21l7-7" />
          </svg>
        )}
      </button>

      <div className="hidden pl-1 text-xs text-gray-400 light:text-gray-600 sm:block">
        {Math.round(zoomLevel * 100)}%
      </div>
    </div>
  );
}

function CountryHologram({
  country,
  onClose,
  footerAction,
}: {
  country: CountryStory;
  onClose: () => void;
  footerAction: ReactNode;
}) {
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    function handleFullscreenChange() {
      setIsFullscreen(Boolean(document.fullscreenElement));
    }

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    return () =>
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
  }, []);

  async function handleToggleFullscreen() {
    try {
      if (!document.fullscreenElement) {
        await modalRef.current?.requestFullscreen();
      } else {
        await document.exitFullscreen();
      }
    } catch (error) {
      console.error("Fullscreen toggle failed:", error);
    }
  }

  function handleZoomIn() {
    setZoomLevel((current) => Math.min(current + 0.1, 1.6));
  }

  function handleZoomOut() {
    setZoomLevel((current) => Math.max(current - 0.1, 0.9));
  }

  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-5 py-10 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        ref={modalRef}
        className={`relative overflow-hidden border border-cyan-300/30 bg-slate-950/92 text-white shadow-[0_0_100px_rgba(34,211,238,0.22)] backdrop-blur-xl light:bg-white/95 light:text-black ${
          isFullscreen
            ? "h-full max-h-full w-full max-w-full rounded-none"
            : "max-h-[88vh] w-full max-w-6xl rounded-[2rem]"
        }`}
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-cyan-300/20" />
          <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full border border-orange-300/20" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        </div>

        <div
          className={`relative z-10 grid overflow-y-auto lg:grid-cols-[0.75fr_1.25fr] ${
            isFullscreen ? "h-full max-h-full" : "max-h-[88vh]"
          }`}
        >
          <div className="relative border-b border-cyan-300/20 bg-gradient-to-br from-cyan-500/14 via-black/25 to-orange-500/16 p-8 light:border-black/10 light:from-cyan-50 light:via-white light:to-orange-50">
            <div className="flex items-start justify-between gap-5">
              <div>
                <p className="text-xs uppercase tracking-[0.35em] text-cyan-200 light:text-cyan-700">
                  Country Hologram
                </p>

                <p className="mt-6 text-5xl font-black tracking-tight text-white/90 light:text-black/90">
                  {country.code}
                </p>

                <h3 className="mt-6 text-4xl font-extrabold leading-tight md:text-5xl">
                  {country.shortTitle}
                </h3>

                <p className="mt-4 text-sm uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
                  {country.subtitle}
                </p>
              </div>

              <button
                type="button"
                onClick={onClose}
                className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 light:border-black/10 light:bg-black/5 light:text-black"
                aria-label="Close country hologram"
              >
                ✕
              </button>
            </div>

            <div className="mt-10 hidden rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-md light:border-black/10 light:bg-white/70 md:block">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200 light:text-cyan-700">
                Opening scan
              </p>

              <p
                className="mt-3 text-gray-200 light:text-gray-700"
                style={{
                  fontSize: `${0.98 * zoomLevel}rem`,
                  lineHeight: 1.95,
                }}
              >
                {country.hologramOpening}
              </p>
            </div>
          </div>

          <div className="relative">
            <CountryContent country={country} zoomLevel={zoomLevel} />

            <div className="flex flex-col gap-3 border-t border-white/10 p-8 pr-28 sm:flex-row light:border-black/10">
              {footerAction}

              <button
                type="button"
                onClick={onClose}
                className="rounded-2xl border border-white/10 px-6 py-4 font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black light:hover:bg-black/5"
              >
                Close hologram
              </button>
            </div>
          </div>
        </div>

        <ReaderControls
          zoomLevel={zoomLevel}
          onZoomIn={handleZoomIn}
          onZoomOut={handleZoomOut}
          onToggleFullscreen={handleToggleFullscreen}
          isFullscreen={isFullscreen}
        />
      </div>
    </div>
  );
}

function CountryContent({
  country,
  zoomLevel = 1,
}: {
  country: CountryStory;
  zoomLevel?: number;
}) {
  const layers: {
    key: LayerKey;
    title: string;
    label: string;
    text?: string;
    ideas?: string[];
  }[] = [
    {
      key: "opening",
      title: "Opening scan",
      label: "Main country signal",
      text: country.hologramOpening,
    },
    {
      key: "history",
      title: "History / background",
      label: "Context layer",
      text: country.background,
    },
    {
      key: "culture",
      title: "Culture notes",
      label: "People and rhythm",
      text: country.culture,
    },
    {
      key: "reflection",
      title: "My experience",
      label: "Personal layer",
      text: country.reflection,
    },
    {
      key: "lessons",
      title: "Lessons learned",
      label: "Wisdom seed",
      text: country.lesson,
    },
    {
      key: "tourism",
      title: "Tourism guide angle",
      label: "Explorer guide",
      text: country.tourism,
    },
    {
      key: "current",
      title: "Current affairs angle",
      label: "Future research",
      text: country.currentAffairs,
    },
    {
      key: "future",
      title: "Future content ideas",
      label: "Content seeds",
      ideas: country.futureIdeas,
    },
  ];

  const [activeLayer, setActiveLayer] = useState<LayerKey>("opening");
  const [focusedLayer, setFocusedLayer] = useState<LayerKey | null>(null);

  const selectedLayer =
    layers.find((layer) => layer.key === activeLayer) ?? layers[0];

  const focusedLayerData = focusedLayer
    ? layers.find((layer) => layer.key === focusedLayer) ?? null
    : null;

  function openLayer(layerKey: LayerKey) {
    setActiveLayer(layerKey);
    setFocusedLayer(layerKey);
  }

  return (
    <div className="p-6 md:p-10">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200 light:text-cyan-700">
          {country.id === "more-to-come" ? "Growing map" : country.code}
        </span>

        <span className="rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-orange-200 light:text-orange-700">
          Interactive data layers
        </span>
      </div>

      <div className="mt-7 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="order-2 grid gap-3 xl:order-1">
          {layers.map((layer, index) => {
            const isActive = layer.key === activeLayer;

            return (
              <button
                key={layer.key}
                type="button"
                onClick={() => openLayer(layer.key)}
                className={`group relative overflow-hidden rounded-2xl border p-4 text-left transition duration-300 ${
                  isActive
                    ? "border-cyan-300/50 bg-cyan-300/10 shadow-[0_0_35px_rgba(34,211,238,0.14)]"
                    : "border-white/10 bg-white/[0.035] hover:border-orange-300/30 hover:bg-white/[0.06] light:border-black/10 light:bg-black/[0.03]"
                }`}
              >
                <div className="absolute inset-y-0 left-0 w-1 bg-gradient-to-b from-cyan-300 to-orange-300 opacity-0 transition group-hover:opacity-100" />

                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p
                      className={`text-[10px] uppercase tracking-[0.22em] ${
                        isActive
                          ? "text-cyan-200 light:text-cyan-700"
                          : "text-gray-500 light:text-gray-500"
                      }`}
                    >
                      Layer 0{index + 1}
                    </p>

                    <h4 className="mt-2 font-bold">{layer.title}</h4>

                    <p className="mt-1 text-xs text-gray-500 light:text-gray-600">
                      {isActive ? layer.label : "Tap to reveal this layer"}
                    </p>
                  </div>

                  <span
                    className={`mt-1 rounded-full px-3 py-1 text-xs font-semibold transition ${
                      isActive
                        ? "bg-cyan-300 text-black"
                        : "bg-white/10 text-gray-300 light:bg-black/5 light:text-gray-600"
                    }`}
                  >
                    {isActive ? "OPEN" : "UNLOCK"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="order-1 [perspective:1200px] xl:order-2">
          <div
            key={selectedLayer.key}
            className="relative hidden min-h-[360px] overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 p-6 shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition duration-500 animate-in fade-in zoom-in-95 light:border-black/10 light:from-white light:via-blue-50 light:to-orange-50 md:min-h-[420px] md:p-7 xl:block"
            style={{
              transform: "rotateX(1.5deg) rotateY(-1.5deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <LayerCardContent
              country={country}
              layer={selectedLayer}
              zoomLevel={zoomLevel}
            />
          </div>

          <button
            type="button"
            onClick={() => setFocusedLayer(activeLayer)}
            className="group relative block w-full overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 p-6 text-left shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition hover:border-cyan-300/45 light:border-black/10 light:from-white light:via-blue-50 light:to-orange-50 xl:hidden"
          >
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200 light:text-cyan-700">
              Active layer
            </p>

            <h3 className="mt-3 text-3xl font-extrabold">
              {selectedLayer.title}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
              {selectedLayer.label}
            </p>

            <p className="mt-5 text-sm leading-7 text-gray-300 light:text-gray-700">
              Tap to open this story layer.
            </p>
          </button>
        </div>
      </div>

      {focusedLayerData && (
        <LayerFocusModal
          country={country}
          layer={focusedLayerData}
          zoomLevel={zoomLevel}
          onClose={() => setFocusedLayer(null)}
        />
      )}
    </div>
  );
}

function LayerCardContent({
  country,
  layer,
  zoomLevel,
}: {
  country: CountryStory;
  layer: {
    key: LayerKey;
    title: string;
    label: string;
    text?: string;
    ideas?: string[];
  };
  zoomLevel: number;
}) {
  return (
    <>
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent" />
        <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-cyan-300/20" />
        <div className="absolute -bottom-24 left-12 h-48 w-48 rounded-full border border-orange-300/20" />
        <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-300/10" />
      </div>

      <div className="relative z-10" style={{ transform: "translateZ(28px)" }}>
        <div className="flex flex-wrap items-center gap-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-cyan-200 light:text-cyan-700">
              Active layer
            </p>

            <h3 className="mt-3 text-3xl font-extrabold md:text-4xl">
              {layer.title}
            </h3>

            <p className="mt-2 text-sm uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
              {layer.label}
            </p>
          </div>
        </div>

        <div
          className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-6 text-gray-200 shadow-inner light:border-black/10 light:bg-white/70 light:text-gray-700"
          style={{
            fontSize: `${1 * zoomLevel}rem`,
            lineHeight: 1.9,
          }}
        >
          {layer.ideas ? (
            <ol className="list-decimal space-y-3 pl-5">
              {layer.ideas.map((idea) => (
                <li key={idea}>{idea}</li>
              ))}
            </ol>
          ) : (
            <p>{layer.text}</p>
          )}
        </div>

        <CountryMiniMeta country={country} />

        <p
          className="mt-6 text-gray-500 light:text-gray-600"
          style={{
            fontSize: `${0.92 * zoomLevel}rem`,
            lineHeight: 1.8,
          }}
        >
          This room is still a seed in the garden. Photos, memories and deeper
          travel notes will be planted here over time.
        </p>
      </div>
    </>
  );
}


function getLayerExtras(
  country: CountryStory,
  layer: {
    key: LayerKey;
    title: string;
    label: string;
    text?: string;
    ideas?: string[];
  }
) {
  const countryName = country.shortTitle;

  const questions: Record<LayerKey, string> = {
    opening: `If ${countryName} was a doorway in the journey, what would you notice first?`,
    history: `What old story might still be shaping life in ${countryName} today?`,
    culture: `What sound, food, greeting, rhythm, or everyday habit would you want to observe first?`,
    reflection: `What would this chapter teach you if you had to walk through it yourself?`,
    lessons: `Which lesson from ${countryName} feels useful for your own journey?`,
    tourism: `If you had one day to explore with curiosity, where would your feet take you first?`,
    current: `What present-day question would help you understand ${countryName} beyond the surface?`,
    future: `Which future story should be planted first in this country room?`,
  };

  const didYouKnow: Record<LayerKey, string> = {
    opening: `${countryName} is stored here as more than a flag. It is treated as a chapter with memory, movement, learning, and perspective.`,
    history: `History is not only dates and monuments. It can hide inside language, food, roads, cities, beliefs, and the way people remember where they came from.`,
    culture: `Culture is often found in small things: how people greet, share food, move through cities, respect time, tell stories, and welcome strangers.`,
    reflection: `A personal travel note becomes stronger when it does not only say “I went there,” but asks, “What did this place teach me?”`,
    lessons: `Every country room in Marvel’s Space is meant to leave a small seed: something useful, honest, and worth carrying into life.`,
    tourism: `The best travel guide is not only a list of places. It also teaches respect, preparation, curiosity, and how to enter a place with humility.`,
    current: `Current affairs will be added carefully over time, focusing on broad themes such as youth, transport, culture, education, opportunity, and systems.`,
    future: `This archive is designed to grow slowly. Photos, maps, videos, interviews, and deeper stories can be planted later without overcrowding the page today.`,
  };

  const gems: Record<LayerKey, string> = {
    opening: country.hologramOpening,
    history: country.background,
    culture: country.culture,
    reflection: country.reflection,
    lessons: country.lesson,
    tourism: country.tourism,
    current: country.currentAffairs,
    future: "The map is still growing. More chapters will be planted as the journey expands.",
  };

  return {
    question: questions[layer.key],
    didYouKnow: didYouKnow[layer.key],
    gem: gems[layer.key],
  };
}


function LayerFocusModal({
  country,
  layer,
  zoomLevel,
  onClose,
}: {
  country: CountryStory;
  layer: {
    key: LayerKey;
    title: string;
    label: string;
    text?: string;
    ideas?: string[];
  };
  zoomLevel: number;
  onClose: () => void;
}) {
  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/80 px-5 py-8 backdrop-blur-xl"
      onClick={onClose}
    >
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute left-6 top-24 h-24 w-24 animate-pulse rounded-full border border-cyan-300/20 bg-cyan-300/5" />
        <div className="absolute right-10 top-1/3 h-32 w-32 rounded-full border border-orange-300/20 bg-orange-300/5" />
        <div className="absolute bottom-20 left-1/4 h-20 w-20 rounded-full border border-white/10" />
        <div className="absolute left-1/2 top-16 h-2 w-2 rounded-full bg-cyan-200/80 shadow-[0_0_22px_rgba(165,243,252,0.9)]" />
        <div className="absolute bottom-32 right-1/4 h-2 w-2 rounded-full bg-orange-200/80 shadow-[0_0_22px_rgba(254,215,170,0.9)]" />
      </div>

      <div
        className="relative max-h-[88vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-cyan-300/30 bg-slate-950/94 p-6 text-white shadow-[0_0_100px_rgba(34,211,238,0.26)] backdrop-blur-2xl light:bg-white/95 light:text-black md:p-8"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-orange-300 to-transparent" />
          <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-cyan-300/20" />
          <div className="absolute -bottom-20 left-8 h-44 w-44 rounded-full border border-orange-300/20" />
        </div>

        <div className="relative z-10">
          <div className="flex items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200 light:text-cyan-700">
                  {country.id === "more-to-come" ? "Growing map" : country.code}
                </span>

                <span className="rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-orange-200 light:text-orange-700">
                  Story portal
                </span>
              </div>

              <p className="mt-7 text-xs uppercase tracking-[0.35em] text-cyan-200 light:text-cyan-700">
                Explorer story layer
              </p>

              <h3 className="mt-3 text-4xl font-extrabold md:text-5xl">
                {layer.title}
              </h3>

              <p className="mt-3 text-sm uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
                {layer.label}
              </p>
            </div>

            <button
              type="button"
              onClick={onClose}
              className="rounded-full border border-white/10 bg-white/10 px-4 py-2 text-white transition hover:bg-white/20 light:border-black/10 light:bg-black/5 light:text-black"
              aria-label="Close layer hologram"
            >
              ✕
            </button>
          </div>

          <div
            className="mt-8 rounded-3xl border border-white/10 bg-black/30 p-6 text-gray-200 shadow-inner light:border-black/10 light:bg-white/70 light:text-gray-700"
            style={{
              fontSize: `${1.02 * zoomLevel}rem`,
              lineHeight: 1.95,
            }}
          >
            {layer.ideas ? (
              <ol className="list-decimal space-y-3 pl-5">
                {layer.ideas.map((idea) => (
                  <li key={idea}>{idea}</li>
                ))}
              </ol>
            ) : (
              <p>{layer.text}</p>
            )}
          </div>

          <LayerDiscoveryExtras country={country} layer={layer} />

          <div className="mt-7">
            <button
              type="button"
              onClick={onClose}
              className="w-full rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105 light:bg-black light:text-white sm:w-auto"
            >
              Close layer
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}


function LayerDiscoveryExtras({
  country,
  layer,
}: {
  country: CountryStory;
  layer: {
    key: LayerKey;
    title: string;
    label: string;
    text?: string;
    ideas?: string[];
  };
}) {
  const extras = getLayerExtras(country, layer);

  return (
    <div className="mt-7 grid gap-4">
      <div className="rounded-3xl border border-cyan-300/20 bg-cyan-300/10 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-cyan-200 light:text-cyan-700">
          Explorer question
        </p>

        <p className="mt-3 text-base font-semibold leading-7 text-gray-100 light:text-gray-800">
          {extras.question}
        </p>
      </div>

      <div className="rounded-3xl border border-orange-300/20 bg-orange-300/10 p-5">
        <p className="text-xs uppercase tracking-[0.25em] text-orange-200 light:text-orange-700">
          Did you know?
        </p>

        <p className="mt-3 text-sm leading-7 text-orange-50 light:text-orange-900">
          {extras.didYouKnow}
        </p>
      </div>

      <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 light:border-black/10 light:bg-black/[0.03]">
        <p className="text-xs uppercase tracking-[0.25em] text-gray-400">
          Garden gem
        </p>

        <p className="mt-3 text-sm leading-7 text-gray-300 light:text-gray-700">
          {extras.gem}
        </p>
      </div>
    </div>
  );
}


function CountryMiniMeta({ country }: { country: CountryStory }) {
  return (
    <div className="mt-7 grid gap-3 sm:grid-cols-3">
      <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200 light:text-cyan-700">
          Country
        </p>
        <p className="mt-2 font-bold">{country.shortTitle}</p>
      </div>

      <div className="rounded-2xl border border-orange-300/20 bg-orange-300/10 p-4">
        <p className="text-[10px] uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
          {country.id === "more-to-come" ? "Status" : "Code"}
        </p>

        <p className="mt-2 font-bold">
          {country.id === "more-to-come" ? "Growing" : country.code}
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 light:border-black/10 light:bg-black/[0.03]">
        <p className="text-[10px] uppercase tracking-[0.22em] text-gray-400">
          Media
        </p>
        <p className="mt-2 font-bold text-gray-300 light:text-gray-700">
          Photos later
        </p>
      </div>
    </div>
  );
}
