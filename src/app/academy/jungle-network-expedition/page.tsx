const modules = [
  {
    icon: "🌱",
    title: "Base Camp",
    subtitle: "The Signal Awakens",
    topics: [
      "What is a Network?",
      "Internet Basics",
      "Open Systems Interconnection (OSI) Model",
      "Transmission Control Protocol / Internet Protocol (TCP/IP) Model",
    ],
    badge: "Signal Scout",
  },
  {
    icon: "🌳",
    title: "Village of Addresses",
    subtitle: "Every Device Needs a Place",
    topics: [
      "Internet Protocol version 4 (IPv4)",
      "Public vs Private Addresses",
      "Subnet Masks",
      "Domain Name System (DNS)",
      "Dynamic Host Configuration Protocol (DHCP)",
    ],
    badge: "Address Ranger",
  },
  {
    icon: "🏘",
    title: "Switch Village",
    subtitle: "Where Devices Learn Each Other",
    topics: [
      "Media Access Control (MAC) Addresses",
      "Ethernet",
      "Address Resolution Protocol (ARP)",
      "Switching",
    ],
    badge: "Switch Guardian",
  },
  {
    icon: "🌉",
    title: "VLAN Canyon",
    subtitle: "Crossing Logical Bridges",
    topics: [
      "Virtual Local Area Network (VLAN)",
      "Access Ports",
      "Trunk Ports",
      "Inter-VLAN Routing",
    ],
    badge: "VLAN Bridge Builder",
  },
  {
    icon: "🌊",
    title: "Routing River",
    subtitle: "Finding Paths Between Networks",
    topics: [
      "Routers",
      "Static Routing",
      "Default Routes",
      "Open Shortest Path First (OSPF)",
    ],
    badge: "Routing Pathfinder",
  },
  {
    icon: "🛡",
    title: "Security Fortress",
    subtitle: "Protecting the Digital Village",
    topics: [
      "Access Control List (ACL)",
      "Secure Shell (SSH)",
      "Virtual Private Network (VPN) Concepts",
      "Port Security",
    ],
    badge: "Fortress Defender",
  },
  {
    icon: "🏔",
    title: "Temple of Automation",
    subtitle: "Where Networks Meet Code",
    topics: [
      "Application Programming Interface (API)",
      "JavaScript Object Notation (JSON)",
      "Python Basics",
      "Network Automation",
    ],
    badge: "Automation Explorer",
  },
  {
    icon: "🏆",
    title: "Temple of the Network Architect",
    subtitle: "Final Expedition Project",
    topics: [
      "Troubleshooting",
      "Review",
      "Capstone Network Build",
      "Explorer Academy Certificate",
    ],
    badge: "Network Architect",
  },
];

const learningRules = [
  {
    number: "01",
    title: "Always Expand Abbreviations",
    text: "The first time an abbreviation appears, the full name must be written first. Example: Internet Protocol (IP), Domain Name System (DNS), Address Resolution Protocol (ARP).",
  },
  {
    number: "02",
    title: "English + German",
    text: "Every key concept includes 🇬🇧 English Explanation, 🇩🇪 Deutsche Erklärung, and technical vocabulary tables.",
  },
  {
    number: "03",
    title: "The Explorer Method",
    text: "Every topic follows: Story, Why It Exists, What Problem It Solves, How It Works, Real-World Example, Technical Explanation, Practical Lab, Cyber Security Connection, Quiz, Summary.",
  },
  {
    number: "04",
    title: "No Memorization Without Understanding",
    text: "Students learn WHY before WHAT and HOW. Understanding comes before memorizing.",
  },
  {
    number: "05",
    title: "Visual First",
    text: "Every lesson uses diagrams, maps, packet movement visuals, and simple network illustrations.",
  },
  {
    number: "06",
    title: "Build First, Theory Second",
    text: "After every major concept, students complete a Packet Tracer Lab, Linux Exercise, and Troubleshooting Challenge.",
  },
  {
    number: "07",
    title: "Explorer Field Journal",
    text: "Every lesson ends with reflection: Today’s Discovery, What surprised me, What I understand, What still confuses me, Questions for tomorrow, XP Earned.",
  },
  {
    number: "08",
    title: "Real-World Connections",
    text: "Networking concepts connect to airports, aviation systems, smart homes, businesses, schools, churches, mobile networks, cyber security, and data centers.",
  },
  {
    number: "09",
    title: "Skill Checkpoints",
    text: "Every module ends with an Explorer Checkpoint where the student must explain the topic in simple words.",
  },
  {
    number: "10",
    title: "Learn Fast, Practice Slow",
    text: "Students explore many concepts quickly, then master them through labs, troubleshooting, and explanation.",
  },
  {
    number: "11",
    title: "Course Branding",
    text: "All materials follow Marvel’s Space identity: Watering the Garden Together, Beyond the horizon lies another horizon, Marvel the Explorer, Explorer Academy, Learn by Exploring.",
  },
];

const weeklyPlan = [
  "Day 1 — Story, mission briefing, and beginner explanation",
  "Day 2 — Visual diagrams, English/German vocabulary, and examples",
  "Day 3 — Packet Tracer build mission",
  "Day 4 — Linux command mission and cybersecurity connection",
  "Day 5 — Troubleshooting challenge and quiz",
  "Day 6 — Field journal, review, and flashcards",
  "Day 7 — Mini project, checkpoint, and rest/reflection",
];

export default function JungleNetworkExpeditionPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#06130d] text-white">
      <section className="relative px-6 py-24 sm:px-10 lg:px-20">
        <div className="absolute inset-0 opacity-40">
          <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-emerald-500 blur-[120px]" />
          <div className="absolute right-10 top-48 h-80 w-80 rounded-full bg-amber-400 blur-[140px]" />
          <div className="absolute bottom-10 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-cyan-500 blur-[160px]" />
        </div>

        <div className="relative mx-auto max-w-7xl">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.35em] text-emerald-300">
            Marvel&apos;s Space • Explorer Academy
          </p>

          <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div>
              <h1 className="max-w-4xl text-5xl font-black leading-tight sm:text-6xl lg:text-7xl">
                🌿 The Jungle Network Expedition
              </h1>

              <p className="mt-5 max-w-2xl text-2xl font-semibold text-amber-200">
                Discover the Hidden World of Networks
              </p>

              <p className="mt-6 max-w-3xl text-lg leading-8 text-slate-200">
                A free 8-week accelerated networking foundation bootcamp by{" "}
                <strong>Marvel Marodza</strong>, built for complete beginners
                who want to learn Cisco Certified Network Associate foundations
                through adventure, visuals, labs, English/German explanations,
                and real-world missions.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#expedition-map"
                  className="rounded-full bg-emerald-400 px-6 py-3 font-bold text-emerald-950 shadow-lg shadow-emerald-950/40 transition hover:-translate-y-1 hover:bg-emerald-300"
                >
                  Start Expedition
                </a>
                <a
                  href="#learning-rules"
                  className="rounded-full border border-emerald-300/40 px-6 py-3 font-bold text-emerald-100 transition hover:-translate-y-1 hover:border-emerald-200 hover:bg-white/10"
                >
                  View Learning Rules
                </a>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <p className="text-3xl font-black text-emerald-300">8</p>
                  <p className="mt-1 text-sm text-slate-200">Weeks</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <p className="text-3xl font-black text-amber-200">56</p>
                  <p className="mt-1 text-sm text-slate-200">Daily Missions</p>
                </div>
                <div className="rounded-3xl border border-white/10 bg-white/10 p-5 backdrop-blur">
                  <p className="text-3xl font-black text-cyan-200">1</p>
                  <p className="mt-1 text-sm text-slate-200">
                    Final Capstone
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[2rem] border border-emerald-300/20 bg-black/30 p-6 shadow-2xl backdrop-blur">
              <div className="rounded-[1.5rem] border border-amber-200/20 bg-[#102417] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
                  Expedition Route
                </p>

                <div className="mt-6 space-y-4">
                  {modules.map((module, index) => (
                    <div
                      key={module.title}
                      className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-4"
                    >
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400/15 text-2xl">
                        {module.icon}
                      </div>
                      <div>
                        <p className="text-sm text-emerald-200">
                          Region {index + 1}
                        </p>
                        <p className="font-bold">{module.title}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <p className="mt-6 rounded-2xl bg-amber-200/10 p-4 text-sm leading-6 text-amber-100">
                  “Beyond the horizon lies another horizon.”
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="expedition-map"
        className="border-y border-white/10 bg-[#081a11] px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
              Complete Course Roadmap
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              The Jungle Map
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              Each module is a jungle region. Each region teaches a practical
              networking skill through missions, diagrams, Packet Tracer labs,
              Linux exercises, troubleshooting, quizzes, and reflection.
            </p>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {modules.map((module, index) => (
              <article
                key={module.title}
                className="group rounded-[2rem] border border-white/10 bg-white/[0.06] p-6 transition hover:-translate-y-2 hover:border-emerald-300/40 hover:bg-white/[0.09]"
              >
                <div className="flex items-start justify-between gap-4">
                  <span className="text-5xl">{module.icon}</span>
                  <span className="rounded-full bg-emerald-400/15 px-3 py-1 text-xs font-bold text-emerald-200">
                    Week {index + 1}
                  </span>
                </div>

                <h3 className="mt-6 text-2xl font-black">{module.title}</h3>
                <p className="mt-2 text-amber-200">{module.subtitle}</p>

                <ul className="mt-5 space-y-3 text-sm leading-6 text-slate-300">
                  {module.topics.map((topic) => (
                    <li key={topic} className="flex gap-2">
                      <span className="text-emerald-300">✦</span>
                      <span>{topic}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 rounded-2xl border border-amber-200/20 bg-amber-200/10 p-4">
                  <p className="text-xs uppercase tracking-[0.2em] text-amber-200">
                    XP Badge
                  </p>
                  <p className="mt-1 font-bold">{module.badge}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        id="learning-rules"
        className="px-6 py-20 sm:px-10 lg:px-20"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
              Explorer Academy Learning Rules
            </p>
            <h2 className="mt-4 text-4xl font-black sm:text-5xl">
              Learn by Exploring
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-300">
              The course always assumes the student is a complete beginner.
              Every lesson explains the reason behind a concept before asking
              the student to remember terms or commands.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {learningRules.map((rule) => (
              <article
                key={rule.number}
                className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-emerald-400 text-lg font-black text-emerald-950">
                    {rule.number}
                  </span>
                  <h3 className="text-xl font-black">{rule.title}</h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {rule.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#081a11] px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
                Weekly System
              </p>
              <h2 className="mt-4 text-4xl font-black">
                Learn Fast. Practice Slow.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-300">
                The Explorer may move through many ideas quickly, but mastery
                comes from building, testing, breaking, fixing, and explaining
                the network in simple words.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-black/25 p-6">
              <div className="space-y-4">
                {weeklyPlan.map((day) => (
                  <div
                    key={day}
                    className="rounded-2xl border border-white/10 bg-white/[0.06] p-4 text-slate-200"
                  >
                    {day}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
              Lesson Blueprint
            </p>
            <h2 className="mt-4 text-4xl font-black">
              Every Lesson Follows the Explorer Method
            </h2>
          </div>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <h3 className="text-2xl font-black text-amber-200">
                Teaching Order
              </h3>
              <ol className="mt-6 space-y-3 text-slate-300">
                {[
                  "Story / Mission",
                  "Why It Exists",
                  "What Problem It Solves",
                  "How It Works",
                  "Real-World Example",
                  "Technical Explanation",
                  "Practical Lab",
                  "Cyber Security Connection",
                  "Quiz",
                  "Summary",
                ].map((item, index) => (
                  <li key={item} className="flex gap-3">
                    <span className="font-black text-emerald-300">
                      {index + 1}.
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ol>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/[0.06] p-6">
              <h3 className="text-2xl font-black text-amber-200">
                Field Journal
              </h3>
              <div className="mt-6 rounded-2xl bg-[#0c2015] p-5 font-mono text-sm leading-7 text-emerald-100">
                <p>Today&apos;s Discovery:</p>
                <p>What surprised me:</p>
                <p>What I understand:</p>
                <p>What still confuses me:</p>
                <p>Questions for tomorrow:</p>
                <p>XP Earned:</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-white/10 bg-[#081a11] px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-8 lg:grid-cols-3">
            <div className="rounded-[2rem] border border-emerald-300/20 bg-emerald-400/10 p-8">
              <h3 className="text-3xl font-black">Packet Tracer Labs</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Every major concept includes a beginner-friendly Cisco Packet
                Tracer build mission with topology, steps, and expected result.
              </p>
            </div>

            <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-400/10 p-8">
              <h3 className="text-3xl font-black">Linux Missions</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Students practice commands like ping, traceroute, ip addr,
                nslookup, arp, ss, and netstat to see real network behavior.
              </p>
            </div>

            <div className="rounded-[2rem] border border-amber-300/20 bg-amber-400/10 p-8">
              <h3 className="text-3xl font-black">Cyber Security Link</h3>
              <p className="mt-4 leading-7 text-slate-300">
                Each lesson connects networking to ethical hacking, blue
                teaming, Security Operations Center work, and real defense.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-20 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.5rem] border border-white/10 bg-black/30 p-8 shadow-2xl md:p-12">
            <div className="grid gap-10 lg:grid-cols-[1fr_0.8fr] lg:items-center">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
                  Final Mission
                </p>
                <h2 className="mt-4 text-4xl font-black sm:text-5xl">
                  The Hidden Temple Network
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-300">
                  The final capstone asks the Explorer to design, build, secure,
                  test, troubleshoot, and explain a complete small-business
                  network using the skills earned across the expedition.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {[
                    "Network Diagram",
                    "IP Address Table",
                    "Virtual Local Area Network (VLAN) Plan",
                    "Routing Setup",
                    "Security Rules",
                    "Troubleshooting Notes",
                  ].map((item) => (
                    <div
                      key={item}
                      className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"
                    >
                      ✦ {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-amber-200/20 bg-[#102417] p-6">
                <p className="text-sm uppercase tracking-[0.3em] text-amber-200">
                  Final Topology
                </p>
                <pre className="mt-6 overflow-x-auto rounded-2xl bg-black/40 p-5 text-sm leading-7 text-emerald-100">
{`Internet Cloud
      |
    Router
      |
 Core Switch
  |    |    |
V10  V20  V30
Students Teachers Admin

V40 = Guests`}
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24 sm:px-10 lg:px-20">
        <div className="mx-auto max-w-7xl rounded-[2.5rem] border border-emerald-300/20 bg-emerald-400/10 p-8 text-center md:p-12">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-emerald-300">
            Explorer Academy Certificate
          </p>
          <h2 className="mt-4 text-4xl font-black">
            Become a Network Architect
          </h2>
          <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-slate-300">
            After completing the 8-week expedition, quizzes, labs, field
            journals, checkpoints, and final capstone, the student earns the
            Marvel&apos;s Space Explorer Academy Certificate of Completion.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              href="#expedition-map"
              className="rounded-full bg-emerald-400 px-6 py-3 font-bold text-emerald-950 transition hover:-translate-y-1 hover:bg-emerald-300"
            >
              Begin the Journey
            </a>
            <a
              href="#learning-rules"
              className="rounded-full border border-white/20 px-6 py-3 font-bold text-white transition hover:-translate-y-1 hover:bg-white/10"
            >
              Read the Rules
            </a>
          </div>

          <p className="mt-10 text-amber-200">
            Marvel&apos;s Space — Watering the Garden Together
          </p>
        </div>
      </section>
    </main>
  );
}