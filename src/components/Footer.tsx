import { ShieldCheck, Github, Linkedin, Mail } from "lucide-react";

const socials = [
  { Icon: Github, href: "https://github.com/Mostafa-SAID7", label: "GitHub" },
  { Icon: Linkedin, href: "https://linkedin.com/in/mostafasamirsaid", label: "LinkedIn" },
  { Icon: Mail, href: "mailto:m.ssaid356@gmail.com", label: "Email" },
];

export function Footer() {
  return (
    <footer className="border-t border-border py-10 mt-10">
      <div className="mx-auto max-w-7xl px-4 md:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 text-sm">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[var(--gradient-gold)] text-primary-foreground">
            <ShieldCheck className="h-3.5 w-3.5" />
          </span>
          <span className="font-display font-semibold">
            Mostafa <span className="gold-text">Samir</span>
          </span>
          <span className="text-muted-foreground ml-2">
            © {new Date().getFullYear()} — Banking &amp; Fintech Full Stack Engineer
          </span>
        </div>
        <div className="flex items-center gap-2">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              aria-label={label}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel="noreferrer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-surface/60 hover:text-gold hover:border-gold/40 transition-colors"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
