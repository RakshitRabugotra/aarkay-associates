"use client";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { animated, useInView } from "react-spring";

// Internal Dependencies
import Section from "@components/Section";
import Heading from "@components/Heading";

// Content Dependencies
import { SERVICES, SECTIONS as sections } from "@constants";

export default function Services() {
  // Extract this section
  const thisSection = sections.services;

  return (
    <Section id={thisSection.id} className="overflow-x-clip">
      <Heading>{thisSection.name}</Heading>

      {/* Service cards */}
      <div className="flex flex-row flex-wrap md:gap-y-2">
        {SERVICES.map((service, index) => {
          return <Service {...service} index={index} key={index} />;
        })}
      </div>
    </Section>
  );
}

interface IServiceCard {
  name: string;
  imgSrc: string;
  description: string;
  index: number;
}

function Service({ name, imgSrc, description, index }: IServiceCard) {
  // Animate when in view
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      transform: index % 2 === 0 ? "translateX(-40%)" : "translateX(40%)"
    },
    to: {
      opacity: 1,
      transform: "translateX(0%)"
    }
  }));

  return (
    <animated.div
      className={
        "flex shrink-0 grow-0 basis-1/2 flex-col justify-between p-2 md:flex-row md:justify-start md:gap-4"
      }
      ref={ref}
      style={springs}
    >
      <Image
        src={`/assets/services/${imgSrc}`}
        width={200}
        height={200}
        alt={name}
        className={twMerge(
          "aspect-square rounded-lg object-cover md:border-l-8 md:p-4",
          index % 4 < 2
            ? index % 4 === 0
              ? "border-slate-300"
              : "border-stone-300"
            : (index - 3) % 4 === 0
              ? "border-slate-300"
              : "border-stone-300"
        )}
      />
      <div className="mt-2 flex grow flex-col gap-2 md:mt-8 md:grow-0 md:basis-1/2">
        <h2 className="heading text-lg font-semibold text-stone-900/80 md:text-2xl">
          {name}
        </h2>
        <p className="my-auto align-middle text-sm text-stone-900/60 md:text-xl">
          {description}
        </p>
      </div>
    </animated.div>
  );
}
