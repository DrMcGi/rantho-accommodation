'use client';

import Image from 'next/image';
import { useEffect, useMemo, useState } from 'react';

export type GalleryImage = {
  src: string;
  alt: string;
};

export default function LightboxGallery({
  images,
  className,
}: {
  images: readonly GalleryImage[];
  className?: string;
}) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const active = useMemo(() => {
    if (activeIndex === null) return null;
    return images[activeIndex] ?? null;
  }, [activeIndex, images]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setActiveIndex(null);
      if (e.key === 'ArrowLeft') setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length));
      if (e.key === 'ArrowRight') setActiveIndex((i) => (i === null ? i : (i + 1) % images.length));
    };

    document.addEventListener('keydown', onKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [activeIndex, images.length]);

  if (images.length === 0) return null;

  return (
    <>
      <div className={className ?? 'mt-6 grid gap-4 sm:grid-cols-2 md:grid-cols-3'}>
        {images.map((img, idx) => (
          <button
            key={img.src}
            type="button"
            onClick={() => setActiveIndex(idx)}
            className="group relative aspect-video overflow-hidden rounded-lg border border-neutral-800 bg-white/5 text-left"
            aria-label={`Open image: ${img.alt}`}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
              className="object-cover transition duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-linear-to-t from-black/45 via-black/0 to-black/0 opacity-0 transition group-hover:opacity-100" />
            <div className="pointer-events-none absolute bottom-2 right-2 rounded-md border border-white/10 bg-black/35 px-2 py-1 text-xs text-neutral-100 opacity-0 transition group-hover:opacity-100">
              Click to zoom
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur"
          role="dialog"
          aria-modal="true"
          aria-label="Image preview"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) setActiveIndex(null);
          }}
        >
          <div className="relative w-full max-w-5xl">
            <div className="relative aspect-video overflow-hidden rounded-xl border border-neutral-700 bg-neutral-950 shadow-2xl">
              <Image
                src={active.src}
                alt={active.alt}
                fill
                priority
                sizes="(min-width: 1024px) 900px, 100vw"
                className="object-contain"
              />
            </div>

            <div className="mt-3 flex items-center justify-between gap-3">
              <div className="text-sm text-neutral-300">{active.alt}</div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setActiveIndex((i) => (i === null ? i : (i - 1 + images.length) % images.length))}
                  className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-200 hover:border-amber-500/40 hover:bg-neutral-800"
                >
                  Prev
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex((i) => (i === null ? i : (i + 1) % images.length))}
                  className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-200 hover:border-amber-500/40 hover:bg-neutral-800"
                >
                  Next
                </button>
                <button
                  type="button"
                  onClick={() => setActiveIndex(null)}
                  className="rounded-md border border-neutral-700 bg-neutral-900 px-3 py-1.5 text-sm text-neutral-200 hover:border-amber-500/40 hover:bg-neutral-800"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
