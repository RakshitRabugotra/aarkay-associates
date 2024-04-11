"use client";

import Image from "next/image";

// Internal Dependencies
import Heading from "@/components/Heading";
import Section from "@components/Section";

// Constants
import { BUILDINGS_IMG } from "@constants";
import { animated, useSpring, useInView } from "react-spring";

export default function Hero() {

  const [ref, springs] = useInView(() => ({
    from: { transform: "translateY(10%)", opacity: 0, color: "rgb(239 68 68 / 1)" },
    to: { transform: "translateX(0%)", opacity: 1, color: "rgb(28 25 23 / 1)" }
  }), {});

  return (
    <Section id="hero-section">
      <Heading className="flex-col md:mt-8">
        {"Aarkay Associates, "} <br/>
        <animated.div className="inline-flex text-4xl text-stone-9 max-w-fit" ref={ref} style={springs}>
          {"Pathankot"}
          <Image
            src={"/assets/misc/pin.svg"}
            width={100}
            height={100}
            alt={"map-pin"}
            className={"m-auto aspect-square h-10 w-10 p-1"}
          />
        </animated.div>
      </Heading>

      <p className="text-lg font-medium text-stone-900 md:max-w-[60vw]">
        {
          "Crafting innovative designs, shaping inspirations for sustainable living in tomorrow's world timeless designs, shaping inspirations for Tomorrow's world"
        }
      </p>

      {/* Image and count */}
      <div className="flex w-full flex-col gap-2 md:my-auto md:h-[50vh] md:flex-row">
        <Image
          src={BUILDINGS_IMG[1].src}
          width={600}
          height={800}
          className={
            "aspect-square h-full w-full rounded-2xl bg-center object-cover md:w-2/5"
          }
          priority
          alt={"building image"}
        />
        <div
          className={
            "flex flex-col justify-center gap-4 rounded-2xl bg-stone-800 p-8 text-stone-50 md:w-1/5"
          }
        >
          <div className={"flex flex-col flex-wrap text-2xl"}>
            <span className="font-display text-6xl text-stone-400">
              {"+"}
              <CountUpInView num={350} />
            </span>
            Successful projects
          </div>
          <div className={"flex flex-col flex-wrap text-2xl"}>
            <span className="font-display text-6xl text-stone-400">
              {"+"}
              <CountUpInView num={80} />
            </span>
            Happy Clients
          </div>
        </div>

        <Image
          src={BUILDINGS_IMG[BUILDINGS_IMG.length - 1].src}
          width={600}
          height={800}
          className={
            "hidden aspect-square h-full w-2/5 rounded-2xl bg-center object-cover md:block"
          }
          alt={BUILDINGS_IMG[BUILDINGS_IMG.length - 1].alt}
          priority
        />
      </div>
    </Section>
  );
}

function CountUpInView({
  num,
  className
}: {
  num: number;
  className?: string;
}) {
  /* Animate the number */
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: num },
    delay: 0,
    config: { mass: 1, tension: 20, friction: 7 }
  });

  // Animate when in view
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0.5,
      y: 100
    },
    to: {
      opacity: 1,
      y: 0
    }
  }));

  return (
    <animated.span ref={ref} className={className} style={springs}>
      {number.to((_num) => _num.toFixed(0))}
    </animated.span>
  );
}
