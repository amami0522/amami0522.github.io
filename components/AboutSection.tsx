import type { portfolioData } from "@/lib/data";

export default function AboutSection({ data }: { data: typeof portfolioData }) {
  return (
    <>
      {/* About text */}
      <div className="bg-white rounded-2xl p-8 col-span-12 md:col-span-8">
        <p className="text-xs text-gray-400 tracking-widest uppercase mb-4">
          About
        </p>
        <p className="text-sm text-gray-600 leading-8">{data.about}</p>
      </div>

      {/* Stat cards */}
      <div className="col-span-6 md:col-span-2 bg-[#f0ede8] rounded-2xl p-6 flex flex-col justify-between">
        <p className="text-xs text-[#a89880] tracking-widest uppercase">
          Experience
        </p>
        <div>
          <span className="text-4xl font-bold text-gray-900">
            {data.stats.experience}
          </span>
          <span className="text-sm text-gray-500 ml-1">yrs</span>
        </div>
      </div>
      <div className="col-span-6 md:col-span-2 bg-[#e8edf5] rounded-2xl p-6 flex flex-col justify-between">
        <p className="text-xs text-[#7a94b8] tracking-widest uppercase">
          Tech Stack
        </p>
        <div>
          <span className="text-4xl font-bold text-gray-900">
            {data.stats.tools}
          </span>
          <span className="text-sm text-gray-500 ml-1">tools</span>
        </div>
      </div>
    </>
  );
}
