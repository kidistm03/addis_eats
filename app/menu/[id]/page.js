import Link from "next/link";

export default function DishPage({ params }) {
  const { id } = params;

  return (
    <main style={{ padding: "40px" }}>
      <h1>Dish: {id}</h1>
      <p>Details for this dish will go here later.</p>

      <p style={{ marginTop: "20px" }}>
        <Link href="/menu">← Back to Menu</Link>
      </p>
    </main>
  );
}