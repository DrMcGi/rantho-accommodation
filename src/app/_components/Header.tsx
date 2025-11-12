import Link from 'next/link';
import { siteConfig } from '../_config/site';

const navLinks = [
  { href: '/student', label: 'Student' },
  { href: '/general', label: 'General' },
  { href: '/gallery', label: 'Gallery' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-neutral-800 bg-neutral-950/60 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <Link href="/" className="font-semibold tracking-wide">
          <span className="text-neutral-100">{siteConfig.shortName}</span>{' '}
          <span className="text-amber-400">Accommodations</span>
        </Link>
        <div className="flex items-center gap-6 text-sm">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="hover:text-amber-300">
              {link.label}
            </Link>
          ))}
          <a
            href={`tel:${siteConfig.contact.phoneHref}`}
            className="rounded-md bg-amber-500/20 px-3 py-1.5 text-amber-300 hover:bg-amber-500/30"
          >
            Call: {siteConfig.contact.phoneDisplay}
          </a>
        </div>
      </nav>
    </header>
  );
}
