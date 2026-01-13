'use client';

import { useMemo, useState } from 'react';
import LightboxGallery from '../_components/LightboxGallery';
import { siteConfig } from '../_config/site';

export default function GalleryClient() {
  const [active, setActive] = useState<'student' | 'general'>('student');

  const items = useMemo(() => {
    if (active === 'student') return siteConfig.media.studentGalleryImages;
    return [];
  }, [active]);

  return (
    <section className="mx-auto max-w-6xl px-4 py-12">
      <h2 className="text-2xl font-bold text-neutral-100 md:text-3xl">Gallery</h2>
      <p className="mt-2 text-neutral-400">
        Browse property photos. More albums will be added as we expand.
      </p>
      <div className="mt-6 flex gap-3">
        <button
          type="button"
          onClick={() => setActive('student')}
          className={
            active === 'student'
              ? 'rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-amber-200'
              : 'rounded-md border border-neutral-700 px-3 py-1.5 hover:bg-white/5'
          }
        >
          Student
        </button>
        <button
          type="button"
          onClick={() => setActive('general')}
          className={
            active === 'general'
              ? 'rounded-md border border-amber-500/40 bg-amber-500/10 px-3 py-1.5 text-amber-200'
              : 'rounded-md border border-neutral-700 px-3 py-1.5 hover:bg-white/5'
          }
        >
          General
        </button>
      </div>
      {items.length === 0 ? (
        <div className="panel mt-8 p-6 text-neutral-400">
          General accommodation photos will be uploaded soon.
        </div>
      ) : (
        <LightboxGallery images={items} className="mt-8 grid gap-4 sm:grid-cols-2 md:grid-cols-3" />
      )}
    </section>
  );
}
