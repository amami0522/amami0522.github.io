"use client";
import Link from "next/link";

export default function Navbar({ name }: { name: string }) {
  return (
    <nav className="max-w-4xl mx-auto flex items-center justify-between py-4 px-2">
      <Link href="/" className="text-sm font-semibold text-gray-900">
        {name}
      </Link>
    </nav>
  );
}
