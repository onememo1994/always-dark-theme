import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, X } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { LottieIcon } from "@/components/ui/LottieIcon";

const STORAGE_KEY = "welcome-modal-seen";
const DELAY_MS = 10_000;
const AUTO_CLOSE_MS = 5_000;
const TICK_MS = 50;

/**
 * Welcome invitation that appears once per session, 10s after the visitor
 * lands, then auto-dismisses after 5s with a progress bar. Hovering, focusing
 * or touching the dialog pauses the countdown so nobody loses the message
 * mid-read. Presentation comes from the shared utilities in styles.css.
 */
export function WelcomeModal() {
  const { tr, dir } = useI18n();
  const [open, setOpen] = useState(false);
  const [remaining, setRemaining] = useState(AUTO_CLOSE_MS);
  const [paused, setPaused] = useState(false);
  const closeRef = useRef<HTMLButtonElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  const close = useCallback(() => {
    setOpen(false);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* storage unavailable — modal simply shows again next load */
    }
    if (previouslyFocused.current instanceof HTMLElement) {
      previouslyFocused.current.focus();
    }
  }, []);

  useEffect(() => {
    let seen = false;
    try {
      seen = sessionStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      seen = false;
    }
    if (seen) return;
    const timer = window.setTimeout(() => setOpen(true), DELAY_MS);
    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!open) return;
    previouslyFocused.current = document.activeElement;
    closeRef.current?.focus();

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") close();
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [open, close]);

  // Countdown: ticks only while visible and not paused.
  useEffect(() => {
    if (!open || paused) return;
    const id = window.setInterval(() => {
      setRemaining((value) => Math.max(0, value - TICK_MS));
    }, TICK_MS);
    return () => window.clearInterval(id);
  }, [open, paused]);

  useEffect(() => {
    if (open && remaining === 0) close();
  }, [open, remaining, close]);

  if (!open) return null;

  const progress = (remaining / AUTO_CLOSE_MS) * 100;
  const seconds = Math.ceil(remaining / 1000);
  const hold = () => setPaused(true);
  const release = () => setPaused(false);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-6"
      role="presentation"
      onClick={close}
    >
      <div className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in" />

      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="welcome-modal-title"
        aria-describedby="welcome-modal-body"
        dir={dir}
        onClick={(event) => event.stopPropagation()}
        onMouseEnter={hold}
        onMouseLeave={release}
        onFocusCapture={(event) => {
          // Ignore the initial programmatic focus on the close button.
          if ((event.target as Node) !== closeRef.current) hold();
        }}
        onTouchStart={hold}
        onTouchEnd={release}
        className="relative w-full max-w-[min(100%,34rem)] overflow-hidden rounded-2xl border border-border bg-card shadow-2xl animate-scale-in md:max-w-3xl"
      >
        <div className="grid-bg pointer-events-none absolute inset-0 opacity-40" />

        <button
          ref={closeRef}
          type="button"
          onClick={close}
          aria-label={tr("welcome.close")}
          className="absolute end-3 top-3 z-20 rounded-xl bg-card/80 p-2 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground sm:end-4 sm:top-4"
        >
          <X className="h-4 w-4" />
        </button>

        {/* Two-column grid on desktop: visual rail + message column */}
        <div className="relative grid gap-6 p-6 pb-10 text-center sm:p-8 sm:pb-12 md:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] md:items-center md:gap-8 md:p-10 md:pb-14 md:text-start">
          <div className="flex min-w-0 flex-col items-center gap-3 md:items-start">
            <LottieIcon
              src="/lottie/welcome-hello.lottie"
              className="h-24 w-32 shrink-0 sm:h-28 sm:w-36 md:h-36 md:w-44"
              fallback={<Sparkles className="h-10 w-10 text-accent" />}
            />
            <span className="chip">
              <Sparkles className="h-3.5 w-3.5 shrink-0" />
              {tr("welcome.eyebrow")}
            </span>
          </div>

          <div className="min-w-0">
            <h2 id="welcome-modal-title" className="type-h2 text-balance text-foreground">
              {tr("welcome.title")}
            </h2>

            <p id="welcome-modal-body" className="mt-3 type-lead text-muted-foreground">
              {tr("welcome.body")}
            </p>

            <p className="mt-3 type-body-strong text-accent">{tr("welcome.highlight")}</p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <Link
                to="/contact"
                onClick={close}
                className="btn-accent w-full items-center justify-center gap-2 whitespace-nowrap py-3.5 type-body-sm"
              >
                {tr("welcome.primary")}
                <ArrowRight className="h-4 w-4 shrink-0 rtl:rotate-180" />
              </Link>
              <Link
                to="/projects"
                onClick={close}
                className="btn-accent-outline w-full items-center justify-center gap-2 whitespace-nowrap py-3.5 type-body-sm"
              >
                {tr("welcome.secondary")}
              </Link>
            </div>

            <div className="mt-5 flex flex-col items-center gap-2 sm:flex-row sm:items-center sm:justify-between sm:gap-4">
              <p className="eyebrow min-w-0 text-muted-foreground">{tr("welcome.footnote")}</p>
              <span
                aria-live="polite"
                className="eyebrow shrink-0 tabular-nums text-muted-foreground"
              >
                {paused ? tr("welcome.paused") : tr("welcome.autoclose").replace("{s}", String(seconds))}
              </span>
            </div>
          </div>
        </div>

        {/* Auto-close progress bar pinned to the bottom edge */}
        <div
          role="progressbar"
          aria-label={tr("welcome.close")}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-valuenow={Math.round(progress)}
          className="absolute inset-x-0 bottom-0 h-1.5 bg-muted"
        >
          <div
            className="h-full bg-accent transition-[width] duration-75 ease-linear"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}
