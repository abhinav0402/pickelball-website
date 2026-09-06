import type { ReactNode } from "react";

type ActivityCardProps = {
  icon: ReactNode;
  title: string;
  description: string;
};

export default function ActivityCard({ icon, title, description }: ActivityCardProps) {
  return (
    <div className="group rounded-2xl bg-dark-surface border border-white/10 p-8 hover:border-cta-green/40 hover:shadow-lg hover:shadow-cta-green/5 transition-all duration-200">
      <div className="inline-flex rounded-xl p-3 bg-cta-green/10 text-cta-green">
        {icon}
      </div>
      <h3 className="mt-5 text-lg font-semibold text-white group-hover:text-cta-green transition-colors duration-200">
        {title}
      </h3>
      <p className="mt-2 text-sm text-dark-muted leading-relaxed">
        {description}
      </p>
    </div>
  );
}
