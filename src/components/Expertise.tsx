import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { expertise } from "@/data/expertise";

export function Expertise() {
  return (
    <section id="expertise" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Focus areas"
          title={<>Where I go deep.</>}
          description="Four domains I've spent years inside — enough to design them without a translator."
        />

        <div className="grid gap-5 sm:grid-cols-2">
          {expertise.map((e, i) => (
            <Reveal key={e.title} delay={i * 0.06}>
              <div className="card-interactive group h-full rounded-2xl bg-surface/35 p-7 backdrop-blur-sm">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl hairline bg-brand/10 text-brand-soft transition-colors group-hover:border-border-strong">
                  <e.icon className="h-5 w-5" strokeWidth={1.6} />
                </div>
                <h3 className="mt-5 text-lg font-semibold">{e.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
                <div className="mt-6 flex flex-wrap gap-1.5 border-t border-border pt-5">
                  {e.keywords.map((k) => (
                    <span key={k} className="font-mono text-[11px] text-muted-foreground">
                      {k}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
