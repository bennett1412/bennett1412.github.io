"use client";

import { useState, useEffect } from "react";
import { applyTheme } from "../theme-tokens";

/** Returns 0 (day) or 1 (night) — switches at 6 AM and 5 PM */
function computeDarkness(): number {
  const h = new Date().getHours();
  return h >= 17 || h < 6 ? 1 : 0;
}

export function useTimeOfDay() {
  const [darkness, setDarkness] = useState(computeDarkness);
  const [overridden, setOverridden] = useState(false);

  // Keep CSS variables in sync when darkness changes
  // (toggle or hour rollover)
  useEffect(() => {
    applyTheme(darkness);
  }, [darkness]);

  useEffect(() => {
    if (overridden) return;
    const id = setInterval(() => setDarkness(computeDarkness()), 60_000);
    return () => clearInterval(id);
  }, [overridden]);

  const toggle = () => {
    setDarkness((d) => (d === 1 ? 0 : 1));
    setOverridden(true);
  };

  return { darkness, toggle };
}