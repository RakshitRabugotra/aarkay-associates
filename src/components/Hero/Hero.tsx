"use client"

import Image from "next/image"

// Internal Dependencies
import Heading from "@/components/Heading"
import Section from "@components/Section"

// Constants
import { BUILDINGS_IMG, FIRM_NAME, FIRM_LOCATION, FIRM_INTRO } from "@constants"
import { animated, useSpring, useInView } from "react-spring"

export default function Hero() {
  const [ref, springs] = useInView(
    () => ({
      from: {
        transform: "translateY(10%)",
        opacity: 0,
        color: "rgb(239 68 68 / 1)"
      },
      to: {
        transform: "translateX(0%)",
        opacity: 1,
        color: "rgb(28 25 23 / 1)"
      }
    }),
    {}
  )

  return (
    <Section id="hero-section" className="md:flex-row">
      {/* Heading and description  */}
      <div className="md:w-[60%]">
        <Heading className="flex-col md:mt-12 md:text-9xl">
          <animated.div ref={ref} style={springs}>
            {FIRM_NAME}
          </animated.div>
          <animated.div
            className="inline-flex max-w-fit text-4xl text-stone-900 md:text-8xl"
            ref={ref}
            style={springs}
          >
            {FIRM_LOCATION}
            <Image
              src="/assets/misc/pin.svg"
              width={100}
              height={100}
              alt="map-pin"
              className="m-auto aspect-square h-12 w-12 p-2 md:h-24 md:w-24"
            />
          </animated.div>
        </Heading>

        <p className="para text-lg text-stone-900 md:max-w-[60vw] md:px-4 md:py-12">
          {FIRM_INTRO}
        </p>
      </div>

      {/* Image and count */}

      <div className="flex w-full flex-col gap-2 md:w-[40%]">
        <Image
          src={BUILDINGS_IMG[1].src}
          width={600}
          height={800}
          className={
            "aspect-square h-full w-full rounded-2xl bg-center object-cover md:aspect-video"
          }
          priority
          alt={"building image"}
        />
        <CountUpCard />
      </div>
    </Section>
  )
}

/* The count up card showing the number of projects done, and other things */
function CountUpCard() {
  return (
    <div
      className={
        "flex flex-col justify-center gap-4 rounded-2xl bg-stone-800 p-8 text-stone-50 md:p-10"
      }
    >
      <div className="flex flex-col flex-wrap text-2xl ">
        <span className="text-6xl text-stone-400">
          {"+"}
          <CountUpInView num={350} />
        </span>
        Successful projects
      </div>
      <div className="flex flex-col flex-wrap text-2xl ">
        <span className="text-6xl text-stone-400">
          {"+"}
          <CountUpInView num={80} />
        </span>
        Happy Clients
      </div>
    </div>
  )
}

/* Used to check if the count is in view and then start the animation */
function CountUpInView({
  num,
  className
}: {
  num: number
  className?: string
}) {
  /* Animate the number */
  const { number } = useSpring({
    from: { number: 0 },
    to: { number: num },
    delay: 0,
    config: { mass: 1, tension: 20, friction: 7 }
  })

  // Animate when in view
  const [ref, springs] = useInView(
    () => ({
      from: {
        opacity: 0.5,
        y: 100
      },
      to: {
        opacity: 1,
        y: 0
      }
    }),
    {
      // Animate when all of it is in view
      amount: "all"
    }
  )

  return (
    <animated.span ref={ref} className={className} style={springs}>
      {number.to((_num) => _num.toFixed(0))}
    </animated.span>
  )
}
