'use client'

import Image from 'next/image'
import Autoplay from 'embla-carousel-autoplay'
import useEmblaCarousel from 'embla-carousel-react'
import { animated, useInView } from 'react-spring'

// Internal dependencies
import Heading from '@components/Heading'
import Section from '@components/Section'

// Content dependencies
import { BUILDINGS_IMG, ImageCard, SECTIONS } from '@constants'

// Extract this section
const thisSection = SECTIONS.portfolio

export default function Portfolio() {
  const [ref, springs] = useInView(() => ({
    from: {
      opacity: 0,
      transform: 'translateY(30%)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0%)',
    },
  }))

  return (
    <Section id={thisSection.id} className='pt-0'>
      <Heading className='flex w-full flex-row flex-wrap justify-between gap-4'>
        {thisSection.name}
        {/* See all button */}
        <a
          className='w-10 min-w-fit self-center rounded-xl bg-gray-500/15 px-4 py-2 text-base text-slate-900/90'
          href='/portfolio'
          target='_self'
          referrerPolicy='same-origin'
        >
          See All
        </a>
      </Heading>
      {/* Scrolling Gallery */}
      <animated.div
        className={'flex h-[80vh] w-full flex-col gap-8 overflow-y-auto'}
        ref={ref}
        style={springs}
      >
        <Carousel
          slides={BUILDINGS_IMG.map((image: ImageCard, index) => (
            <Slide key={index} image={image} />
          ))}
        />
      </animated.div>
    </Section>
  )
}

function Carousel({ slides }: { slides: React.ReactNode[] }) {
  const [carouselRef] = useEmblaCarousel({ loop: true, duration: 35 }, [
    Autoplay({ delay: 3000, stopOnInteraction: false }),
  ])

  return (
    <div ref={carouselRef} className='h-full overflow-x-clip p-1'>
      <div className='flex h-full'>{slides}</div>
    </div>
  )
}

function Slide({ image }: { image: ImageCard }) {
  return (
    <div
      className={
        'flex h-full w-full shrink-0 basis-full flex-col gap-2 md:basis-1/3'
      }
    >
      <Image
        src={image.src}
        width={600}
        height={1200}
        alt={image.alt}
        className={'aspect-square h-3/4 w-full rounded-3xl object-cover p-2'}
      />
      <div className={'flex grow flex-col justify-between px-2'}>
        <div>
          <h4 className='heading mb-2 text-4xl font-medium text-stone-600'>
            {image.location}
          </h4>
        </div>
        <p className='mb-auto text-left opacity-80'>{image.description}</p>
      </div>
    </div>
  )
}
