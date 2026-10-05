import Link from "next/link";

export default function NotFound() {
  return (
    <div className="text-center py-16">
      <h1 className="font-serif text-4xl text-maroon mb-2">404</h1>
      <p className="text-ink-muted mb-6">We couldn't find that page or dish.</p>
      <div className="flex gap-4 justify-center">
        <Link href="/" className="underline text-maroon">Home</Link>
        <Link href="/menu" className="underline text-maroon">Menu</Link>
      </div>
    </div>
  );
}