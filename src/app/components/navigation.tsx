"use client";

import { useState, useEffect } from "react";

const seasons = [
  { id: "summer", label: "Summer", emoji: "☀" },
  { id: "autumn", label: "Autumn", emoji: "🍂" },
  { id: "winter", label: "Winter", emoji: "❄" },
  { id: "spring", label: "Spring", emoji: "🌸" },
];

export function Navigation() {
  const [active, setActive] = useState("summer");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.4 }
    );

    seasons.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col items-center gap-4">
      {seasons.map(({ id, label }) => (
        <button
          key={id}
          onClick={() => scrollTo(id)}
          className="group relative flex items-center"
          title={label}
        >
          <span
            className="absolute right-8 font-['Inika',serif] text-[12px] whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
            style={{ color: "var(--nav-dot-active)" }}
          >
            {label}
          </span>
          <div
            className="rounded-full transition-all duration-300"
            style={{
              width: active === id ? 10 : 6,
              height: active === id ? 10 : 6,
              backgroundColor: active === id ? "var(--nav-dot-active)" : "var(--nav-dot-inactive)",
            }}
          />
        </button>
      ))}
    </nav>
  );
}
