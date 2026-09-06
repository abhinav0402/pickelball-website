import Link from "next/link";
import { CircleDot, MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-white dark:bg-surface">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-primary-light">
              <CircleDot className="h-7 w-7" />
              <span>DinkZone</span>
            </Link>
            <p className="mt-4 text-sm text-white/60 dark:text-muted leading-relaxed">
              Your premier destination for pickleball. Play, shop, eat, compete, and
              connect &mdash; all under one roof.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 dark:text-muted mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              {[
                { href: "/book-court", label: "Book a Court" },
                { href: "/shop", label: "Pro Shop" },
                { href: "/food-drinks", label: "Food & Drinks" },
                { href: "/tournaments", label: "Tournaments" },
                { href: "/community", label: "Community" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-white/70 hover:text-primary-light transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 dark:text-muted mb-4">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-primary-light" />
                123 Pickle Lane, Austin, TX 78701
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 shrink-0 text-primary-light" />
                (512) 555-DINK
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 shrink-0 text-primary-light" />
                hello@dinkzone.com
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-sm uppercase tracking-wider text-white/40 dark:text-muted mb-4">
              Hours
            </h3>
            <ul className="space-y-2 text-sm text-white/70">
              <li className="flex items-center gap-2">
                <Clock className="h-4 w-4 shrink-0 text-primary-light" />
                <div>
                  <p>Mon - Fri: 6am - 10pm</p>
                  <p>Sat - Sun: 7am - 11pm</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 dark:border-border text-center text-sm text-white/40 dark:text-muted">
          &copy; {new Date().getFullYear()} DinkZone. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
