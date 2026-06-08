"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";

type ResourceStatus = "Exploring" | "Recommended" | "Wishlist";

type Resource = {
  id: number;
  name: string;
  category: string;
  review: string;
  reason: string;
  rating: number;
  status: ResourceStatus;
  imageEmoji: string;
  affiliateUrl: string;
  youtubeUrl?: string;
  featured?: boolean;
  dateAdded: string;
  room: string;
};

const categories = [
  "All",
  "Camera Comparisons",
  "Editing & Storytelling",
  "Audio & Voice",
  "Creator Travel Gear",
  "Books & Learning",
  "Useful Resources",
  "Wishlist",
];

const resources: Resource[] = [
  {
    id: 1,
    name: "Creator Camera Comparisons",
    category: "Camera Comparisons",
    review:
      "A public space for comparing cameras I am researching for storytelling, travel and cinematic content.",
    reason:
      "Instead of rushing into a purchase, I want to document what matters: image quality, autofocus, sound options, portability and value.",
    rating: 5,
    status: "Exploring",
    imageEmoji: "📷",
    affiliateUrl: "#",
    featured: true,
    dateAdded: "2026-06-08",
    room: "Camera Desk",
  },
  {
    id: 2,
    name: "Editing Workflow",
    category: "Editing & Storytelling",
    review:
      "Tools and ideas around editing, sound design, color, pacing and building a stronger story.",
    reason:
      "The goal is not just to make videos look good, but to make them feel meaningful and worth watching.",
    rating: 5,
    status: "Recommended",
    imageEmoji: "🎬",
    affiliateUrl: "#",
    youtubeUrl: "https://www.youtube.com/@marvel.marodza",
    featured: true,
    dateAdded: "2026-06-08",
    room: "Editing Room",
  },
  {
    id: 3,
    name: "Audio & Voice Setup",
    category: "Audio & Voice",
    review:
      "A section for microphones, voice recording, interviews, calls, voiceovers and clean audio ideas.",
    reason:
      "Good sound can make a simple video feel professional, emotional and trustworthy.",
    rating: 5,
    status: "Exploring",
    imageEmoji: "🎙️",
    affiliateUrl: "#",
    featured: true,
    dateAdded: "2026-06-08",
    room: "Sound Corner",
  },
  {
    id: 4,
    name: "Travel Creator Gear",
    category: "Creator Travel Gear",
    review:
      "Lightweight gear ideas for movement, airports, trains, daily carry and filming while travelling.",
    reason:
      "The best setup is not always the biggest setup. Sometimes it is the one you can actually carry and use.",
    rating: 4,
    status: "Wishlist",
    imageEmoji: "🎒",
    affiliateUrl: "#",
    dateAdded: "2026-06-08",
    room: "Travel Shelf",
  },
  {
    id: 5,
    name: "Books & Learning Notes",
    category: "Books & Learning",
    review:
      "Books, courses and learning resources that shape creativity, discipline, faith, storytelling and growth.",
    reason:
      "Learning is part of the brand. What I read and study slowly shapes what I build and share.",
    rating: 5,
    status: "Recommended",
    imageEmoji: "📚",
    affiliateUrl: "#",
    dateAdded: "2026-06-08",
    room: "Learning Shelf",
  },
  {
    id: 6,
    name: "Creator Apps & Resources",
    category: "Useful Resources",
    review:
      "Helpful apps, services and resources for planning, editing, publishing, designing and organizing ideas.",
    reason:
      "This will become a useful public list for creators who want simple tools without confusion.",
    rating: 4,
    status: "Exploring",
    imageEmoji: "🧰",
    affiliateUrl: "#",
    dateAdded: "2026-06-08",
    room: "Resource Desk",
  },
];

function statusStyle(status: ResourceStatus) {
  if (status === "Exploring") return "bg-blue-100 text-blue-700";
  if (status === "Recommended") return "bg-orange-100 text-orange-700";
  return "bg-gray-100 text-gray-700";
}

function stars(rating: number) {
  return "★".repeat(rating) + "☆".repeat(5 - rating);
}

export default function ToolboxSection() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("newest");
  const [selectedResource, setSelectedResource] = useState<Resource | null>(
    null
  );

  const filteredResources = useMemo(() => {
    let result = resources.filter((resource) => {
      const matchesCategory =
        selectedCategory === "All" ||
        resource.category === selectedCategory ||
        (selectedCategory === "Wishlist" && resource.status === "Wishlist");

      const searchValue = search.toLowerCase();

      const matchesSearch =
        resource.name.toLowerCase().includes(searchValue) ||
        resource.category.toLowerCase().includes(searchValue) ||
        resource.review.toLowerCase().includes(searchValue) ||
        resource.room.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });

    if (sort === "highest-rated") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    if (sort === "exploring") {
      result = [...result].sort((a, b) =>
        a.status === "Exploring" && b.status !== "Exploring" ? -1 : 1
      );
    }

    if (sort === "recommended") {
      result = [...result].sort((a, b) =>
        a.status === "Recommended" && b.status !== "Recommended" ? -1 : 1
      );
    }

    if (sort === "newest") {
      result = [...result].sort(
        (a, b) =>
          new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime()
      );
    }

    return result;
  }, [selectedCategory, search, sort]);

  const featuredResources = resources.filter((resource) => resource.featured);

  return (
    <section
      id="toolbox"
      className="relative z-10 scroll-mt-24 overflow-hidden bg-gradient-to-b from-black via-slate-950 to-black px-6 py-28 text-white light:from-orange-50 light:via-white light:to-blue-50 light:text-black"
    >
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-24 right-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal direction="up">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300 light:text-orange-600">
              Media & Resources
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Tools, ideas and creator resources I&apos;m exploring.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400 light:text-gray-600">
              This is not a private equipment list and not a random shop. It is
              a public resource room for media tools, camera comparisons,
              storytelling resources, books and creative gear I am researching
              or learning from.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-3xl border border-orange-300/20 bg-orange-500/10 p-6 text-sm leading-7 text-orange-100 light:border-orange-200 light:bg-orange-50 light:text-orange-900">
            <strong>Affiliate disclosure:</strong> Some links on this page may
            become affiliate links. If you purchase through them, I may earn a
            small commission at no extra cost to you. Recommendations will be
            based on research, personal use, testing or genuine value.
          </div>
        </Reveal>

        {/* Resource rooms */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Camera Desk", "Camera comparisons and buying thoughts.", "📷"],
            ["Editing Room", "Story, pacing, sound and color.", "🎬"],
            ["Sound Corner", "Voice, microphones and clean audio.", "🎙️"],
            ["Learning Shelf", "Books, courses and useful resources.", "📚"],
          ].map(([title, text, icon], index) => (
            <Reveal key={title} delay={index * 0.06} direction="scale">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm">
                <p className="text-4xl">{icon}</p>
                <h3 className="mt-5 text-xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Featured resources */}
        <div className="mt-16">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300 light:text-blue-600">
              Featured Rooms
            </p>
            <h3 className="mt-3 text-3xl font-bold">
              Current areas of interest
            </h3>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredResources.map((resource, index) => (
              <Reveal key={resource.id} delay={index * 0.08} direction="scale">
                <button
                  onClick={() => setSelectedResource(resource)}
                  className="group h-full w-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-blue-50"
                >
                  <div className="flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-6xl transition group-hover:scale-[1.03]">
                    {resource.imageEmoji}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300 light:bg-gray-100 light:text-gray-700">
                      {resource.room}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                        resource.status
                      )}`}
                    >
                      {resource.status}
                    </span>
                  </div>

                  <h4 className="mt-5 text-2xl font-bold">{resource.name}</h4>

                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {resource.review}
                  </p>

                  <p className="mt-4 text-orange-300 light:text-orange-600">
                    {stars(resource.rating)}
                  </p>
                </button>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Filters */}
        <Reveal>
          <div className="mt-16 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md light:border-black/10 light:bg-white light:shadow-sm">
            <div className="grid gap-4 lg:grid-cols-[1fr_240px]">
              <input
                type="text"
                placeholder="Search resources, rooms, tools..."
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition placeholder:text-gray-500 focus:border-orange-300 light:border-gray-200 light:bg-white light:text-black"
              />

              <select
                value={sort}
                onChange={(event) => setSort(event.target.value)}
                className="rounded-2xl border border-white/10 bg-black/40 px-5 py-4 text-white outline-none transition focus:border-orange-300 light:border-gray-200 light:bg-white light:text-black"
              >
                <option value="newest">Sort: Newest</option>
                <option value="highest-rated">Sort: Highest Rated</option>
                <option value="exploring">Sort: Exploring First</option>
                <option value="recommended">Sort: Recommended First</option>
              </select>
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    selectedCategory === category
                      ? "bg-orange-500 text-white"
                      : "bg-white/10 text-gray-300 hover:bg-white/15 light:bg-gray-100 light:text-gray-700 light:hover:bg-blue-50"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Resource grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredResources.map((resource, index) => (
            <Reveal key={resource.id} delay={(index % 6) * 0.04} direction="scale">
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-orange-50">
                <button
                  onClick={() => setSelectedResource(resource)}
                  className="w-full text-left"
                >
                  <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-6xl transition group-hover:scale-[1.02]">
                    {resource.imageEmoji}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300 light:bg-gray-100 light:text-gray-700">
                      {resource.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                        resource.status
                      )}`}
                    >
                      {resource.status}
                    </span>
                  </div>

                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-blue-300 light:text-blue-600">
                    {resource.room}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">{resource.name}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {resource.review}
                  </p>

                  <p className="mt-4 text-orange-300 light:text-orange-600">
                    {stars(resource.rating)}
                  </p>
                </button>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={resource.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-2xl bg-white px-5 py-3 text-center font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
                  >
                    View Resource
                  </a>

                  {resource.youtubeUrl && (
                    <a
                      href={resource.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-2xl border border-white/10 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black light:hover:bg-blue-50"
                    >
                      Watch
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Future expansion */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            [
              "Camera Comparison Notes",
              "A future space for comparing camera options, strengths, weaknesses and buying decisions.",
              "📷",
            ],
            [
              "What I’m Testing",
              "A safe public list of apps, tools and creative workflows I am exploring.",
              "🧪",
            ],
            [
              "Creator Stack",
              "A clean overview of software and resources that support content creation.",
              "🧰",
            ],
          ].map(([title, text, icon], index) => (
            <Reveal key={title} delay={index * 0.08} direction="up">
              <div className="h-full rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-md transition hover:-translate-y-2 light:border-black/10 light:bg-white light:shadow-sm">
                <p className="text-4xl">{icon}</p>
                <h3 className="mt-5 text-2xl font-bold">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                  {text}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>

      {/* Resource detail modal */}
      {selectedResource && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-6 text-white shadow-2xl light:bg-white light:text-black">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-orange-300 light:text-orange-600">
                  {selectedResource.room}
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  {selectedResource.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedResource(null)}
                className="rounded-full border border-white/10 px-4 py-2 light:border-black/10"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex h-52 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-7xl">
              {selectedResource.imageEmoji}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                  selectedResource.status
                )}`}
              >
                {selectedResource.status}
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs light:bg-gray-100">
                {stars(selectedResource.rating)}
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs light:bg-gray-100">
                {selectedResource.category}
              </span>
            </div>

            <h4 className="mt-6 text-xl font-bold">Overview</h4>
            <p className="mt-2 leading-7 text-gray-300 light:text-gray-600">
              {selectedResource.review}
            </p>

            <h4 className="mt-6 text-xl font-bold">Why this matters</h4>
            <p className="mt-2 leading-7 text-gray-300 light:text-gray-600">
              {selectedResource.reason}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={selectedResource.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
              >
                View Resource
              </a>

              {selectedResource.youtubeUrl && (
                <a
                  href={selectedResource.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl border border-white/10 px-6 py-4 text-center font-semibold light:border-black/10"
                >
                  Watch
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}