import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

function cx(...c: (string | false | null | undefined)[]) {
  return c.filter(Boolean).join(" ");
}

export function Container({
  children,
  className,
  size = "default",
}: {
  children: ReactNode;
  className?: string;
  size?: "default" | "narrow" | "wide";
}) {
  const max =
    size === "narrow" ? "max-w-3xl" : size === "wide" ? "max-w-7xl" : "max-w-6xl";
  return <div className={cx("mx-auto w-full px-4 sm:px-6", max, className)}>{children}</div>;
}

export function Section({
  children,
  className,
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={cx("relative py-12 sm:py-16", className)}>
      {children}
    </section>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = true,
}: {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  center?: boolean;
}) {
  return (
    <div className={cx("mb-10", center && "text-center", "max-w-2xl", center && "mx-auto")}>
      {eyebrow && (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      )}
      <h2 className="font-display text-balance text-2xl font-bold leading-tight text-ink sm:text-3xl">
        {title}
      </h2>
      {subtitle && <p className="mt-3 text-pretty text-base leading-relaxed text-muted">{subtitle}</p>}
    </div>
  );
}

export function Badge({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-bg-soft px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-accent">
      {children}
    </span>
  );
}

type ButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary" | "ghost";
  size?: "md" | "lg";
  className?: string;
} & Omit<ComponentProps<"a">, "href" | "className">;

export function Button({
  children,
  href,
  variant = "primary",
  size = "md",
  className,
  ...rest
}: ButtonProps) {
  const base =
    "inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 active:scale-[0.98]";
  const sizes = size === "lg" ? "px-8 py-3.5 text-base" : "px-6 py-2.5 text-sm";
  const variants = {
    primary: "bg-accent text-white shadow-sm hover:brightness-110",
    secondary: "border border-line bg-card text-ink hover:bg-bg-soft",
    ghost: "text-accent hover:underline",
  }[variant];
  const cls = cx(base, sizes, variants, className);

  if (/^https?:\/\//.test(href)) {
    return (
      <a href={href} className={cls} rel="noopener" target="_blank" {...rest}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Card({
  children,
  className,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}) {
  return (
    <div
      className={cx(
        "rounded-2xl border border-line bg-card p-6 shadow-sm",
        hover && "transition duration-200 hover:-translate-y-0.5 hover:shadow-md",
        className
      )}
    >
      {children}
    </div>
  );
}

export function Stat({ value, label }: { value: ReactNode; label: string }) {
  return (
    <div className="flex flex-col items-center gap-1 text-center">
      <span className="font-display text-2xl font-bold text-accent sm:text-3xl">{value}</span>
      <span className="text-xs uppercase tracking-wider text-muted">{label}</span>
    </div>
  );
}

export function HeroShell({ children, image }: { children: ReactNode; image?: string }) {
  return (
    <Section className="overflow-hidden border-b border-line !py-14 sm:!py-20" style={image ? { background: "var(--bg)" } : undefined}>
      {image ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={image} alt="" className="absolute inset-0 size-full object-cover object-center opacity-25" aria-hidden />
      ) : (
        <div className="hero-dots pointer-events-none absolute inset-0 opacity-40" aria-hidden />
      )}
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl animate-fade-in text-center">{children}</div>
      </Container>
    </Section>
  );
}

export function TrustPills() {
  const items = ["Darmowe konto", "Poważne intencje", "Dyskrecja", "18+ · Polska obsługa"];
  return (
    <div className="mt-8 flex flex-wrap justify-center gap-2">
      {items.map((t) => (
        <span
          key={t}
          className="rounded-full border border-line bg-card px-3 py-1 text-xs font-medium text-muted"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

export function FinalCtaBox({
  title,
  subtitle,
  ctaLabel,
  ctaHref = "/rejestracja",
}: {
  title: string;
  subtitle?: string;
  ctaLabel: string;
  ctaHref?: string;
}) {
  return (
    <Section className="!py-14 sm:!py-20">
      <Container size="narrow">
        <div className="rounded-3xl border border-line bg-gradient-to-b from-bg-soft to-card px-6 py-12 text-center shadow-sm sm:px-12">
          <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">{title}</h2>
          {subtitle && <p className="mx-auto mt-4 max-w-xl text-muted">{subtitle}</p>}
          <Button href={ctaHref} size="lg" className="mt-8">
            {ctaLabel}
          </Button>
          <p className="mt-5 text-xs uppercase tracking-wider text-muted">18+ · Rejestracja bez karty</p>
        </div>
      </Container>
    </Section>
  );
}
