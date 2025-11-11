// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Rantho Accommodations — Seshego, Polokwane",
  description:
    "Student (NSFAS) and General accommodation with clear amenities and frictionless booking.",
  // Replace with your live domain
  metadataBase: new URL("https://example.com"),
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="min-h-screen flex flex-col">
          <header className="sticky top-0 z-50 backdrop-blur bg-neutral-950/60 border-b border-neutral-800">
            <nav className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
              <Link href="/" className="font-semibold tracking-wide">
                <span className="text-neutral-100">Rantho</span>{" "}
                <span className="text-amber-400">Accommodations</span>
              </Link>
              <div className="flex gap-6 text-sm">
                <Link href="/student" className="hover:text-amber-300">
                  Student
                </Link>
                <Link href="/general" className="hover:text-amber-300">
                  General
                </Link>
                <Link href="/gallery" className="hover:text-amber-300">
                  Gallery
                </Link>
                <Link href="/contact" className="hover:text-amber-300">
                  Contact
                </Link>
                <a
                  href="tel:+27823183790"
                  className="rounded-md px-3 py-1.5 bg-amber-500/20 text-amber-300 hover:bg-amber-500/30"
                >
                  Call: 082 318 3790
                </a>
              </div>
            </nav>
          </header>
          <main className="flex-1">{children}</main>
          <footer className="border-t border-neutral-800">
            <div className="max-w-6xl mx-auto px-4 py-8 grid md:grid-cols-3 gap-6 text-sm">
              <div>
                <div className="font-semibold text-neutral-100">Rantho Accommodations</div>
                <p className="text-neutral-400">
                  Student & General accommodation in Seshego, Polokwane.
                </p>
              </div>
              <div>
                <div className="font-semibold text-neutral-200">Locations</div>
                <ul className="text-neutral-400">
                  <li>Student: House no 2121, 8 Ramahlale Ave, Seshego Zone 2</li>
                  <li>General: House 1243, Seshego Zone 1</li>
                </ul>
              </div>
              <div>
                <div className="font-semibold text-neutral-200">Contact</div>
                <ul className="text-neutral-400">
                  <li>Call / WhatsApp: 082 318 3790</li>
                  <li>
                    NSFAS:{" "}
                    <a className="underline hover:text-amber-300" href="https://tymprod.nsfas.org.za/login">
                      Login
                    </a>
                    ,{" "}
                    <a className="underline hover:text-amber-300" href="https://tymprod.nsfas.org.za/properties">
                      Properties
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
