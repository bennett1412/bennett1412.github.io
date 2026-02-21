const skills = [
  "TypeScript",
  "JavaScript",
  "Python",
  "React.js",
  "Next.js",
  "Node.js",
  "Express.js",
  "Flask",
  "AWS",
  "Supabase",
  "Firebase",
  "Jest",
  "Cypress",
];

function Petal({ className, size, color }: { className: string; size: number; color: string }) {
  return (
    <div className={`absolute ${className}`}>
      <svg width={size} height={size * 1.4} viewBox="0 0 30 42" fill="none">
        <ellipse cx="15" cy="21" rx="12" ry="20" fill={color} fillOpacity="0.35" />
        <ellipse cx="15" cy="21" rx="7" ry="14" fill={color} fillOpacity="0.2" />
      </svg>
    </div>
  );
}

function FlowerBackground({ stemColor, petalColor }: { stemColor: string; petalColor: string }) {
  return (
    <svg
      className="absolute right-0 top-0 h-full w-[55%] opacity-[0.18]"
      viewBox="0 0 500 900"
      fill="none"
      preserveAspectRatio="xMaxYMid slice"
    >
      {/* Main stem — gentle S-curve */}
      <path
        d="M260 900 Q240 700 270 550 Q300 400 250 300"
        stroke={stemColor}
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />
      {/* Secondary stem branch */}
      <path
        d="M265 620 Q310 580 330 520"
        stroke={stemColor}
        strokeWidth="3.5"
        strokeLinecap="round"
        fill="none"
      />

      {/* Stem leaves */}
      <path
        d="M270 650 Q220 620 200 580 Q230 600 270 610"
        fill={stemColor}
        fillOpacity="0.7"
      />
      <path
        d="M260 520 Q310 490 340 460 Q310 510 270 530"
        fill={stemColor}
        fillOpacity="0.6"
      />
      <path
        d="M255 420 Q210 395 190 360 Q220 385 260 400"
        fill={stemColor}
        fillOpacity="0.5"
      />

      {/* Large flower — layered petals */}
      {/* Outer petals */}
      <ellipse cx="220" cy="240" rx="45" ry="75" fill={petalColor} fillOpacity="0.4" transform="rotate(-20 250 280)" />
      <ellipse cx="280" cy="240" rx="45" ry="75" fill={petalColor} fillOpacity="0.4" transform="rotate(20 250 280)" />
      <ellipse cx="200" cy="280" rx="45" ry="70" fill={petalColor} fillOpacity="0.35" transform="rotate(-55 250 280)" />
      <ellipse cx="300" cy="280" rx="45" ry="70" fill={petalColor} fillOpacity="0.35" transform="rotate(55 250 280)" />
      <ellipse cx="250" cy="220" rx="40" ry="65" fill={petalColor} fillOpacity="0.45" />
      {/* Inner petals */}
      <ellipse cx="235" cy="260" rx="28" ry="48" fill={petalColor} fillOpacity="0.3" transform="rotate(-15 250 280)" />
      <ellipse cx="265" cy="260" rx="28" ry="48" fill={petalColor} fillOpacity="0.3" transform="rotate(15 250 280)" />
      {/* Center */}
      <circle cx="250" cy="280" r="20" fill={stemColor} fillOpacity="0.5" />
      <circle cx="250" cy="280" r="12" fill={petalColor} fillOpacity="0.6" />

      {/* Smaller flower on branch */}
      <ellipse cx="320" cy="490" rx="22" ry="38" fill={petalColor} fillOpacity="0.3" transform="rotate(-25 330 510)" />
      <ellipse cx="345" cy="490" rx="22" ry="38" fill={petalColor} fillOpacity="0.3" transform="rotate(25 330 510)" />
      <ellipse cx="333" cy="480" rx="20" ry="32" fill={petalColor} fillOpacity="0.35" />
      <circle cx="333" cy="505" r="10" fill={stemColor} fillOpacity="0.4" />
      <circle cx="333" cy="505" r="6" fill={petalColor} fillOpacity="0.5" />

      {/* Branch vein details */}
      <path
        d="M268 650 Q240 635 220 600"
        stroke={stemColor}
        strokeWidth="1.5"
        strokeOpacity="0.3"
        fill="none"
      />
      <path
        d="M258 520 Q290 500 320 475"
        stroke={stemColor}
        strokeWidth="1.5"
        strokeOpacity="0.3"
        fill="none"
      />
    </svg>
  );
}

export function SpringContact() {
  return (
    <section
      id="spring"
      className="relative w-full min-h-screen overflow-hidden py-12 md:py-20"
      style={{ backgroundColor: "var(--spring-sky)" }}
    >
      {/* Background decorative flower — hidden on mobile */}
      <div className="hidden md:block">
        <FlowerBackground stemColor="var(--spring-flower-stem)" petalColor="var(--spring-flower-petal)" />
      </div>

      {/* Floating petals — positioned to edges, away from content */}
      <div className="hidden md:block">
        <Petal className="top-[8%] right-[10%] animate-bounce" size={24} color="var(--spring-petal)" />
        <Petal className="top-[22%] right-[5%]" size={30} color="var(--spring-petal)" />
        <Petal className="top-[45%] right-[15%]" size={20} color="var(--spring-petal)" />
        <Petal className="top-[65%] right-[8%]" size={26} color="var(--spring-petal)" />
        <Petal className="bottom-[12%] right-[20%]" size={22} color="var(--spring-petal)" />
        <Petal className="top-[35%] right-[3%]" size={18} color="var(--spring-petal)" />
      </div>

      {/* Content */}
      <div className="relative z-10 px-6 md:px-20 lg:px-32">
        <h2
          className="font-['Inika',serif] text-[36px] md:text-[64px] mb-3 md:mb-4"
          style={{ color: "var(--spring-text)" }}
        >
          Get in Touch
        </h2>
        <p
          className="font-['Inika',serif] text-[14px] md:text-[18px] opacity-60 mb-8 md:mb-12 max-w-lg"
          style={{ color: "var(--spring-text)" }}
        >
          Always up for building something interesting. Let's talk.
        </p>

        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 max-w-4xl">
          {/* Skills */}
          <div className="flex-1">
            <h3
              className="font-['Inika',serif] text-[20px] md:text-[24px] mb-4 md:mb-6"
              style={{ color: "var(--spring-text)" }}
            >
              Skills
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="font-['Inika',serif] text-[13px] md:text-[14px] px-3 md:px-4 py-1.5 md:py-2 rounded-full border"
                  style={{
                    backgroundColor: "var(--spring-skill-bg)",
                    borderColor: "var(--spring-card-border)",
                    color: "var(--spring-skill-text)",
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>

          {/* Contact card */}
          <div className="flex-1">
            <div
              className="p-6 md:p-8 rounded-lg border backdrop-blur-sm"
              style={{
                backgroundColor: "var(--spring-card-bg)",
                borderColor: "var(--spring-card-border)",
              }}
            >
              <h3
                className="font-['Inika',serif] text-[20px] md:text-[24px] mb-4 md:mb-6"
                style={{ color: "var(--spring-text)" }}
              >
                Contact
              </h3>
              <div className="flex flex-col gap-4">
                <a
                  href="mailto:bennettmadavana@gmail.com"
                  className="font-['Inika',serif] text-[16px] transition-opacity hover:opacity-100 opacity-70"
                  style={{ color: "var(--spring-accent)" }}
                >
                  bennettmadavana@gmail.com
                </a>
                <a
                  href="https://www.linkedin.com/in/bennett1412/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inika',serif] text-[16px] transition-opacity hover:opacity-100 opacity-70"
                  style={{ color: "var(--spring-accent)" }}
                >
                  LinkedIn
                </a>
                <a
                  href="https://github.com/bennett1412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inika',serif] text-[16px] transition-opacity hover:opacity-100 opacity-70"
                  style={{ color: "var(--spring-accent)" }}
                >
                  GitHub
                </a>
                <a
                  href="https://bennett1412.github.io/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-['Inika',serif] text-[16px] transition-opacity hover:opacity-100 opacity-70"
                  style={{ color: "var(--spring-accent)" }}
                >
                  Portfolio
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Education & Achievements */}
        <div className="flex flex-col lg:flex-row gap-8 md:gap-12 max-w-4xl mt-8 md:mt-12">
          <div className="flex-1">
            <h3
              className="font-['Inika',serif] text-[20px] md:text-[24px] mb-4 md:mb-6"
              style={{ color: "var(--spring-text)" }}
            >
              Education
            </h3>
            <div
              className="p-4 md:p-6 rounded-lg border backdrop-blur-sm"
              style={{
                backgroundColor: "var(--spring-card-bg)",
                borderColor: "var(--spring-card-border)",
              }}
            >
              <p
                className="font-['Inika',serif] text-[16px] md:text-[18px]"
                style={{ color: "var(--spring-text)" }}
              >
                Master of Information Technology
              </p>
              <p
                className="font-['Inika',serif] text-[14px] opacity-70 mt-1"
                style={{ color: "var(--spring-text)" }}
              >
                Monash University, Clayton
              </p>
              <p
                className="font-['Inika',serif] text-[13px] opacity-50 mt-1"
                style={{ color: "var(--spring-text)" }}
              >
                Jul 2023 — Jul 2025 · WAM: 83 · GPA: 3.75/4.00
              </p>
            </div>
          </div>

          <div className="flex-1">
            <h3
              className="font-['Inika',serif] text-[20px] md:text-[24px] mb-4 md:mb-6"
              style={{ color: "var(--spring-text)" }}
            >
              Highlights
            </h3>
            <div className="flex flex-col gap-3">
              <p
                className="font-['Inika',serif] text-[14px] opacity-70 leading-relaxed"
                style={{ color: "var(--spring-text)" }}
              >
                🎓 Monash University Summer Research Scholarship for work on sequential decision-making visualisations.
              </p>
              <p
                className="font-['Inika',serif] text-[14px] opacity-70 leading-relaxed"
                style={{ color: "var(--spring-text)" }}
              >
                🤝 Mentored at a girls-only hackathon with MindEmpowered NGO, contributing to children's mood assessment tools.
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 md:mt-20 pt-6 md:pt-8 border-t" style={{ borderColor: "var(--spring-card-border)" }}>
          <p
            className="font-['Inika',serif] text-[13px] opacity-40"
            style={{ color: "var(--spring-text)" }}
          >
            Designed with the rhythm of the seasons. 2026.
          </p>
        </div>
      </div>
    </section>
  );
}