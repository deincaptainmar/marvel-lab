import type { Metadata } from "next";

const siteUrl = "https://marvel-lab.vercel.app";
const pageUrl = `${siteUrl}/about-marvel-marodza`;

export const metadata: Metadata = {
  title: "About Marvel Marodza | Founder of Marvel’s Space",
  description:
    "Marvel Ithiel Marodza is a Zimbabwean explorer, creator, storyteller, technician, lifelong learner, and founder of Marvel’s Space, currently based in Germany.",
  alternates: {
    canonical: pageUrl,
  },
  openGraph: {
    title: "About Marvel Marodza | Founder of Marvel’s Space",
    description:
      "Learn about Marvel Ithiel Marodza, the Zimbabwean founder of Marvel’s Space, a digital world built around exploration, faith-based curiosity, travel, education, technology, creativity, and growth.",
    url: pageUrl,
    siteName: "Marvel’s Space",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Marvel Marodza | Founder of Marvel’s Space",
    description:
      "Marvel Ithiel Marodza is the founder of Marvel’s Space, a digital garden of exploration, faith-based curiosity, travel, education, technology, creativity, and personal growth.",
  },
};

const interests = [
  "Travel",
  "Technology",
  "Networking",
  "Aviation",
  "Faith",
  "Personal Growth",
  "Systems Thinking",
  "Education",
  "Creativity",
];

const branches = [
  {
    title: "Marvel’s Space",
    label: "Digital World",
    text: "The main garden where stories, systems, lessons, reflections, travel notes, creative work, and faith-based curiosity come together.",
  },
  {
    title: "Journey & Travel Notes",
    label: "Travel Branch",
    text: "Country stories, cultural observations, roots, movement, travel lessons, and the quiet things places teach an explorer.",
  },
  {
    title: "Explorer Academy",
    label: "Educational Branch",
    text: "A future learning world for networking, technology, digital skills, systems thinking, and beginner-friendly education.",
  },
  {
    title: "WildTwist Studios",
    label: "Creative Branch",
    text: "The playful storytelling and creative studio branch for animated, faceless, experimental, and cinematic ideas.",
  },
];

const cornerstonePages = [
  "My Journey From Zimbabwe To Germany",
  "Why I Built Marvel’s Space",
  "Lessons From Apprenticeship",
  "Beyond The Horizon Lies Another Horizon",
  "Explorer Academy Vision",
];

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": `${pageUrl}#marvel-marodza`,
  name: "Marvel Ithiel Marodza",
  alternateName: ["Marvel Marodza", "Marvel the Explorer"],
  url: pageUrl,
  jobTitle: "Founder of Marvel’s Space",
  nationality: "Zimbabwean",
  worksFor: {
    "@type": "Organization",
    name: "Marvel’s Space",
    url: siteUrl,
  },
  founder: {
    "@type": "Organization",
    name: "Marvel’s Space",
    url: siteUrl,
  },
  description:
    "Marvel Ithiel Marodza is a Zimbabwean explorer, creator, storyteller, technician, lifelong learner, and founder of Marvel’s Space, currently based in Germany.",
  knowsAbout: [
    "Travel",
    "Technology",
    "Networking",
    "Aviation",
    "Faith",
    "Personal Growth",
    "Systems Thinking",
    "Education",
    "Creativity",
    "Germany life",
    "Zimbabwean roots",
  ],
  sameAs: [
    "https://www.youtube.com/@marvel.marodza",
    "https://www.instagram.com/deincaptainmar",
    "https://www.tiktok.com/@marvelexplores",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: "Marvel’s Space",
  url: siteUrl,
  creator: {
    "@id": `${pageUrl}#marvel-marodza`,
  },
  description:
    "Marvel’s Space is a digital world created by Marvel Marodza where exploration, travel, faith, technology, education, creativity, and personal growth come together.",
};

export default function AboutMarvelMarodzaPage() {
  return (
    <main className="relative min-h-screen bg-transparent px-6 py-16 text-white light:text-black md:py-24">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(personJsonLd),
        }}
      />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(websiteJsonLd),
        }}
      />

      <section className="mx-auto max-w-5xl">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-300 light:text-orange-700">
          Author Entity
        </p>

        <h1 className="mt-5 text-4xl font-extrabold tracking-tight md:text-7xl">
          Marvel Ithiel Marodza
        </h1>

        <p className="mt-5 text-xl font-semibold text-blue-200 light:text-blue-800 md:text-2xl">
          Founder of Marvel’s Space
        </p>

        <p className="mt-8 max-w-4xl text-base leading-8 text-gray-300 light:text-gray-700 md:text-lg md:leading-9">
          Marvel Ithiel Marodza is a Zimbabwean explorer, creator, storyteller,
          technician, lifelong learner, and founder of Marvel’s Space. Currently
          based in Germany, he shares lessons, discoveries, systems,
          experiences, travel stories, educational content, and reflections
          through the lens of faith-based curiosity.
        </p>

        <div className="mt-9 flex flex-col gap-4 sm:flex-row">
          <a
            href="/"
            className="rounded-2xl bg-white px-7 py-4 text-center font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
          >
            Enter Marvel’s Space
          </a>

          <a
            href="mailto:marvels.space@outlook.com"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-7 py-4 text-center font-semibold text-white transition hover:bg-white/[0.08] light:border-black/10 light:bg-white/70 light:text-black"
          >
            Contact Marvel
          </a>
        </div>
      </section>

      <section className="mx-auto mt-20 grid max-w-5xl gap-8 border-t border-white/10 pt-16 light:border-black/10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-cyan-300 light:text-cyan-700">
            Founder Statement
          </p>

          <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
            Why Marvel’s Space exists.
          </h2>

          <p className="mt-6 text-base leading-8 text-gray-300 light:text-gray-700 md:text-lg">
            Marvel’s Space exists to document discoveries, lessons,
            experiences, systems, opportunities, and reflections through the
            eyes of an explorer guided by faith-based curiosity.
          </p>

          <p className="mt-6 rounded-3xl border border-orange-300/20 bg-orange-400/10 p-5 text-base font-semibold leading-8 text-orange-100 light:border-orange-200 light:bg-orange-50 light:text-orange-900">
            “Beyond the horizon lies another horizon.”
          </p>
        </div>

        <div className="grid gap-3 sm:grid-cols-2">
          {interests.map((interest) => (
            <div
              key={interest}
              className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center text-sm font-semibold shadow-sm backdrop-blur-md light:border-black/10 light:bg-white/80"
            >
              {interest}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl border-t border-white/10 pt-16 light:border-black/10">
        <p className="text-xs uppercase tracking-[0.35em] text-orange-300 light:text-orange-700">
          Knowledge Graph
        </p>

        <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
          The branches connected to Marvel Marodza.
        </h2>

        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {branches.map((branch) => (
            <div
              key={branch.title}
              className="rounded-3xl border border-white/10 bg-white/[0.045] p-6 shadow-sm backdrop-blur-md light:border-black/10 light:bg-white/80"
            >
              <p className="text-xs uppercase tracking-[0.25em] text-cyan-300 light:text-cyan-700">
                {branch.label}
              </p>

              <h3 className="mt-3 text-2xl font-bold">{branch.title}</h3>

              <p className="mt-4 text-sm leading-7 text-gray-400 light:text-gray-600">
                {branch.text}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl border-t border-white/10 pt-16 light:border-black/10">
        <p className="text-xs uppercase tracking-[0.35em] text-blue-300 light:text-blue-700">
          Authority Content
        </p>

        <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
          Cornerstone pages growing next.
        </h2>

        <div className="mt-10 space-y-4">
          {cornerstonePages.map((page, index) => (
            <div
              key={page}
              className="rounded-3xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md light:border-black/10 light:bg-white/80"
            >
              <p className="text-xs uppercase tracking-[0.22em] text-orange-300 light:text-orange-700">
                Page {index + 1}
              </p>

              <h3 className="mt-2 text-xl font-bold">{page}</h3>

              <p className="mt-2 text-sm text-gray-500 light:text-gray-600">
                Written by Marvel Marodza • Coming soon
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto mt-20 max-w-5xl border-t border-white/10 pt-16 text-center light:border-black/10">
        <p className="text-xs uppercase tracking-[0.35em] text-cyan-300 light:text-cyan-700">
          Connect
        </p>

        <h2 className="mt-4 text-3xl font-extrabold md:text-5xl">
          Follow the journey.
        </h2>

        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          <a
            href="https://www.youtube.com/@marvel.marodza"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/[0.08] light:border-black/10 light:bg-white/80"
          >
            YouTube
          </a>

          <a
            href="https://www.instagram.com/deincaptainmar"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/[0.08] light:border-black/10 light:bg-white/80"
          >
            Instagram
          </a>

          <a
            href="https://www.tiktok.com/@marvelexplores"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/[0.08] light:border-black/10 light:bg-white/80"
          >
            TikTok
          </a>

          <a
            href="mailto:marvels.space@outlook.com"
            className="rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 font-semibold transition hover:-translate-y-1 hover:bg-white/[0.08] light:border-black/10 light:bg-white/80"
          >
            Email
          </a>
        </div>
      </section>
    </main>
  );
}