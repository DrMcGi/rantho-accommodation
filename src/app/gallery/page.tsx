// src/app/gallery/page.tsx
export default function Gallery() {
  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-2xl md:text-3xl font-bold text-neutral-100">Gallery</h2>
      <p className="text-neutral-400 mt-2">Photos coming soon. Filtered by Student / General.</p>
      <div className="mt-6 flex gap-3">
        <button className="px-3 py-1.5 rounded-md border border-neutral-700 hover:bg-white/5">Student</button>
        <button className="px-3 py-1.5 rounded-md border border-neutral-700 hover:bg-white/5">General</button>
      </div>
      <div className="mt-8 grid sm:grid-cols-2 md:grid-cols-3 gap-4">
        {/* Placeholder cards */}
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-video rounded-lg border border-neutral-800 bg-white/5" />
        ))}
      </div>
    </section>
  );
}
