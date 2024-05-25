import Link from 'next/link'

// Internal Dependencies
import Heading from '@/components/Heading'
import Section from '@/components/Section'

// Content Dependencies
import { ErrorType } from '@constants'

export default function Error({ error }: { error: ErrorType }) {
  return (
    <Section>
      <Heading className='text-9xl'>{error.code + '!'}</Heading>
      <div className='flex flex-col gap-2'>
        <p>{error.text}</p>
        <Link
          href='/'
          className='max-w-fit cursor-pointer rounded-xl bg-gray-600/30 px-4 py-2 text-black'
        >
          {'<- Go back to Home'}
        </Link>
      </div>
    </Section>
  )
}
