import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { Mail, MessageSquare, Send, ShieldCheck, Phone, Linkedin, Github } from "lucide-react";
import { SectionHeading } from "./SectionHeading";
import { Reveal } from "./Reveal";

const schema = z.object({
  name: z.string().min(2, "Please enter your name"),
  email: z.string().email("Enter a valid email"),
  company: z.string().optional(),
  message: z.string().min(10, "Tell me a bit more (10+ characters)"),
});
type FormValues = z.infer<typeof schema>;

export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema) });

  const onSubmit = async (values: FormValues) => {
    await new Promise((r) => setTimeout(r, 800));
    toast.success("Message sent", {
      description: `Thanks ${values.name.split(" ")[0]} — I'll reply within 24 hours.`,
    });
    reset();
  };

  return (
    <section id="contact" className="py-24 md:py-32 relative">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          eyebrow="Contact"
          title={<>Let's build something <span className="gold-text">customers can trust</span></>}
          description="Tell me about your product, regulatory scope and timeline. Most projects start within two weeks."
        />

        <div className="grid lg:grid-cols-5 gap-6">
          <Reveal className="lg:col-span-2">
            <div className="glass rounded-3xl p-8 h-full hover-lift">
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gold/10 text-gold border border-gold/20">
                <MessageSquare className="h-5 w-5" />
              </div>
              <h3 className="mt-5 text-2xl font-semibold">Direct line</h3>
              <p className="mt-3 text-muted-foreground">
                Prefer email? Reach me anytime — replies within one business day.
              </p>

              <div className="mt-6 space-y-3">
                {[
                  { Icon: Mail, label: "m.ssaid356@gmail.com", href: "mailto:m.ssaid356@gmail.com" },
                  { Icon: Phone, label: "+20 106 735 8073", href: "tel:+201067358073" },
                  {
                    Icon: Linkedin,
                    label: "in/mostafasamirsaid",
                    href: "https://linkedin.com/in/mostafasamirsaid",
                  },
                  { Icon: Github, label: "Mostafa-SAID7", href: "https://github.com/Mostafa-SAID7" },
                ].map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target={href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-4 hover:border-gold/40 transition-colors"
                  >
                    <Icon className="h-4 w-4 text-gold" />
                    <span className="text-sm">{label}</span>
                  </a>
                ))}
                <div className="flex items-center gap-3 rounded-xl border border-border bg-surface/60 p-4">
                  <ShieldCheck className="h-4 w-4 text-gold" />
                  <span className="text-sm text-muted-foreground">
                    Tanta, Egypt · Remote · Full-time or contract
                  </span>
                </div>
              </div>

              <div className="mt-8 rounded-2xl border border-gold/20 bg-gold/5 p-4 text-xs text-muted-foreground">
                <span className="text-gold font-semibold">Now booking:</span> engagements for
                microservices, multi-tenant platforms and real-time financial systems.
              </div>
            </div>
          </Reveal>

          <Reveal className="lg:col-span-3" delay={0.1}>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass rounded-3xl p-8 space-y-5"
              noValidate
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Full name" error={errors.name?.message}>
                  <input
                    {...register("name")}
                    placeholder="Jane Doe"
                    className={inputCls}
                  />
                </Field>
                <Field label="Email" error={errors.email?.message}>
                  <input
                    {...register("email")}
                    placeholder="jane@bank.com"
                    className={inputCls}
                  />
                </Field>
              </div>

              <Field label="Company (optional)">
                <input
                  {...register("company")}
                  placeholder="Bank / FinTech"
                  className={inputCls}
                />
              </Field>

              <Field label="Project brief" error={errors.message?.message}>
                <textarea
                  {...register("message")}
                  rows={5}
                  placeholder="Briefly describe your product, users and the problem you'd like to solve…"
                  className={`${inputCls} resize-none`}
                />
              </Field>

              <button
                type="submit"
                disabled={isSubmitting}
                className="group inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-full bg-[var(--gradient-gold)] px-7 py-3.5 text-sm font-semibold text-primary-foreground gold-glow transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {isSubmitting ? "Sending…" : "Send message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

const inputCls =
  "w-full rounded-xl border border-border bg-surface/60 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground outline-none transition-colors focus:border-gold/50 focus:ring-2 focus:ring-ring";

function Field({
  label,
  error,
  children,
}: {
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs uppercase tracking-widest text-muted-foreground">
        {label}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-xs text-destructive">{error}</span>}
    </label>
  );
}
