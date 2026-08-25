import { Nav } from "./Nav";
import { Storefront } from "./Storefront";

export function Hero() {
  return (
    <section className="relative bg-signal pb-6">
      <Nav />

      <div className="mx-auto max-w-[1200px] px-4 pt-10 text-center sm:px-6 sm:pt-16">
        <p className="font-display text-3xl text-cream sm:text-5xl">THE</p>
        <h1 className="font-display text-[19vw] leading-[0.82] text-cream sm:text-[15vw] lg:text-[11rem]">
          CHOMPO
        </h1>
        <p className="mt-3 font-heavy text-xs tracking-[0.18em] text-cream uppercase sm:text-lg">
          The amazing food you ever tasted
        </p>
      </div>

      <div className="relative mx-auto mt-6 max-w-[1000px] px-4 sm:mt-10">
        <Storefront className="w-full" />
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 sm:bottom-6">
          <button
            type="button"
            className="rounded-md border-[3px] border-ink bg-signal px-5 py-2 font-heavy text-xs tracking-wider text-cream uppercase transition-transform hover:-translate-y-0.5 sm:px-7 sm:py-3 sm:text-base"
          >
            Find Location
          </button>
        </div>
      </div>

      {/* scalloped red edge dropping into the cream page */}
      <div className="bumps-down absolute -bottom-[18px] left-0 h-[18px] w-full text-signal" />
    </section>
  );
}
