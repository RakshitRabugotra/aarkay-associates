import Gallery from '@/components/Gallery/Gallery'
import GoBack from '@/components/GoBack'
import Heading from '@/components/Heading'
import Logo from '@/components/Logo'
import Section from '@/components/Section'
import { PORTFOLIO } from '@/constants/constants'

export default function PortfolioPage() {
  return (
    <>
      <Logo className='absolute m-4'>
        <Heading className='text-xl'>Portfolio</Heading>
      </Logo>
      <Section>
        <div className='flex flex-col md:flex-row md:items-stretch'>
          <div className='pt-20'>
            <p className='w-full p-2 py-4 text-left text-lg font-normal md:my-auto md:max-w-[50vw] md:p-8 md:font-light'>
              {PORTFOLIO}
            </p>
            <GoBack backTo='/#portfolio' className='mx-2 md:mx-8' />
          </div>
        </div>

        <div id={'gallery'} className='py-6'>
          <Gallery />
        </div>
      </Section>
    </>
  )
}
