// Deterministic star positions so they don't shift on re-render
const starPositions = [
  { x: 8, y: 12, size: 2, delay: 0 },
  { x: 22, y: 8, size: 1.5, delay: 1.2 },
  { x: 35, y: 22, size: 2.5, delay: 0.5 },
  { x: 48, y: 6, size: 1.5, delay: 2.1 },
  { x: 62, y: 18, size: 2, delay: 1.8 },
  { x: 75, y: 10, size: 1.5, delay: 0.3 },
  { x: 88, y: 25, size: 2, delay: 1.5 },
  { x: 15, y: 35, size: 1.5, delay: 2.5 },
  { x: 42, y: 40, size: 2, delay: 0.8 },
  { x: 55, y: 32, size: 1.5, delay: 1.1 },
  { x: 70, y: 38, size: 2.5, delay: 2.0 },
  { x: 92, y: 42, size: 1.5, delay: 0.6 },
  { x: 5, y: 55, size: 2, delay: 1.4 },
  { x: 30, y: 60, size: 1.5, delay: 2.3 },
  { x: 50, y: 52, size: 2, delay: 0.9 },
  { x: 82, y: 58, size: 1.5, delay: 1.7 },
  { x: 18, y: 72, size: 2, delay: 2.8 },
  { x: 65, y: 68, size: 1.5, delay: 0.2 },
  { x: 38, y: 78, size: 2.5, delay: 1.6 },
  { x: 85, y: 75, size: 1.5, delay: 2.4 },
  { x: 12, y: 88, size: 2, delay: 0.7 },
  { x: 52, y: 85, size: 1.5, delay: 1.9 },
];

/**
 * Stars always render — visibility is controlled by the CSS variable
 * --star-opacity (0 in day, 1 at night), set by the blocking script.
 * No conditional rendering = no flash.
 */
export function Stars() {
  return (
    <div
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{ opacity: "var(--star-opacity)" } as React.CSSProperties}
    >
      {starPositions.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            animation: `twinkle 3s ${star.delay}s ease-in-out infinite`,
          }}
        />
      ))}
    </div>
  );
}
