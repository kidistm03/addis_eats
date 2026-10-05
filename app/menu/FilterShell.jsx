"use client";

import { useSearchParams } from "next/navigation";
import { CATEGORIES } from "@/lib/categories";

// Reads ?category= from the URL and hides non-matching cards with CSS.
// The cards inside `children` stay server components: this file never imports DishList, it only receives it as children.
export default function FilterShell({ children }) {
  const category = useSearchParams().get("category");
  const active =
    category && category !== "All Dishes" && CATEGORIES.includes(category)
      ? category
      : null;

  return (
    <div className="filter-shell">
      {active && (
        <style>{`.filter-shell [data-category]:not([data-category=${JSON.stringify(
          active
        )}]) { display: none; }`}</style>
      )}
      {children}
    </div>
  );
}