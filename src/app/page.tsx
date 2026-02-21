"use client";

import { useTimeOfDay } from "./components/use-time-of-day";
import { Navigation } from "./components/navigation";
import { SummerIntro } from "./components/summer-intro";
import { AutumnExperiences } from "./components/autumn-experiences";
import { WinterProjects } from "./components/winter-projects";
import { SpringContact } from "./components/spring-contact";

export default function Page() {
  const { darkness, toggle } = useTimeOfDay();

  return (
    <div className="w-full h-screen overflow-y-scroll" style={{ scrollSnapType: "y mandatory", scrollBehavior: "smooth" }}>
      <Navigation darkness={darkness} />
      <SummerIntro darkness={darkness} onToggle={toggle} />
      <AutumnExperiences darkness={darkness} />
      <WinterProjects darkness={darkness} />
      <SpringContact darkness={darkness} />
    </div>
  );
}
