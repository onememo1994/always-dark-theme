import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Building2, Layers, GraduationCap, ArrowRight } from "lucide-react";
import { useI18n } from "@/lib/i18n";

type TabId = "work" | "projects" | "education";

interface HighlightItem {
  id: string;
  year: string;
  tab: TabId;
  featured?: boolean;
}

const highlights: HighlightItem[] = [
  { id: "we3ds", year: "2024", tab: "work", featured: true },
  { id: "freelance", year: "2023", tab: "work" },
  { id: "platform", year: "2025", tab: "projects", featured: true },
  { id: "iot", year: "2024", tab: "projects" },
  { id: "devops", year: "2024", tab: "projects" },
  { id: "degree", year: "2021", tab: "education", featured: true },
  { id: "arch", year: "2022", tab: "education" },
];

const tabs: { id: TabId; Icon: typeof Building2 }[] = [
  { id: "work", Icon: Building2 },
  { id: "projects", Icon: Layers },
  { id: "education", Icon: GraduationCap },
];

export function ExperiencePreview() {
  const [activeTab, setActiveTab] = useState<TabId>("work");
  const { tr } = useI18n();

  const items = useMemo(() => highlights.filter((h) => h.tab === activeTab), [activeTab]);
  const ActiveIcon = tabs.find((t) => t.id === activeTab)!.Icon;

  return (
    <section id="events" className="w-full bg-background py-20 px-4 sm:px-8 md:px-12 text-foreground">
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight">
          {tr("events.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base text-muted-foreground">
          {tr("events.desc")}
        </p>

        {/* Tabs */}
        <div role="tablist" aria-label={tr("events.title")} className="mt-10 mb-10 flex flex-wrap items-center justify-center gap-3">
          {tabs.map(({ id, Icon }) => {
            const active = activeTab === id;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={active}
                onClick={() => setActiveTab(id)}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 font-sans text-xs font-black uppercase tracking-[0.18em] transition-all ${
                  active
                    ? "bg-foreground text-background shadow-md"
                    : "border border-border bg-foreground/5 text-foreground hover:bg-foreground/15"
                }`}
              >
                <Icon className="size-3.5" />
                {tr(`events.tab.${id}`)}
              </button>
            );
          })}
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-4">
          {items.length === 0 && (
            <p className="text-center text-sm text-muted-foreground">{tr("events.empty")}</p>
          )}

          {items.map(({ id, year, featured }) => (
            <article
              key={id}
              className={`flex flex-col gap-4 rounded-2xl p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 transition-all duration-300 ${
                featured
                  ? "bg-foreground text-background shadow-[var(--shadow-glow)]"
                  : "border border-border bg-card text-card-foreground shadow-md hover:bg-card/90"
              }`}
            >
              <div className="flex items-center gap-5 sm:gap-7">
                <span dir="ltr" className="min-w-10 font-['Oswald',sans-serif] text-sm font-bold opacity-80">
                  {year}
                </span>

                <div
                  className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                    featured ? "bg-primary text-primary-foreground" : "bg-foreground/10 text-primary"
                  }`}
                >
                  <ActiveIcon className="size-4" />
                </div>

                <div className="min-w-0">
                  <h3 className="font-['Oswald',sans-serif] text-lg sm:text-xl font-bold leading-tight tracking-tight">
                    {tr(`events.item.${id}.name`)}
                  </h3>
                  <p className={`mt-1 text-xs font-semibold ${featured ? "opacity-80" : "text-muted-foreground"}`}>
                    {tr(`events.item.${id}.location`)}
                  </p>
                </div>
              </div>

              <p
                className={`text-xs font-bold sm:max-w-[18rem] sm:text-end ${
                  featured ? "opacity-90" : "text-muted-foreground"
                }`}
              >
                {tr(`events.item.${id}.topic`)}
              </p>
            </article>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            to="/experience"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-foreground/5 px-6 py-3 font-sans text-xs font-black uppercase tracking-[0.18em] transition-colors hover:bg-foreground/15"
          >
            {tr("events.cta")}
            <ArrowRight className="size-3.5 rtl:rotate-180" />
          </Link>
        </div>
      </div>
    </section>
  );
}
