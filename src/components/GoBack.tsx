'use client'

/* A component specially designed for making back-reference links */
import { useRouter } from 'next/navigation'
import { twMerge } from 'tailwind-merge'

export default function GoBack({
  backTo,
  className,
  text,
}: {
  backTo?: string
  className?: string
  text?: string
}) {
  const router = useRouter()

  return (
    <div
      onClick={() => router.push(backTo ? backTo : '/')}
      className={twMerge(
        'm-8 max-w-fit cursor-pointer rounded-xl bg-gray-600/30 px-4 py-2 text-black',
        className,
      )}
    >
      {'<- ' + (text ? text : 'Go back to Home')}
    </div>
  )
}
