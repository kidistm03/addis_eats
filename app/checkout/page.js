import Link from "next/link";

export default function CheckoutPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Checkout</h1>
      <p className="text-ink-muted mb-6">The checkout form comes later.</p>
      <Link href="/cart" className="underline text-maroon">Back to Cart</Link>
    </div>
  );
}