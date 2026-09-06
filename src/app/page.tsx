import Link from "next/link";
import {
  CalendarCheck,
  ShoppingBag,
  UtensilsCrossed,
  Trophy,
  Users,
  Star,
  ArrowRight,
  MapPin,
  Clock,
  Zap,
} from "lucide-react";

const features = [
  {
    icon: CalendarCheck,
    title: "Book a Court",
    description: "Reserve indoor and outdoor courts in seconds. Walk-ins welcome too!",
    href: "/book-court",
    color: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400",
  },
  {
    icon: ShoppingBag,
    title: "Pro Shop",
    description: "Top-rated paddles, balls, shoes, and gear from brands you love.",
    href: "/shop",
    color: "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400",
  },
  {
    icon: UtensilsCrossed,
    title: "Food & Drinks",
    description: "Smoothies, bites, and craft drinks — fuel up before or after your game.",
    href: "/food-drinks",
    color: "bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400",
  },
  {
    icon: Trophy,
    title: "Tournaments",
    description: "Compete in weekly leagues and monthly tournaments for all skill levels.",
    href: "/tournaments",
    color: "bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  {
    icon: Users,
    title: "Community",
    description: "Connect with players, find partners, and share tips with fellow enthusiasts.",
    href: "/community",
    color: "bg-rose-100 text-rose-700 dark:bg-rose-900/30 dark:text-rose-400",
  },
];

const testimonials = [
  {
    name: "Sarah M.",
    rating: 5,
    text: "Best pickleball spot in town! The courts are pristine and the food is amazing. My new second home.",
  },
  {
    name: "Jake T.",
    rating: 5,
    text: "Signed up for the Tuesday league and haven't missed a week. Great community and excellent facilities.",
  },
  {
    name: "Maria L.",
    rating: 5,
    text: "The pro shop helped me find the perfect paddle. Staff really knows their stuff. Highly recommend!",
  },
];

export default function Home() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-700 via-red-800 to-red-900">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-72 h-72 bg-white rounded-full blur-3xl" />
          <div className="absolute bottom-10 right-20 w-96 h-96 bg-amber-300 rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1.5 text-sm font-medium text-white/90 mb-6">
              <Zap className="h-4 w-4" aria-hidden="true" />
              Now open — Austin&apos;s newest pickleball destination
            </div>
            <h1 className="font-[var(--font-display)] text-5xl sm:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-tight uppercase">
              Play. Shop. Eat.
              <br />
              <span className="text-amber-400">All Things Pickleball.</span>
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-white/80 leading-relaxed max-w-xl">
              Premium courts, top gear, great food, and an incredible community.
              Your one-stop pickleball venue — welcome to DinkZone.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/book-court"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 text-red-900 px-8 py-3.5 text-base font-bold hover:bg-amber-300 transition-colors duration-200"
              >
                Book a Court
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
              <Link
                href="/shop"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors duration-200"
              >
                Browse Pro Shop
              </Link>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-white/70">
              <span className="flex items-center gap-1.5">
                <MapPin className="h-4 w-4" aria-hidden="true" /> Austin, TX
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="h-4 w-4" aria-hidden="true" /> Open Daily
              </span>
              <span className="flex items-center gap-1.5">
                <Star className="h-4 w-4 text-amber-400" aria-hidden="true" /> 4.9 Rating
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight uppercase">
              Everything Under One Roof
            </h2>
            <p className="mt-4 text-lg text-muted">
              From court reservations to post-game meals, we&apos;ve got you covered.
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <Link
                key={feature.href}
                href={feature.href}
                className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200"
              >
                <div className={`inline-flex rounded-xl p-3 ${feature.color}`}>
                  <feature.icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-lg font-semibold group-hover:text-primary transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {feature.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                  Learn more <ArrowRight className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-surface">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "12", label: "Indoor & Outdoor Courts" },
              { value: "500+", label: "Active Members" },
              { value: "50+", label: "Tournaments / Year" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[var(--font-display)] text-4xl sm:text-5xl font-bold text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold tracking-tight uppercase">
              What Our Players Say
            </h2>
            <p className="mt-4 text-lg text-muted">
              Join hundreds of happy pickleball enthusiasts.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border p-8 bg-card"
              >
                <div className="flex gap-1">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                      aria-hidden="true"
                    />
                  ))}
                  <span className="sr-only">{t.rating} out of 5 stars</span>
                </div>
                <p className="mt-4 text-sm text-muted leading-relaxed">
                  &ldquo;{t.text}&rdquo;
                </p>
                <p className="mt-4 text-sm font-semibold">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-red-700 to-red-900">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl font-bold text-white uppercase">
            Ready to Play?
          </h2>
          <p className="mt-4 text-lg text-white/80 max-w-xl mx-auto">
            Book your court today and experience the best pickleball venue in Austin.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-court"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-amber-400 text-red-900 px-8 py-3.5 text-base font-bold hover:bg-amber-300 transition-colors duration-200"
            >
              Book a Court
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/community"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-3.5 text-base font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Join the Community
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
