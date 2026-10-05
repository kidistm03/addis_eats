"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";

export default function CategorySidebar() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const active =
    pathname === "/menu" ? searchParams.get("category") ?? "All Dishes" : null;

  return (
    <nav className="flex flex-col gap-1">
      <h2 className="font-serif text-lg mb-2">Categories</h2>
      {CATEGORIES.map((category) => {
        const href =
          category === "All Dishes"
            ? "/menu"
            : `/menu?category=${encodeURIComponent(category)}`;
        return (
          <Link
            key={category}
            href={href}
            className={`px-3 py-2 rounded-lg text-sm ${
              category === active
                ? "bg-maroon text-white"
                : "hover:bg-cream-dark text-ink"
            }`}
          >
            {category}
          </Link>
        );
      })}
    </nav>
  );
}