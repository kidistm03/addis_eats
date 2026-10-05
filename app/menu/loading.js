export default function Loading() {
  return (
    <div>
      <div className="h-8 w-48 bg-gray-200 rounded mb-6 animate-pulse" />
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {Array.from({ length: 8 }).map((_, i) => (
          <div key={i} className="h-40 bg-gray-200 rounded-xl animate-pulse" />
        ))}
      </div>
    </div>
  );
}