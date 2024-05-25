import Image from 'next/image'

// Content based dependencies
import { LOGO_DARK, FIRM_NAME } from '@/constants/constants'

export default function Logo({
  className,
  children,
}: {
  className?: string
  children?: React.ReactNode
}) {
  return (
    <div className={className}>
      <a href='/'>
        <Image
          width={30}
          height={30}
          src={LOGO_DARK}
          alt={`${FIRM_NAME} logo`}
        />
      </a>
      {children}
    </div>
  )
}
