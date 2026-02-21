/**
 * Theme tokens — single source of truth for day/night colours.
 *
 * Each entry is [day, night]. The blocking script in layout.tsx and the
 * toggle function in use-time-of-day.ts both read from this map, so
 * colours only need to be changed in one place.
 *
 * The values are set as CSS custom properties on <html> via
 * `style.setProperty()`. React never manages these, so they survive
 * hydration without being stripped.
 */
export const themeTokens: Record<string, [string, string]> = {
  /* ── Summer ────────────────────────────────────────── */
  "summer-sky":       ["#a0b9fa",  "#0a1226"],
  "summer-text":      ["#1a1a2e",  "#ffffff"],
  "celestial-inner":  ["#FF8A00",  "#c8ccd4"],
  "celestial-outer":  ["#FF971D",  "#ffffff"],

  /* ── Autumn ────────────────────────────────────────── */
  "autumn-sky":          ["#b47400",  "#0a1226"],
  "autumn-tree":         ["#7C4709",  "#4a2d06"],
  "autumn-text":         ["#fff8e1",  "#f5f0e0"],
  "autumn-card-border":  ["#7C4709",  "#2a1f0a"],
  "autumn-card-bg":      ["rgba(201,138,16,0.8)",  "rgba(20,30,51,0.8)"],
  "autumn-org-text":     ["#ffe0a0",  "#e8c06a"],

  /* ── Winter ────────────────────────────────────────── */
  "winter-sky":          ["#93b1ff",  "#0e1a30"],
  "winter-text":         ["#1a1a3a",  "#e0e8ff"],
  "winter-card-border":  ["#7a9ae0",  "#2a3a5e"],
  "winter-tag-bg":       ["#6b8fd6",  "#1e2e50"],
  "winter-tag-text":     ["#1a1a3a",  "#a0b8ff"],
  "winter-fog":          ["rgba(147,177,255,0.25)",  "rgba(14,26,48,0.25)"],
  "winter-card-bg":      ["rgba(163,191,255,0.8)",   "rgba(20,30,56,0.8)"],

  /* ── Spring ────────────────────────────────────────── */
  "spring-sky":          ["#d4ecd0",  "#0e1f14"],
  "spring-text":         ["#1a2e1a",  "#e0f0e0"],
  "spring-accent":       ["#c23074",  "#f07aaf"],
  "spring-card-border":  ["#90c088",  "#2a4a28"],
  "spring-petal":        ["#f0b0c8",  "#6a3050"],
  "spring-skill-text":   ["#2a4a28",  "#a0d8a0"],
  "spring-flower-stem":  ["#5a9050",  "#2a4a28"],
  "spring-flower-petal": ["#f0b0c8",  "#8a4060"],
  "spring-skill-bg":     ["rgba(168,216,160,0.5)",  "rgba(30,58,28,0.5)"],
  "spring-card-bg":      ["rgba(200,228,192,0.8)",  "rgba(22,36,24,0.8)"],

  /* ── Navigation ────────────────────────────────────── */
  "nav-dot-active":   ["#1a1a2e",  "#ffffff"],
  "nav-dot-inactive": ["rgba(26,26,46,0.25)",  "rgba(255,255,255,0.25)"],

  /* ── Stars ─────────────────────────────────────────── */
  "star-opacity": ["0", "1"],
};

/**
 * Build a compact blocking script string that sets every CSS variable
 * on <html> before the first paint. Used by layout.tsx.
 */
export function buildThemeScript(): string {
  const setters = Object.entries(themeTokens)
    .map(([k, [day, night]]) => `s('--${k}',d?'${night}':'${day}')`)
    .join(";");

  return [
    "(function(){",
    "var h=new Date().getHours(),",
    "d=h>=17||h<6?1:0,",
    "r=document.documentElement,",
    "s=r.style.setProperty.bind(r.style);",
    setters,
    "})()",
  ].join("");
}

/**
 * Apply the theme for a given darkness value (0 = day, 1 = night).
 * Called by the toggle and the interval timer in useTimeOfDay.
 */
export function applyTheme(darkness: number): void {
  const root = document.documentElement;
  const idx = darkness === 1 ? 1 : 0;
  for (const [key, pair] of Object.entries(themeTokens)) {
    root.style.setProperty(`--${key}`, pair[idx]);
  }
}
