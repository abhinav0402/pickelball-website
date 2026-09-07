import {
  Volleyball,
  GraduationCap,
  Swords,
  Trophy,
  Users,
  Sparkles,
  Clock,
  CalendarDays,
  Medal,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import PageHero from "@/components/PageHero";

const programs = [
  {
    icon: Volleyball,
    title: "Open Play",
    description:
      "Drop in anytime during open play hours. All skill levels welcome. Equipment available if you need it.",
    price: "$10 / session",
    tag: "Most Popular",
  },
  {
    icon: GraduationCap,
    title: "Beginner Clinics",
    description:
      "Learn the basics — rules, scoring, strokes, and court positioning. Perfect for your first time on the court.",
    price: "$25 / session",
    tag: null,
  },
  {
    icon: Users,
    title: "Private Lessons",
    description:
      "One-on-one or small group sessions with certified coaches. Tailored drills for your skill level and goals.",
    price: "$75 / hour",
    tag: null,
  },
  {
    icon: Swords,
    title: "Competitive Leagues",
    description:
      "Weekly round-robin leagues for 3.5+ players. Track your rating, climb the standings, and win prizes.",
    price: "$15 / week",
    tag: null,
  },
  {
    icon: Sparkles,
    title: "Junior Programs",
    description:
      "Ages 8-17. Fun, skill-building sessions that introduce young players to the fastest-growing sport in America.",
    price: "$20 / session",
    tag: "New",
  },
  {
    icon: Users,
    title: "Ladies Night",
    description:
      "Women-only play every Wednesday evening. All levels welcome. Includes complimentary drinks.",
    price: "$15 / session",
    tag: null,
  },
];

const weeklySchedule = [
  { day: "Tuesday", time: "6:30 PM", format: "Doubles Round Robin", level: "3.0 - 3.5", fee: "$15/week" },
  { day: "Wednesday", time: "7:00 PM", format: "Ladies Night", level: "All Levels", fee: "$15/session" },
  { day: "Thursday", time: "6:30 PM", format: "Competitive Doubles", level: "4.0+", fee: "$15/week" },
  { day: "Saturday", time: "9:00 AM", format: "Beginner Clinic + Play", level: "Beginners", fee: "$20/session" },
  { day: "Sunday", time: "10:00 AM", format: "Open Play", level: "All Levels", fee: "$10/session" },
];

const upcomingTournaments = [
  {
    name: "DinkZone Fall Classic",
    date: "Oct 12-13, 2026",
    format: "Doubles",
    skillLevels: "3.0 - 5.0+",
    entryFee: "$60/team",
    prize: "$2,000",
    spotsLeft: 12,
    totalSpots: 32,
  },
  {
    name: "Singles Showdown",
    date: "Oct 26, 2026",
    format: "Singles",
    skillLevels: "3.5 - 5.0+",
    entryFee: "$35/player",
    prize: "$1,000",
    spotsLeft: 8,
    totalSpots: 24,
  },
  {
    name: "Mixed Doubles Charity Cup",
    date: "Nov 9, 2026",
    format: "Mixed Doubles",
    skillLevels: "All Levels",
    entryFee: "$50/team",
    prize: "Trophies + Gear",
    spotsLeft: 20,
    totalSpots: 32,
  },
];

const pastResults = [
  { name: "Summer Slam 2026", winner: "Team Johnson/Park", format: "Doubles", date: "Aug 2026" },
  { name: "July 4th Bash", winner: "Carlos Mendez", format: "Singles", date: "Jul 2026" },
  { name: "Spring Fling", winner: "Team Davis/Lee", format: "Mixed Doubles", date: "Apr 2026" },
];

export default function Programs() {
  return (
    <div className="bg-background min-h-screen">
      <PageHero
        title="Pickleball Programs"
        subtitle="Open play, clinics, leagues, and private lessons — we've got a program for every level and every schedule."
        icon={<Volleyball className="h-10 w-10 text-cta-green" aria-hidden="true" />}
        backgroundImage="/images/hero-night-action.jpg"
      />

      {/* Programs Grid */}
      <section className="py-20 sm:py-28 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {programs.map((program) => {
              const Icon = program.icon;
              return (
                <div
                  key={program.title}
                  className="rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="inline-flex rounded-xl p-3 bg-primary/10 text-primary">
                      <Icon className="h-6 w-6" aria-hidden="true" />
                    </div>
                    {program.tag && (
                      <span className="text-xs font-bold bg-cta-green text-dark-bg px-3 py-1 rounded-full">
                        {program.tag}
                      </span>
                    )}
                  </div>
                  <h3 className="mt-5 text-lg font-semibold">{program.title}</h3>
                  <p className="mt-2 text-sm text-muted leading-relaxed">
                    {program.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-border flex items-center justify-between">
                    <span className="font-bold text-primary">{program.price}</span>
                    <button className="text-sm font-semibold text-primary hover:text-primary-dark transition-colors duration-200">
                      Sign Up
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Weekly Schedule */}
      <section className="py-20 sm:py-28 bg-dark-bg" aria-labelledby="schedule-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="schedule-heading" className="font-[var(--font-display)] text-4xl sm:text-5xl text-white tracking-tight uppercase mb-8">
            Weekly Schedule
          </h2>
          <div className="overflow-x-auto rounded-2xl border border-white/10">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-dark-surface text-left">
                  <th className="px-6 py-4 font-semibold text-white">Day</th>
                  <th className="px-6 py-4 font-semibold text-white">Time</th>
                  <th className="px-6 py-4 font-semibold text-white">Format</th>
                  <th className="px-6 py-4 font-semibold text-white">Level</th>
                  <th className="px-6 py-4 font-semibold text-white">Fee</th>
                  <th className="px-6 py-4 font-semibold text-white"><span className="sr-only">Actions</span></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5">
                {weeklySchedule.map((league) => (
                  <tr key={league.day} className="hover:bg-white/5 transition-colors duration-200">
                    <td className="px-6 py-4 font-medium text-white">{league.day}</td>
                    <td className="px-6 py-4 text-dark-muted">
                      <span className="flex items-center gap-1.5">
                        <Clock className="h-3.5 w-3.5" aria-hidden="true" /> {league.time}
                      </span>
                    </td>
                    <td className="px-6 py-4 text-white/80">{league.format}</td>
                    <td className="px-6 py-4">
                      <span className="bg-white/10 text-white/80 px-2.5 py-1 rounded-full text-xs font-medium">
                        {league.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium text-white">{league.fee}</td>
                    <td className="px-6 py-4">
                      <button className="text-cta-green hover:text-cta-green/80 font-medium text-xs transition-colors duration-200">
                        Join
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Upcoming Tournaments */}
      <section className="py-20 sm:py-28 bg-background" aria-labelledby="tournaments-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="tournaments-heading" className="font-[var(--font-display)] text-4xl sm:text-5xl tracking-tight uppercase mb-8">
            Upcoming Tournaments
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {upcomingTournaments.map((t) => (
              <div
                key={t.name}
                className="rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-lg transition-all duration-200"
              >
                <h3 className="font-bold text-lg">{t.name}</h3>
                <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" /> {t.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Users className="h-3.5 w-3.5" aria-hidden="true" /> {t.format}
                  </span>
                </div>
                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted">Skill:</span>
                    <span className="ml-1 font-medium">{t.skillLevels}</span>
                  </div>
                  <div>
                    <span className="text-muted">Entry:</span>
                    <span className="ml-1 font-medium">{t.entryFee}</span>
                  </div>
                  <div>
                    <span className="text-muted">Prize:</span>
                    <span className="ml-1 font-medium text-accent">{t.prize}</span>
                  </div>
                  <div>
                    <span className="text-muted">Spots:</span>
                    <span className="ml-1 font-medium">{t.spotsLeft}/{t.totalSpots}</span>
                  </div>
                </div>
                <div className="mt-4" role="progressbar" aria-valuenow={t.totalSpots - t.spotsLeft} aria-valuemin={0} aria-valuemax={t.totalSpots} aria-label={`${t.totalSpots - t.spotsLeft} of ${t.totalSpots} spots filled`}>
                  <div className="h-2 rounded-full bg-surface overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all duration-300 ${
                        t.spotsLeft < 10 ? "bg-amber-500" : "bg-green-500"
                      }`}
                      style={{ width: `${((t.totalSpots - t.spotsLeft) / t.totalSpots) * 100}%` }}
                    />
                  </div>
                </div>
                <button className="mt-5 w-full rounded-full py-2.5 text-sm font-semibold bg-primary text-on-primary hover:bg-primary-dark transition-colors duration-200">
                  Register Now
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Results */}
      <section className="py-20 sm:py-28 bg-dark-bg" aria-labelledby="results-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 id="results-heading" className="font-[var(--font-display)] text-4xl sm:text-5xl text-white tracking-tight uppercase mb-8">
            Recent Results
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastResults.map((result) => (
              <div key={result.name} className="rounded-2xl border border-white/10 p-6 bg-dark-surface">
                <Medal className="h-8 w-8 text-cta-green mb-3" aria-hidden="true" />
                <h3 className="font-semibold text-white">{result.name}</h3>
                <p className="text-sm text-dark-muted mt-1">{result.date} &middot; {result.format}</p>
                <p className="mt-3 text-sm text-white/80">
                  <span className="text-dark-muted">Winner:</span>{" "}
                  <span className="font-semibold text-cta-green">{result.winner}</span>
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-[var(--font-display)] text-3xl sm:text-4xl text-white uppercase">
            Ready to Find Your Game?
          </h2>
          <p className="mt-3 text-white/80 max-w-lg mx-auto">
            Whether you&apos;re picking up a paddle for the first time or chasing tournament wins — we&apos;ve got a spot for you.
          </p>
          <Link
            href="/book-court"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-primary px-8 py-3.5 font-bold hover:bg-white/90 transition-colors duration-200"
          >
            Book a Court <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
      </section>
    </div>
  );
}
