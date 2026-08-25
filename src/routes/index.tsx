import { createFileRoute } from "@tanstack/react-router";
import { Hero } from "@/components/chompo/Hero";
import { IconBand } from "@/components/chompo/IconBand";
import { CollageGrid } from "@/components/chompo/CollageGrid";
import { CraveMarquee } from "@/components/chompo/CraveMarquee";
import { NewMeal } from "@/components/chompo/NewMeal";
import { TypeSpiral } from "@/components/chompo/TypeSpiral";
import { Reviews } from "@/components/chompo/Reviews";
import { FlavorCta } from "@/components/chompo/FlavorCta";

const TITLE = "CHOMPO | Fast Food & Delivery That Hits Different";
const DESCRIPTION =
  "Bold burgers, crispy fries and fried chicken delivered fast. Order from CHOMPO and turn up the flavor.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="bg-cream">
      <Hero />
      <IconBand />
      <CollageGrid />
      <CraveMarquee />
      <NewMeal />
      <TypeSpiral />
      <Reviews />
      <FlavorCta />
      <footer className="border-t-[3px] border-ink bg-ink px-4 py-10 text-center sm:px-6">
        <p className="font-display text-4xl text-cream sm:text-6xl">CHOMPO</p>
        <p className="mt-2 font-heavy text-[0.65rem] tracking-[0.24em] text-cream/70 uppercase">
          The amazing food you ever tasted
        </p>
      </footer>
    </main>
  );
}
