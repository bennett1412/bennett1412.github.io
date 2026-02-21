import { lerpColor } from "./use-time-of-day";
import { Stars } from "./stars";

interface Props {
  darkness: number;
}

function CelestialBody({ darkness }: Props) {
  // Sun (orange) → Moon (white/silver)
  const fillInner = lerpColor("#FF8A00", "#c8ccd4", darkness);
  const fillOuter = lerpColor("#FF971D", "#ffffff", darkness);
  const outerOpacity = 0.6;

  return (
    <div
      className="celestial-body absolute -top-[200px] -right-[200px] w-[600px] h-[600px] md:w-[800px] md:h-[800px] md:-top-[250px] md:-right-[200px]"
      style={{ cursor: "pointer" }}
    >
      <svg className="size-full" viewBox="0 0 987 987" fill="none">
        <circle
          cx="493.5" cy="493.5" r="428"
          fill={fillOuter} fillOpacity={outerOpacity}
          style={{ mixBlendMode: "hard-light" }}
        />
        <circle
          cx="493.5" cy="493.5" r="493.5"
          fill={`url(#celestialGrad)`} fillOpacity={outerOpacity}
          style={{ mixBlendMode: "hard-light" }}
        />
        <defs>
          <radialGradient id="celestialGrad" cx="0" cy="0" r="1"
            gradientTransform="translate(493.5 493.5) rotate(90) scale(493.5)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.875" stopColor={fillInner} />
            <stop offset="1" stopColor={fillOuter} stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}

export function SummerIntro({ darkness }: Props) {
  const skyColor = lerpColor("#a0b9fa", "#0a1226", darkness);
  const textColor = lerpColor("#1a1a2e", "#ffffff", darkness);

  return (
    <section
      id="summer"
      className="relative w-full min-h-screen overflow-hidden flex items-center"
      style={{ backgroundColor: skyColor }}
    >
      <Stars darkness={darkness} />
      <CelestialBody darkness={darkness} />

      <div className="relative z-10 px-6 md:px-20 lg:px-32 py-16 md:py-20 max-w-3xl">
        <p
          className="font-['Inika',serif] text-[32px] sm:text-[40px] md:text-[56px] lg:text-[64px] leading-tight mb-4 md:mb-6"
          style={{ color: textColor }}
        >
          Hi,
          <br />
          I'm Bennett
        </p>
        <p
          className="font-['Inika',serif] text-[16px] md:text-[22px] leading-relaxed opacity-80 max-w-lg"
          style={{ color: textColor }}
        >
          Full stack engineer who builds things end to end.
        </p>
      </div>

      {/* Subtle scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <div
          className="w-[1px] h-10 animate-pulse"
          style={{ backgroundColor: textColor, opacity: 0.4 }}
        />
        <span
          className="font-['Inika',serif] text-[12px] tracking-widest uppercase opacity-40"
          style={{ color: textColor }}
        >
          scroll
        </span>
      </div>
    </section>
  );
}
