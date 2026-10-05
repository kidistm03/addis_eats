"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";

export default function DishGrid({ dishes }) {
  const category = useSearchParams().get("category") ?? "All Dishes";
  const visible =
    category === "All Dishes"
      ? dishes
      : dishes.filter((d) => d.category === category);

  if (visible.length === 0) {
    return <p className="text-ink-muted">No dishes in this category.</p>;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
      {visible.map((dish) => (
        <div key={dish.id} className="border border-gray-200 rounded-xl p-4 flex flex-col">
          <h3 className="text-lg font-semibold">{dish.nameEn}</h3>
          {dish.nameAm && <p className="text-xs text-gray-500">{dish.nameAm}</p>}
          <p className="text-sm text-gray-600 mt-1 line-clamp-2">{dish.description}</p>
          <div className="mt-4 flex items-center justify-between">
            <span className="font-bold text-maroon">ETB {dish.priceETB}</span>
            <Link href={`/menu/${dish.id}`} className="text-sm underline">
              View
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
}