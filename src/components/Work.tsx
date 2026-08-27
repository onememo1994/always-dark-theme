import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { work } from "@/data/work";
import { ArrowUpRight } from "lucide-react";

export function Work() {
  return (
    <section id="work" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="Selected work"
          title={<>Projects that move money.</>}
          description="Six engagements across core banking, payments, compliance and lending. Each one shipped into production with the teams who run it."
        />

        <div className="grid gap-5 md:grid-cols-6">
          {work.map((p, i) => (
            <Reveal
              key={p.id}
              delay={i * 0.05}
              className={p.featured ? "md:col-span-6" : "md:col-span-3"}
            >
              <article className="card-interactive group h-full overflow-hidden rounded-2xl bg-surface/35 backdrop-blur-sm">
                <div className={p.featured ? "grid md:grid-cols-2" : ""}>
                  {/* Visual */}
                  <div className="relative border-b border-border p-6 md:p-7 md:border-b-0 md:border-r">
                    <div className="pointer-events-none absolute inset-0 ambient opacity-70" />
                    <div className="relative rounded-xl hairline bg-background/60 p-5">
                      <div className="mono-label">{p.tags[0]}</div>
                      <div className="mt-4 flex items-end gap-2">
                        <span className="text-3xl font-semibold tracking-tight">{p.visual.metric}</span>
                        <span className="pb-1 text-xs text-muted-foreground">{p.visual.metricLabel}</span>
                      </div>
                      <div className="mt-5 space-y-px overflow-hidden rounded-lg hairline">
                        {p.visual.rows.map((r) => (
                          <div
                            key={r.label}
                            className="flex items-center justify-between bg-surface/50 px-3.5 py-2.5 text-[13px]"
                          >
                            <span className="text-muted-foreground">{r.label}</span>
                            <span className="font-mono text-[12px] text-brand-soft">{r.value}</span>
                          </div>
                        ))}
                      </div>
                      <div className="mt-5 flex gap-1.5">
                        {[38, 62, 45, 78, 54, 88, 70].map((h, idx) => (
                          <div
                            key={idx}
                            style={{ height: `${h / 2}px` }}
                            className="w-full self-end rounded-sm bg-brand/25 transition-all duration-500 group-hover:bg-brand/45"
                          />
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex flex-col p-6 md:p-7">
                    <div className="flex items-start justify-between gap-4">
                      <h3 className="text-lg md:text-xl font-semibold">{p.title}</h3>
                      <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full hairline text-muted-foreground transition-all group-hover:border-border-strong group-hover:text-foreground">
                        <ArrowUpRight className="h-4 w-4" />
                      </span>
                    </div>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {p.description}
                    </p>
                    <div className="mt-5 flex flex-wrap gap-1.5">
                      {p.tags.map((t) => (
                        <span
                          key={t}
                          className="rounded-md hairline px-2.5 py-1 text-[11px] text-muted-foreground"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                    <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-[12px] text-muted-foreground">
                      <span>{p.role}</span>
                      <span className="font-mono">{p.year}</span>
                    </div>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
