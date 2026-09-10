import { useI18n } from "@/i18n";

export function SiteFooter() {
  const { t, pick } = useI18n();
  return (
    <footer className="border-t border-border bg-surface">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <p className="font-semibold text-foreground">{t("brand")}</p>
        <p>{t("tagline")}</p>
        <p>{pick("بيانات تجريبية للعرض فقط", "Demo data for preview only")}</p>
      </div>
    </footer>
  );
}
