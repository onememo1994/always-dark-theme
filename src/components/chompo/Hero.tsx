import { Nav } from "./Nav";
import { Storefront } from "./Storefront";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-signal pb-10">
      <Nav />

      <div className="mx-auto max-w-[1200px] px-4 pt-8 text-center sm:px-6 sm:pt-12">
        <p className="font-display text-3xl leading-none text-cream sm:text-5xl">THE</p>
        <h1 className="mt-2 font-display text-[20vw] leading-[0.85] text-cream sm:text-[15vw] lg:text-[11.5rem]">
          CHOMPO
        </h1>
        <p className="mt-3 font-heavy text-[0.7rem] tracking-[0.12em] text-cream uppercase sm:text-lg">
          The amazing food you ever tasted
        </p>
      </div>

      <div className="relative mx-auto mt-4 max-w-[860px] px-4 sm:mt-6">
        <Storefront className="w-full" />
        <div className="absolute bottom-[6%] left-1/2 -translate-x-1/2">
          <button
            type="button"
            className="rounded-md bg-signal px-5 py-2 font-heavy text-xs tracking-[0.12em] text-cream uppercase transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-2.5 sm:text-sm"
          >
            Find Location
          </button>
        </div>
      </div>

      {/* cream scalloped edge rising out of the red panel */}
      <div className="bumps-up pointer-events-none absolute -bottom-px left-0 h-[18px] w-full text-cream" />
    </section>
  );
}
