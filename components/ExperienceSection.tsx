type ExpItem = { period: string; role: string; company: string; desc: string };

const styles = [
  { dot: "#a89880", tagBg: "bg-[#f0ede8]", tagText: "text-[#a89880]" },
  { dot: "#70a88a", tagBg: "bg-[#e8f5ee]", tagText: "text-[#70a88a]" },
  { dot: "#7a94b8", tagBg: "bg-[#e8edf5]", tagText: "text-[#7a94b8]" },
];

export default function ExperienceSection({
  experience,
}: {
  experience: ExpItem[];
}) {
  return (
    <div className="col-span-12 bg-white rounded-2xl p-8">
      <p className="text-xs text-gray-400 tracking-widest uppercase mb-8">
        Experience
      </p>

      {/* Timeline */}
      <div className="relative pl-6">
        {/* Vertical line */}
        <div className="absolute left-0 top-2 bottom-2 w-px bg-gray-100" />

        <div className="space-y-8">
          {experience.map((exp, i) => {
            const s = styles[i] ?? styles[0];
            return (
              <div key={i} className="relative">
                {/* Dot */}
                <div
                  className="absolute -left-[25px] top-1.5 w-2.5 h-2.5 rounded-full border-2 border-white"
                  style={{ backgroundColor: s.dot }}
                />

                {/* Period badge */}
                <span
                  className={`inline-block text-xs px-2.5 py-0.5 rounded-full mb-2 ${s.tagBg} ${s.tagText}`}
                >
                  {exp.period}
                </span>

                <p className="text-base font-semibold text-gray-900">
                  {exp.role}
                </p>
                <p className="text-xs text-gray-400 mt-0.5 mb-2">
                  {exp.company}
                </p>
                <p className="text-sm text-gray-500 leading-7">{exp.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
