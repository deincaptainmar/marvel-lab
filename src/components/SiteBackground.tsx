type StarTone = "white" | "blue" | "orange";
type StarSize = "xs" | "sm" | "md";

const stars: {
  left: string;
  top: string;
  size: StarSize;
  tone: StarTone;
  delay: string;
  duration: string;
}[] = [
  { left: "6%", top: "10%", size: "xs", tone: "white", delay: "0s", duration: "4.8s" },
  { left: "12%", top: "22%", size: "sm", tone: "blue", delay: "1.1s", duration: "5.6s" },
  { left: "18%", top: "15%", size: "xs", tone: "orange", delay: "2.2s", duration: "6.4s" },
  { left: "24%", top: "34%", size: "md", tone: "white", delay: "0.8s", duration: "5.1s" },
  { left: "32%", top: "12%", size: "xs", tone: "blue", delay: "1.9s", duration: "6s" },
  { left: "39%", top: "26%", size: "sm", tone: "white", delay: "0.2s", duration: "4.6s" },
  { left: "46%", top: "8%", size: "xs", tone: "orange", delay: "2.6s", duration: "6.7s" },
  { left: "54%", top: "19%", size: "sm", tone: "blue", delay: "1.3s", duration: "5.2s" },
  { left: "61%", top: "28%", size: "xs", tone: "white", delay: "0.5s", duration: "4.9s" },
  { left: "68%", top: "11%", size: "md", tone: "orange", delay: "1.7s", duration: "6.1s" },
  { left: "75%", top: "24%", size: "xs", tone: "blue", delay: "2.4s", duration: "5.8s" },
  { left: "83%", top: "16%", size: "sm", tone: "white", delay: "0.9s", duration: "4.7s" },
  { left: "91%", top: "30%", size: "xs", tone: "orange", delay: "1.5s", duration: "6.3s" },

  { left: "8%", top: "42%", size: "sm", tone: "blue", delay: "2s", duration: "5.5s" },
  { left: "16%", top: "54%", size: "xs", tone: "white", delay: "1.2s", duration: "4.9s" },
  { left: "23%", top: "47%", size: "md", tone: "orange", delay: "2.8s", duration: "6.6s" },
  { left: "31%", top: "58%", size: "xs", tone: "blue", delay: "0.4s", duration: "5.1s" },
  { left: "38%", top: "44%", size: "sm", tone: "white", delay: "1.8s", duration: "4.8s" },
  { left: "45%", top: "62%", size: "xs", tone: "orange", delay: "2.1s", duration: "6.2s" },
  { left: "53%", top: "49%", size: "sm", tone: "blue", delay: "0.7s", duration: "5.7s" },
  { left: "60%", top: "57%", size: "xs", tone: "white", delay: "1.6s", duration: "4.5s" },
  { left: "67%", top: "46%", size: "md", tone: "orange", delay: "2.9s", duration: "6.4s" },
  { left: "74%", top: "61%", size: "xs", tone: "blue", delay: "0.3s", duration: "5s" },
  { left: "82%", top: "52%", size: "sm", tone: "white", delay: "1.4s", duration: "4.7s" },
  { left: "89%", top: "43%", size: "xs", tone: "orange", delay: "2.5s", duration: "6.1s" },

  { left: "7%", top: "74%", size: "xs", tone: "white", delay: "1.1s", duration: "5.3s" },
  { left: "15%", top: "83%", size: "sm", tone: "blue", delay: "2.2s", duration: "6s" },
  { left: "22%", top: "69%", size: "xs", tone: "orange", delay: "0.6s", duration: "4.8s" },
  { left: "29%", top: "88%", size: "md", tone: "white", delay: "1.9s", duration: "5.9s" },
  { left: "36%", top: "76%", size: "xs", tone: "blue", delay: "2.7s", duration: "6.5s" },
  { left: "43%", top: "84%", size: "sm", tone: "white", delay: "0.9s", duration: "4.6s" },
  { left: "50%", top: "71%", size: "xs", tone: "orange", delay: "1.5s", duration: "6.2s" },
  { left: "58%", top: "86%", size: "sm", tone: "blue", delay: "2.4s", duration: "5.5s" },
  { left: "66%", top: "73%", size: "xs", tone: "white", delay: "0.5s", duration: "4.9s" },
  { left: "73%", top: "90%", size: "md", tone: "orange", delay: "1.8s", duration: "6.7s" },
  { left: "81%", top: "79%", size: "xs", tone: "blue", delay: "2.6s", duration: "5.4s" },
  { left: "88%", top: "87%", size: "sm", tone: "white", delay: "0.8s", duration: "4.7s" },
  { left: "95%", top: "72%", size: "xs", tone: "orange", delay: "1.3s", duration: "6.1s" },
];

const sizeClasses: Record<StarSize, string> = {
  xs: "h-[2px] w-[2px]",
  sm: "h-[3px] w-[3px]",
  md: "h-[4px] w-[4px]",
};

const toneClasses: Record<StarTone, string> = {
  white:
    "bg-white/80 shadow-[0_0_10px_rgba(255,255,255,0.45)] light:bg-slate-700/55 light:shadow-[0_0_10px_rgba(51,65,85,0.18)]",
  blue:
    "bg-blue-200/85 shadow-[0_0_12px_rgba(96,165,250,0.42)] light:bg-blue-500/45 light:shadow-[0_0_12px_rgba(59,130,246,0.18)]",
  orange:
    "bg-orange-200/80 shadow-[0_0_12px_rgba(251,146,60,0.35)] light:bg-orange-400/40 light:shadow-[0_0_12px_rgba(249,115,22,0.16)]",
};

export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black light:bg-slate-50" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_18%,rgba(59,130,246,0.18),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.16),transparent_26%),radial-gradient(circle_at_50%_75%,rgba(255,255,255,0.06),transparent_30%)] light:bg-[radial-gradient(circle_at_20%_18%,rgba(59,130,246,0.10),transparent_24%),radial-gradient(circle_at_82%_22%,rgba(249,115,22,0.10),transparent_26%),radial-gradient(circle_at_50%_75%,rgba(15,23,42,0.04),transparent_30%)]" />

      <div className="site-bg-grid absolute inset-0 opacity-[0.14] light:opacity-[0.08]" />

      <div className="ambient-orb absolute left-[8%] top-[10%] h-56 w-56 rounded-full bg-blue-500/12 light:bg-blue-400/8" />
      <div className="ambient-orb absolute right-[10%] top-[14%] h-64 w-64 rounded-full bg-orange-500/10 light:bg-orange-400/8" />
      <div className="ambient-orb absolute left-[42%] bottom-[10%] h-72 w-72 rounded-full bg-blue-400/8 light:bg-slate-400/6" />

      <div className="absolute left-[10%] top-[32%] h-px w-52 rotate-[8deg] bg-gradient-to-r from-transparent via-white/10 to-transparent light:via-slate-700/10" />
      <div className="absolute right-[14%] top-[54%] h-px w-64 -rotate-[12deg] bg-gradient-to-r from-transparent via-orange-300/10 to-transparent light:via-orange-500/10" />
      <div className="absolute left-[38%] bottom-[26%] h-px w-40 rotate-[18deg] bg-gradient-to-r from-transparent via-blue-300/10 to-transparent light:via-blue-500/10" />

      {stars.map((star, index) => (
        <span
          key={`${star.left}-${star.top}-${index}`}
          className={`site-star absolute rounded-full ${sizeClasses[star.size]} ${toneClasses[star.tone]}`}
          style={{
            left: star.left,
            top: star.top,
            animationDelay: star.delay,
            animationDuration: star.duration,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.05))] light:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.08))]" />
    </div>
  );
}