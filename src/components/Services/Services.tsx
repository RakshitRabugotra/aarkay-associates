import Section from "@components/Section";
import Heading from "@components/Heading";
import { SERVICES, SECTIONS as sections } from "@constants";
import Image from "next/image";

export default function Services() {
  // Extract this section
  const thisSection = sections.services;

  return (
    <Section id={thisSection.id}>
      <Heading>{thisSection.name}</Heading>

      {/* Service cards */}
      <div className="flex flex-row flex-wrap">
        {SERVICES.map((service, index) => {
          return <div key={index} className="flex flex-col shrink-0 grow-0 p-2 justify-between basis-1/2">
            <Image
            src={`/assets/services/${service.imgSrc}`}
            width={200}
            height={200}
            alt={service.name}
            className={"aspect-square object-cover rounded-lg"}
            />
            <div className="mt-2 grow flex flex-col gap-2">
              <h2 className="heading text-lg font-medium">{service.name}</h2>
              <p className="text-sm grow align-middle my-auto text-stone-900/60">{service.description}</p>
            </div>
          </div>
        })}
      </div>

    </Section>
  );
}
