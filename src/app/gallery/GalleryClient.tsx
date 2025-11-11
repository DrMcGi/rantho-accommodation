'use client';

export default function GalleryClient() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-neutral-100 md:text-3xl">Gallery</h2>
      <p className="mt-2 text-neutral-400">Photos coming soon. Filtered by Student / General.</p>
      <div className="mt-6 flex gap-3">
        <button className="rounded-md border border-neutral-700 px-3 py-1.5 hover:bg-white/5">
          Student
        </button>
        <button className="rounded-md border border-neutral-700 px-3 py-1.5 hover:bg-white/5">
          General
        </button>
      </div>
      <div className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
        {[...Array(6)].map((_, i) => (
          <div key={i} className="aspect-video rounded-lg border border-neutral-800 bg-white/5" />
        ))}
      </div>
    </section>
  );
}
