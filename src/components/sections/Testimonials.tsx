import { useState } from "react";
import { useI18n } from "@/lib/i18n";
import { ChevronLeft, ChevronRight, Play, Award, Compass, ShieldCheck } from "lucide-react";

export function Testimonials() {
  const { tr } = useI18n();
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section id="awards" className="w-full bg-background py-20 px-4 sm:px-8 md:px-12 text-foreground select-none">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Column: Title & Controls (4 cols) */}
          <div className="lg:col-span-4 flex flex-col justify-between h-full">
            <div>
              <span className="font-sans text-xs font-black tracking-[0.2em] text-foreground/80 uppercase block mb-3">
                No 1/3
              </span>
              <h2 className="font-['Oswald',sans-serif] text-4xl sm:text-5xl font-bold text-foreground leading-tight mb-8">
                {tr("awards.title1")}
                <br />
                {tr("awards.title2")}
              </h2>
            </div>

            {/* Pagination Controls */}
            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveIdx((i) => (i > 0 ? i - 1 : 2))}
                className="grid size-11 place-items-center rounded-xl bg-foreground/10 border border-border text-foreground hover:bg-foreground/20 transition-all"
                aria-label={tr("awards.prev")}
              >
                <ChevronLeft className="size-5 rtl:rotate-180" />
              </button>
              <button
                onClick={() => setActiveIdx((i) => (i < 2 ? i + 1 : 0))}
                className="grid size-11 place-items-center rounded-xl bg-foreground/10 border border-border text-foreground hover:bg-foreground/20 transition-all"
                aria-label={tr("awards.next")}
              >
                <ChevronRight className="size-5 rtl:rotate-180" />
              </button>
            </div>
          </div>

          {/* Center Column: Featured Award Card (4 cols) */}
          <div className="lg:col-span-4">
            <div className="relative rounded-2xl bg-card p-8 border border-border shadow-[var(--shadow-glow)] flex flex-col items-center text-center">
              <span className="rounded-xl bg-foreground/10 px-4 py-1 font-sans text-[10px] font-black tracking-widest text-primary uppercase mb-6 border border-border">
                2023
              </span>

              <div className="grid size-16 place-items-center rounded-xl bg-foreground/15 text-foreground mb-6 border border-border shadow-inner">
                <Award className="size-8 text-primary" />
              </div>

              <h3 className="font-['Oswald',sans-serif] text-2xl font-bold text-card-foreground mb-3 leading-tight">
                {tr("awards.azure.title")}
              </h3>

              <p className="font-sans text-xs text-card-foreground/85 leading-relaxed mb-8 max-w-xs">
                {tr("awards.azure.body")}
              </p>

              <a
                href="#learn"
                className="group inline-flex items-center gap-3 rounded-xl bg-background px-6 py-3 shadow-md border border-border transition-transform hover:scale-105"
              >
                <span className="grid size-6 place-items-center rounded-xl bg-primary text-primary-foreground">
                  <Play className="size-3 fill-primary-foreground text-primary-foreground ms-0.5" />
                </span>
                <span className="font-sans text-xs font-black tracking-[0.2em] text-foreground uppercase">
                  {tr("awards.learnMore")}
                </span>
              </a>
            </div>
          </div>

          {/* Right Column: 2 Stacked Award Cards (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-5">
            {/* Award Item 1 */}
            <div className="rounded-2xl bg-card p-6 border border-border shadow-md flex flex-col items-center text-center hover:bg-card/90 transition-all">
              <div className="grid size-12 place-items-center rounded-xl bg-foreground/10 text-foreground mb-3">
                <Compass className="size-6 text-primary" />
              </div>
              <h4 className="font-['Oswald',sans-serif] text-lg font-bold text-card-foreground mb-3 leading-tight max-w-[220px]">
                {tr("awards.bsc")}
              </h4>
              <span className="rounded-xl bg-foreground/10 px-3 py-0.5 font-sans text-[9px] font-black tracking-widest text-primary uppercase border border-border">
                2021
              </span>
            </div>

            {/* Award Item 2 */}
            <div className="rounded-2xl bg-card p-6 border border-border shadow-md flex flex-col items-center text-center hover:bg-card/90 transition-all">
              <div className="grid size-12 place-items-center rounded-xl bg-foreground/10 text-foreground mb-3">
                <ShieldCheck className="size-6 text-primary" />
              </div>
              <h4 className="font-['Oswald',sans-serif] text-lg font-bold text-card-foreground mb-3 leading-tight max-w-[220px]">
                {tr("awards.ddd")}
              </h4>
              <span className="rounded-xl bg-foreground/10 px-3 py-0.5 font-sans text-[9px] font-black tracking-widest text-primary uppercase border border-border">
                2024
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
