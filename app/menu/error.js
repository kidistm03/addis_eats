"use client";

import Link from "next/link";

export default function Error({ error, reset }) {
  return (
    <div className="text-center py-16">
      <h2 className="font-serif text-2xl mb-2">Something went wrong</h2>
      <p className="text-ink-muted mb-6">{error.message}</p>
      <div className="flex gap-4 justify-center">
        <button onClick={() => reset()} className="bg-maroon text-white px-4 py-2 rounded-lg">
          Try again
        </button>
        <Link href="/" className="underline text-maroon">Home</Link>
      </div>
    </div>
  );
}