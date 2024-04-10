"use client"

import { twMerge } from "tailwind-merge";
import { animated, useInView } from "react-spring";

// Internal Dependencies
import Heading from "@components/Heading";
import Section from "@components/Section";

// Constants
import { SECTIONS, WORK_DESCRIPTIONS as workDescriptions } from "@constants";

// Extract this section
const thisSection = SECTIONS.about

export default function About() {

  // Animate when in view
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0.5,
        transform: "translateY(20%)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0%)",
      },
  }))

  return (
    <Section id={thisSection.id} className="flex flex-col h-full md:flex-row md:items-stretch">

      <div className="md:grow-0 md:basis-2/3 md:pr-4">
        <Heading>{thisSection.name}</Heading>
        <animated.p className="md:mt-12">
          {"With a proven track record of excellence, unparalleled attention to detail, and a passion for Discover why clients choose us as their trusted partner in building dreams into reality."}
        </animated.p>
      </div>

      {/* Timeline like object */}
      <animated.div className="container mx-auto h-full w-full" ref={ref} style={springs}>
        <div className="wrap relative h-full overflow-hidden">
          <div className="border-2-2 absolute left-1/2 h-full border border-gray-700 border-opacity-20"></div>
          {workDescriptions.map((work, index) => {
            return <TimelineCard index={index + 1} key={index} {...work} />;
          })}
        </div>
      </animated.div>
    </Section>
  );
}

// Time card, adjust it's position as left or right based on the index
function TimelineCard({
  index,
  title,
  description
}: {
  index: number;
  title: string;
  description: string;
}) {
  return (
    <div
      className={twMerge(
        "mb-8 flex w-full items-center justify-between",
        index % 2 === 0 ? "right-timeline" : "left-timeline flex-row-reverse"
      )}
    >
      <div className="order-1 w-5/12"></div>
      <div className="z-20 order-1 flex h-8 w-8 items-center rounded-full bg-stone-800 shadow-xl">
        <h1 className="mx-auto text-lg font-semibold text-white">{index}</h1>
      </div>
      <div
        className={twMerge(
          "order-1 w-5/12 rounded-lg p-4 shadow-xl",
          index % 2 === 0 ? "bg-stone-300" : "bg-slate-300"
        )}
      >
        <h3 className="mb-3 text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-sm leading-snug tracking-wide text-gray-900 text-opacity-100">
          {description}
        </p>
      </div>
    </div>
  );
}
