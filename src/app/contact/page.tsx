import Image from 'next/image'

// Internal Dependencies
import Section from '@/components/Section'
import Heading from '@/components/Heading'
import Logo from '@/components/Logo'
import GoBack from '@/components/GoBack'

// Content Dependencies
import { BUILDINGS_IMG, CONTACT_US, SOCIALS } from '@/constants/constants'

// Icon Dependencies
import { TbExternalLink } from 'react-icons/tb'

export default function ContactPage() {
  // The illustration from the static asset folder
  const { src, alt } =
    BUILDINGS_IMG[Math.floor(Math.random() * (BUILDINGS_IMG.length - 1))]

  return (
    <>
      <Logo className='absolute m-4'>
        <Heading className='text-xl'>Contact Us</Heading>
      </Logo>
      <Section
        fitHeight
        className='md:flex-row md:items-center md:justify-between'
      >
        <div className='basis-1/2'>
          <div>
            <p className='my-auto px-8 pt-6 text-justify text-lg font-normal md:p-8'>
              {CONTACT_US}
            </p>
            <GoBack />
          </div>

          <SocialHandles />
        </div>

        {/* Illustration for contact page */}

        <div className='hidden basis-1/2 md:block'>
          <Image
            src={src}
            alt={alt}
            width={600}
            height={600}
            className={
              'm-auto aspect-square h-full rounded-full object-cover p-2'
            }
          />
        </div>
      </Section>
    </>
  )
}

function SocialHandles() {
  return (
    <div className='flex flex-col px-8 md:p-8 lg:gap-6'>
      {SOCIALS.map((handle, index) => (
        <a href={handle.href} target='_blank' key={index}>
          <Heading className='inline-block basis-full text-5xl leading-relaxed transition-all duration-[.4s] ease-in-out hover:text-black/70 hover:underline lg:text-7xl'>
            {handle.name}
            <span className='mx-3 inline-block text-2xl'>
              <TbExternalLink />
            </span>
          </Heading>
        </a>
      ))}
    </div>
  )
}
