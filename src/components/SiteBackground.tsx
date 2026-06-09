type StarTone = "white" | "blue" | "orange";
type StarSize = "xs" | "sm" | "md" | "lg";

const stars: {
  left: string;
  top: string;
  size: StarSize;
  tone: StarTone;
  delay: string;
  duration: string;
}[] = [
  { left: "5%", top: "8%", size: "sm", tone: "white", delay: "0s", duration: "4.8s" },
  { left: "11%", top: "21%", size: "md", tone: "blue", delay: "1.1s", duration: "5.6s" },
  { left: "17%", top: "14%", size: "sm", tone: "orange", delay: "2.2s", duration: "6.4s" },
  { left: "24%", top: "33%", size: "lg", tone: "white", delay: "0.8s", duration: "5.1s" },
  { left: "31%", top: "11%", size: "sm", tone: "blue", delay: "1.9s", duration: "6s" },
  { left: "39%", top: "26%", size: "md", tone: "white", delay: "0.2s", duration: "4.6s" },
  { left: "47%", top: "7%", size: "sm", tone: "orange", delay: "2.6s", duration: "6.7s" },
  { left: "54%", top: "18%", size: "md", tone: "blue", delay: "1.3s", duration: "5.2s" },
  { left: "62%", top: "28%", size: "sm", tone: "white", delay: "0.5s", duration: "4.9s" },
  { left: "69%", top: "10%", size: "lg", tone: "orange", delay: "1.7s", duration: "6.1s" },
  { left: "76%", top: "24%", size: "sm", tone: "blue", delay: "2.4s", duration: "5.8s" },
  { left: "84%", top: "16%", size: "md", tone: "white", delay: "0.9s", duration: "4.7s" },
  { left: "92%", top: "30%", size: "sm", tone: "orange", delay: "1.5s", duration: "6.3s" },

  { left: "7%", top: "43%", size: "md", tone: "blue", delay: "2s", duration: "5.5s" },
  { left: "15%", top: "55%", size: "sm", tone: "white", delay: "1.2s", duration: "4.9s" },
  { left: "22%", top: "47%", size: "lg", tone: "orange", delay: "2.8s", duration: "6.6s" },
  { left: "30%", top: "59%", size: "sm", tone: "blue", delay: "0.4s", duration: "5.1s" },
  { left: "38%", top: "44%", size: "md", tone: "white", delay: "1.8s", duration: "4.8s" },
  { left: "45%", top: "63%", size: "sm", tone: "orange", delay: "2.1s", duration: "6.2s" },
  { left: "53%", top: "49%", size: "md", tone: "blue", delay: "0.7s", duration: "5.7s" },
  { left: "61%", top: "57%", size: "sm", tone: "white", delay: "1.6s", duration: "4.5s" },
  { left: "68%", top: "46%", size: "lg", tone: "orange", delay: "2.9s", duration: "6.4s" },
  { left: "75%", top: "61%", size: "sm", tone: "blue", delay: "0.3s", duration: "5s" },
  { left: "83%", top: "52%", size: "md", tone: "white", delay: "1.4s", duration: "4.7s" },
  { left: "90%", top: "43%", size: "sm", tone: "orange", delay: "2.5s", duration: "6.1s" },

  { left: "6%", top: "73%", size: "sm", tone: "white", delay: "1.1s", duration: "5.3s" },
  { left: "14%", top: "83%", size: "md", tone: "blue", delay: "2.2s", duration: "6s" },
  { left: "22%", top: "69%", size: "sm", tone: "orange", delay: "0.6s", duration: "4.8s" },
  { left: "29%", top: "88%", size: "lg", tone: "white", delay: "1.9s", duration: "5.9s" },
  { left: "36%", top: "76%", size: "sm", tone: "blue", delay: "2.7s", duration: "6.5s" },
  { left: "44%", top: "84%", size: "md", tone: "white", delay: "0.9s", duration: "4.6s" },
  { left: "51%", top: "71%", size: "sm", tone: "orange", delay: "1.5s", duration: "6.2s" },
  { left: "59%", top: "86%", size: "md", tone: "blue", delay: "2.4s", duration: "5.5s" },
  { left: "67%", top: "73%", size: "sm", tone: "white", delay: "0.5s", duration: "4.9s" },
  { left: "74%", top: "90%", size: "lg", tone: "orange", delay: "1.8s", duration: "6.7s" },
  { left: "82%", top: "79%", size: "sm", tone: "blue", delay: "2.6s", duration: "5.4s" },
  { left: "89%", top: "87%", size: "md", tone: "white", delay: "0.8s", duration: "4.7s" },
  { left: "96%", top: "72%", size: "sm", tone: "orange", delay: "1.3s", duration: "6.1s" },
];

const sizeClasses: Record<StarSize, string> = {
  xs: "h-[2px] w-[2px]",
  sm: "h-[3px] w-[3px]",
  md: "h-[4px] w-[4px]",
  lg: "h-[5px] w-[5px]",
};

const toneClasses: Record<StarTone, string> = {
  white:
    "bg-white shadow-[0_0_14px_rgba(255,255,255,0.75)] light:bg-slate-700/60 light:shadow-[0_0_10px_rgba(51,65,85,0.22)]",
  blue:
    "bg-blue-200 shadow-[0_0_16px_rgba(96,165,250,0.7)] light:bg-blue-500/50 light:shadow-[0_0_12px_rgba(59,130,246,0.22)]",
  orange:
    "bg-orange-200 shadow-[0_0_16px_rgba(251,146,60,0.65)] light:bg-orange-400/50 light:shadow-[0_0_12px_rgba(249,115,22,0.22)]",
};

export default function SiteBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 bg-black light:bg-slate-50" />

      <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_15%,rgba(59,130,246,0.22),transparent_25%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.18),transparent_28%),radial-gradient(circle_at_45%_80%,rgba(59,130,246,0.10),transparent_35%)] light:bg-[radial-gradient(circle_at_18%_15%,rgba(59,130,246,0.12),transparent_25%),radial-gradient(circle_at_82%_18%,rgba(249,115,22,0.11),transparent_28%),radial-gradient(circle_at_45%_80%,rgba(15,23,42,0.05),transparent_35%)]" />

      <div className="site-bg-grid absolute inset-0 opacity-[0.17] light:opacity-[0.1]" />

      <div className="ambient-orb absolute left-[8%] top-[10%] h-56 w-56 rounded-full bg-blue-500/16 light:bg-blue-400/10" />
      <div className="ambient-orb absolute right-[10%] top-[14%] h-64 w-64 rounded-full bg-orange-500/14 light:bg-orange-400/10" />
      <div className="ambient-orb absolute left-[42%] bottom-[10%] h-72 w-72 rounded-full bg-blue-400/11 light:bg-slate-400/7" />

      <div className="absolute left-[10%] top-[32%] h-px w-52 rotate-[8deg] bg-gradient-to-r from-transparent via-white/14 to-transparent light:via-slate-700/12" />
      <div className="absolute right-[14%] top-[54%] h-px w-64 -rotate-[12deg] bg-gradient-to-r from-transparent via-orange-300/14 to-transparent light:via-orange-500/12" />
      <div className="absolute left-[38%] bottom-[26%] h-px w-40 rotate-[18deg] bg-gradient-to-r from-transparent via-blue-300/14 to-transparent light:via-blue-500/12" />

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

      <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent,rgba(0,0,0,0.02))] light:bg-[linear-gradient(to_bottom,transparent,rgba(255,255,255,0.06))]" />
    </div>
  );
}