'use client'

import { MouseEventHandler } from 'react'
import { animated } from 'react-spring'

export default function Modal({
  style,
  closeModal,
}: {
  style: any
  closeModal: MouseEventHandler<HTMLButtonElement>
}) {
  return (
    <animated.div style={style} className='modal'>
      <h3 className='modal-title'>Modal title</h3>
      <p className='modal-content'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto dolores
        molestias praesentium impedit. Facere, perferendis voluptate at, amet
        excepturi ratione mollitia nemo ipsum odit impedit doloremque rerum.
        Quisquam, dolorum at?
      </p>
      <button className='modal-close-button' onClick={closeModal}>
        Close
      </button>
    </animated.div>
  )
}
