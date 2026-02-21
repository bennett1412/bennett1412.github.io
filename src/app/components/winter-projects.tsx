import { lerpColor } from "./use-time-of-day";
import { Stars } from "./stars";

interface Props {
  darkness: number;
}

const projects = [
  {
    title: "DoNote",
    tag: "Full Stack",
    desc: "A Google Keep variation with rich text editing, built with Next.js, TypeScript, and Supabase with automated CI/CD deployment.",
    link: "https://github.com/bennett1412/do-note",
  },
  {
    title: "Stky",
    tag: "Chrome Extension",
    desc: "A productivity-focused Chrome extension for persistent web page annotations using DOM manipulation and local storage.",
    link: "https://github.com/bennett1412/stky",
  },
];

function Snowflake({ left, delay, size = 28 }: { left: string; delay: string; size?: number }) {
  return (
    <div
      className="absolute top-0 pointer-events-none"
      style={{
        left,
        animation: `snowSway 4s ${delay} ease-in-out infinite`,
      }}
    >
      <div
        style={{
          opacity: 0,
          animation: `snowfall 12s ${delay} linear infinite`,
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          style={{ filter: "drop-shadow(0 0 6px rgba(255,255,255,0.5))" }}
        >
          {/* Six-pointed snowflake */}
          <line x1="12" y1="2" x2="12" y2="22" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="3.34" y1="7" x2="20.66" y2="17" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          <line x1="3.34" y1="17" x2="20.66" y2="7" stroke="white" strokeWidth="1.2" strokeLinecap="round" />
          {/* Branch details */}
          <line x1="12" y1="5" x2="14" y2="3.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="12" y1="5" x2="10" y2="3.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="12" y1="19" x2="14" y2="20.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
          <line x1="12" y1="19" x2="10" y2="20.5" stroke="white" strokeWidth="0.8" strokeLinecap="round" />
          <circle cx="12" cy="12" r="1.5" fill="white" fillOpacity="0.4" />
        </svg>
      </div>
    </div>
  );
}

export function WinterProjects({ darkness }: Props) {
  const skyColor = lerpColor("#93b1ff", "#0e1a30", darkness);
  const textColor = lerpColor("#1a1a3a", "#e0e8ff", darkness);
  const cardBorder = lerpColor("#7a9ae0", "#2a3a5e", darkness);
  const tagBg = lerpColor("#6b8fd6", "#1e2e50", darkness);
  const tagText = lerpColor("#1a1a3a", "#a0b8ff", darkness);

  return (
    <section
      id="winter"
      className="relative w-full min-h-screen overflow-hidden py-12 md:py-20"
      style={{ backgroundColor: skyColor }}
    >
      <Stars darkness={darkness} />
      {/* Snowflakes */}
      <Snowflake left="15%" delay="0s" size={26} />
      <Snowflake left="42%" delay="7s" size={20} />
      <Snowflake left="65%" delay="3s" size={24} />
      <Snowflake left="85%" delay="10s" size={18} />

      {/* Fog/mist overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: `linear-gradient(180deg, transparent 0%, ${lerpColor("#93b1ff", "#0e1a30", darkness, 0.25)} 50%, transparent 100%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 lg:px-32">
        <h2
          className="font-['Inika',serif] text-[36px] md:text-[64px] mb-3 md:mb-4"
          style={{ color: textColor }}
        >
          Projects
        </h2>
        <p
          className="font-['Inika',serif] text-[14px] md:text-[18px] opacity-60 mb-8 md:mb-12 max-w-lg"
          style={{ color: textColor }}
        >
           Things I've built on the side.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 max-w-4xl">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="p-4 md:p-6 rounded-lg backdrop-blur-sm border transition-transform hover:scale-[1.02]"
              style={{
                backgroundColor: lerpColor("#a3bfff", "#141e38", darkness, 0.8),
                borderColor: cardBorder,
              }}
            >
              <div className="flex items-center gap-3 mb-3">
                <span
                  className="font-['Inika',serif] text-[12px] px-3 py-1 rounded-full"
                  style={{ backgroundColor: tagBg, color: tagText }}
                >
                  {proj.tag}
                </span>
              </div>
              <h3
                className="font-['Inika',serif] text-[22px] md:text-[26px] mb-2"
                style={{ color: textColor }}
              >
                {proj.link ? (
                  <a href={proj.link} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {proj.title} ↗
                  </a>
                ) : (
                  proj.title
                )}
              </h3>
              <p
                className="font-['Inika',serif] text-[14px] opacity-60 leading-relaxed"
                style={{ color: textColor }}
              >
                {proj.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}