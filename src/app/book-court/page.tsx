"use client";

import { useState } from "react";
import { CalendarCheck, Clock, Users, MapPin, ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, startOfToday } from "date-fns";
import PageHero from "@/components/PageHero";

const courts = [
  { id: 1, name: "Court 1", type: "Indoor", surface: "Pro Cushion" },
  { id: 2, name: "Court 2", type: "Indoor", surface: "Pro Cushion" },
  { id: 3, name: "Court 3", type: "Indoor", surface: "Sport Court" },
  { id: 4, name: "Court 4", type: "Indoor", surface: "Sport Court" },
  { id: 5, name: "Court 5", type: "Outdoor", surface: "Concrete" },
  { id: 6, name: "Court 6", type: "Outdoor", surface: "Concrete" },
  { id: 7, name: "Court 7", type: "Outdoor", surface: "Turf" },
  { id: 8, name: "Court 8", type: "Outdoor", surface: "Turf" },
  { id: 9, name: "Court 9", type: "Indoor", surface: "Pro Cushion" },
  { id: 10, name: "Court 10", type: "Indoor", surface: "Sport Court" },
  { id: 11, name: "Court 11", type: "Outdoor", surface: "Concrete" },
  { id: 12, name: "Court 12", type: "Outdoor", surface: "Turf" },
];

const timeSlots = [
  "6:00 AM", "7:00 AM", "8:00 AM", "9:00 AM", "10:00 AM", "11:00 AM",
  "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM", "4:00 PM", "5:00 PM",
  "6:00 PM", "7:00 PM", "8:00 PM", "9:00 PM",
];

const pricing = [
  { label: "Off-Peak (6am - 12pm)", price: "$20/hr" },
  { label: "Peak (12pm - 6pm)", price: "$30/hr" },
  { label: "Evening (6pm - 10pm)", price: "$25/hr" },
  { label: "Weekend All Day", price: "$35/hr" },
];

const takenSlots = new Set(["Court 2-8:00 AM", "Court 2-9:00 AM", "Court 5-3:00 PM", "Court 1-6:00 PM", "Court 7-10:00 AM"]);

export default function BookCourt() {
  const today = startOfToday();
  const [dateOffset, setDateOffset] = useState(0);
  const [selectedDate, setSelectedDate] = useState(today);
  const [selectedCourt, setSelectedCourt] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [duration, setDuration] = useState(1);
  const [filter, setFilter] = useState<"all" | "indoor" | "outdoor">("all");

  const dates = Array.from({ length: 7 }, (_, i) => addDays(today, i + dateOffset));

  const filteredCourts = courts.filter(
    (c) => filter === "all" || c.type.toLowerCase() === filter
  );

  const court = courts.find((c) => c.id === selectedCourt);

  return (
    <div className="bg-dark-bg min-h-screen">
      <PageHero
        title="Book a Court"
        subtitle="12 courts available — indoor and outdoor. Reserve your spot in seconds."
        icon={<CalendarCheck className="h-10 w-10 text-cta-green" aria-hidden="true" />}
      />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {/* Date picker */}
            <fieldset>
              <legend className="text-lg font-semibold flex items-center gap-2 text-white">
                <CalendarCheck className="h-5 w-5 text-cta-green" aria-hidden="true" /> Select Date
              </legend>
              <div className="mt-4 flex items-center gap-2">
                <button
                  onClick={() => setDateOffset(Math.max(0, dateOffset - 7))}
                  disabled={dateOffset === 0}
                  aria-label="Previous week"
                  className="p-2 rounded-lg border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 transition-colors duration-200"
                >
                  <ChevronLeft className="h-4 w-4" aria-hidden="true" />
                </button>
                <div className="flex gap-2 overflow-x-auto flex-1" role="radiogroup" aria-label="Select date">
                  {dates.map((date) => {
                    const isSelected = format(selectedDate, "yyyy-MM-dd") === format(date, "yyyy-MM-dd");
                    return (
                      <button
                        key={date.toISOString()}
                        onClick={() => setSelectedDate(date)}
                        role="radio"
                        aria-checked={isSelected}
                        aria-label={format(date, "EEEE, MMMM d")}
                        className={`flex-shrink-0 flex flex-col items-center px-4 py-3 rounded-xl border text-sm transition-colors duration-200 ${
                          isSelected
                            ? "border-cta-green bg-cta-green/10 text-cta-green font-semibold"
                            : "border-white/10 text-white/70 hover:border-cta-green/30"
                        }`}
                      >
                        <span className="text-xs text-dark-muted">{format(date, "EEE")}</span>
                        <span className="text-lg font-semibold">{format(date, "d")}</span>
                        <span className="text-xs text-dark-muted">{format(date, "MMM")}</span>
                      </button>
                    );
                  })}
                </div>
                <button
                  onClick={() => setDateOffset(dateOffset + 7)}
                  aria-label="Next week"
                  className="p-2 rounded-lg border border-white/10 text-white hover:bg-white/10 transition-colors duration-200"
                >
                  <ChevronRight className="h-4 w-4" aria-hidden="true" />
                </button>
              </div>
            </fieldset>

            {/* Court selection */}
            <fieldset>
              <legend className="text-lg font-semibold flex items-center gap-2 text-white">
                <MapPin className="h-5 w-5 text-cta-green" aria-hidden="true" /> Select Court
              </legend>
              <div className="mt-3 flex gap-2" role="radiogroup" aria-label="Filter court type">
                {(["all", "indoor", "outdoor"] as const).map((f) => (
                  <button
                    key={f}
                    onClick={() => setFilter(f)}
                    role="radio"
                    aria-checked={filter === f}
                    className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize transition-colors duration-200 ${
                      filter === f
                        ? "bg-cta-green text-dark-bg"
                        : "bg-dark-surface text-dark-muted hover:bg-white/10"
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
                {filteredCourts.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCourt(c.id)}
                    aria-pressed={selectedCourt === c.id}
                    className={`p-4 rounded-xl border text-left transition-all duration-200 ${
                      selectedCourt === c.id
                        ? "border-cta-green bg-cta-green/10 ring-2 ring-cta-green/20"
                        : "border-white/10 hover:border-cta-green/30 bg-dark-surface"
                    }`}
                  >
                    <div className="font-semibold text-sm text-white">{c.name}</div>
                    <div className="text-xs text-dark-muted mt-1">{c.type} &middot; {c.surface}</div>
                  </button>
                ))}
              </div>
            </fieldset>

            {/* Time slots */}
            {selectedCourt && (
              <fieldset>
                <legend className="text-lg font-semibold flex items-center gap-2 text-white">
                  <Clock className="h-5 w-5 text-cta-green" aria-hidden="true" /> Select Time
                </legend>
                <div className="mt-4 grid grid-cols-4 sm:grid-cols-8 gap-2" role="radiogroup" aria-label="Select time">
                  {timeSlots.map((slot) => {
                    const key = `${court?.name}-${slot}`;
                    const taken = takenSlots.has(key);
                    return (
                      <button
                        key={slot}
                        disabled={taken}
                        onClick={() => setSelectedTime(slot)}
                        role="radio"
                        aria-checked={selectedTime === slot}
                        aria-label={`${slot}${taken ? " (unavailable)" : ""}`}
                        className={`py-2.5 px-2 rounded-lg text-xs font-medium transition-colors duration-200 ${
                          taken
                            ? "bg-red-900/30 text-red-400/50 line-through"
                            : selectedTime === slot
                            ? "bg-cta-green text-dark-bg"
                            : "bg-dark-surface text-white/70 hover:bg-white/10"
                        }`}
                      >
                        {slot}
                      </button>
                    );
                  })}
                </div>
              </fieldset>
            )}

            {/* Duration */}
            {selectedTime && (
              <fieldset>
                <legend className="text-lg font-semibold flex items-center gap-2 text-white">
                  <Users className="h-5 w-5 text-cta-green" aria-hidden="true" /> Duration
                </legend>
                <div className="mt-3 flex gap-3" role="radiogroup" aria-label="Select duration">
                  {[1, 1.5, 2].map((d) => (
                    <button
                      key={d}
                      onClick={() => setDuration(d)}
                      role="radio"
                      aria-checked={duration === d}
                      className={`px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200 ${
                        duration === d
                          ? "bg-cta-green text-dark-bg"
                          : "bg-dark-surface text-white/70 hover:bg-white/10"
                      }`}
                    >
                      {d} hr{d > 1 ? "s" : ""}
                    </button>
                  ))}
                </div>
              </fieldset>
            )}

            {/* Confirm */}
            {selectedCourt && selectedTime && (
              <div className="rounded-2xl bg-dark-surface border border-cta-green/20 p-6">
                <h3 className="font-[var(--font-display)] text-2xl text-white uppercase">Booking Summary</h3>
                <div className="mt-3 grid grid-cols-2 gap-3 text-sm text-dark-muted">
                  <div>Date: <span className="text-white font-medium">{format(selectedDate, "EEEE, MMM d")}</span></div>
                  <div>Court: <span className="text-white font-medium">{court?.name}</span></div>
                  <div>Time: <span className="text-white font-medium">{selectedTime}</span></div>
                  <div>Duration: <span className="text-white font-medium">{duration} hr{duration > 1 ? "s" : ""}</span></div>
                </div>
                <button className="mt-5 w-full sm:w-auto rounded-full bg-cta-green text-dark-bg px-8 py-3 font-bold hover:bg-cta-green/90 transition-colors duration-200">
                  Confirm Reservation
                </button>
              </div>
            )}
          </div>

          {/* Pricing sidebar */}
          <div className="space-y-6">
            <div className="rounded-2xl border border-white/10 p-6 bg-dark-surface">
              <h3 className="font-[var(--font-display)] text-2xl text-white uppercase">Court Rates</h3>
              <ul className="mt-4 space-y-3">
                {pricing.map((p) => (
                  <li key={p.label} className="flex justify-between text-sm">
                    <span className="text-dark-muted">{p.label}</span>
                    <span className="font-semibold text-white">{p.price}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-4 pt-4 border-t border-white/10 text-xs text-dark-muted">
                Members get 20% off all court rentals. Paddle rentals available at $5/session.
              </div>
            </div>

            <div className="rounded-2xl border border-white/10 p-6 bg-dark-surface">
              <h3 className="font-[var(--font-display)] text-2xl text-white uppercase">Membership Plans</h3>
              <div className="mt-4 space-y-4">
                <div className="p-4 rounded-xl bg-dark-bg border border-white/5">
                  <div className="font-semibold text-white">Basic</div>
                  <div className="text-2xl font-bold text-cta-green mt-1">$49<span className="text-sm font-normal text-dark-muted">/mo</span></div>
                  <ul className="mt-2 text-xs text-dark-muted space-y-1">
                    <li>&#x2713; 4 free court hours/month</li>
                    <li>&#x2713; 10% pro shop discount</li>
                  </ul>
                </div>
                <div className="p-4 rounded-xl bg-cta-green/5 border border-cta-green/20">
                  <div className="font-semibold text-white">Premium</div>
                  <div className="text-2xl font-bold text-cta-green mt-1">$99<span className="text-sm font-normal text-dark-muted">/mo</span></div>
                  <ul className="mt-2 text-xs text-dark-muted space-y-1">
                    <li>&#x2713; Unlimited court access</li>
                    <li>&#x2713; 20% pro shop discount</li>
                    <li>&#x2713; Free tournament entry</li>
                    <li>&#x2713; Guest passes (2/mo)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
