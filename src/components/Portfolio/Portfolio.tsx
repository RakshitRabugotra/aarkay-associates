"use client"

import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { animated, useInView } from "react-spring";

// Internal dependencies
import Heading from "@components/Heading";
import Section from "@components/Section";

// Content dependencies
import { BUILDINGS_IMG, ImageCard, SECTIONS } from "@constants";


// Extract this section
const thisSection = SECTIONS.portfolio;

export default function Portfolio() {

  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0,
        transform: "translateY(30%)",
      },
      to: {
        opacity: 1,
        transform: "translateY(0%)",
      },
  }))

  return (
    <Section id={thisSection.id}>
      <Heading>{thisSection.name}</Heading>
      {/* Scrolling Gallery */}
      <animated.div className={"flex h-[80vh] w-full flex-col gap-8 overflow-y-auto"} ref={ref} style={springs}>
        <Carousel
          slides={BUILDINGS_IMG.map((image: ImageCard, index) => (
            <Slide key={index} image={image} />
          ))}
        />
      </animated.div>
      {/* See all button */}
      <a className="text-lg px-8 py-2 ml-3 md:m-0 bg-stone-900 text-stone-100 rounded-xl max-w-fit">See all</a>
    </Section>
  );
}

function Carousel({ slides }: { slides: React.ReactNode[] }) {
  const [carouselRef] = useEmblaCarousel({ loop: true }, [Autoplay({ stopOnInteraction: false })]);

  return (
    <div ref={carouselRef} className="h-full p-1 overflow-x-clip">
      <div className="flex h-full">{slides}</div>
    </div>
  );
}

function Slide({ image }: { image: ImageCard }) {
  return (
    <div className={"flex shrink-0 basis-full h-full w-full flex-col gap-2 md:basis-1/3"}>
      <Image
        src={image.src}
        width={600}
        height={1200}
        alt={image.alt}
        className={"aspect-square p-2 w-full h-3/4 rounded-3xl object-cover"}
      />
      <div className={"flex flex-col justify-between grow px-2"}>
        <div>
          <h4 className="heading text-4xl font-medium">{image.title}</h4>
          <h2 className="heading text-xl font-normal text-stone-500">{image.location}</h2>
        </div>
        <p className="opacity-80 my-auto text-left">{image.description}</p>
      </div>
    </div>
  );
}
