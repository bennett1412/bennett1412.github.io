"use client";

import { useState, useEffect } from "react";

/** Returns 0 (day) or 1 (night) — switches at 6 AM and 5 PM */
function computeDarkness(): number {
  const h = new Date().getHours();
  return h >= 17 || h < 6 ? 1 : 0;
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