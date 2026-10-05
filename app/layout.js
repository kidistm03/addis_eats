import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "Addis Eats",
  description: "Authentic Ethiopian dishes, delivered.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-white text-ink">
        <header className="border-b border-gray-200">
          <nav className="max-w-7xl mx-auto w-full px-4 py-4 flex gap-6 items-center">
            <Link href="/" className="font-serif text-xl text-maroon">
              Addis Eats
            </Link>
            <Link href="/menu">Menu</Link>
            <Link href="/cart">Cart</Link>
            <Link href="/checkout">Checkout</Link>
          </nav>
        </header>

        <main className="flex-1 max-w-7xl mx-auto w-full px-4 py-10">
          {children}
        </main>

        <footer className="bg-cream-dark mt-16">
          <div className="max-w-7xl mx-auto px-4 py-8 text-sm text-ink-muted">
            <p className="font-serif text-lg text-maroon">Addis Eats</p>
            <p>Bole Medhanialem, Addis Ababa · Tuesday–Sunday 11:30 AM – 11:00 PM</p>
            <p className="mt-2">© {new Date().getFullYear()} Addis Eats</p>
          </div>
        </footer>
      </body>
    </html>
  );
}