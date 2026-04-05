export default function SectionLabel({
  children,
  className = "text-gray-400",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p className={`text-xs tracking-widest uppercase ${className}`}>
      {children}
    </p>
  );
}
