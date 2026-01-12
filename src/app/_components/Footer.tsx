import Link from 'next/link';
import { siteConfig } from '../_config/site';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-800">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 py-8 text-sm md:grid-cols-3">
        <div>
          <div className="font-semibold text-neutral-100">{siteConfig.name}</div>
          <p className="text-neutral-400">{siteConfig.description}</p>
        </div>
        <div>
          <div className="font-semibold text-neutral-200">Locations</div>
          <ul className="text-neutral-400">
            <li>
              {siteConfig.locations.student.label}: {siteConfig.locations.student.street}
            </li>
            <li>
              {siteConfig.locations.general.label}: {siteConfig.locations.general.street}
            </li>
          </ul>
        </div>
        <div>
          <div className="font-semibold text-neutral-200">Contact</div>
          <ul className="text-neutral-400">
            <li>Call / WhatsApp: {siteConfig.contact.phoneDisplay}</li>
            <li>
              NSFAS:{' '}
              <Link
                className="underline hover:text-amber-300"
                href={siteConfig.nsfas.loginUrl}
                target="_blank"
                rel="noreferrer"
              >
                Login
              </Link>
              ,{' '}
              <Link
                className="underline hover:text-amber-300"
                href={siteConfig.nsfas.propertiesUrl}
                target="_blank"
                rel="noreferrer"
              >
                Properties
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="group relative border-t border-neutral-800 py-3 text-center">
        <div className="inline-flex items-center justify-center gap-2 rounded-full border border-neutral-800 bg-white/5 px-3 py-1 text-sm font-semibold tracking-wide text-neutral-200 shadow-[0_0_0_1px_rgba(245,158,11,0.08)] transition group-hover:shadow-[0_0_24px_rgba(245,158,11,0.18)] hover:border-amber-500/40 hover:bg-white/10">
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400 shadow-[0_0_14px_rgba(245,158,11,0.75)]" />
          <span className="bg-linear-to-r from-amber-200 via-amber-400 to-amber-200 bg-clip-text text-transparent">
            Created by DrMcGi
          </span>
          <span className="text-xs text-neutral-400 transition group-hover:translate-x-0.5">
            ↗
          </span>
        </div>
        <div className="invisible absolute inset-x-0 bottom-full mb-2 flex justify-center opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100">
          <div className="rounded-lg border border-neutral-700 bg-neutral-900 px-4 py-3 text-sm shadow-xl">
            <div className="mb-2 font-semibold text-neutral-100">DrMcGi&apos;s SaaS Co.</div>
            <div className="space-y-1 text-neutral-400">
              <div className="flex items-center gap-2">
                <span>📞</span>
                <a href="tel:+27649211745" className="hover:text-amber-300">
                  064 921 1745
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>💬</span>
                <a
                  href="https://wa.me/27649211745"
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-amber-300"
                >
                  WhatsApp
                </a>
              </div>
              <div className="flex items-center gap-2">
                <span>✉️</span>
                <a href="mailto:giftk.rantho@gmail.com" className="hover:text-amber-300">
                  giftk.rantho@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
