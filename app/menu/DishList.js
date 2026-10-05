import { getMenu } from "@/lib/api";
import DishGrid from "./DishGrid";

export default async function DishList() {
  const dishes = await getMenu();
  return <DishGrid dishes={dishes} />;
}