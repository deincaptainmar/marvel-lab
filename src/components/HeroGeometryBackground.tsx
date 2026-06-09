export default function HeroGeometryBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {/* Cosmic glow layer */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.24),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.20),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(255,255,255,0.07),transparent_38%)] light:bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.16),transparent_28%),radial-gradient(circle_at_80%_30%,rgba(249,115,22,0.14),transparent_30%),radial-gradient(circle_at_50%_85%,rgba(0,0,0,0.04),transparent_38%)]" />

      {/* Route/grid layer */}
      <div className="absolute inset-0 opacity-[0.08] [background-image:linear-gradient(rgba(255,255,255,0.18)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.18)_1px,transparent_1px)] [background-size:72px_72px] light:opacity-[0.10] light:[background-image:linear-gradient(rgba(0,0,0,0.13)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.13)_1px,transparent_1px)]" />

      {/* Stars */}
      <div className="absolute left-[12%] top-[18%] h-1 w-1 rounded-full bg-white/70 shadow-[0_0_18px_rgba(255,255,255,0.8)]" />
      <div className="absolute left-[68%] top-[16%] h-1.5 w-1.5 rounded-full bg-blue-200/80 shadow-[0_0_22px_rgba(147,197,253,0.9)]" />
      <div className="absolute left-[82%] top-[58%] h-1 w-1 rounded-full bg-orange-200/80 shadow-[0_0_20px_rgba(253,186,116,0.9)]" />
      <div className="absolute left-[25%] top-[74%] h-1 w-1 rounded-full bg-white/60 shadow-[0_0_18px_rgba(255,255,255,0.7)]" />
      <div className="absolute left-[50%] top-[10%] h-1 w-1 rounded-full bg-white/50 shadow-[0_0_18px_rgba(255,255,255,0.7)]" />

      {/* Sphere */}
      <div className="float-geometry-slow absolute left-[7%] top-[26%] hidden h-28 w-28 rounded-full border border-blue-300/30 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.45),rgba(59,130,246,0.12)_35%,rgba(0,0,0,0.05)_70%)] shadow-[0_0_60px_rgba(59,130,246,0.18)] backdrop-blur-sm md:block" />

      {/* Cube */}
      <div className="float-geometry-medium absolute right-[8%] top-[22%] hidden h-24 w-24 rotate-12 rounded-2xl border border-orange-300/30 bg-gradient-to-br from-orange-400/15 via-white/5 to-blue-400/10 shadow-[0_0_60px_rgba(249,115,22,0.18)] backdrop-blur-sm md:block" />

      {/* Pyramid / triangle */}
      <div className="float-geometry-fast absolute left-[15%] bottom-[18%] hidden h-0 w-0 border-x-[48px] border-b-[92px] border-x-transparent border-b-blue-300/20 drop-shadow-[0_0_35px_rgba(59,130,246,0.25)] lg:block" />

      {/* Prism / rectangle */}
      <div className="float-geometry-slow absolute right-[18%] bottom-[18%] hidden h-24 w-40 -rotate-6 rounded-[28px] border border-blue-200/20 bg-gradient-to-br from-blue-500/10 via-white/5 to-orange-500/10 shadow-[0_0_55px_rgba(59,130,246,0.14)] backdrop-blur-sm lg:block" />

      {/* Ring */}
      <div className="float-geometry-medium absolute left-[43%] top-[17%] h-28 w-28 rounded-full border-[10px] border-orange-300/15 shadow-[0_0_60px_rgba(249,115,22,0.18)] md:h-36 md:w-36" />

      {/* Cylinder */}
      <div className="float-geometry-fast absolute right-[38%] bottom-[14%] hidden h-32 w-20 rounded-full border border-white/10 bg-gradient-to-b from-blue-300/15 via-white/5 to-orange-300/10 shadow-[0_0_50px_rgba(255,255,255,0.08)] backdrop-blur-sm md:block" />

      {/* Light trails */}
      <div className="absolute left-[10%] top-[50%] h-px w-[36%] rotate-[-12deg] bg-gradient-to-r from-transparent via-blue-300/25 to-transparent" />
      <div className="absolute right-[8%] top-[62%] h-px w-[32%] rotate-[10deg] bg-gradient-to-r from-transparent via-orange-300/25 to-transparent" />
      <div className="absolute left-[30%] top-[36%] h-px w-[44%] rotate-[2deg] bg-gradient-to-r from-transparent via-white/15 to-transparent" />

      {/* Soft horizon glow */}
      <div className="absolute bottom-0 left-1/2 h-40 w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-blue-500/10 via-orange-400/10 to-blue-500/10 blur-3xl" />
    </div>
  );
}