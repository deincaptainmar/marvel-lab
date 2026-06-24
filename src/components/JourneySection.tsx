"use client";

import { useEffect, useState } from "react";
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

  const activeArchiveCountry = archiveCountries[archiveIndex];

  useEffect(() => {
    function closeOnEscape(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setSelectedCountry(null);
        setArchiveOpen(false);
      }
    }

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, []);

  function nextCountry() {
    setArchiveIndex((current) =>
      current === archiveCountries.length - 1 ? current : current + 1
    );
  }

  function previousCountry() {
    setArchiveIndex((current) => (current === 0 ? current : current - 1));
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
            className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-slate-950/92 text-white shadow-[0_0_100px_rgba(34,211,238,0.22)] backdrop-blur-xl light:bg-white/95 light:text-black"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-cyan-300/20" />
              <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full border border-orange-300/20" />
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
            </div>

            <div className="relative z-10 grid max-h-[88vh] overflow-y-auto lg:grid-cols-[0.75fr_1.25fr]">
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

                <div className="mt-6 flex gap-3">
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

              <CountryContent country={activeArchiveCountry} />

              {archiveIndex === archiveCountries.length - 1 && (
                <div className="border-t border-white/10 p-8 text-center text-sm text-orange-200 light:border-black/10 light:text-orange-700 lg:col-span-2">
                  So far, these are the places explored. More chapters will be
                  planted as the journey grows.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
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
  return (
    <div
      className="fixed inset-0 z-[90] flex items-center justify-center bg-black/75 px-5 py-10 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="relative max-h-[88vh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-cyan-300/30 bg-slate-950/92 text-white shadow-[0_0_100px_rgba(34,211,238,0.22)] backdrop-blur-xl light:bg-white/95 light:text-black"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="pointer-events-none absolute inset-0 opacity-40">
          <div className="absolute left-10 top-10 h-40 w-40 rounded-full border border-cyan-300/20" />
          <div className="absolute bottom-10 right-10 h-56 w-56 rounded-full border border-orange-300/20" />
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
        </div>

        <div className="relative z-10 grid max-h-[88vh] overflow-y-auto lg:grid-cols-[0.75fr_1.25fr]">
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

            <div className="mt-10 rounded-3xl border border-white/10 bg-black/30 p-5 backdrop-blur-md light:border-black/10 light:bg-white/70">
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-200 light:text-cyan-700">
                Opening scan
              </p>

              <p className="mt-3 text-sm leading-7 text-gray-200 light:text-gray-700">
                {country.hologramOpening}
              </p>
            </div>
          </div>

          <div>
            <CountryContent country={country} />

            <div className="flex flex-col gap-3 border-t border-white/10 p-8 sm:flex-row light:border-black/10">
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
      </div>
    </div>
  );
}

function CountryContent({ country }: { country: CountryStory }) {
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
  const selectedLayer = layers.find((layer) => layer.key === activeLayer) ?? layers[0];

  return (
    <div className="p-8 md:p-10">
      <div className="flex flex-wrap items-center gap-3">
        <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-cyan-200 light:text-cyan-700">
          {country.code}
        </span>

        <span className="rounded-full border border-orange-300/20 bg-orange-300/10 px-3 py-1 text-xs uppercase tracking-[0.2em] text-orange-200 light:text-orange-700">
          Interactive data layers
        </span>
      </div>

      <div className="mt-7 grid gap-6 xl:grid-cols-[0.72fr_1.28fr]">
        <div className="grid gap-3">
          {layers.map((layer, index) => {
            const isActive = layer.key === activeLayer;

            return (
              <button
                key={layer.key}
                type="button"
                onClick={() => setActiveLayer(layer.key)}
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
                      {layer.label}
                    </p>
                  </div>

                  <span
                    className={`mt-1 rounded-full px-2 py-1 text-xs transition ${
                      isActive
                        ? "bg-cyan-300 text-black"
                        : "bg-white/10 text-gray-400 light:bg-black/5"
                    }`}
                  >
                    {isActive ? "OPEN" : "LOCK"}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="[perspective:1200px]">
          <div
            key={selectedLayer.key}
            className="relative min-h-[420px] overflow-hidden rounded-[2rem] border border-cyan-300/25 bg-gradient-to-br from-slate-900/95 via-slate-950/95 to-black/95 p-7 shadow-[0_30px_90px_rgba(0,0,0,0.45)] transition duration-500 animate-in fade-in zoom-in-95 light:border-black/10 light:from-white light:via-blue-50 light:to-orange-50"
            style={{
              transform: "rotateX(2deg) rotateY(-2deg)",
              transformStyle: "preserve-3d",
            }}
          >
            <div className="pointer-events-none absolute inset-0 opacity-40">
              <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-300 to-transparent" />
              <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-orange-300 to-transparent" />
              <div className="absolute -right-20 -top-20 h-56 w-56 rounded-full border border-cyan-300/20" />
              <div className="absolute -bottom-24 left-12 h-48 w-48 rounded-full border border-orange-300/20" />
              <div className="absolute left-0 right-0 top-1/2 h-px bg-cyan-300/10" />
            </div>

            <div
              className="relative z-10"
              style={{ transform: "translateZ(34px)" }}
            >
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.35em] text-cyan-200 light:text-cyan-700">
                    Active layer
                  </p>

                  <h3 className="mt-3 text-3xl font-extrabold md:text-4xl">
                    {selectedLayer.title}
                  </h3>

                  <p className="mt-2 text-sm uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
                    {selectedLayer.label}
                  </p>
                </div>

                <div className="rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-right light:border-black/10 light:bg-black/[0.03]">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-gray-400">
                    Signal
                  </p>
                  <p className="mt-1 font-bold text-cyan-200 light:text-cyan-700">
                    Stable
                  </p>
                </div>
              </div>

              <div className="mt-8 rounded-3xl border border-white/10 bg-black/25 p-6 text-base leading-8 text-gray-200 shadow-inner light:border-black/10 light:bg-white/70 light:text-gray-700">
                {selectedLayer.ideas ? (
                  <ol className="list-decimal space-y-3 pl-5">
                    {selectedLayer.ideas.map((idea) => (
                      <li key={idea}>{idea}</li>
                    ))}
                  </ol>
                ) : (
                  <p>{selectedLayer.text}</p>
                )}
              </div>

              <div className="mt-7 grid gap-3 sm:grid-cols-3">
                <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-cyan-200 light:text-cyan-700">
                    Country
                  </p>
                  <p className="mt-2 font-bold">{country.shortTitle}</p>
                </div>

                <div className="rounded-2xl border border-orange-300/20 bg-orange-300/10 p-4">
                  <p className="text-[10px] uppercase tracking-[0.22em] text-orange-200 light:text-orange-700">
                    Code
                  </p>
                  <p className="mt-2 font-bold">{country.code}</p>
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

              <p className="mt-6 text-sm text-gray-500 light:text-gray-600">
                This layer system starts with text. Later, photos, maps, audio,
                video clips and personal interview notes can be attached to each
                country room.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}