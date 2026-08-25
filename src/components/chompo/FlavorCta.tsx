import { BurgerIcon, ChickenLegIcon, FriesIcon, PizzaIcon, SandwichIcon } from "./FoodIcons";

const PATTERN = [BurgerIcon, PizzaIcon, SandwichIcon, FriesIcon, ChickenLegIcon];

export function FlavorCta() {
  return (
    <section className="bg-cream px-4 pb-20 sm:px-6">
      <div className="ticket-edges relative mx-auto max-w-[1120px] bg-signal px-6 py-20 text-center sm:py-24">
        {/* faint food icon wallpaper */}
        <div
          className="pointer-events-none absolute inset-0 grid grid-cols-6 items-center gap-6 p-8 text-signal-dark opacity-70 sm:grid-cols-8"
          aria-hidden="true"
        >
          {Array.from({ length: 48 }).map((_, index) => {
            const Icon = PATTERN[index % PATTERN.length];
            return <Icon key={index} className="w-8 sm:w-10" />;
          })}
        </div>

        <div className="relative">
          <h2 className="font-display text-4xl leading-[0.92] text-cream sm:text-6xl lg:text-7xl">
            READY FOR A
            <br />
            FLAVOR
            <br />
            ADVENTURE
          </h2>
          <p className="mx-auto mt-4 max-w-md font-heavy text-xs tracking-wider text-cream uppercase sm:text-sm">
            Dive into bold tastes and playful bites crafted just for you.
          </p>
          <button
            type="button"
            className="mt-7 inline-flex items-center gap-3 rounded-md bg-ink px-6 py-3 font-heavy text-xs tracking-[0.16em] text-cream uppercase transition-transform hover:-translate-y-0.5 sm:text-sm"
          >
            Discover Now
            <svg viewBox="0 0 40 12" className="w-8" aria-hidden="true">
              <path
                d="M1 7c5-8 9 6 14-1s9 6 14-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M29 1l7 4-7 4"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
