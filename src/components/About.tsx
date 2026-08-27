import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { principles } from "@/data/expertise";
import portrait from "@/assets/portrait-cutout.webp";

export function About() {
  return (
    <section id="about" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-6xl px-5 md:px-8">
        <SectionHeading
          eyebrow="About"
          title={<>Engineering for trust and scale.</>}
        />

        <div className="grid items-start gap-12 lg:grid-cols-[1.25fr_1fr]">
          <Reveal className="flex flex-col justify-start space-y-5 text-[15px] leading-relaxed text-muted-foreground md:text-base">
            <p>
              I&apos;m Mostafa Samir, a Senior Full Stack Engineer with 4+ years building
              high-performance microservices and modern web architectures. My focus is systems that
              must stay correct under load — the kind banking and fintech environments depend on.
            </p>
            <p>
              Most of my work lives in .NET 8 and ASP.NET Core, structured with Clean Architecture
              and DDD, backed by SQL Server, PostgreSQL and Redis. I&apos;ve led transitions to
              multi-tenant architectures with secure data isolation and hierarchical RBAC, and built
              real-time backends with SignalR serving 1,000+ endpoints.
            </p>
            <p>
              On the frontend I ship with Angular, React and Next.js in TypeScript. Reliability,
              security and measurable performance are not features I add later — a 300% database
              performance improvement came from treating them as part of the design.
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col rounded-2xl hairline bg-surface/35 p-5 backdrop-blur-sm">
              <div className="relative mb-4 overflow-hidden rounded-xl hairline bg-brand/5">
                <img
                  src={portrait}
                  alt="Portrait of Mostafa Samir, Senior Full Stack Engineer"
                  loading="lazy"
                  width={640}
                  height={720}
                  className="h-20 w-full object-cover object-top"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
              </div>
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full hairline bg-brand/10 font-mono text-sm text-brand-soft">
                  MS
                </div>
                <div>
                  <div className="font-semibold">Mostafa Samir</div>
                  <div className="text-sm text-muted-foreground">Banking &amp; Fintech Systems</div>
                </div>
              </div>

              <div className="mono-label mt-5">Principles</div>
              <div className="mt-3 flex flex-wrap gap-2">
                {principles.map((p) => (
                  <span key={p} className="rounded-lg hairline bg-background/50 px-3 py-1.5 text-sm">
                    {p}
                  </span>
                ))}
              </div>

              <div className="mt-4 flex flex-wrap items-center gap-x-4 gap-y-1 border-t border-border pt-3 text-sm text-muted-foreground">
                <span>Based in <span className="text-foreground">Tanta, Egypt · Remote</span></span>
                <span>Engagements <span className="text-foreground">Full-time · Contract</span></span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
