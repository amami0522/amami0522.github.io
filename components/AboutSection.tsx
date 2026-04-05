import type { portfolioData } from "@/lib/data";
import BentoCard from "@/components/ui/BentoCard";
import SectionLabel from "@/components/ui/SectionLabel";

export default function AboutSection({ data }: { data: typeof portfolioData }) {
  return (
    <>
      <BentoCard className="bg-white col-span-12 md:col-span-8">
        <SectionLabel className="text-gray-400 mb-4">About</SectionLabel>
        <p className="text-sm text-gray-600 leading-8">{data.about}</p>
      </BentoCard>

      <BentoCard className="bg-[#f0ede8] col-span-6 md:col-span-2 flex flex-col justify-between">
        <SectionLabel className="text-[#a89880]">Experience</SectionLabel>
        <div>
          <span className="text-4xl font-bold text-gray-900">
            {data.stats.experience}
          </span>
          <span className="text-sm text-gray-500 ml-1">yrs</span>
        </div>
      </BentoCard>

      <BentoCard className="bg-[#e8edf5] col-span-6 md:col-span-2 flex flex-col justify-between">
        <SectionLabel className="text-[#7a94b8]">Tech Stack</SectionLabel>
        <div>
          <span className="text-4xl font-bold text-gray-900">
            {data.stats.tools}
          </span>
          <span className="text-sm text-gray-500 ml-1">tools</span>
        </div>
      </BentoCard>
    </>
  );
}
