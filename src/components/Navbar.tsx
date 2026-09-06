"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, CircleDot } from "lucide-react";

const navLinks = [
  { href: "/book-court", label: "Book a Court" },
  { href: "/events", label: "Events" },
  { href: "/food-drinks", label: "Food & Drinks" },
  { href: "/shop", label: "Merchandise" },
  { href: "/programs", label: "Programs" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-[#111111]/95 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-[var(--font-display)] text-2xl text-white">
            <CircleDot className="h-7 w-7 text-cta-green" aria-hidden="true" />
            <span className="tracking-tight uppercase">DinkZone</span>
          </Link>

          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-white/70 hover:text-cta-green hover:bg-white/5 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-court"
              className="ml-3 px-5 py-2 rounded-full bg-cta-green text-dark-bg text-sm font-bold hover:bg-cta-green/90 transition-colors duration-200"
            >
              Reserve Now
            </Link>
          </div>

          <button
            className="lg:hidden p-2 rounded-lg text-white hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="lg:hidden border-t border-white/10 bg-[#111111]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-white/70 hover:text-cta-green hover:bg-white/5 transition-colors duration-200"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-court"
              className="block mt-2 px-5 py-2.5 rounded-full bg-cta-green text-dark-bg text-center text-base font-bold hover:bg-cta-green/90 transition-colors duration-200"
              onClick={() => setMobileOpen(false)}
            >
              Reserve Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
