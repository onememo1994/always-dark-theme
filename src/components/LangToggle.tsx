import { useI18n } from "@/i18n";
import { Button } from "@/components/ui/button";

export function LangToggle() {
  const { lang, setLang } = useI18n();
  return (
    <Button
      variant="outline"
      size="sm"
      onClick={() => setLang(lang === "ar" ? "en" : "ar")}
      aria-label="Change language"
    >
      {lang === "ar" ? "EN" : "العربية"}
    </Button>
  );
}
