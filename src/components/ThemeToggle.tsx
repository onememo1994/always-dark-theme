import { useEffect, useRef, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

type ViewTransition = { ready: Promise<void>; finished: Promise<void> };
type ViewTransitionDoc = Document & {
  startViewTransition?: (update: () => void) => ViewTransition;
};

const REVEAL_DURATION = 420;

export function ThemeToggle() {
  const [light, setLight] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const runningRef = useRef(false);
  const fallbackTimeout = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const stored = typeof window !== "undefined" ? localStorage.getItem("theme") : null;
    const isLight = stored === "light";
    setLight(isLight);
    document.documentElement.classList.toggle("light", isLight);
    return () => {
      if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current);
    };
  }, []);

  // Pure theme flip — used inside the view-transition snapshot.
  const flipTheme = (next: boolean) => {
    setLight(next);
    document.documentElement.classList.toggle("light", next);
    localStorage.setItem("theme", next ? "light" : "dark");
  };

  // Fallback for browsers without View Transitions: short CSS fade.
  const applyWithFade = (next: boolean) => {
    const root = document.documentElement;
    root.classList.add("theme-transitioning");
    flipTheme(next);
    if (fallbackTimeout.current) clearTimeout(fallbackTimeout.current);
    fallbackTimeout.current = setTimeout(() => {
      root.classList.remove("theme-transitioning");
      fallbackTimeout.current = null;
    }, 300);
  };

  const toggle = () => {
    if (runningRef.current) return;
    const next = !light;
    const doc = document as ViewTransitionDoc;
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (!doc.startViewTransition || reduceMotion) {
      applyWithFade(next);
      return;
    }

    // Origin of the ripple = center of the toggle button
    const rect = buttonRef.current?.getBoundingClientRect();
    const x = rect ? rect.left + rect.width / 2 : window.innerWidth;
    const y = rect ? rect.top + rect.height / 2 : 0;
    const radius = Math.hypot(
      Math.max(x, window.innerWidth - x),
      Math.max(y, window.innerHeight - y),
    );

    runningRef.current = true;
    const transition = doc.startViewTransition(() => flipTheme(next));

    transition.ready
      .then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${radius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: REVEAL_DURATION,
            easing: "cubic-bezier(0.22, 1, 0.36, 1)",
            pseudoElement: "::view-transition-new(root)",
          },
        );
      })
      .catch(() => {
        /* transition skipped — theme already applied */
      });

    transition.finished
      .catch(() => {})
      .finally(() => {
        runningRef.current = false;
      });
  };

  return (
    <motion.button
      ref={buttonRef}
      onClick={toggle}
      aria-label={light ? "Switch to dark mode" : "Switch to light mode"}
      whileTap={{ scale: 0.85 }}
      whileHover={{ scale: 1.1 }}
      transition={{ type: "spring", stiffness: 420, damping: 16 }}
      className="group relative inline-flex h-10 w-10 items-center justify-center overflow-hidden rounded-full border border-border bg-surface/60 backdrop-blur transition-colors duration-300 hover:border-gold/50 hover:text-gold"
    >
      {/* soft glow halo on hover */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        style={{
          background:
            "radial-gradient(circle at center, color-mix(in oklab, var(--color-gold, #facc15) 22%, transparent) 0%, transparent 72%)",
        }}
      />
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={light ? "sun" : "moon"}
          initial={{ rotate: -120, scale: 0, opacity: 0, y: 8 }}
          animate={{ rotate: 0, scale: 1, opacity: 1, y: 0 }}
          exit={{ rotate: 120, scale: 0, opacity: 0, y: -8 }}
          transition={{ type: "spring", stiffness: 320, damping: 18 }}
          className="relative flex items-center justify-center"
        >
          {light ? (
            <Sun className="h-4 w-4 drop-shadow-[0_0_6px_rgba(250,204,21,0.55)]" />
          ) : (
            <Moon className="h-4 w-4 drop-shadow-[0_0_6px_rgba(147,197,253,0.5)]" />
          )}
        </motion.span>
      </AnimatePresence>
    </motion.button>
  );
}
