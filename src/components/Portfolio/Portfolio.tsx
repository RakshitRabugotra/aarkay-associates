import Image from "next/image";

// Internal dependencies
import Heading from "@/components/Heading";
import Section from "@/components/Section";

// Constants
import { BUILDINGS_IMG, ImageCard } from "@constants";

export default function Portfolio() {
  return (
    <Section>
      <Heading>Our Work</Heading>
      {/* Scrolling Gallery */}
      <div className={"flex h-[80vh] w-full flex-col gap-8 overflow-y-auto"}>
        {BUILDINGS_IMG.map((image: ImageCard, index) => {
          return (
            <div key={index} className={"flex h-full w-full flex-col gap-2"}>
              <Image
                src={image.src}
                width={600}
                height={1200}
                alt={image.alt}
                className={"aspect-square w-full rounded-xl object-cover"}
              />
              <div className={"flex h-1/4 flex-col"}>
                <h4 className="heading text-4xl font-medium">{image.title}</h4>
                <h2 className="heading text-xl font-normal text-stone-500">
                  {image.location}
                </h2>
                <p className="opacity-80">{image.description}</p>
              </div>
            </div>
          );
        })}
      </div>
    </Section>
  );
}
