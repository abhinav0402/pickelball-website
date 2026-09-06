import type { ReactNode } from "react";

type PageHeroProps = {
  title: string;
  subtitle: string;
  icon?: ReactNode;
};

export default function PageHero({ title, subtitle, icon }: PageHeroProps) {
  return (
    <div className="bg-dark-bg py-20 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
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
