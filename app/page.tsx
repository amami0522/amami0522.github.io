import { portfolioData } from "@/lib/data";
import Navbar from "@/components/Navbar";
import HeroCard from "@/components/HeroCard";
import LinksCard from "@/components/LinksCard";
import SectionTabs from "@/components/SectionTabs";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f5f4f0] p-4 md:p-8">
      <Navbar name={portfolioData.name} />
      <div className="max-w-4xl mx-auto grid grid-cols-12 gap-4 mt-4">
        {/* Always-visible top row */}
        <div className="col-span-12 md:col-span-7">
          <HeroCard data={portfolioData} />
        </div>
        <div className="col-span-12 md:col-span-5">
          <LinksCard links={portfolioData.links} />
        </div>

        {/* Tab-switched content */}
        <SectionTabs data={portfolioData} />
      </div>
      <footer className="max-w-4xl mx-auto mt-8 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} {portfolioData.name} — Built with Next.js
      </footer>
    </div>
  );
}
