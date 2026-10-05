import { Suspense } from "react";
import CategoryBar from "./CategoryBar";

export default function MenuLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
      <aside>
        <Suspense fallback={<div className="h-48 bg-gray-100 rounded-lg animate-pulse" />}>
          <CategoryBar />
        </Suspense>
      </aside>
      <div>{children}</div>
    </div>
  );
}