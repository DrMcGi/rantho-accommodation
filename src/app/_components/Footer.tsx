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
    </footer>
  );
}
