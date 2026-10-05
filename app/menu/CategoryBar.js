import Link from "next/link";

export default function CategoryBar({ categories, active }) {
  return (
    <div className="flex flex-wrap gap-2 mb-8">
      {categories.map((category) => {
        const href =
          category === "All Dishes"
            ? "/menu"
            : `/menu?category=${encodeURIComponent(category)}`;
        const isActive = category === active;
        return (
          <Link
            key={category}
            href={href}
            className={`px-4 py-2 rounded-full text-sm font-medium ${
              isActive
                ? "bg-maroon text-white"
                : "bg-white border border-gold-light text-ink hover:bg-cream-dark"
            }`}
          >
            {category}
          </Link>
        );
      })}
    </div>
  );
}