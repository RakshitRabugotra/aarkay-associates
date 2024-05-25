import Gallery from '@/components/Gallery/Gallery'
import GoBack from '@/components/GoBack'
import Heading from '@/components/Heading'
import Logo from '@/components/Logo'
import Section from '@/components/Section'
import { PORTFOLIO } from '@/constants/constants'
import Link from 'next/link'

// Icon dependencies
import { FaAnglesDown } from 'react-icons/fa6'

export default function PortfolioPage() {
  return (
    <>
      <Logo className='absolute m-4'>
        <Heading className='text-xl'>Portfolio</Heading>
      </Logo>
      <Section>
        <div className='flex h-screen flex-col md:flex-row md:items-stretch'>
          <div className='pt-20'>
            <p className='w-full p-2 py-4 text-left text-lg font-normal md:my-auto md:max-w-[50vw] md:p-8 md:text-xl md:font-light lg:text-3xl'>
              {PORTFOLIO}
            </p>
            <GoBack backTo='/#portfolio' className='mx-2 md:mx-8' />
          </div>

          <Link
            href='/portfolio/#gallery'
            className='m-12 mx-auto flex w-fit animate-bounce flex-col gap-6 self-end rounded-3xl bg-gray-600/10 p-4'
          >
            <p className='max-w-fit cursor-pointer rounded-xl bg-gray-600/40 px-4 py-2 text-black'>
              Scroll Down!
            </p>
            <FaAnglesDown className='m-auto block text-4xl text-gray-600/40' />
          </Link>
        </div>

        <div id={'gallery'} className='py-10'>
          <Gallery />
        </div>
      </Section>
    </>
  )
}
