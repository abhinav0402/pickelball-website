import {
  Users,
  Heart,
  Target,
  Zap,
  MapPin,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const founders = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & CEO",
    bio: "Former collegiate tennis player who fell in love with pickleball in 2019. Alex's vision was to create a venue that combines competitive play with great food and genuine community.",
  },
  {
    name: "Jordan Patel",
    role: "Co-Founder & COO",
    bio: "Hospitality veteran with 15 years of restaurant and event management experience. Jordan brings the food, the drinks, and the party to every corner of DinkZone.",
  },
  {
    name: "Sam Nguyen",
    role: "Co-Founder & Head of Programs",
    bio: "Certified pickleball instructor and tournament organizer. Sam designs all of our programs, clinics, and leagues to ensure every player — beginner or pro — levels up.",
  },
];

const values = [
  {
    icon: Heart,
    title: "Community First",
    description:
      "We're not just a venue — we're a gathering place. Everything we do is designed to bring people together.",
  },
  {
    icon: Target,
    title: "Inclusive Play",
    description:
      "Every skill level, every age, every background. If you can hold a paddle, you belong here.",
  },
  {
    icon: Zap,
    title: "Fun Above All",
    description:
      "Pickleball is supposed to be fun. We build everything — the food, the music, the events — around that energy.",
  },
  {
    icon: MapPin,
    title: "Local Roots",
    description:
      "Austin born and raised. We partner with local farms, breweries, and organizations to keep it close to home.",
  },
];

const milestones = [
  { year: "2023", event: "The idea for DinkZone is born over a post-game Pickle Margarita" },
  { year: "2024", event: "Secured the venue on Pickle Lane and broke ground on 12 courts" },
  { year: "2025", event: "Grand opening — 500+ members in the first 3 months" },
  { year: "2026", event: "Hosted 50+ tournaments, expanded the menu, launched junior programs" },
];

const communityStats = [
  { value: "523", label: "Active Members" },
  { value: "50+", label: "Events Hosted" },
  { value: "1,200+", label: "Community Posts" },
  { value: "12", label: "Courts" },
];

export default function About() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Our Story"
        subtitle="DinkZone started with a simple idea: what if the best pickleball venue was also the best place to eat, drink, and hang out?"
        icon={<Users className="h-10 w-10 text-cta-green" aria-hidden="true" />}
      />

      {/* Mission */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-primary font-semibold text-sm uppercase tracking-widest">
              Our Mission
            </p>
            <h2 className="mt-3 font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase">
              It&apos;s Not One Thing. It&apos;s Everything.
            </h2>
            <p className="mt-6 text-lg text-muted leading-relaxed">
              DinkZone is where world-class pickleball meets chef-driven food,
              craft cocktails, and a community that actually feels like one.
              We built this place because we believed Austin deserved a
              venue where the game, the food, and the people are all equally great.
            </p>
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-20 sm:py-28 bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl text-white tracking-tight uppercase">
              Meet the Creators
            </h2>
            <p className="mt-4 text-dark-muted text-lg">
              The people who turned a post-game dream into Austin&apos;s favorite pickleball destination.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {founders.map((founder) => (
              <div
                key={founder.name}
                className="rounded-2xl bg-dark-surface border border-white/10 p-8 text-center"
              >
                <div className="mx-auto w-20 h-20 rounded-full bg-cta-green/10 flex items-center justify-center">
                  <Users className="h-8 w-8 text-cta-green" aria-hidden="true" />
                </div>
                <h3 className="mt-5 text-xl font-bold text-white">{founder.name}</h3>
                <p className="text-sm text-cta-green font-medium mt-1">{founder.role}</p>
                <p className="mt-4 text-sm text-dark-muted leading-relaxed">{founder.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase">
              What We Stand For
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div key={value.title} className="rounded-2xl border border-border bg-card p-8 text-center">
                  <div className="inline-flex rounded-full p-4 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold text-lg">{value.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">{value.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 sm:py-28 bg-dark-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl text-white tracking-tight uppercase text-center mb-12">
            Our Journey
          </h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-cta-green/10 border-2 border-cta-green flex items-center justify-center font-[var(--font-display)] text-lg text-cta-green shrink-0">
                    {m.year.slice(2)}
                  </div>
                  {i < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-white/10 my-2" />
                  )}
                </div>
                <div className="pb-10">
                  <p className="text-sm font-bold text-cta-green">{m.year}</p>
                  <p className="mt-1 text-white/80 leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-16 sm:py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase text-center mb-12">
            By the Numbers
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {communityStats.map((stat) => (
              <div key={stat.label}>
                <div className="font-[var(--font-display)] text-5xl sm:text-6xl text-primary">
                  {stat.value}
                </div>
                <div className="mt-2 text-sm text-muted font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl text-white uppercase">
            Come Be Part of the Zone
          </h2>
          <p className="mt-4 text-lg text-dark-muted max-w-xl mx-auto">
            Book a court, join a league, or just stop by for a Pickle Margarita.
            We&apos;ll save you a spot.
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
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
