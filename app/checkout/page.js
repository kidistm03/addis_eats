import Link from "next/link";

export default function CheckoutPage() {
  return (
    <main style={{ padding: "40px" }}>
      <h1>Checkout</h1>
      <p>Checkout details form will go here.</p>

      <p style={{ marginTop: "20px" }}>
        <Link href="/">← Back to Home</Link>
      </p>
    </main>
  );
}