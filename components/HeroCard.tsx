import type { portfolioData } from "@/lib/data";
import BentoCard from "@/components/ui/BentoCard";
import SectionLabel from "@/components/ui/SectionLabel";

export default function HeroCard({ data }: { data: typeof portfolioData }) {
  return (
    <BentoCard className="bg-white h-full flex flex-col justify-between">
      <SectionLabel>{data.role}</SectionLabel>
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-gray-900">{data.name}.</h1>
        <p className="mt-3 text-gray-500 leading-relaxed whitespace-pre-line">
          {data.tagline}
        </p>
      </div>
    </BentoCard>
  );
}
