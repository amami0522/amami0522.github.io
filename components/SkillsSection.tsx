import { skillColors } from "@/lib/data";
import BentoCard from "@/components/ui/BentoCard";
import SectionLabel from "@/components/ui/SectionLabel";

type Skills = Record<string, string[]>;

const colSpans = [
  "col-span-12 md:col-span-3",
  "col-span-12 md:col-span-3",
  "col-span-12 md:col-span-3",
  "col-span-12 md:col-span-3",
];

export default function SkillsSection({ skills }: { skills: Skills }) {
  const entries = Object.entries(skills);

  return (
    <>
      {entries.map(([cat, items], i) => {
        const c = skillColors[cat] ?? skillColors["Languages"];
        return (
          <BentoCard key={cat} className={`${colSpans[i]} ${c.bg}`}>
            <SectionLabel className={`font-semibold ${c.accent} mb-4`}>
              {cat}
            </SectionLabel>
            <div className="flex flex-wrap gap-2">
              {items.map((item) => (
                <span
                  key={item}
                  className={`text-xs bg-white/70 border ${c.border} rounded-full px-3 py-1 text-gray-700`}
                >
                  {item}
                </span>
              ))}
            </div>
          </BentoCard>
        );
      })}
    </>
  );
}
