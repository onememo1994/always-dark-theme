import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";
import { LangToggle } from "@/components/LangToggle";

export function SiteHeader() {
  const { t } = useI18n();
  const nav = [
    { href: "#services", label: t("services") },
    { href: "#how", label: t("howItWorks") },
    { href: "#mechanics", label: t("findMechanic") },
    { href: "#faq", label: t("faq") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-border bg-surface/90 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3">
        <a href="#top" className="flex items-center gap-2 font-bold text-foreground">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-primary text-primary-foreground">
            BF
          </span>
          <span className="text-lg">{t("brand")}</span>
        </a>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LangToggle />
          <Button size="sm" asChild>
            <a href="#request">{t("fixMyBike")}</a>
          </Button>
        </div>
      </div>
    </header>
  );
}
