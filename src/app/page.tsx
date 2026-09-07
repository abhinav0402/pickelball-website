import Link from "next/link";
import Image from "next/image";
import {
  Star,
  ArrowRight,
  Volleyball,
  Target,
  Gamepad2,
  Disc3,
  UtensilsCrossed,
  PartyPopper,
  Briefcase,
  Heart,
} from "lucide-react";
import HeroCarousel from "@/components/HeroCarousel";
import Marquee from "@/components/Marquee";
import ActivityCard from "@/components/ActivityCard";

const activities = [
  {
    icon: <Volleyball className="h-6 w-6" aria-hidden="true" />,
    title: "Pickleball",
    description:
      "12 indoor and outdoor courts for every skill level. Walk-ins welcome, or reserve your spot ahead.",
  },
  {
    icon: <Target className="h-6 w-6" aria-hidden="true" />,
    title: "Cornhole",
    description:
      "Grab a set of bags and challenge your crew. Perfect for winding down between matches.",
  },
  {
    icon: <Gamepad2 className="h-6 w-6" aria-hidden="true" />,
    title: "Ping Pong",
    description:
      "Tables ready to go — no reservation needed. Quick rallies or full tournaments, your call.",
  },
  {
    icon: <Disc3 className="h-6 w-6" aria-hidden="true" />,
    title: "Shuffleboard",
    description:
      "Slide into a classic. Our full-size shuffleboard tables are great for groups of all ages.",
  },
];

const eventTypes = [
  {
    icon: <PartyPopper className="h-7 w-7" aria-hidden="true" />,
    title: "Birthdays",
    description:
      "Food, fun, and courts — celebrate with a party nobody will forget.",
  },
  {
    icon: <Briefcase className="h-7 w-7" aria-hidden="true" />,
    title: "Corporate Events",
    description:
      "Team building with purpose. Pickleball + catering + good vibes = the best offsite ever.",
  },
  {
    icon: <Heart className="h-7 w-7" aria-hidden="true" />,
    title: "Fundraisers",
    description:
      "Host a charity tournament or community event. We handle the logistics, you make the impact.",
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
      <HeroCarousel />

      <Marquee text="WE'RE KIND OF A BIG DILL • EAT. DRINK. PLAY. • WELCOME TO THE ZONE" />

      {/* Welcome / Activities */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase">
              Welcome to the Zone
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              From pickleball die-hards to first-time players, we&apos;ve got the
              game for you. Everyone is welcome at DinkZone!
            </p>
          </div>

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {activities.map((activity) => (
              <ActivityCard key={activity.title} {...activity} />
            ))}
          </div>
        </div>
      </section>

      {/* Food Teaser */}
      <section className="py-20 sm:py-28 bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-cta-green font-semibold text-sm uppercase tracking-widest">
                Chef-Driven Eats
              </p>
              <h2 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight uppercase leading-[0.95]">
                Great Food.
                <br />
                Bold Flavor.
              </h2>
              <p className="mt-6 text-lg text-dark-muted leading-relaxed max-w-lg">
                Handcrafted meals, fresh smoothies, craft cocktails, and our legendary
                Pickle Margarita. Everything is made to fuel your game and feed your crew.
              </p>
              <Link
                href="/food-drinks"
                className="mt-8 inline-flex items-center gap-2 rounded-full bg-cta-green text-dark-bg px-8 py-3.5 text-base font-bold hover:bg-cta-green/90 transition-colors duration-200"
              >
                See the Menu
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="relative rounded-2xl overflow-hidden border border-white/10 aspect-[4/3]">
              <Image
                src="/images/food-pizza-light.jpg"
                alt="Fresh pizza served at DinkZone"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex flex-wrap gap-2">
                  {["The Dink Bowl", "Smash Burger", "Pickle Margarita", "Loaded Nachos"].map((item) => (
                    <span key={item} className="inline-flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1.5 text-xs font-medium text-white">
                      <span className="h-1.5 w-1.5 rounded-full bg-cta-green shrink-0" />
                      {item}
                    </span>
                  ))}
                </div>
                <p className="mt-3 text-sm text-white/70">
                  &hellip;and 15+ more items on the menu.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Events Teaser */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">
              Let&apos;s Celebrate
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl tracking-tight uppercase">
              Plan Your Event
            </h2>
            <p className="mt-4 text-lg text-muted leading-relaxed">
              From birthday bashes to company outings, we&apos;ve got flexible spaces
              and full event support.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {eventTypes.map((event) => (
              <div
                key={event.title}
                className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/5 transition-all duration-200 text-center"
              >
                <div className="inline-flex rounded-xl p-4 bg-primary/10 text-primary">
                  {event.icon}
                </div>
                <h3 className="mt-5 text-lg font-semibold">{event.title}</h3>
                <p className="mt-2 text-sm text-muted leading-relaxed">
                  {event.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              href="/events"
              className="inline-flex items-center gap-2 rounded-full bg-primary text-on-primary px-8 py-3.5 text-base font-bold hover:bg-primary-dark transition-colors duration-200"
            >
              Plan Your Event
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 sm:py-20 bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { value: "12", label: "Indoor & Outdoor Courts" },
              { value: "500+", label: "Active Members" },
              { value: "50+", label: "Events / Year" },
              { value: "4.9", label: "Average Rating" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="font-[var(--font-display)] text-5xl sm:text-6xl text-cta-green">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-dark-muted font-medium">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase">
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

      <Marquee
        text="PICKLEBALL IS CLUCKIN' AWESOME • DINK RESPONSIBLY • SEE YOU ON THE COURT"
        variant="accent"
      />

      {/* CTA */}
      <section className="py-20 sm:py-24 bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl text-white uppercase">
            Ready to Play?
          </h2>
          <p className="mt-4 text-lg text-dark-muted max-w-xl mx-auto">
            Book your court today and experience Austin&apos;s best pickleball venue.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/book-court"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-green text-dark-bg px-8 py-4 text-base font-bold hover:bg-cta-green/90 transition-colors duration-200"
            >
              Book a Court
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/programs"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Browse Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
