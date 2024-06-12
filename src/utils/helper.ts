// helper.ts

import { useState } from 'react'

export interface ModalProps {
  isOpen: boolean
  openModal: () => void
  closeModal: () => void
  hamburgerMenuLogic: () => void
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const useModal = (): ModalProps => {
  const [isOpen, setIsOpen] = useState(false)

  const openModal = () => setIsOpen(true)
  const closeModal = () => setIsOpen((prev) => !prev)

  const hamburgerMenuLogic = () => {
    setIsOpen((prev) => !prev)
  }

  return {
    isOpen,
    openModal,
    setIsOpen,
    closeModal,
    hamburgerMenuLogic,
  }
}

const isIos = () => {
  return (
    typeof window !== 'undefined' &&
    /iPad|iPhone|iPod/i.test(navigator.userAgent)
  )
}

export const mapLink = isIos()
  ? `maps:${encodeURIComponent(
      'https://www.google.com/maps/place/Legend+Seafood+Restaurant/@21.3141897,-157.8616121,17z/data=!3m1!4b1!4m6!3m5!1s0x7c006e76ef03a53f:0x2104e771d5e8ce36!8m2!3d21.3141897!4d-157.8616121!16s%2Fg%2F1tj463mm?entry=ttu'
    )}`
  : 'https://www.google.com/maps/place/Legend+Seafood+Restaurant/@21.3141897,-157.8616121,17z/data=!3m1!4b1!4m6!3m5!1s0x7c006e76ef03a53f:0x2104e771d5e8ce36!8m2!3d21.3141897!4d-157.8616121!16s%2Fg%2F1tj463mm?entry=ttu'
