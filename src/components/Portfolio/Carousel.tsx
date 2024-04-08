"use client"

import React from "react";
import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import Image from "next/image";

// Constants
import { BUILDINGS_IMG, ImageCard } from "@constants";

export default function Carousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <section className="m-auto max-w-[48px]">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="-ml-5 touch-pan-y">
          {BUILDINGS_IMG.map((image: ImageCard, index) => (
            <div
              className="min-w-0 shrink-0 grow-0 basis-full pl-5"
              key={index}
            >
              <Card image={image}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Single card for the carousel
function Card({ image }: { image: ImageCard }) {
  return (
    <div className={"flex h-full w-full flex-col gap-2"}>
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
}
