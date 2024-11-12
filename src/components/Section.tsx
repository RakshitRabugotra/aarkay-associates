import React from 'react'
import { twMerge } from 'tailwind-merge'

export default function Section({
  id,
  className,
  fitHeight,
  noTopPadding,
  children,
}: {
  id?: string
  className?: string
  fitHeight?: boolean
  noTopPadding?: boolean
  children: React.ReactNode
}) {
  return (
    <section
      id={id}
      className={twMerge(
        fitHeight ? 'min-h-fit' : 'h-screen max-h-[1080px]',
        'flex w-full flex-col gap-4 p-6',
        !noTopPadding ? 'pt-20' : '',
        className,
      )}
    >
      {children}
    </section>
  )
}
