import Link from "next/link";

export default function CartPage() {
  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Your Cart</h1>
      <p className="text-ink-muted mb-6">Your cart is empty for now.</p>
      <div className="flex gap-4">
        <Link href="/menu" className="underline text-maroon">Back to Menu</Link>
        <Link href="/checkout" className="underline text-maroon">Go to Checkout</Link>
      </div>
    </div>
  );
}