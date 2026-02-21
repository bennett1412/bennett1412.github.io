"use client";

import { useState, useEffect } from "react";

/** Returns a darkness value from 0 (full daylight) to 1 (full night) */
function computeDarkness(): number {
  const now = new Date();
  const h = now.getHours() + now.getMinutes() / 60;

  // 0-5: night, 5-7: dawn, 7-17: day, 17-20: dusk, 20-24: night
  if (h < 5) return 1;
  if (h < 7) return 0.5 * (1 + Math.cos(((h - 5) / 2) * Math.PI)); // 1→0
  if (h < 17) return 0;
  if (h < 20) return 0.5 * (1 - Math.cos(((h - 17) / 3) * Math.PI)); // 0→1
  return 1;
}

export function useTimeOfDay() {
  const [darkness, setDarkness] = useState(computeDarkness);

  useEffect(() => {
    const id = setInterval(() => setDarkness(computeDarkness()), 60_000);
    return () => clearInterval(id);
  }, []);

  return darkness;
}

/** Lerp between two hex colors by t (0-1), with optional alpha */
export function lerpColor(a: string, b: string, t: number, alpha?: number): string {
  const parse = (hex: string) => {
    const c = hex.replace("#", "");
    return [
      parseInt(c.slice(0, 2), 16),
      parseInt(c.slice(2, 4), 16),
      parseInt(c.slice(4, 6), 16),
    ];
  };
  const [r1, g1, b1] = parse(a);
  const [r2, g2, b2] = parse(b);
  const r = Math.round(r1 + (r2 - r1) * t);
  const g = Math.round(g1 + (g2 - g1) * t);
  const bl = Math.round(b1 + (b2 - b1) * t);
  if (alpha !== undefined) return `rgba(${r},${g},${bl},${alpha})`;
  return `rgb(${r},${g},${bl})`;
}