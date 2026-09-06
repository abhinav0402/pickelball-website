type MarqueeProps = {
  text: string;
  variant?: "dark" | "light" | "accent";
};

const variantStyles = {
  dark: "bg-dark-bg text-white/80",
  light: "bg-surface text-foreground/70",
  accent: "bg-primary text-white",
};

export default function Marquee({ text, variant = "dark" }: MarqueeProps) {
  const repeated = `${text} • `.repeat(12);

  return (
    <div
      className={`overflow-hidden py-4 ${variantStyles[variant]}`}
      aria-hidden="true"
    >
      <div
        className="whitespace-nowrap font-[var(--font-display)] text-2xl sm:text-3xl uppercase tracking-wider"
        style={{ animation: "marquee 30s linear infinite" }}
      >
        <span>{repeated}</span>
      </div>
    </div>
  );
}
