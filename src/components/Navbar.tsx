"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, CircleDot } from "lucide-react";

const navLinks = [
  { href: "/book-court", label: "Book a Court" },
  { href: "/shop", label: "Pro Shop" },
  { href: "/food-drinks", label: "Food & Drinks" },
  { href: "/tournaments", label: "Tournaments" },
  { href: "/community", label: "Community" },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border dark:bg-[#0a0a0a]/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary">
            <CircleDot className="h-7 w-7" />
            <span>DinkZone</span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-2 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-court"
              className="ml-3 px-5 py-2 rounded-full bg-primary text-white text-sm font-semibold hover:bg-primary-dark transition-colors"
            >
              Reserve Now
            </Link>
          </div>

          <button
            className="md:hidden p-2 rounded-lg hover:bg-surface"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-white dark:bg-[#0a0a0a]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block px-3 py-2.5 rounded-lg text-base font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-colors"
                onClick={() => setMobileOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/book-court"
              className="block mt-2 px-5 py-2.5 rounded-full bg-primary text-white text-center text-base font-semibold hover:bg-primary-dark transition-colors"
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
