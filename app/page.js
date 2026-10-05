import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Addis Eats</h1>
      <p>Welcome to our Ethiopian restaurant.</p>

      <nav style={{ marginTop: "20px", display: "flex", gap: "16px" }}>
        <Link href="/menu">Menu</Link>
        <Link href="/cart">Cart</Link>
        <Link href="/checkout">Checkout</Link>
      </nav>
    </main>
  );
}