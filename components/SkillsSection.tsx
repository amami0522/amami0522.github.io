import { skillColors } from "@/lib/data";

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
          <div
            key={cat}
            className={`${colSpans[i]} ${c.bg} rounded-2xl p-6`}
          >
            <p className={`text-xs font-semibold tracking-widest uppercase mb-4 ${c.accent}`}>
              {cat}
            </p>
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
          </div>
        );
      })}
    </>
  );
}
