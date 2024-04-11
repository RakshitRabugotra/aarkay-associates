"use client";

import Autoplay from "embla-carousel-autoplay";
import useEmblaCarousel from "embla-carousel-react";
import { animated, useInView } from "react-spring";

// Internal Dependencies
import Section from "@/components/Section";
import Heading from "@/components/Heading";

// Content Dependencies
import {
  FIRM_NAME,
  RATING_MAX,
  SECTIONS,
  TESTIMONIALS,
  TestimonialCard
} from "@/constants/constants";
import { twMerge } from "tailwind-merge";

// Extract this section
const thisSection = SECTIONS.testimonials;

export default function Testimonials() {
  const [carouselRef] = useEmblaCarousel({ loop: true }, [
    Autoplay({ stopOnInteraction: false })
  ]);

  // Animate when in view
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      transform: "translateY(40%)"
    },
    to: {
      opacity: 1,
      transform: "translateY(0%)"
    }
  }));

  return (
    <animated.div ref={ref} style={springs}>
      <Section id={thisSection.id} fitHeight>
        <Heading>{thisSection.name}</Heading>
        <p>{`Exploring the experiences and satisfaction of our partners with ${FIRM_NAME}'s exceptional services and design solutions`}</p>

        {/* <Carousel> */}
        <div ref={carouselRef} className="max-h-fit overflow-x-clip px-1">
          <div className="flex min-h-max items-stretch gap-4 px-2">
            {TESTIMONIALS.map((testimonial: TestimonialCard, index) => (
              <Slide key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </Section>
    </animated.div>
  );
}

function Slide({ rating, statement, username }: TestimonialCard) {
  // The rating stars
  const ratingArray: React.ReactNode[] = [];
  for (let i = 1; i <= RATING_MAX; i++) {
    ratingArray.push(<RatingStar on={i <= rating} key={i} />);
  }

  return (
    <div
      className={twMerge(
        "flex w-full shrink-0 grow basis-full flex-col justify-between gap-2 md:basis-1/3",
        "rounded-xl border-2 px-4 py-2 text-stone-900"
      )}
    >
      <div className="w-full text-left">{ratingArray}</div>
      <div>&quot;{statement}&quot;</div>
      <div className="display px-2 font-sans text-xl font-medium text-black">
        — {username}
      </div>
    </div>
  );
}

function RatingStar({ on }: { on: boolean }) {
  return (
    <svg
      className={twMerge(
        "ms-1 inline-block h-5 w-5",
        on ? "text-yellow-300" : "text-gray-300"
      )}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 22 20"
    >
      <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
    </svg>
  );
}
