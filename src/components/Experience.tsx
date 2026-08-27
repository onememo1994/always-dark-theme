import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { Building2 } from "lucide-react";

const roles = [
  {
    company: "WE3DS Company — Tanta, Egypt",
    role: "Senior Software Developer",
    period: "Jul 2024 — Present",
    desc: "Architected scalable .NET 8 microservices with Clean Architecture and DDD, led the transition to multi-tenant architectures with secure data isolation and hierarchical RBAC, and engineered high-throughput real-time backends with SignalR serving 1,000+ endpoints.",
    tags: [".NET 8", "Microservices", "SignalR", "Multi-tenant RBAC", "Azure DevOps"],
  },
  {
    company: "Freelance — Cairo, Egypt",
    role: "Full Stack Developer",
    period: "Nov 2023 — Jul 2024",
    desc: "Delivered end-to-end applications with Next.js / React on top of .NET Core APIs, integrated third-party REST services for payments, auth and mapping, and containerized services with Docker.",
    tags: ["Next.js", "React", ".NET Core", "REST integrations", "Docker"],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Experience"
          title={<>A track record of <span className="gold-text">shipping in regulated environments</span></>}
        />

        <div className="relative mx-auto max-w-3xl">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent" />

          <div className="space-y-10">
            {roles.map((r, i) => {
              const left = i % 2 === 0;
              return (
                <Reveal key={r.company} delay={i * 0.05}>
                  <div className={`relative md:grid md:grid-cols-2 md:gap-10 ${left ? "" : "md:[&>*:first-child]:order-2"}`}>
                    <div className="hidden md:block" />
                    <div className="relative pl-12 md:pl-0">
                      <span className="absolute left-2 md:left-auto md:right-auto md:-translate-x-1/2 top-5 md:top-7 h-3 w-3 rounded-full bg-[var(--gradient-gold)] gold-glow ring-4 ring-background" style={{ left: undefined }} />
                      <div className="glass rounded-2xl p-6 hover-lift">
                        <div className="flex items-center gap-2 text-xs text-gold">
                          <Building2 className="h-3.5 w-3.5" /> {r.period}
                        </div>
                        <h3 className="mt-2 text-lg font-semibold">{r.role}</h3>
                        <div className="text-sm text-muted-foreground">{r.company}</div>
                        <p className="mt-3 text-sm text-foreground/85 leading-relaxed">{r.desc}</p>
                        <div className="mt-4 flex flex-wrap gap-1.5">
                          {r.tags.map((t) => (
                            <span key={t} className="rounded-full border border-border bg-surface/60 px-2.5 py-0.5 text-[11px] text-muted-foreground">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
