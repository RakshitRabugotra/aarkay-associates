// Internal Dependencies
import Section from '@components/Section'
import Heading from '@components/Heading'

export default function ContactUs() {
  return (
    <Section
      className='mt-8 h-[60vh] items-center justify-center bg-aesthetic bg-center md:items-start'
      fitHeight
    >
      <div className='flex flex-col justify-center gap-8 rounded-2xl border-2 border-stone-400 bg-stone-800/90 p-8 backdrop-blur-sm md:ml-8'>
        <Heading className='text-4xl text-stone-100'>
          {'Get Started,'}
          <br />
          <span className='text-2xl font-normal capitalize'>
            {'Make your dream place a reality!'}
          </span>
        </Heading>
        <a className='max-w-fit rounded-2xl bg-stone-800 px-6 py-4 text-center text-stone-100'>
          {'Book an Appointment'}
        </a>
      </div>
    </Section>
  )
}
