import { Suspense } from "react";
import { getMenu } from "@/lib/api";
import FilterShell from "./FilterShell";
import DishList from "./DishList";

export const revalidate = 3600;

export default async function MenuPage() {
  const dishes = await getMenu(); // runs on the server, no hooks, no state

  return (
    <div>
      <h1 className="font-serif text-3xl mb-6">Our Menu</h1>
      {/* Fallback is the unfiltered server-rendered list, so the HTML always
          contains the dishes even before the client filter loads. */}
      <Suspense fallback={<DishList dishes={dishes} />}>
        <FilterShell>
          <DishList dishes={dishes} />
        </FilterShell>
      </Suspense>
    </div>
  );
}