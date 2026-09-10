import { createFileRoute } from "@tanstack/react-router";
import { Bike, Clock, MapPin, ShieldCheck, Star, Wrench } from "lucide-react";

import { useI18n } from "@/i18n";
import { demoProviders } from "@/data/demo";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import heroMechanic from "@/assets/hero-mechanic.jpg";
import serviceMobile from "@/assets/service-mobile.jpg";
import serviceWorkshop from "@/assets/service-workshop.jpg";
import servicePickup from "@/assets/service-pickup.jpg";
import ctaRide from "@/assets/cta-ride.jpg";
import mechanic1 from "@/assets/mechanic-1.jpg";
import mechanic2 from "@/assets/mechanic-2.jpg";
import mechanic3 from "@/assets/mechanic-3.jpg";
import mechanic4 from "@/assets/mechanic-4.jpg";
import mechanic5 from "@/assets/mechanic-5.jpg";
import mechanic6 from "@/assets/mechanic-6.jpg";

const mechanicPhotos = [mechanic1, mechanic2, mechanic3, mechanic4, mechanic5, mechanic6];
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "BikeFix — Trusted bike mechanics near you" },
      {
        name: "description",
        content:
          "Book a verified bike mechanic near you, compare offers, and track your repair from request to ride-ready.",
      },
      { property: "og:title", content: "BikeFix — Trusted bike mechanics near you" },
      {
        property: "og:description",
        content: "Mobile bike repair, workshop service, and pickup & return — book in minutes.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  const { t, pick, lang } = useI18n();

  const services = [
    {
      icon: Wrench,
      image: serviceMobile,
      title: pick("صيانة متنقلة", "Mobile service"),
      body: pick(
        "الفني يجيلك في مكانك ويصلّح العجلة قدامك.",
        "A mechanic comes to you and fixes your bike on the spot.",
      ),
    },
    {
      icon: Bike,
      image: serviceWorkshop,
      title: pick("صيانة في الورشة", "Workshop service"),
      body: pick(
        "ورش معتمدة للأعطال الكبيرة والصيانة الشاملة.",
        "Certified workshops for major repairs and full tune-ups.",
      ),
    },
    {
      icon: MapPin,
      image: servicePickup,
      title: pick("استلام وتسليم", "Pickup & return"),
      body: pick(
        "نستلم العجلة من بيتك ونرجعها جاهزة للركوب.",
        "We collect your bike and return it ride-ready.",
      ),
    },
  ];

  const steps = [
    pick("اوصف مشكلة عجلتك في دقيقة.", "Describe your bike problem in a minute."),
    pick("استقبل عروض من فنيين قريبين منك.", "Receive offers from nearby mechanics."),
    pick("اختار العرض المناسب واحجز.", "Pick the right offer and book."),
    pick("تابع الإصلاح لحد ما العجلة تجهز.", "Track the repair until your bike is ready."),
  ];

  const faqs = [
    {
      q: pick("إزاي بتختاروا الفنيين؟", "How are mechanics vetted?"),
      a: pick(
        "بنتحقق من الخبرة والتقييمات ومعدل إنهاء الشغل قبل تفعيل أي فني.",
        "We verify experience, ratings, and completion rate before activating any mechanic.",
      ),
    },
    {
      q: pick("الأسعار ثابتة؟", "Are prices fixed?"),
      a: pick(
        "الفني بيبعت عرض سعر واضح للمصنعية والقطع، وانت اللي بتوافق.",
        "Each mechanic sends a clear quote for labour and parts, and you approve it.",
      ),
    },
    {
      q: pick("في ضمان على الصيانة؟", "Is there a warranty?"),
      a: pick(
        "أغلب الفنيين بيقدّموا ضمان من 7 لـ 14 يوم على المصنعية.",
        "Most mechanics offer a 7 to 14 day warranty on labour.",
      ),
    },
  ];

  const mechanics = demoProviders.slice(0, 6);

  return (
    <div id="top" className="min-h-screen bg-background font-sans">
      <SiteHeader />

      <main>
        <section className="border-b border-border bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
            <div>
              <Badge variant="secondary" className="mb-4">
                {t("demoData")}
              </Badge>
              <h1 className="text-3xl font-bold leading-tight text-foreground sm:text-5xl">
                {t("heroTitle")}
              </h1>
              <p className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
                {t("heroSub")}
              </p>
              <div className="mt-7 flex flex-wrap gap-3" id="request">
                <Button size="lg" asChild>
                  <a href="#mechanics">{t("fixMyBike")}</a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a href="#how">{t("workAsMechanic")}</a>
                </Button>
              </div>
              <dl className="mt-9 grid grid-cols-3 gap-4 text-center">
                {[
                  { k: "1,200+", v: pick("صيانة مكتملة", "Repairs done") },
                  { k: "4.8★", v: pick("متوسط التقييم", "Average rating") },
                  { k: "< 15", v: pick("دقيقة للرد", "Minutes to reply") },
                ].map((s) => (
                  <div key={s.k} className="rounded-xl bg-surface-muted p-4">
                    <dt className="text-xl font-bold text-foreground sm:text-2xl">{s.k}</dt>
                    <dd className="mt-1 text-xs text-muted-foreground">{s.v}</dd>
                  </div>
                ))}
              </dl>
            </div>

            <div className="space-y-5">
              <img
                src={heroMechanic}
                width={1408}
                height={1056}
                alt={pick(
                  "فني عجل بيصلّح عجلة في الشارع",
                  "A bike mechanic repairing a bicycle wheel on the street",
                )}
                className="aspect-[4/3] w-full rounded-2xl border border-border object-cover shadow-sm"
              />
              <div className="rounded-2xl border border-border bg-surface-muted p-6">
              <p className="text-sm font-semibold text-foreground">
                {pick("أقرب فنيين متاحين دلوقتي", "Mechanics available right now")}
              </p>
                <div className="mt-4 space-y-3">
                  {demoProviders.slice(0, 3).map((p, i) => (
                    <div
                      key={p.id}
                      className="flex items-center justify-between gap-3 rounded-xl bg-surface p-4"
                    >
                      <div className="flex min-w-0 items-center gap-3">
                        <img
                          src={mechanicPhotos[i % mechanicPhotos.length]}
                          width={512}
                          height={512}
                          loading="lazy"
                          alt={lang === "ar" ? p.name : p.nameEn}
                          className="h-10 w-10 shrink-0 rounded-full object-cover"
                        />
                        <div className="min-w-0">
                          <p className="truncate font-medium text-foreground">
                            {lang === "ar" ? p.name : p.nameEn}
                          </p>
                          <p className="text-xs text-muted-foreground">
                            {p.distanceKm} km · {p.responseMinutes} min
                          </p>
                        </div>
                      </div>
                      <span className="flex shrink-0 items-center gap-1 text-sm font-semibold text-foreground">
                        <Star className="h-4 w-4 text-warning" aria-hidden /> {p.rating}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:py-20">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t("services")}</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Card key={s.title} className="h-full overflow-hidden pt-0">
                <img
                  src={s.image}
                  width={1024}
                  height={768}
                  loading="lazy"
                  alt={s.title}
                  className="aspect-[4/3] w-full object-cover"
                />
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <s.icon className="h-8 w-8 text-primary" aria-hidden />
                  <h3 className="text-lg font-semibold text-foreground">{s.title}</h3>
                  <p className="text-sm text-muted-foreground">{s.body}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section id="how" className="scroll-mt-20 border-y border-border bg-surface">
          <div className="mx-auto max-w-6xl px-4 py-14 sm:py-20">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t("howItWorks")}</h2>
            <ol className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {steps.map((step, i) => (
                <li key={step} className="rounded-xl bg-surface-muted p-5">
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                    {i + 1}
                  </span>
                  <p className="mt-3 text-sm text-foreground">{step}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="mechanics" className="mx-auto max-w-6xl scroll-mt-20 px-4 py-14 sm:py-20">
          <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t("findMechanic")}</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            {mechanics.length} {t("providersFound")}
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {mechanics.map((p, i) => (
              <Card key={p.id} className="h-full">
                <CardContent className="flex h-full flex-col gap-3 p-6">
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex min-w-0 items-center gap-3">
                      <img
                        src={mechanicPhotos[i % mechanicPhotos.length]}
                        width={512}
                        height={512}
                        loading="lazy"
                        alt={lang === "ar" ? p.name : p.nameEn}
                        className="h-12 w-12 shrink-0 rounded-full border border-border object-cover"
                      />
                      <h3 className="truncate font-semibold text-foreground">
                        {lang === "ar" ? p.name : p.nameEn}
                      </h3>
                    </div>
                    {p.verified && (
                      <ShieldCheck className="h-5 w-5 shrink-0 text-success" aria-hidden />
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground">
                    {p.experienceYears} {pick("سنة خبرة", "years experience")} ·{" "}
                    {p.completedJobs} {pick("مهمة", "jobs")}
                  </p>
                  <div className="flex flex-wrap gap-2 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-2.5 py-1">
                      <Star className="h-3.5 w-3.5 text-warning" aria-hidden /> {p.rating} (
                      {p.reviewCount})
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-2.5 py-1">
                      <Clock className="h-3.5 w-3.5" aria-hidden /> {p.responseMinutes} min
                    </span>
                    <span className="inline-flex items-center gap-1 rounded-full bg-surface-muted px-2.5 py-1">
                      <MapPin className="h-3.5 w-3.5" aria-hidden /> {p.distanceKm} km
                    </span>
                  </div>
                  <p className="mt-auto pt-2 text-sm font-medium text-foreground">
                    {pick("رسوم الانتقال", "Travel fee")}: {p.travelFeeEgp} EGP
                  </p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-14 sm:pb-20">
          <div className="relative overflow-hidden rounded-2xl border border-border">
            <img
              src={ctaRide}
              width={1408}
              height={704}
              loading="lazy"
              alt={pick(
                "راكب عجلة في شارع المدينة وقت الغروب",
                "A cyclist riding through a city street at golden hour",
              )}
              className="h-64 w-full object-cover sm:h-80"
            />
            <div className="absolute inset-0 bg-foreground/55" />
            <div className="absolute inset-0 flex flex-col items-start justify-center gap-4 p-6 sm:p-10">
              <h2 className="max-w-lg text-2xl font-bold text-background sm:text-4xl">
                {pick("عجلتك جاهزة للركوب في نفس اليوم", "Your bike, ride-ready the same day")}
              </h2>
              <Button size="lg" asChild>
                <a href="#mechanics">{t("fixMyBike")}</a>
              </Button>
            </div>
          </div>
        </section>


        <section id="faq" className="scroll-mt-20 border-t border-border bg-surface">
          <div className="mx-auto max-w-3xl px-4 py-14 sm:py-20">
            <h2 className="text-2xl font-bold text-foreground sm:text-3xl">{t("faq")}</h2>
            <Accordion type="single" collapsible className="mt-6">
              {faqs.map((f) => (
                <AccordionItem key={f.q} value={f.q}>
                  <AccordionTrigger className="text-start">{f.q}</AccordionTrigger>
                  <AccordionContent>{f.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
