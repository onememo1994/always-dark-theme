import { useCallback, useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { X } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";
import { principles } from "@/data/expertise";
import portrait from "@/assets/portrait-cutout.webp";

export function About() {
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const closeLightbox = useCallback(() => setLightboxOpen(false), []);

  useEffect(() => {
    if (!lightboxOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightboxOpen, closeLightbox]);

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
              <div className="flex items-center gap-4">
                <button
                  type="button"
                  onClick={() => setLightboxOpen(true)}
                  aria-label="View Mostafa Samir's portrait in full size"
                  aria-haspopup="dialog"
                  className="group relative h-16 w-16 shrink-0 cursor-zoom-in overflow-hidden rounded-2xl hairline transition-transform duration-200 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-soft"
                >
                  <img
                    src={portrait}
                    alt="Mostafa Samir portrait"
                    width={64}
                    height={64}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                </button>
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

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label="Mostafa Samir portrait, full size"
            className="fixed inset-0 z-[80] flex items-center justify-center p-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
          >
            <motion.button
              type="button"
              aria-label="Close portrait preview"
              onClick={closeLightbox}
              className="absolute inset-0 cursor-zoom-out bg-background/80 backdrop-blur-md"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <motion.div
              className="relative max-h-[80vh] w-full max-w-md"
              initial={{ scale: 0.6, opacity: 0, y: 24 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.75, opacity: 0, y: 12 }}
              transition={{ type: "spring", stiffness: 300, damping: 26 }}
            >
              <img
                src={portrait}
                alt="Mostafa Samir portrait, full size"
                width={640}
                height={720}
                className="h-auto w-full rounded-2xl object-contain shadow-2xl ring-1 ring-border"
              />
              <motion.button
                type="button"
                onClick={closeLightbox}
                aria-label="Close portrait preview"
                className="absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-surface text-foreground shadow-lg ring-1 ring-border transition-colors hover:bg-brand/20"
                initial={{ scale: 0, rotate: -90 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 90 }}
                transition={{ delay: 0.1, type: "spring", stiffness: 400, damping: 20 }}
              >
                <X className="h-5 w-5" />
              </motion.button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
