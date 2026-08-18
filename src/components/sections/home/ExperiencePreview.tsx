import { useMemo, useState } from "react";
import { Link } from "@tanstack/react-router";
import {
  Building2,
  Layers,
  GraduationCap,
  BadgeCheck,
  ArrowRight,
  Calendar,
  MapPin,
  ChevronDown,
  ShieldCheck,
} from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { credentials, credentialTabs, type CredentialTab } from "@/data/credentials";

const tabIcons: Record<CredentialTab, typeof Building2> = {
  work: Building2,
  projects: Layers,
  education: GraduationCap,
  certifications: BadgeCheck,
};

export function ExperiencePreview() {
  const [activeTab, setActiveTab] = useState<CredentialTab>("work");
  const [openId, setOpenId] = useState<string | null>(null);
  const { tr, lang } = useI18n();

  const items = useMemo(() => credentials.filter((c) => c.tab === activeTab), [activeTab]);
  const ActiveIcon = tabIcons[activeTab];

  return (
    <section
      id="events"
      className="w-full bg-background py-20 px-4 sm:px-8 md:px-12 text-foreground"
    >
      <div className="mx-auto max-w-5xl">
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-center tracking-tight">
          {tr("events.title")}
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-center text-sm sm:text-base text-muted-foreground">
          {tr("events.desc")}
        </p>

        {/* Tabs */}
        <div
          role="tablist"
          aria-label={tr("events.title")}
          className="mt-10 mb-10 flex flex-wrap items-center justify-center gap-3"
        >
          {credentialTabs.map((id) => {
            const Icon = tabIcons[id];
            const active = activeTab === id;
            const count = credentials.filter((c) => c.tab === id).length;
            return (
              <button
                key={id}
                role="tab"
                aria-selected={active}
                onClick={() => {
                  setActiveTab(id);
                  setOpenId(null);
                }}
                className={`inline-flex items-center gap-2 whitespace-nowrap rounded-xl px-5 py-2.5 font-sans text-xs font-black uppercase tracking-[0.18em] transition-all ${
                  active
                    ? "bg-foreground text-background shadow-md"
                    : "border border-border bg-foreground/5 text-foreground hover:bg-foreground/15"
                }`}
              >
                <Icon className="size-3.5" />
                {tr(`events.tab.${id}`)}
                <span
                  className={`rounded-md px-1.5 py-0.5 text-[10px] ${
                    active ? "bg-background/20" : "bg-foreground/10"
                  }`}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Rows */}
        <div className="flex flex-col gap-4">
          {items.length === 0 && (
            <p className="text-center text-sm text-muted-foreground">{tr("events.empty")}</p>
          )}

          {items.map((item) => {
            const open = openId === item.id;
            const featured = item.featured;
            return (
              <article
                key={item.id}
                className={`overflow-hidden rounded-2xl transition-all duration-300 ${
                  featured
                    ? "bg-foreground text-background shadow-[var(--shadow-glow)]"
                    : "border border-border bg-card text-card-foreground shadow-md"
                }`}
              >
                <button
                  onClick={() => setOpenId(open ? null : item.id)}
                  aria-expanded={open}
                  className="flex w-full flex-col gap-4 p-5 text-start sm:flex-row sm:items-center sm:justify-between sm:p-6"
                >
                  <div className="flex items-center gap-5 sm:gap-7">
                    <span
                      dir="ltr"
                      className="min-w-10 font-['Oswald',sans-serif] text-sm font-bold opacity-80"
                    >
                      {item.year}
                    </span>

                    <div
                      className={`grid size-10 shrink-0 place-items-center rounded-xl ${
                        featured
                          ? "bg-primary text-primary-foreground"
                          : "bg-foreground/10 text-primary"
                      }`}
                    >
                      <ActiveIcon className="size-4" />
                    </div>

                    <div className="min-w-0">
                      <h3 className="font-['Oswald',sans-serif] text-lg sm:text-xl font-bold leading-tight tracking-tight">
                        {item.title[lang]}
                      </h3>
                      <p
                        className={`mt-1 text-xs font-semibold ${
                          featured ? "opacity-80" : "text-muted-foreground"
                        }`}
                      >
                        {item.org[lang]} · {item.location[lang]}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 sm:max-w-[20rem] sm:justify-end">
                    <p
                      className={`text-xs font-bold sm:text-end ${
                        featured ? "opacity-90" : "text-muted-foreground"
                      }`}
                    >
                      {item.summary[lang]}
                    </p>
                    <ChevronDown
                      className={`size-4 shrink-0 transition-transform duration-300 ${
                        open ? "rotate-180" : ""
                      }`}
                    />
                  </div>
                </button>

                {open && (
                  <div
                    className={`border-t px-5 pb-6 pt-5 sm:px-6 ${
                      featured ? "border-background/20" : "border-border"
                    }`}
                  >
                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold">
                      <span className="inline-flex items-center gap-1.5 opacity-80">
                        <Calendar className="size-3.5" />
                        {item.period[lang]}
                      </span>
                      <span className="inline-flex items-center gap-1.5 opacity-80">
                        <MapPin className="size-3.5" />
                        {item.location[lang]}
                      </span>
                      {item.credentialId && (
                        <span className="inline-flex items-center gap-1.5 opacity-80" dir="ltr">
                          <ShieldCheck className="size-3.5" />
                          {tr("events.credentialId")}: {item.credentialId}
                        </span>
                      )}
                      {item.status && (
                        <span
                          className={`rounded-md px-2 py-0.5 text-[10px] uppercase tracking-wider ${
                            featured ? "bg-background/20" : "bg-primary/10 text-primary"
                          }`}
                        >
                          {item.status[lang]}
                        </span>
                      )}
                    </div>

                    <ul className="mt-4 space-y-2">
                      {item.highlights[lang].map((point) => (
                        <li
                          key={point}
                          className={`flex gap-2.5 text-sm leading-relaxed ${
                            featured ? "opacity-90" : "text-muted-foreground"
                          }`}
                        >
                          <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <span
                          key={tech}
                          dir="ltr"
                          className={`rounded-lg px-2.5 py-1 text-[11px] font-bold ${
                            featured ? "bg-background/15" : "bg-foreground/5 border border-border"
                          }`}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </article>
            );
          })}
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
