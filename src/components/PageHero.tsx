import type { ReactNode } from "react";
import Image from "next/image";

type PageHeroProps = {
  title: string;
  subtitle: string;
  icon?: ReactNode;
  backgroundImage?: string;
};

export default function PageHero({ title, subtitle, icon, backgroundImage }: PageHeroProps) {
  return (
    <div className="relative bg-dark-bg py-20 sm:py-24 overflow-hidden">
      {backgroundImage && (
        <>
          <Image
            src={backgroundImage}
            alt=""
            fill
            className="object-cover opacity-50"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-bg/90 via-dark-bg/60 to-dark-bg/40" />
        </>
      )}
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h1 className="font-[var(--font-display)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white flex items-center gap-4 uppercase tracking-tight">
          {icon}
          {title}
        </h1>
        <p className="mt-4 text-lg sm:text-xl text-dark-muted max-w-2xl">
          {subtitle}
        </p>
      </div>
    </div>
  );
}
