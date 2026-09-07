"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

type Slide = {
  headline: string;
  highlight: string;
  subtitle: string;
  cta: { label: string; href: string };
  image?: string;
  video?: string;
  gradient: string;
};

const slides: Slide[] = [
  {
    headline: "Play. Eat. Party.",
    highlight: "Repeat.",
    subtitle:
      "Austin's premier pickleball venue — courts, chef-driven food, craft drinks, and vibes all under one roof.",
    cta: { label: "Book a Court", href: "/book-court" },
    image: "/images/hero-night-action.jpg",
    video: "/images/hero-video.mp4",
    gradient: "from-black/80 via-black/50 to-black/30",
  },
  {
    headline: "Fuel Up",
    highlight: "Between Matches.",
    subtitle:
      "Smash burgers, açaí bowls, craft cocktails & the legendary Pickle Margarita. Eat courtside or grab it to go.",
    cta: { label: "See the Menu", href: "/food-drinks" },
    image: "/images/hero-night-rally.jpg",
    gradient: "from-black/80 via-black/50 to-black/30",
  },
  {
    headline: "Your Court. Your Crew.",
    highlight: "Your Zone.",
    subtitle:
      "Open play, clinics, leagues, and private lessons for every level. Find your game at DinkZone.",
    cta: { label: "Browse Programs", href: "/programs" },
    image: "/images/gear-flatlay.jpg",
    gradient: "from-black/80 via-black/60 to-black/30",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const next = useCallback(() => {
    setCurrent((c) => (c + 1) % slides.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((c) => (c - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (paused) return;
    const id = setInterval(next, 5000);
    return () => clearInterval(id);
  }, [paused, next]);

  useEffect(() => {
    if (videoRef.current) {
      if (current === 0) {
        videoRef.current.currentTime = 0;
        videoRef.current.play().catch(() => {});
      } else {
        videoRef.current.pause();
      }
    }
  }, [current]);

  const slide = slides[current];

  return (
    <section
      className="relative min-h-[600px] lg:min-h-[700px] bg-dark-bg overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="Featured highlights"
    >
      {slides.map((s, i) => (
        <div
          key={i}
          className={`absolute inset-0 transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
          aria-hidden={i !== current}
        >
          {s.video && i === 0 ? (
            <video
              ref={videoRef}
              className="absolute inset-0 w-full h-full object-cover"
              src={s.video}
              muted
              loop
              playsInline
              preload="auto"
              poster={s.image}
            />
          ) : s.image ? (
            <Image
              src={s.image}
              alt=""
              fill
              className="object-cover"
              priority={i === 0}
              sizes="100vw"
            />
          ) : null}
        </div>
      ))}

      <div
        className={`absolute inset-0 bg-gradient-to-r ${slide.gradient} transition-colors duration-700`}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex items-center min-h-[600px] lg:min-h-[700px]">
        <div className="max-w-3xl" role="group" aria-roledescription="slide" aria-label={`Slide ${current + 1} of ${slides.length}`}>
          <h1 className="font-[var(--font-display)] text-6xl sm:text-7xl lg:text-9xl text-white tracking-tight leading-[0.9] uppercase drop-shadow-lg">
            {slide.headline}
            <br />
            <span className="text-cta-green">{slide.highlight}</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-white/90 leading-relaxed max-w-xl drop-shadow-md">
            {slide.subtitle}
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <Link
              href={slide.cta.href}
              className="inline-flex items-center justify-center gap-2 rounded-full bg-cta-green text-dark-bg px-8 py-4 text-base font-bold hover:bg-cta-green/90 transition-colors duration-200 shadow-lg"
            >
              {slide.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-white/30 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors duration-200"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-4">
        <button
          onClick={prev}
          aria-label="Previous slide"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors duration-200"
        >
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 ${
                i === current
                  ? "w-8 bg-cta-green"
                  : "w-2.5 bg-white/40 hover:bg-white/60"
              }`}
            />
          ))}
        </div>
        <button
          onClick={next}
          aria-label="Next slide"
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm transition-colors duration-200"
        >
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </section>
  );
}
