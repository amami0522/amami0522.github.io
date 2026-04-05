type LinkItem = { label: string; href: string };

export default function LinksCard({ links }: { links: LinkItem[] }) {
  return (
    <div className="bg-gray-900 rounded-2xl p-8 h-full flex flex-col">
      <p className="text-xs text-gray-400 tracking-widest uppercase mb-6">
        Contact
      </p>
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
    </div>
  );
}
