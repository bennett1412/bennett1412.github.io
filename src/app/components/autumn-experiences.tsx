import { lerpColor } from "./use-time-of-day";
import svgPaths from "../../imports/svg-0csyqho5mf";
import { Stars } from "./stars";

interface Props {
  darkness: number;
}

function Leaf({ size = 60, rotate = 14, className = "", animation }: { size?: number; rotate?: number; className?: string; animation?: string }) {
  return (
    <div
      className={`absolute ${className}`}
      style={{
        width: size,
        height: size,
        "--leaf-rotate": `${rotate}deg`,
        animation: animation || "none",
        transform: animation ? undefined : `rotate(${rotate}deg)`,
      } as React.CSSProperties}
    >
      <svg viewBox="0 0 70.4534 71.6821" fill="none" className="size-full">
        <path d={svgPaths.p15dcc080} fill="#B99C02" fillOpacity="0.91" />
      </svg>
      <svg viewBox="0 0 62.5309 62.8939" fill="none" className="absolute inset-[10%] size-[80%]" style={{ mixBlendMode: "multiply" }}>
        <path d={svgPaths.p2cd68e00} fill="#7C4709" />
        <path d={svgPaths.p1359e400} fill="#7C4709" />
        <path d={svgPaths.p383edc70} fill="#7C4709" />
        <path d={svgPaths.p3884bf40} fill="#7C4709" />
        <path d={svgPaths.p1df33900} fill="#7C4709" />
        <path d={svgPaths.p2ce21b80} fill="#7C4709" />
      </svg>
    </div>
  );
}

const experiences = [
  {
    title: "Full Stack Developer",
    org: "Stormrake",
    period: "Jun 2025 — Present",
    desc: "Built automated email systems with AWS Lambda/SQS/SES, a one-click PDF report generator replacing manual Excel workflows for 500+ VIP clients, and secure MFA interfaces with React and Cognito.",
  },
  {
    title: "Summer Researcher",
    org: "ShortestPathLab · Monash University",
    period: "Nov 2024 — Feb 2025",
    desc: "Modernised a visualisation tool with a Monaco-based editor in React/TypeScript and built a Google Drive sharing feature for algorithm visualisations.",
  },
  {
    title: "Software Engineer",
    org: "Content Turbine",
    period: "Aug 2022 — Oct 2022",
    desc: "Engineered a Tiptap rich text editor with integrated commenting, connected to a fine-tuned transformer model via a Python/Flask REST API.",
  },
  {
    title: "Full Stack Developer Intern",
    org: "TGH Tech",
    period: "May 2022 — Jul 2022",
    desc: "Led backend development of a community platform with Express.js and DynamoDB, implemented multi-role auth via AWS Cognito, and managed a team of 3 interns.",
  },
];

export function AutumnExperiences({ darkness }: Props) {
  const skyColor = lerpColor("#b47400", "#0a1226", darkness);
  const treeColor = lerpColor("#7C4709", "#4a2d06", darkness);
  const textColor = lerpColor("#fff8e1", "#f5f0e0", darkness);
  const cardBorder = lerpColor("#7C4709", "#2a1f0a", darkness);

  return (
    <section
      id="autumn"
      className="relative w-full min-h-screen overflow-hidden py-12 md:py-20"
      style={{ backgroundColor: skyColor }}
    >
      <Stars darkness={darkness} />
      {/* Background tree shape */}
      <svg
        className="absolute right-0 top-0 h-full w-[60%] opacity-60 hidden md:block"
        viewBox="0 0 893.113 1022.5"
        fill="none"
        preserveAspectRatio="xMaxYMin slice"
      >
        <path d={svgPaths.p34f0ee80} fill={treeColor} />
        <path d={svgPaths.p31ad2ac0} stroke={treeColor} strokeOpacity="0.8" />
      </svg>

      {/* Floating leaves — positioned to the right/edges, away from cards */}
      <Leaf size={50} rotate={11} className="top-[10%] right-[8%] opacity-70" animation="leafDrift 8s ease-in-out infinite" />
      <Leaf size={65} rotate={-16} className="top-[25%] right-[22%] opacity-60" animation="leafFloat 11s ease-in-out infinite" />
      <Leaf size={45} rotate={5} className="top-[50%] right-[12%] opacity-50" animation="leafFloat 10s ease-in-out infinite" />
      <Leaf size={55} rotate={-7} className="bottom-[20%] right-[30%] opacity-60" animation="leafDrift 9s ease-in-out infinite" />
      <Leaf size={40} rotate={-137} className="bottom-[8%] right-[6%] opacity-40" animation="leafFloat 12s ease-in-out infinite" />

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 lg:px-32">
        <h2
          className="font-['Inika',serif] text-[36px] md:text-[64px] mb-8 md:mb-12"
          style={{ color: textColor }}
        >
          Experiences
        </h2>

        <div className="flex flex-col gap-4 md:gap-6 max-w-2xl">
          {experiences.map((exp) => (
            <div
              key={exp.title}
              className="p-4 md:p-6 rounded-lg backdrop-blur-sm border"
              style={{
                backgroundColor: lerpColor("#c98a10", "#141e33", darkness, 0.8),
                borderColor: cardBorder,
              }}
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 mb-2">
                <h3
                  className="font-['Inika',serif] text-[18px] md:text-[24px]"
                  style={{ color: textColor }}
                >
                  {exp.title}
                </h3>
                <span
                  className="font-['Inika',serif] text-[14px] opacity-60"
                  style={{ color: textColor }}
                >
                  {exp.period}
                </span>
              </div>
              <p
                className="font-['Inika',serif] text-[16px] opacity-80 mb-1"
                style={{ color: lerpColor("#ffe0a0", "#e8c06a", darkness) }}
              >
                {exp.org}
              </p>
              <p
                className="font-['Inika',serif] text-[14px] opacity-60"
                style={{ color: textColor }}
              >
                {exp.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}