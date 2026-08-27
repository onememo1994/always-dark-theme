import { useState } from "react";
import { Reveal } from "./Reveal";
import { projects } from "@/data/projects";
import {
  ArrowUpRight,
  Banknote,
  CreditCard,
  Landmark,
  LineChart,
  Wallet,
  type LucideIcon,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import marketplaceImg from "@/assets/project-marketplace.jpg";
import realtimeImg from "@/assets/project-realtime.jpg";
import multitenantImg from "@/assets/project-multitenant.jpg";
import nextjsImg from "@/assets/project-nextjs.jpg";

const icons: LucideIcon[] = [Landmark, CreditCard, LineChart, Banknote, Wallet];

const projectImages: Record<string, string> = {
  "1": marketplaceImg,
  "2": realtimeImg,
  "3": multitenantImg,
  "4": nextjsImg,
};

export function Projects() {
  const [active, setActive] = useState(0);
  const current = projects[active];

  return (
    <section id="projects" className="py-24 md:py-32 relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        {/* Header */}
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div>
              <span className="mono-label inline-flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand)]" />
                Featured work
              </span>
              <h2 className="mt-5 text-4xl leading-[1.05] tracking-tight md:text-6xl">
                this is not a portfolio.
                <br />
                <span className="brand-text">it&apos;s the foundation.</span>
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="max-w-md text-sm leading-relaxed text-muted-foreground md:text-base lg:mt-14">
              Banking cores, payment rails, and developer-first tooling — architected end
              to end and shipped to production for the next generation of fintech.
            </p>
          </Reveal>
        </div>

        {/* Body */}
        <div className="mt-14 grid gap-10 lg:mt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.05fr)] lg:gap-16">
          {/* Capability list */}
          <div className="flex flex-col">
            {projects.map((p, i) => {
              const Icon = icons[i % icons.length];
              const isActive = i === active;
              return (
                <button
                  key={p.id}
                  onClick={() => setActive(i)}
                  aria-expanded={isActive}
                  className="group relative border-t border-border py-5 text-left last:border-b"
                >
                  {isActive && (
                    <motion.span
                      layoutId="project-tab-active"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      className="pointer-events-none absolute inset-x-0 inset-y-0 -z-10 rounded-lg bg-[var(--brand)]/[0.06]"
                    />
                  )}
                  {isActive && (
                    <motion.span
                      layoutId="project-tab-bar"
                      transition={{ type: "spring", stiffness: 380, damping: 34 }}
                      className="pointer-events-none absolute left-0 top-0 h-full w-[2px] rounded-full bg-[var(--brand)]"
                    />
                  )}
                  <div className="flex items-center gap-4 px-3">
                    <motion.span
                      animate={{ scale: isActive ? 1.1 : 1, rotate: isActive ? -6 : 0 }}
                      transition={{ type: "spring", stiffness: 400, damping: 22 }}
                      className="shrink-0"
                    >
                      <Icon
                        className={`h-5 w-5 transition-colors duration-300 ${
                          isActive ? "text-[var(--brand)]" : "text-muted-foreground"
                        }`}
                      />
                    </motion.span>
                    <span
                      className={`font-display text-base uppercase tracking-[0.14em] transition-all duration-300 md:text-lg ${
                        isActive
                          ? "translate-x-0.5 text-foreground"
                          : "text-muted-foreground group-hover:translate-x-0.5 group-hover:text-foreground"
                      }`}
                    >
                      {p.category}
                    </span>
                    <ArrowUpRight
                      className={`ml-auto h-4 w-4 transition-all duration-300 ${
                        isActive
                          ? "opacity-100 text-[var(--brand)]"
                          : "-translate-x-1 opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                      }`}
                    />
                  </div>
                  <AnimatePresence initial={false}>
                    {isActive && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.2, 0.8, 0.2, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pl-12 pr-4 pt-3 text-sm leading-relaxed text-muted-foreground">
                          {p.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              );
            })}
          </div>

          {/* Preview panel */}
          <Reveal delay={0.1}>
            <div className="relative pt-6">
              <motion.div
                key={`glow-${current.id}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.7 }}
                transition={{ duration: 0.6 }}
                className="absolute -inset-6 -z-10 ambient rounded-[2rem]"
              />

              {/* stacked layers behind the window */}
              <motion.div
                aria-hidden
                animate={{ background: `color-mix(in oklab, ${current.accent} 22%, transparent)` }}
                transition={{ duration: 0.5 }}
                className="pointer-events-none absolute left-8 right-8 top-0 h-24 rounded-t-[1.4rem] ring-1 ring-black/5"
              />
              <motion.div
                aria-hidden
                animate={{ background: `color-mix(in oklab, ${current.accent} 38%, transparent)` }}
                transition={{ duration: 0.5 }}
                className="pointer-events-none absolute left-4 right-4 top-3 h-24 rounded-t-[1.6rem] ring-1 ring-black/5"
              />

              <motion.div
                layout
                transition={{ type: "spring", stiffness: 220, damping: 32 }}
                className="relative grid overflow-hidden rounded-[1.6rem] bg-white text-[#111] shadow-[var(--shadow-deep)] ring-1 ring-black/10"
              >
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.article
                    key={current.id}
                    initial={{ opacity: 0, y: 24, scale: 0.98, filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: -18, scale: 0.98, filter: "blur(6px)" }}
                    transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="col-start-1 row-start-1"
                  >
                    <div className="grid md:grid-cols-2">
                      {/* left pane */}
                      <div className="border-b border-black/[0.07] p-5 md:border-b-0 md:border-r md:p-6">
                        <div className="flex items-center gap-2 text-[11px] text-black/50">
                          <ArrowUpRight className="h-3.5 w-3.5 -rotate-135" />
                          <span className="h-4 w-4 rounded-full" style={{ background: current.accent }} />
                          <span className="font-medium text-black/70">{current.category}</span>
                        </div>

                        <p className="mt-6 text-[11px] text-black/45">{current.title.split("—")[0].trim()}</p>
                        <p className="mt-1 text-xl font-semibold tracking-tight">
                          {current.metrics[0].value}
                        </p>

                        <motion.div
                          initial={{ scale: 0.94, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ duration: 0.5, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
                          className="relative mt-4 aspect-square w-full overflow-hidden rounded-md"
                          style={{ background: current.accent }}
                        >
                          <img
                            src={projectImages[current.id] ?? projectImages["1"]}
                            alt={`${current.title} interface preview`}
                            loading="lazy"
                            width={640}
                            height={640}
                            className="h-full w-full object-cover opacity-90"
                          />
                          <div className="grid-lines pointer-events-none absolute inset-0 rounded-md opacity-25" />
                        </motion.div>

                        <div className="mt-4 flex items-center gap-1.5 text-[9px] text-black/40">
                          <span>Powered by</span>
                          <span className="font-semibold text-black/70">{current.tech[0]}</span>
                          <span className="ml-auto">Terms · Privacy</span>
                        </div>
                      </div>

                      {/* right pane */}
                      <div className="p-5 md:p-6">
                        <p className="text-[11px] font-medium text-black/70">Project overview</p>

                        <div className="mt-3 space-y-2 rounded-md border border-black/[0.08] p-3">
                          {current.metrics.map((m, mi) => (
                            <motion.div
                              key={m.label}
                              initial={{ opacity: 0, x: 10 }}
                              animate={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.35, delay: 0.1 + mi * 0.06 }}
                              className="flex items-start justify-between gap-3"
                            >
                              <span className="text-[10px] uppercase tracking-wider text-black/40">
                                {m.label}
                              </span>
                              <span className="text-[11px] font-medium text-black/80">{m.value}</span>
                            </motion.div>
                          ))}
                          <div className="flex items-start justify-between gap-3 border-t border-black/[0.06] pt-2">
                            <span className="text-[10px] uppercase tracking-wider text-black/40">Stack</span>
                            <span className="max-w-[60%] text-right text-[11px] leading-snug text-black/70">
                              {current.tech.join(", ")}
                            </span>
                          </div>
                        </div>

                        <p className="mt-3 line-clamp-3 text-[11px] leading-relaxed text-black/50">
                          {current.description}
                        </p>

                        <a
                          href="#contact"
                          className="group/cta mt-4 flex h-10 w-full items-center justify-center gap-2 rounded-md bg-[#111] text-[12px] font-medium text-white transition-all hover:gap-3 hover:opacity-90"
                        >
                          Discuss this project
                          <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover/cta:-translate-y-0.5 group-hover/cta:translate-x-0.5" />
                        </a>
                        <p className="mt-2 text-center text-[10px] text-black/40">View full case study</p>
                      </div>
                    </div>
                  </motion.article>
                </AnimatePresence>
              </motion.div>
            </div>

          </Reveal>

        </div>
      </div>
    </section>
  );
}
