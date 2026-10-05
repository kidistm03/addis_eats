import Link from "next/link";

export default function HomePage() {
  return (
    <div>
      <h1 className="font-serif text-4xl text-maroon mb-4">Welcome to Addis Eats</h1>
      <p className="text-ink-muted mb-6">Authentic Ethiopian dishes, made fresh daily.</p>
      <Link href="/menu" className="bg-maroon text-white px-5 py-3 rounded-lg inline-block">
        See the Menu
      </Link>
    </div>
  );
}