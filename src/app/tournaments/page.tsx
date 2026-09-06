import { Trophy, CalendarDays, Users, MapPin, Clock, Medal, ArrowRight } from "lucide-react";
import Link from "next/link";

const upcomingTournaments = [
  {
    id: 1,
    name: "DinkZone Fall Classic",
    date: "Oct 12-13, 2026",
    format: "Doubles",
    skillLevels: "3.0 - 5.0+",
    entryFee: "$60/team",
    prize: "$2,000",
    spotsLeft: 12,
    totalSpots: 32,
    status: "open" as const,
  },
  {
    id: 2,
    name: "Singles Showdown",
    date: "Oct 26, 2026",
    format: "Singles",
    skillLevels: "3.5 - 5.0+",
    entryFee: "$35/player",
    prize: "$1,000",
    spotsLeft: 8,
    totalSpots: 24,
    status: "open" as const,
  },
  {
    id: 3,
    name: "Mixed Doubles Charity Cup",
    date: "Nov 9, 2026",
    format: "Mixed Doubles",
    skillLevels: "All Levels",
    entryFee: "$50/team",
    prize: "Trophies + Gear",
    spotsLeft: 20,
    totalSpots: 32,
    status: "open" as const,
  },
  {
    id: 4,
    name: "Holiday Smash Invitational",
    date: "Dec 14-15, 2026",
    format: "Doubles & Singles",
    skillLevels: "4.0+",
    entryFee: "$75/player",
    prize: "$5,000",
    spotsLeft: 0,
    totalSpots: 48,
    status: "full" as const,
  },
];

const pastResults = [
  { name: "Summer Slam 2026", winner: "Team Johnson/Park", format: "Doubles", date: "Aug 2026" },
  { name: "July 4th Bash", winner: "Carlos Mendez", format: "Singles", date: "Jul 2026" },
  { name: "Spring Fling", winner: "Team Davis/Lee", format: "Mixed Doubles", date: "Apr 2026" },
];

const weeklyLeagues = [
  { day: "Tuesday", time: "6:30 PM", format: "Doubles Round Robin", level: "3.0 - 3.5", fee: "$15/week" },
  { day: "Wednesday", time: "7:00 PM", format: "Open Play League", level: "All Levels", fee: "$10/week" },
  { day: "Thursday", time: "6:30 PM", format: "Competitive Doubles", level: "4.0+", fee: "$15/week" },
  { day: "Saturday", time: "9:00 AM", format: "Beginner Clinic + Play", level: "Beginners", fee: "$20/session" },
];

export default function Tournaments() {
  return (
    <div className="bg-background min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-r from-yellow-500 to-orange-600 py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-white flex items-center gap-3">
            <Trophy className="h-8 w-8" /> Tournaments & Leagues
          </h1>
          <p className="mt-3 text-lg text-white/80">
            Compete, climb the ranks, and win prizes. Events for every skill level.
          </p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 space-y-16">
        {/* Upcoming Tournaments */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Upcoming Tournaments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {upcomingTournaments.map((t) => (
              <div
                key={t.id}
                className="rounded-2xl border border-border bg-background p-6 hover:border-yellow-400 hover:shadow-lg hover:shadow-yellow-500/5 transition-all"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-bold text-lg">{t.name}</h3>
                    <div className="mt-2 flex flex-wrap gap-3 text-sm text-muted">
                      <span className="flex items-center gap-1">
                        <CalendarDays className="h-3.5 w-3.5" /> {t.date}
                      </span>
                      <span className="flex items-center gap-1">
                        <Users className="h-3.5 w-3.5" /> {t.format}
                      </span>
                    </div>
                  </div>
                  {t.status === "full" ? (
                    <span className="text-xs font-semibold bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400 px-3 py-1 rounded-full">
                      Full
                    </span>
                  ) : (
                    <span className="text-xs font-semibold bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400 px-3 py-1 rounded-full">
                      Open
                    </span>
                  )}
                </div>

                <div className="mt-4 grid grid-cols-2 gap-3 text-sm">
                  <div>
                    <span className="text-muted">Skill Levels:</span>
                    <span className="ml-1 font-medium">{t.skillLevels}</span>
                  </div>
                  <div>
                    <span className="text-muted">Entry Fee:</span>
                    <span className="ml-1 font-medium">{t.entryFee}</span>
                  </div>
                  <div>
                    <span className="text-muted">Prize Pool:</span>
                    <span className="ml-1 font-medium text-yellow-600 dark:text-yellow-400">{t.prize}</span>
                  </div>
                  <div>
                    <span className="text-muted">Spots Left:</span>
                    <span className="ml-1 font-medium">
                      {t.spotsLeft}/{t.totalSpots}
                    </span>
                  </div>
                </div>

                {/* Spots bar */}
                <div className="mt-4">
                  <div className="h-2 rounded-full bg-surface overflow-hidden">
                    <div
                      className={`h-full rounded-full transition-all ${
                        t.spotsLeft === 0 ? "bg-red-500" : t.spotsLeft < 10 ? "bg-yellow-500" : "bg-green-500"
                      }`}
                      style={{ width: `${((t.totalSpots - t.spotsLeft) / t.totalSpots) * 100}%` }}
                    />
                  </div>
                </div>

                <button
                  disabled={t.status === "full"}
                  className={`mt-5 w-full rounded-full py-2.5 text-sm font-semibold transition-colors ${
                    t.status === "full"
                      ? "bg-surface text-muted cursor-not-allowed"
                      : "bg-yellow-500 text-white hover:bg-yellow-600"
                  }`}
                >
                  {t.status === "full" ? "Waitlist" : "Register Now"}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Weekly Leagues */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Weekly Leagues</h2>
          <div className="overflow-x-auto rounded-2xl border border-border">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-surface text-left">
                  <th className="px-6 py-4 font-semibold">Day</th>
                  <th className="px-6 py-4 font-semibold">Time</th>
                  <th className="px-6 py-4 font-semibold">Format</th>
                  <th className="px-6 py-4 font-semibold">Level</th>
                  <th className="px-6 py-4 font-semibold">Fee</th>
                  <th className="px-6 py-4 font-semibold"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {weeklyLeagues.map((league) => (
                  <tr key={league.day} className="hover:bg-surface/50 transition-colors">
                    <td className="px-6 py-4 font-medium">{league.day}</td>
                    <td className="px-6 py-4 text-muted flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" /> {league.time}
                    </td>
                    <td className="px-6 py-4">{league.format}</td>
                    <td className="px-6 py-4">
                      <span className="bg-surface px-2.5 py-1 rounded-full text-xs font-medium">
                        {league.level}
                      </span>
                    </td>
                    <td className="px-6 py-4 font-medium">{league.fee}</td>
                    <td className="px-6 py-4">
                      <button className="text-yellow-600 hover:text-yellow-700 font-medium text-xs">
                        Join
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Past Results */}
        <section>
          <h2 className="text-2xl font-bold mb-6">Recent Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {pastResults.map((result) => (
              <div
                key={result.name}
                className="rounded-2xl border border-border p-6 bg-background"
              >
                <Medal className="h-8 w-8 text-yellow-500 mb-3" />
                <h3 className="font-semibold">{result.name}</h3>
                <p className="text-sm text-muted mt-1">{result.date} &middot; {result.format}</p>
                <p className="mt-3 text-sm">
                  <span className="text-muted">Winner:</span>{" "}
                  <span className="font-semibold text-yellow-600 dark:text-yellow-400">{result.winner}</span>
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="rounded-3xl bg-gradient-to-r from-yellow-500 to-orange-600 p-10 text-center text-white">
          <h2 className="text-2xl sm:text-3xl font-bold">Want to Host a Private Tournament?</h2>
          <p className="mt-3 text-white/80 max-w-lg mx-auto">
            We offer full event management — brackets, referees, prizes, and catering.
            Contact us to plan your next event.
          </p>
          <Link
            href="/community"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-white text-orange-600 px-8 py-3 font-semibold hover:bg-yellow-100 transition-colors"
          >
            Get in Touch <ArrowRight className="h-4 w-4" />
          </Link>
        </section>
      </div>
    </div>
  );
}
