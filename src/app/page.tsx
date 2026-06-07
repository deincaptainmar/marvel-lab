import Image from "next/image";

export default function Home() {
  return (
    <main id="home" className="relative min-h-screen overflow-hidden bg-black text-white">
      {/* HERO BACKGROUND */}
      <div className="absolute inset-0 bg-black" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_35%,rgba(59,130,246,0.22),transparent_30%),radial-gradient(circle_at_75%_45%,rgba(249,115,22,0.20),transparent_30%),radial-gradient(circle_at_bottom,rgba(255,255,255,0.05),transparent_35%)]" />

      <div className="absolute inset-0 opacity-[0.07] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:64px_64px]" />

      {/* FUTURISTIC SIDE PANELS */}
      <div className="absolute left-6 top-1/2 hidden aspect-[9/16] w-[170px] -translate-y-1/2 rounded-[32px] border border-blue-400/20 bg-white/[0.03] backdrop-blur-md xl:block">
        <div className="absolute inset-3 rounded-[26px] border border-white/10" />
        <div className="absolute left-1/2 top-12 h-20 w-20 -translate-x-1/2 rounded-full border border-blue-300/20" />
        <div className="absolute left-1/2 bottom-16 h-24 w-24 -translate-x-1/2 rotate-45 border border-orange-300/20" />
      </div>

      <div className="absolute right-6 top-1/2 hidden aspect-[9/16] w-[170px] -translate-y-1/2 rounded-[32px] border border-orange-400/20 bg-white/[0.03] backdrop-blur-md xl:block">
        <div className="absolute inset-3 rounded-[26px] border border-white/10" />
        <div className="absolute right-8 top-14 h-20 w-20 rounded-3xl border border-orange-300/20" />
        <div className="absolute bottom-16 left-1/2 h-24 w-24 -translate-x-1/2 rounded-full border border-blue-300/20" />
      </div>

      {/* SIMPLE TRANSPORT ICONS */}
      <div className="absolute left-[12%] top-[22%] hidden rotate-[-10deg] rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-3xl backdrop-blur-md md:block">
        ✈️
      </div>

      <div className="absolute left-[14%] bottom-[20%] hidden rotate-[8deg] rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-3xl backdrop-blur-md md:block">
        🚆
      </div>

      <div className="absolute right-[13%] top-[24%] hidden rotate-[10deg] rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-3xl backdrop-blur-md md:block">
        🚗
      </div>

      <div className="absolute right-[16%] bottom-[18%] hidden rotate-[-8deg] rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-3xl backdrop-blur-md md:block">
        🚢
      </div>

      {/* HERO SECTION */}
      <section className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center gap-12 px-6 py-24 lg:flex-row lg:gap-16">
        <div className="max-w-3xl text-center lg:text-left">
          <p className="mb-6 text-xs uppercase tracking-[0.45em] text-blue-200/80 md:text-sm">
            Welcome To
          </p>

          <h1 className="bg-gradient-to-r from-white via-blue-100 to-orange-100 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent md:text-7xl lg:text-8xl">
            Marvel&apos;s Space
          </h1>

          <p className="mt-6 max-w-2xl text-lg text-gray-300 md:text-2xl">
            Watering The Garden Together
          </p>

          <p className="mt-6 text-sm text-gray-400 md:text-lg">
            Faith • Germany Life • Creativity • AI • Aviation • Entrepreneurship
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <a
              href="#journey"
              className="rounded-2xl bg-white px-8 py-4 font-semibold text-black transition hover:scale-105 hover:bg-orange-50"
            >
              Explore The Journey
            </a>

            <a
              href="#videos"
              className="rounded-2xl border border-blue-300/30 bg-white/5 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:border-orange-300/40 hover:bg-white/10"
            >
              Watch Videos
            </a>
          </div>
        </div>

        <div className="relative w-full max-w-xl">
          <div className="absolute -inset-5 rounded-[36px] bg-gradient-to-br from-blue-500/25 via-orange-400/15 to-white/10 blur-2xl" />

          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-white/[0.04] p-2 shadow-[0_0_60px_rgba(59,130,246,0.18)] backdrop-blur-md">
            <div className="relative aspect-video w-full overflow-hidden rounded-[28px]">
              <Image
                src="/images/marvel-theme.png"
                alt="Marvel theme picture"
                fill
                className="object-cover"
                priority
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />

              <div className="absolute bottom-4 left-4 rounded-full border border-white/10 bg-black/50 px-4 py-2 text-sm text-white backdrop-blur-md">
                Marvel • Faith • Germany Life
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOURNEY SECTION */}
      <section
        id="journey"
        className="relative z-10 border-t border-white/10 bg-gradient-to-b from-black via-slate-950 to-slate-900 px-6 py-28 text-white"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-300/80">
            The Journey
          </p>

          <h2 className="mt-4 max-w-4xl text-4xl font-bold md:text-6xl">
            From Zimbabwe to Germany, building one step at a time.
          </h2>

          <p className="mt-6 max-w-3xl text-lg text-gray-400">
            This is the story behind the work: faith, creativity, migration, language,
            aviation dreams, AI curiosity and the courage to keep growing.
          </p>

          <div className="mt-12 grid gap-6 md:grid-cols-4">
            {[
              ["Zimbabwe", "Roots, faith, family, early dreams and entrepreneurship."],
              ["Turkey", "Aviation studies, growth, culture and discipline."],
              ["Germany", "Ausbildung, language, work life and becoming stronger."],
              ["Future", "Aviation, media, AI, business and global impact."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.08]"
              >
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-sm text-gray-300">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GERMANY LIFE SECTION */}
      <section id="germany-life" className="relative z-10 bg-white px-6 py-28 text-black">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-blue-600">
              Germany Life
            </p>

            <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
              Real lessons from life, work and growth in Germany.
            </h2>

            <p className="mt-6 text-lg text-gray-600">
              A living section about Ausbildung life, German language, culture shocks,
              systems, work discipline, faith abroad and the hidden lessons of starting
              again in a new country.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              "Ausbildung",
              "German Language",
              "Work Culture",
              "Documents & Systems",
              "Faith Abroad",
              "Daily Life",
            ].map((item) => (
              <div
                key={item}
                className="rounded-3xl border border-gray-200 bg-orange-50 p-6 shadow-sm transition hover:-translate-y-1 hover:bg-blue-50"
              >
                <h3 className="text-xl font-bold">{item}</h3>
                <p className="mt-3 text-sm text-gray-600">
                  Stories, tips and reflections from the real journey.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MISSIONS SECTION */}
      <section
        id="missions"
        className="relative z-10 bg-gradient-to-br from-orange-100 via-white to-blue-100 px-6 py-28 text-black"
      >
        <div className="mx-auto max-w-6xl">
          <p className="text-sm uppercase tracking-[0.35em] text-orange-600">
            Missions
          </p>

          <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Projects growing inside Marvel&apos;s Space.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {[
              ["Marvel’s Space", "The main personal brand and storytelling platform."],
              ["WildTwist Studios", "Animated stories, fun characters and creative experiments."],
              ["AI Aviation News", "A future content hub connecting AI and aviation."],
              ["Bible Comic Project", "Faith stories told visually for modern audiences."],
              ["Automation Projects", "Tools, workflows and AI systems I am learning to build."],
              ["Future Logistics Vision", "Ideas around transport, logistics and African development."],
            ].map(([title, text]) => (
              <div
                key={title}
                className="rounded-3xl border border-black/10 bg-white/75 p-6 shadow-sm backdrop-blur transition hover:-translate-y-1 hover:bg-white"
              >
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-4 text-gray-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VIDEOS SECTION */}
      <section id="videos" className="relative z-10 bg-black px-6 py-28 text-white">
        <div className="mx-auto max-w-6xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-300">
            Videos
          </p>

          <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Stories, reflections and creative experiments.
          </h2>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {["Faith & Growth", "Life in Germany", "AI & Creativity"].map((title) => (
              <div
                key={title}
                className="rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-left backdrop-blur-md transition hover:-translate-y-1 hover:bg-white/[0.07]"
              >
                <div className="flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-orange-500/20 text-5xl">
                  ▶
                </div>

                <h3 className="mt-6 text-2xl font-bold">{title}</h3>

                <p className="mt-3 text-gray-400">
                  Video category coming soon. This will later connect to YouTube.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section
        id="contact"
        className="relative z-10 bg-gradient-to-b from-white to-blue-50 px-6 py-28 text-black"
      >
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-600">
            Contact
          </p>

          <h2 className="mt-4 text-4xl font-extrabold md:text-6xl">
            Let&apos;s build, film, create or collaborate.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Whether it&apos;s media, storytelling, AI ideas, Germany life, faith content
            or future collaborations, Marvel&apos;s Space is open for meaningful
            connections.
          </p>

          <a
            href="mailto:your-email@example.com"
            className="mt-10 inline-flex rounded-2xl bg-black px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-orange-600"
          >
            Send a Message
          </a>
        </div>
      </section>
    </main>
  );
}