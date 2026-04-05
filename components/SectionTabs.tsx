"use client";
import { useState } from "react";
import AboutSection from "./AboutSection";
import SkillsSection from "./SkillsSection";
import ExperienceSection from "./ExperienceSection";
import type { portfolioData } from "@/lib/data";

type Section = "about" | "skills" | "experience";

const tabLabels: Record<Section, string> = {
  about: "About",
  skills: "Skills",
  experience: "Experience",
};

export default function SectionTabs({ data }: { data: typeof portfolioData }) {
  const [active, setActive] = useState<Section>("about");
  const tabs: Section[] = ["about", "skills", "experience"];

  return (
    <div className="col-span-12">
      {/* Tab bar */}
      <div className="flex gap-2 mb-4">
        {tabs.map((t) => (
          <button
            key={t}
            onClick={() => setActive(t)}
            className={`text-[11px] px-3 py-1 rounded-full tracking-wide transition-colors ${
              active === t
                ? "bg-gray-900 text-white"
                : "border border-gray-300 text-gray-500 hover:border-gray-500"
            }`}
          >
            {tabLabels[t]}
          </button>
        ))}
      </div>

      {/* Section content */}
      <div className="grid grid-cols-12 gap-4">
        {active === "about" && <AboutSection data={data} />}
        {active === "skills" && <SkillsSection skills={data.skills} />}
        {active === "experience" && (
          <ExperienceSection experience={data.experience} />
        )}
      </div>
    </div>
  );
}
