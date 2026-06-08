"use client";

import { useMemo, useState } from "react";
import Reveal from "@/components/Reveal";

type ProductStatus = "Owned" | "Recommended" | "Wishlist";

type Product = {
  id: number;
  name: string;
  category: string;
  review: string;
  reason: string;
  rating: number;
  status: ProductStatus;
  imageEmoji: string;
  affiliateUrl: string;
  youtubeUrl?: string;
  featured?: boolean;
  dateAdded: string;
  room: string;
};

const categories = [
  "All",
  "Camera & Video Gear",
  "PC & Workspace Setup",
  "Audio Equipment",
  "AI Tools & Software",
  "Content Creation Tools",
  "Books & Learning Resources",
  "Germany Life Essentials",
  "Travel Gear",
  "Kfz & Technical Tools",
  "Wishlist",
];

const products: Product[] = [
  {
    id: 1,
    name: "Creator PC Setup",
    category: "PC & Workspace Setup",
    review:
      "My main workstation for editing, coding, AI tools, website building and content creation.",
    reason:
      "A strong PC helps me build faster, edit smoother and learn creative tools without fighting the machine.",
    rating: 5,
    status: "Owned",
    imageEmoji: "🖥️",
    affiliateUrl: "#",
    featured: true,
    dateAdded: "2026-06-08",
    room: "Command Desk",
  },
  {
    id: 2,
    name: "DaVinci Resolve",
    category: "Content Creation Tools",
    review:
      "The editing software I am learning for cinematic storytelling, sound design and color work.",
    reason:
      "It gives me professional editing power while helping me understand real film workflow.",
    rating: 5,
    status: "Recommended",
    imageEmoji: "🎬",
    affiliateUrl: "#",
    youtubeUrl: "https://www.youtube.com/@marvel.marodza",
    featured: true,
    dateAdded: "2026-06-08",
    room: "Editing Bay",
  },
  {
    id: 3,
    name: "Synco Wireless Microphone",
    category: "Audio Equipment",
    review:
      "Useful for clear voice recording, church media, YouTube videos and interviews.",
    reason:
      "Good audio makes a video feel more professional even when the camera is simple.",
    rating: 4,
    status: "Owned",
    imageEmoji: "🎙️",
    affiliateUrl: "#",
    dateAdded: "2026-06-08",
    room: "Audio Rack",
  },
  {
    id: 4,
    name: "Sony / Panasonic Creator Camera",
    category: "Camera & Video Gear",
    review:
      "A future camera upgrade for cinematic YouTube videos, travel stories and church media.",
    reason:
      "A reliable camera will help me capture better visuals for Marvel’s Space and client projects.",
    rating: 5,
    status: "Wishlist",
    imageEmoji: "📷",
    affiliateUrl: "#",
    featured: true,
    dateAdded: "2026-06-08",
    room: "Camera Shelf",
  },
  {
    id: 5,
    name: "ChatGPT Plus",
    category: "AI Tools & Software",
    review:
      "One of my main tools for learning, planning, coding, studying and creative direction.",
    reason:
      "It helps me turn ideas into structure, scripts, websites, automations and study plans.",
    rating: 5,
    status: "Owned",
    imageEmoji: "🤖",
    affiliateUrl: "#",
    dateAdded: "2026-06-08",
    room: "AI Console",
  },
  {
    id: 6,
    name: "Travel Backpack",
    category: "Travel Gear",
    review:
      "A practical bag for church media gear, travel documents, cameras, chargers and daily essentials.",
    reason:
      "Good organization matters when moving between work, church, trains, airports and filming sessions.",
    rating: 4,
    status: "Recommended",
    imageEmoji: "🎒",
    affiliateUrl: "#",
    dateAdded: "2026-06-08",
    room: "Travel Locker",
  },
  {
    id: 7,
    name: "German Document Folder",
    category: "Germany Life Essentials",
    review:
      "A simple but important tool for keeping Ausbildung, visa, insurance and appointment papers organized.",
    reason:
      "Germany runs on documents. Staying organized reduces stress.",
    rating: 5,
    status: "Recommended",
    imageEmoji: "📁",
    affiliateUrl: "#",
    dateAdded: "2026-06-08",
    room: "Germany Drawer",
  },
  {
    id: 8,
    name: "Kfz Diagnostic Learning Tools",
    category: "Kfz & Technical Tools",
    review:
      "Tools and resources for understanding measurements, diagnostics, electrical systems and vehicle technology.",
    reason:
      "They help connect workshop experience with exam preparation and real technical confidence.",
    rating: 4,
    status: "Wishlist",
    imageEmoji: "🔧",
    affiliateUrl: "#",
    dateAdded: "2026-06-08",
    room: "Workshop Bench",
  },
];

function statusStyle(status: ProductStatus) {
  if (status === "Owned") return "bg-blue-100 text-blue-700";
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
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesCategory =
        selectedCategory === "All" ||
        product.category === selectedCategory ||
        (selectedCategory === "Wishlist" && product.status === "Wishlist");

      const searchValue = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchValue) ||
        product.category.toLowerCase().includes(searchValue) ||
        product.review.toLowerCase().includes(searchValue) ||
        product.room.toLowerCase().includes(searchValue);

      return matchesCategory && matchesSearch;
    });

    if (sort === "highest-rated") {
      result = [...result].sort((a, b) => b.rating - a.rating);
    }

    if (sort === "owned") {
      result = [...result].sort((a, b) =>
        a.status === "Owned" && b.status !== "Owned" ? -1 : 1
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

  const featuredProducts = products.filter((product) => product.featured);

  return (
    <section
      id="toolbox"
      className="relative z-10 scroll-mt-24 overflow-hidden bg-gradient-to-b from-slate-950 via-black to-slate-950 px-6 py-28 text-white light:from-orange-50 light:via-white light:to-blue-50 light:text-black"
    >
      <div className="absolute left-1/2 top-24 h-72 w-72 -translate-x-1/2 rounded-full bg-blue-500/10 blur-3xl" />
      <div className="absolute bottom-24 right-10 h-72 w-72 rounded-full bg-orange-500/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <Reveal direction="up">
          <div className="max-w-4xl">
            <p className="text-sm uppercase tracking-[0.35em] text-orange-300 light:text-orange-600">
              Marvel&apos;s Toolbox
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              My creator inventory room.
            </h2>

            <p className="mt-6 text-lg leading-8 text-gray-400 light:text-gray-600">
              Products, software, equipment, books and resources I use,
              recommend, own or plan to buy. This section is built for future
              affiliate marketing, but it stays personal, honest and rooted in
              the real journey.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="mt-10 rounded-3xl border border-orange-300/20 bg-orange-500/10 p-6 text-sm leading-7 text-orange-100 light:border-orange-200 light:bg-orange-50 light:text-orange-900">
            <strong>Affiliate disclosure:</strong> Some links on this page may
            be affiliate links. If you purchase through these links, I may earn
            a small commission at no extra cost to you. I only recommend
            products and services that I personally use, trust, or believe
            provide genuine value.
          </div>
        </Reveal>

        {/* Inventory rooms */}
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ["Command Desk", "PC, monitors, workflow and workspace.", "🖥️"],
            ["Editing Bay", "Video, sound, color and storytelling.", "🎬"],
            ["Travel Locker", "Gear for movement, airports and daily life.", "🎒"],
            ["Workshop Bench", "Kfz, technical learning and tools.", "🔧"],
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

        {/* Featured products */}
        <div className="mt-16">
          <Reveal>
            <p className="text-sm uppercase tracking-[0.25em] text-blue-300 light:text-blue-600">
              Featured Products
            </p>
            <h3 className="mt-3 text-3xl font-bold">Current highlights</h3>
          </Reveal>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {featuredProducts.map((product, index) => (
              <Reveal key={product.id} delay={index * 0.08} direction="scale">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="group h-full w-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 text-left backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-blue-50"
                >
                  <div className="flex h-36 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-6xl transition group-hover:scale-[1.03]">
                    {product.imageEmoji}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300 light:bg-gray-100 light:text-gray-700">
                      {product.room}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <h4 className="mt-5 text-2xl font-bold">{product.name}</h4>

                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {product.review}
                  </p>

                  <p className="mt-4 text-orange-300 light:text-orange-600">
                    {stars(product.rating)}
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
                placeholder="Search tools, software, rooms, gear..."
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
                <option value="owned">Sort: Owned First</option>
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

        {/* Product grid */}
        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProducts.map((product, index) => (
            <Reveal key={product.id} delay={(index % 6) * 0.04} direction="scale">
              <div className="group h-full rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition hover:-translate-y-2 hover:bg-white/[0.08] light:border-black/10 light:bg-white light:shadow-sm light:hover:bg-orange-50">
                <button
                  onClick={() => setSelectedProduct(product)}
                  className="w-full text-left"
                >
                  <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-6xl transition group-hover:scale-[1.02]">
                    {product.imageEmoji}
                  </div>

                  <div className="mt-5 flex flex-wrap items-center justify-between gap-3">
                    <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300 light:bg-gray-100 light:text-gray-700">
                      {product.category}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                        product.status
                      )}`}
                    >
                      {product.status}
                    </span>
                  </div>

                  <p className="mt-4 text-xs uppercase tracking-[0.2em] text-blue-300 light:text-blue-600">
                    {product.room}
                  </p>

                  <h3 className="mt-3 text-2xl font-bold">{product.name}</h3>

                  <p className="mt-3 text-sm leading-6 text-gray-400 light:text-gray-600">
                    {product.review}
                  </p>

                  <p className="mt-4 text-orange-300 light:text-orange-600">
                    {stars(product.rating)}
                  </p>
                </button>

                <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={product.affiliateUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 rounded-2xl bg-white px-5 py-3 text-center font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
                  >
                    Check Price
                  </a>

                  {product.youtubeUrl && (
                    <a
                      href={product.youtubeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 rounded-2xl border border-white/10 px-5 py-3 text-center font-semibold text-white transition hover:bg-white/10 light:border-black/10 light:text-black light:hover:bg-blue-50"
                    >
                      Review
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Bonus sections */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {[
            [
              "My Current Setup",
              "A future page showing my full creator workstation, PC setup, camera tools and editing workflow.",
              "🖥️",
            ],
            [
              "What I’m Testing",
              "A space for tools, AI apps, cameras and resources I am currently trying before recommending.",
              "🧪",
            ],
            [
              "Creator Stack",
              "The software, AI tools and creative systems I use to build Marvel’s Space and WildTwist Studios.",
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

        {/* Newsletter CTA */}
        <Reveal>
          <div className="mt-16 rounded-3xl bg-gradient-to-r from-blue-600 to-orange-500 p-8 text-white md:p-10">
            <div className="grid gap-6 md:grid-cols-[1fr_360px] md:items-center">
              <div>
                <h3 className="text-3xl font-bold">
                  Get future toolbox updates.
                </h3>
                <p className="mt-3 text-white/80">
                  Join The Garden for future gear notes, AI tools, creative
                  resources and real recommendations from the journey.
                </p>
              </div>

              <form className="flex flex-col gap-3 sm:flex-row">
                <input
                  type="email"
                  placeholder="Your email"
                  className="min-w-0 flex-1 rounded-2xl border border-white/20 bg-white/15 px-5 py-4 text-white outline-none placeholder:text-white/70"
                />

                <button
                  type="button"
                  className="rounded-2xl bg-white px-6 py-4 font-semibold text-black transition hover:scale-105"
                >
                  Join
                </button>
              </form>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Product detail modal */}
      {selectedProduct && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
          <div className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-3xl border border-white/10 bg-slate-950 p-6 text-white shadow-2xl light:bg-white light:text-black">
            <div className="flex items-start justify-between gap-6">
              <div>
                <p className="text-sm text-orange-300 light:text-orange-600">
                  {selectedProduct.room}
                </p>
                <h3 className="mt-2 text-3xl font-bold">
                  {selectedProduct.name}
                </h3>
              </div>

              <button
                onClick={() => setSelectedProduct(null)}
                className="rounded-full border border-white/10 px-4 py-2 light:border-black/10"
              >
                ✕
              </button>
            </div>

            <div className="mt-6 flex h-52 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-7xl">
              {selectedProduct.imageEmoji}
            </div>

            <div className="mt-6 flex flex-wrap gap-3">
              <span
                className={`rounded-full px-3 py-1 text-xs font-semibold ${statusStyle(
                  selectedProduct.status
                )}`}
              >
                {selectedProduct.status}
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs light:bg-gray-100">
                {stars(selectedProduct.rating)}
              </span>

              <span className="rounded-full bg-white/10 px-3 py-1 text-xs light:bg-gray-100">
                {selectedProduct.category}
              </span>
            </div>

            <h4 className="mt-6 text-xl font-bold">Personal review</h4>
            <p className="mt-2 leading-7 text-gray-300 light:text-gray-600">
              {selectedProduct.review}
            </p>

            <h4 className="mt-6 text-xl font-bold">Why I recommend it</h4>
            <p className="mt-2 leading-7 text-gray-300 light:text-gray-600">
              {selectedProduct.reason}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={selectedProduct.affiliateUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 rounded-2xl bg-white px-6 py-4 text-center font-semibold text-black transition hover:scale-105 light:bg-black light:text-white"
              >
                View Product
              </a>

              {selectedProduct.youtubeUrl && (
                <a
                  href={selectedProduct.youtubeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 rounded-2xl border border-white/10 px-6 py-4 text-center font-semibold light:border-black/10"
                >
                  Watch Review
                </a>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}