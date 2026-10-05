import Link from "next/link";
import { notFound } from "next/navigation";
import { getMenu, getDish } from "@/lib/api";

export const revalidate = 3600;
// Only the ids returned below exist; anything else goes straight to not-found.
export const dynamicParams = false;

export async function generateStaticParams() {
  const dishes = await getMenu();
  return dishes.map((dish) => ({ id: dish.id }));
}

export default async function DishPage({ params }) {
  const { id } = await params;
  const dish = await getDish(id);

  if (!dish) {
    notFound();
  }

  return (
    <div>
      <p className="text-sm text-ink-muted mb-4">Dish id: {id}</p>
      <h1 className="font-serif text-3xl mb-1">{dish.nameEn}</h1>
      {dish.nameAm && <p className="text-ink-muted mb-3">{dish.nameAm}</p>}
      <p className="text-maroon text-2xl font-semibold mb-4">ETB {dish.priceETB}</p>
      <p className="mb-4 max-w-2xl">{dish.description}</p>
      <p className="text-sm text-ink-muted mb-6">
        {dish.ingredients?.join(" · ")} — {dish.servings}
      </p>
      <div className="flex gap-4">
        <Link href="/menu" className="underline text-maroon">Back to Menu</Link>
        <Link href="/cart" className="underline text-maroon">Go to Cart</Link>
      </div>
    </div>
  );
}