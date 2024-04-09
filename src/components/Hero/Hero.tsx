"use client";

import Image from "next/image";

// Internal Dependencies
import Heading from "@/components/Heading";
import Section from "@components/Section";

// Constants
import { BUILDINGS_IMG } from "@constants";
import { animated, useSpring, useInView } from "react-spring";
import { useEffect, useMemo } from "react";

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
      <div className="flex w-full flex-col gap-2 md:m-auto md:h-[50vh] md:flex-row">
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
            "hidden aspect-square h-full w-full rounded-2xl bg-center object-cover md:block"
          }
          alt={BUILDINGS_IMG[BUILDINGS_IMG.length - 1].alt}
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
  // Animate when in view
  const [ref, inView] = useInView();

  /* Animate the number */
  const { number } = useSpring({
    from: { number: 0 },
    to: {number: num},
    delay: 0,
    config: { mass: 1, tension: 20, friction: 7 }
  });

  useEffect(() => {
    if(inView)
      number.start({to: {number: num}, reset: false})
  }, [inView, num, number]);

  return (
    <animated.span className={className} ref={ref}>
      {number.to((_num) => _num.toFixed(0))}
    </animated.span>
  );
}
