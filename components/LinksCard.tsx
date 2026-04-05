import BentoCard from "@/components/ui/BentoCard";
import SectionLabel from "@/components/ui/SectionLabel";

type LinkItem = { label: string; href: string };

export default function LinksCard({ links }: { links: LinkItem[] }) {
  return (
    <BentoCard className="bg-gray-900 h-full flex flex-col">
      <SectionLabel className="text-gray-400 mb-6">Contact</SectionLabel>
      <ul className="space-y-4 flex-1">
        {links.map((l) => (
          <li key={l.label}>
            <a
              href={l.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-between text-white hover:text-gray-300 transition-colors text-sm"
            >
              <span>{l.label}</span>
              <span className="text-gray-500">↗</span>
            </a>
          </li>
        ))}
      </ul>
    </BentoCard>
  );
}
