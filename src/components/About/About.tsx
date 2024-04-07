import { twMerge } from "tailwind-merge";

// Internal Dependencies
import Heading from "@components/Heading";
import Section from "@components/Section";

// Constants
import { WORK_DESCRIPTIONS as workDescriptions } from "@constants";

export default function About() {
  return (
    <Section>
      <Heading>{"Why Choose Us?"}</Heading>
      <p>
        {
          "With a proven track record of excellence, unparalleled attention to detail, and a passion for Discover why clients choose us as their trusted partner in building dreams into reality."
        }
      </p>

      {/* Timeline like object */}
      <div className="container mx-auto h-full w-full">
        <div className="wrap relative h-full overflow-hidden">
          <div className="border-2-2 absolute left-1/2 h-full border border-gray-700 border-opacity-20"></div>
          {workDescriptions.map((work, index) => {
            return <TimelineCard index={index + 1} key={index} {...work} />;
          })}
        </div>
      </div>
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
