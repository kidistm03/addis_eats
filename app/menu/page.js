import menu from "@/data/menu.json";
import CategoryBar from "./CategoryBar";
import DishList from "./DishList";

const dishes = menu.data;
const categories = ["All Dishes", ...new Set(dishes.map((d) => d.category))];

export default async function MenuPage({ searchParams }) {
  await new Promise((resolve) => setTimeout(resolve, 3600)); 
  const { category = "All Dishes" } = await searchParams;
}
export default async function MenuPage({ searchParams }) {
  const { category = "All Dishes" } = await searchParams;

  const filtered =
    category === "All Dishes"
      ? dishes
      : dishes.filter((d) => d.category === category);

  return (
    <div>
      <h1 className="font-serif text-3xl mb-6">Our Menu</h1>
      <CategoryBar categories={categories} active={category} />
      <DishList dishes={filtered} />
    </div>
  );
}