"use client";

import { useState } from "react";
import {
  PartyPopper,
  Briefcase,
  Heart,
  GraduationCap,
  Snowflake,
  Users,
  UtensilsCrossed,
  Trophy,
  Music,
  CheckCircle2,
  Send,
  ArrowRight,
} from "lucide-react";
import PageHero from "@/components/PageHero";

const eventTypes = [
  {
    icon: PartyPopper,
    title: "Birthday Parties",
    description:
      "Designated areas, delicious food, pickleball courts, and games. Create a memorable experience every time.",
  },
  {
    icon: Briefcase,
    title: "Corporate Team Building",
    description:
      "Boost morale with pickleball tournaments, catering packages, and dedicated event spaces for your team.",
  },
  {
    icon: Heart,
    title: "Fundraisers",
    description:
      "Host a charity tournament or community event. We provide the venue, brackets, and full event support.",
  },
  {
    icon: GraduationCap,
    title: "Graduation Parties",
    description:
      "Celebrate the big milestone with food, games, and a private area for your graduate and their crew.",
  },
  {
    icon: Snowflake,
    title: "Holiday Parties",
    description:
      "From holiday happy hours to end-of-year bashes — make it a celebration to remember.",
  },
  {
    icon: Users,
    title: "Private Parties",
    description:
      "Reserve courts and dining space for any occasion. We'll tailor the experience to your group.",
  },
];

const packages = [
  {
    name: "Standard",
    price: "$500",
    duration: "2 hours",
    features: [
      "Up to 20 guests",
      "2 reserved courts",
      "Dedicated event area",
      "Basic food & drink package",
      "Equipment provided",
    ],
  },
  {
    name: "Premium",
    price: "$1,200",
    duration: "3 hours",
    popular: true,
    features: [
      "Up to 50 guests",
      "4 reserved courts",
      "Private event space",
      "Full catering menu",
      "Custom tournament bracket",
      "Dedicated event coordinator",
      "Equipment & prizes provided",
    ],
  },
  {
    name: "All-Inclusive",
    price: "$2,500",
    duration: "4 hours",
    features: [
      "Up to 100 guests",
      "Full venue access",
      "Premium catering & open bar",
      "Custom tournament with referees",
      "DJ / music setup",
      "Photo station",
      "Dedicated event team",
      "Custom branded signage",
    ],
  },
];

const eventTypeOptions = [
  "Birthday Party",
  "Corporate Event",
  "Fundraiser",
  "Graduation Party",
  "Holiday Party",
  "Private Party",
  "Other",
];

export default function Events() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    eventType: "",
    date: "",
    guests: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Plan Your Event"
        subtitle="From birthday bashes to corporate outings — we've got flexible spaces, full catering, and a team that makes it all happen."
        icon={<PartyPopper className="h-10 w-10 text-cta-green" aria-hidden="true" />}
        backgroundImage="/images/hero-night-rally.jpg"
      />

      {/* Event Types */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase">
              Events for Every Occasion
            </h2>
            <p className="mt-4 text-lg text-muted">
              Whatever the celebration, we&apos;ll make it unforgettable.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {eventTypes.map((event) => {
              const Icon = event.icon;
              return (
                <div
                  key={event.title}
                  className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                >
                  <div className="inline-flex rounded-xl p-3 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{event.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {event.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Packages */}
      <section className="py-20 sm:py-28 bg-dark-bg">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl text-white tracking-tight uppercase">
              Event Packages
            </h2>
            <p className="mt-4 text-lg text-dark-muted">
              Choose a package or let us create something custom for your group.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg) => (
              <div
                key={pkg.name}
                className={`rounded-2xl p-8 border transition-all duration-200 ${
                  pkg.popular
                    ? "bg-dark-surface border-cta-green/50 ring-1 ring-cta-green/20"
                    : "bg-dark-surface border-white/10"
                }`}
              >
                {pkg.popular && (
                  <span className="inline-block text-xs font-bold bg-cta-green text-dark-bg px-3 py-1 rounded-full mb-4">
                    Most Popular
                  </span>
                )}
                <h3 className="font-[var(--font-display)] text-3xl text-white uppercase">
                  {pkg.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-cta-green">
                    {pkg.price}
                  </span>
                  <span className="text-dark-muted text-sm">/ {pkg.duration}</span>
                </div>
                <ul className="mt-6 space-y-3">
                  {pkg.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2 text-sm text-white/80"
                    >
                      <CheckCircle2
                        className="h-4 w-4 mt-0.5 shrink-0 text-cta-green"
                        aria-hidden="true"
                      />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full rounded-full py-3 font-bold text-sm transition-colors duration-200 bg-cta-green text-dark-bg hover:bg-cta-green/90">
                  Get Started
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why DinkZone */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase">
              Why DinkZone?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Trophy, label: "Custom Tournaments", desc: "Brackets, referees, and prizes — we run the whole show." },
              { icon: UtensilsCrossed, label: "Full Catering", desc: "Chef-driven menus with options for every dietary need." },
              { icon: Music, label: "Music & Vibes", desc: "Sound systems, DJ setups, and the energy to match." },
              { icon: Users, label: "Dedicated Coordinator", desc: "A real person handling every detail so you can enjoy the event." },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="text-center">
                  <div className="inline-flex rounded-full p-4 bg-primary/10 text-primary">
                    <Icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <h3 className="mt-4 font-semibold">{item.label}</h3>
                  <p className="mt-2 text-sm text-muted">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Inquiry Form */}
      <section className="py-20 sm:py-28 bg-dark-bg">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-[var(--font-display)] text-4xl sm:text-5xl text-white tracking-tight uppercase">
              Get in Touch
            </h2>
            <p className="mt-4 text-dark-muted">
              Tell us about your event and we&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {submitted ? (
            <div className="animate-card-pop-in rounded-2xl bg-dark-surface border border-cta-green/30 p-10 text-center">
              <CheckCircle2 className="animate-icon-pop-in h-12 w-12 text-cta-green mx-auto" aria-hidden="true" />
              <h3 className="mt-4 text-xl font-bold text-white">
                We Got Your Request!
              </h3>
              <p className="mt-2 text-dark-muted">
                Our events team will reach out within 24 hours. Can&apos;t wait to help you plan something awesome.
              </p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-dark-surface border border-white/10 p-8 space-y-6"
            >
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="event-name" className="block text-sm font-medium text-white mb-2">
                    Your Name
                  </label>
                  <input
                    id="event-name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full rounded-xl bg-dark-bg border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cta-green/30 focus:border-cta-green"
                  />
                </div>
                <div>
                  <label htmlFor="event-email" className="block text-sm font-medium text-white mb-2">
                    Email
                  </label>
                  <input
                    id="event-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full rounded-xl bg-dark-bg border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cta-green/30 focus:border-cta-green"
                  />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                <div>
                  <label htmlFor="event-type" className="block text-sm font-medium text-white mb-2">
                    Event Type
                  </label>
                  <select
                    id="event-type"
                    required
                    value={form.eventType}
                    onChange={(e) => setForm({ ...form, eventType: e.target.value })}
                    className="w-full rounded-xl bg-dark-bg border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cta-green/30 focus:border-cta-green"
                  >
                    <option value="">Select type</option>
                    {eventTypeOptions.map((opt) => (
                      <option key={opt} value={opt}>
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="event-date" className="block text-sm font-medium text-white mb-2">
                    Preferred Date
                  </label>
                  <input
                    id="event-date"
                    type="date"
                    value={form.date}
                    onChange={(e) => setForm({ ...form, date: e.target.value })}
                    className="w-full rounded-xl bg-dark-bg border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cta-green/30 focus:border-cta-green"
                  />
                </div>
                <div>
                  <label htmlFor="event-guests" className="block text-sm font-medium text-white mb-2">
                    Estimated Guests
                  </label>
                  <input
                    id="event-guests"
                    type="number"
                    min="1"
                    value={form.guests}
                    onChange={(e) => setForm({ ...form, guests: e.target.value })}
                    className="w-full rounded-xl bg-dark-bg border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cta-green/30 focus:border-cta-green"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="event-message" className="block text-sm font-medium text-white mb-2">
                  Tell Us About Your Event
                </label>
                <textarea
                  id="event-message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full resize-none rounded-xl bg-dark-bg border border-white/10 px-4 py-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-cta-green/30 focus:border-cta-green"
                />
              </div>
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-full bg-cta-green text-dark-bg px-8 py-3.5 text-base font-bold hover:bg-cta-green/90 transition-colors duration-200"
              >
                <Send className="h-4 w-4" aria-hidden="true" />
                Submit Inquiry
              </button>
            </form>
          )}
        </div>
      </section>
    </div>
  );
}
