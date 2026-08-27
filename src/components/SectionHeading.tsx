import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal
      className={`mb-14 max-w-2xl ${align === "center" ? "mx-auto text-center" : ""}`}
    >
      <span className="mono-label inline-flex items-center gap-2">
        <span className="h-1 w-1 rounded-full bg-brand-soft" />
        {eyebrow}
      </span>
      <h2 className="mt-5 text-3xl md:text-[2.75rem] md:leading-[1.1] font-semibold">{title}</h2>
      {description && (
        <p className="mt-4 text-muted-foreground leading-relaxed md:text-lg">{description}</p>
      )}
    </Reveal>
  );
}
