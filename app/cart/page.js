import Link from "next/link";

export default function CartPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Cart</h1>
      <p>Your selected dishes will show here.</p>

      <p style={{ marginTop: "20px" }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </main>
  );
}