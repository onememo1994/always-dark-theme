import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";
import { motion, AnimatePresence } from "framer-motion";

const links = [
  { href: "#work", label: "Work" },
  { href: "#expertise", label: "Expertise" },
  { href: "#about", label: "About" },
  { href: "#process", label: "Process" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "border-b border-border bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 md:px-8">
          <a href="#home" className="flex items-center gap-3">
            <span className="text-[15px] font-semibold tracking-tight">Mostafa Samir</span>
            <span className="hidden sm:inline-block h-3.5 w-px bg-border" />
            <span className="mono-label hidden sm:inline">Banking &amp; Fintech Systems</span>
          </a>

          <ul className="hidden lg:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center rounded-full border border-border-strong bg-brand/10 px-4 py-2 text-sm font-medium text-foreground transition-all hover:bg-brand/20"
            >
              Let&apos;s talk
            </a>
            <ThemeToggle />
            <button
              onClick={() => setOpen((o) => !o)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-border bg-surface/50"
              aria-label={open ? "Close menu" : "Open menu"}
            >
              {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 z-40 flex flex-col bg-background/95 backdrop-blur-xl px-6 pt-28"
          >
            <ul className="flex flex-col divide-y divide-border">
              {links.map((l, i) => (
                <motion.li
                  key={l.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * i }}
                >
                  <a
                    onClick={() => setOpen(false)}
                    href={l.href}
                    className="block py-5 text-2xl font-medium text-foreground/90"
                  >
                    {l.label}
                  </a>
                </motion.li>
              ))}
            </ul>
            <a
              onClick={() => setOpen(false)}
              href="#contact"
              className="mt-8 inline-flex items-center justify-center rounded-full border border-border-strong bg-brand/10 px-5 py-3 text-sm font-medium"
            >
              Start a conversation
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
