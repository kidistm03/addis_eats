import Link from "next/link";
import { cookies } from "next/headers";

// force-dynamic is required because of the cookies() 
// come from the incoming request, and no request exists at build time, so

export const dynamic = "force-dynamic";

export default async function CheckoutPage() {
  const cookieStore = await cookies();
  const hasSession = Boolean(cookieStore.get("session"));

  return (
    <div>
      <h1 className="font-serif text-3xl mb-4">Checkout</h1>
      <p className="text-ink-muted mb-6">
        {hasSession ? "Welcome back." : "You are checking out as a guest."}
      </p>
      <Link href="/cart" className="underline text-maroon">Back to Cart</Link>
    </div>
  );
}