import { Suspense } from "react";
import CategoryBar from "./CategoryBar";

export default function MenuLayout({ children }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
      <aside>
        {/* useSearchParams needs a Suspense boundary on statically built pages */}
        <Suspense fallback={<div className="h-48 bg-gray-100 rounded-lg animate-pulse" />}>
          <CategorySidebar />
        </Suspense>
      </aside>
      <div>{children}</div>
    </div>
  );
}