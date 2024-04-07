import Image from "next/image";

// Internal Dependencies
import Heading from "@/components/Heading";
import Section from "@components/Section";

// Constants
import { BUILDINGS_IMG } from "@constants";

export default function Hero() {
  return (
    <Section padded id="hero-section">
      <Heading>{"Aarkay Associates, Pathankot"}</Heading>

      <p className="text-lg font-medium text-stone-900">
        {
          "Crafting innovative designs, shaping inspirations for sustainable living in tomorrow's world timeless designs, shaping inspirations for Tomorrow's world"
        }
      </p>

      {/* Image and count */}

      <Image
        src={BUILDINGS_IMG[1].src}
        width={600}
        height={800}
        className={
          "aspect-square h-full w-full rounded-2xl bg-center object-cover"
        }
        alt={"building image"}
      />
      <div
        className={
          "flex flex-col gap-4 rounded-2xl bg-stone-800 p-8 text-stone-50"
        }
      >
        <div className={"flex flex-col flex-wrap text-2xl"}>
          <span className={"font-display text-6xl text-stone-400"}>350+</span>
          Successful projects
        </div>
        <div className={"flex flex-col flex-wrap text-2xl"}>
          <span className={"font-display text-6xl text-stone-400"}>80+</span>
          Happy Clients
        </div>
      </div>
    </Section>
  );
}
