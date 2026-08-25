import chickenHand from "@/assets/collage-chicken-hand.jpg";
import sunglassesBurger from "@/assets/collage-sunglasses-burger.jpg";
import handsSandwich from "@/assets/collage-hands-sandwich.jpg";
import { Marquee } from "./Marquee";

const BLOB_TOP = "polygon(50% 0%, 92% 14%, 100% 58%, 74% 96%, 26% 100%, 2% 62%, 8% 18%)";

export function NewMeal() {
  return (
    <section className="relative overflow-hidden bg-cream py-14">
      <div className="-rotate-[4deg]">
        <Marquee durationSeconds={20}>
          <span className="px-8 font-display text-5xl whitespace-nowrap text-signal sm:text-7xl lg:text-8xl">
            NEW MEAL IN TOWN
          </span>
          <span className="px-8 font-display text-5xl whitespace-nowrap text-signal sm:text-7xl lg:text-8xl">
            NEW MEAL IN TOWN
          </span>
        </Marquee>
        <Marquee durationSeconds={20} reverse className="-mt-2">
          <span className="px-8 font-display text-5xl whitespace-nowrap text-signal sm:text-7xl lg:text-8xl">
            NEW MEAL IN TOWN
          </span>
          <span className="px-8 font-display text-5xl whitespace-nowrap text-signal sm:text-7xl lg:text-8xl">
            NEW MEAL IN TOWN
          </span>
        </Marquee>
      </div>

      <div className="pointer-events-none relative mx-auto -mt-32 flex h-[420px] max-w-[900px] items-center justify-center sm:-mt-40 sm:h-[520px]">
        <img
          src={handsSandwich}
          alt="Hands holding a crispy chicken wrap"
          loading="lazy"
          width={800}
          height={800}
          className="absolute top-0 left-[26%] w-40 object-cover sm:w-56"
          style={{ clipPath: BLOB_TOP }}
        />
        <img
          src={sunglassesBurger}
          alt="Person in sunglasses biting a burger"
          loading="lazy"
          width={800}
          height={800}
          className="absolute top-[26%] left-[44%] w-44 rotate-3 object-cover sm:w-60"
          style={{ clipPath: BLOB_TOP }}
        />
        <img
          src={chickenHand}
          alt="Hand holding a fried chicken drumstick"
          loading="lazy"
          width={800}
          height={800}
          className="absolute top-[52%] left-[30%] w-40 -rotate-3 object-cover sm:w-52"
          style={{ clipPath: BLOB_TOP }}
        />
      </div>
    </section>
  );
}
