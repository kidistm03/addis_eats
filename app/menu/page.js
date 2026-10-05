import { Suspense } from "react";
import DishList from "./DishList";
import DishSkeleton from "./DishSkeleton";

// Rebuild this page in the background at most once per hour.
export const revalidate = 3600;

export default function MenuPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-6">Our Menu</h1>
      {/* The page shell and sidebar render at once; dishes stream in after */}
      <Suspense fallback={<DishSkeleton />}>
        <DishList />
      </Suspense>
    </div>
  );
}