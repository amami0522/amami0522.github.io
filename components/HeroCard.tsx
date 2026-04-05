import type { portfolioData } from "@/lib/data";

export default function HeroCard({ data }: { data: typeof portfolioData }) {
  return (
    <div className="bg-white rounded-2xl p-8 h-full flex flex-col justify-between">
      <span className="text-xs text-gray-400 tracking-widest uppercase">
        {data.role}
      </span>
      <div className="mt-6">
        <h1 className="text-4xl font-bold text-gray-900">{data.name}.</h1>
        <p className="mt-3 text-gray-500 leading-relaxed whitespace-pre-line">
          {data.tagline}
        </p>
      </div>
    </div>
  );
}
