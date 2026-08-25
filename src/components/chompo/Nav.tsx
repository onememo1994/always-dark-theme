export function Nav() {
  return (
    <header className="px-4 pt-4 sm:px-6 sm:pt-6">
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between rounded-full border-[3px] border-ink bg-ink px-6 py-3 sm:px-8 sm:py-4">
        <a
          href="/"
          className="font-display text-2xl tracking-wide text-cream sm:text-3xl"
          style={{ WebkitTextStroke: "0px" }}
        >
          CHOMPO
        </a>
        <button
          type="button"
          className="rounded-md bg-cream px-4 py-1.5 font-heavy text-xs tracking-wider text-signal uppercase transition-transform hover:-translate-y-0.5 sm:text-sm"
        >
          Menu
        </button>
      </nav>
    </header>
  );
}
