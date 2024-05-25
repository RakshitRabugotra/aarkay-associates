'use client'

import { MouseEventHandler, useState } from 'react'
import { animated, useSpring } from '@react-spring/web'
import { twMerge } from 'tailwind-merge'
import Image from 'next/image'

// Content Dependencies
import { BUILDINGS_IMG, ImageCard } from '@/constants/constants'

// Icon definitions
import { MdOutlineClose } from 'react-icons/md'

/**
 * Main Gallery component
 */
export default function Gallery({ id }: { id?: string }) {
  const [show, setShow] = useState<boolean>(false)
  const [currentImg, setImg] = useState<ImageCard | undefined>()

  const [springs, api] = useSpring(() => ({
    from: { opacity: 0 },
    reset: true,
  }))

  const startModal = () => {
    setShow((_) => true)
    api.start({
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    })
  }

  const closeModal = () => {
    api.set({
      opacity: 0,
    })
    api.start({
      reverse: true,
    })
    setShow((_) => false)
    setImg(undefined)
  }

  return (
    <>
      <div
        id={id}
        className={twMerge(
          'fixed left-0 top-0 h-screen w-full bg-black/95',
          show ? 'z-[99] block' : 'z-[-1] hidden',
        )}
      >
        <animated.div style={springs}>
          <PopupImage image={currentImg} closeModal={closeModal} />
        </animated.div>
      </div>
      <div className='gallery-col-1 md:gallery-col-2 lg:gallery-col-3 md:px-3'>
        {BUILDINGS_IMG.toReversed().map((image, index) => {
          return (
            <div
              className='relative mb-3 cursor-pointer transition-all hover:opacity-80'
              key={index}
              onClick={() => {
                setImg((prev) => image)
                startModal()
              }}
            >
              <GalleryImage image={image} />
            </div>
          )
        })}
      </div>
    </>
  )
}

function GalleryImage({
  image,
  alterClass,
}: {
  image: ImageCard
  alterClass?: string
}) {
  return (
    <Image
      src={image.src}
      alt={image.alt}
      aria-label={image.description}
      width={0}
      height={0}
      sizes='100vw'
      className={alterClass ?? 'h-auto w-full rounded-3xl'}
    />
  )
}

function PopupImage({
  image,
  closeModal,
}: {
  image?: ImageCard
  closeModal: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <div className='relative flex h-screen flex-col items-center justify-center gap-8 p-8 text-slate-100 md:flex-row md:justify-between lg:justify-center lg:gap-12'>
      <button
        onClick={closeModal}
        className='fixed right-4 top-4 aspect-square w-12 text-white'
      >
        <MdOutlineClose className='text-5xl' />
      </button>
      {image && (
        <>
          <GalleryImage
            image={image}
            alterClass='h-[50vh] lg:h-[90vh] w-auto rounded-3xl md:h-[70vh]'
          />
          <div className='w-full md:w-[30%]'>
            <div className='w-full py-6 text-left text-3xl'>
              {image.location}
            </div>
            <div className='py-6 text-justify text-lg font-light'>
              {image.description}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
