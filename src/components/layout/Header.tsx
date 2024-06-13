// import { useRef } from 'react'
// import { Button } from '../ui/moving-border'
// import Container from './MaxWContainer'
// import Modal from './Modal'
// import { MoonIcon, SunIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
// import { useTheme } from 'next-themes'
// import Link from 'next/link'
// import { useModal, ModalProps } from '../../utils/helper'

// interface customInter {
//   useModal
// }

// const Header = () => {
//   const { theme, setTheme } = useTheme()
//   const { isOpen, closeModal, hamburgerMenuLogic }: customInter = useModal()
//   const modalRef = useRef<HTMLDivElement>(null)

//   return (
//     <header className="flex justify-center items-center w-full sticky top-0 headerDiv bg-white dark:bg-black">
//       <Container>
//         <div className="flex justify-between items-center py-4 w-full ">
//           <h1 className="text-2xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-yellow-50 dark:to-yellow-500 dark:font-header dark:leading-normal">
//             Legend Seafood
//           </h1>
//           <nav className="flex gap-5">
//             <a href="#menu" className="text-sm dark:text-white hidden sm:block">
//               Dim sum
//             </a>
//             <a
//               href="#dinner_menu"
//               className="text-sm dark:text-white hidden sm:block "
//             >
//               Dinner Menu
//             </a>
//             <a
//               href="#banquets"
//               className="text-sm dark:text-white hidden md:block "
//             >
//               Banquets & Private Dining
//             </a>
//             <a
//               href="#contact"
//               className="text-sm dark:text-white hidden sm:block"
//             >
//               Location
//             </a>
//           </nav>
//           <div className="flex flex-nowrap justify-between gap-5 items-center">
//             <Button
//               onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
//               borderRadius="0.5rem"
//               className="dark:bg-black dark:text-white dark:border-slate-800 bg-white text-black border-neutral-200"
//             >
//               {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
//             </Button>
//             <button className="w-1/2 h-full" onClick={hamburgerMenuLogic}>
//               <HamburgerMenuIcon />
//             </button>
//             <Modal
//               isOpen={isOpen}
//               closeModal={closeModal}
//               modalRef={modalRef}
//             />
//           </div>
//         </div>
//       </Container>
//     </header>
//   )
// }

// Header.tsx
'use client'
import { useRef } from 'react'
import { Button } from '../ui/moving-border'
import Container from './MaxWContainer'
import Modal from './Modal'
import { MoonIcon, SunIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import { useTheme } from 'next-themes'
import { useModal, ModalProps } from '../../utils/helper'

const Header = () => {
  const { theme, setTheme } = useTheme()
  const { isOpen, closeModal, setIsOpen, hamburgerMenuLogic }: ModalProps =
    useModal()
  const modalRef = useRef<HTMLDivElement>(null)

  const handleHamburgerClick = () => {
    hamburgerMenuLogic()
    if (isOpen) {
      closeModal()
    }
  }

  return (
    <header className="flex justify-center items-center w-full sticky top-0 headerDiv bg-white dark:bg-black">
      <Container>
        <div className="flex justify-between items-center py-4 p-5 w-full ">
          <h1 className="text-2xl font-bold dark:bg-clip-text dark:text-transparent dark:bg-gradient-to-b dark:from-yellow-50 dark:to-yellow-500 dark:font-header dark:leading-normal">
            Legend Seafood
          </h1>
          <nav className="flex gap-5">
            <a href="#menu" className="text-sm dark:text-white hidden sm:block">
              Dim sum
            </a>
            <a
              href="#dinner_menu"
              className="text-sm dark:text-white hidden sm:block"
            >
              Full Menu
            </a>
            <a
              href="#banquets"
              className="text-sm dark:text-white hidden md:block "
            >
              Banquets & Private Dining
            </a>
            <a
              href="#discover"
              className="text-sm dark:text-white hidden sm:block"
            >
              Discover
            </a>
          </nav>
          <div className="flex flex-nowrap justify-between gap-5 items-center">
            <Button
              onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              borderRadius="0.5rem"
              className="dark:bg-black dark:text-white dark:border-slate-800 bg-white text-black border-neutral-200"
            >
              {theme === 'dark' ? <MoonIcon /> : <SunIcon />}
            </Button>
            {/* CHORE: Change the modal to work. Current issue: It will not stop propagation when modal is open and you click on the burger icon again. Will close then immediately open */}
            <button
              className="w-1/2 h-full Burger-menu"
              onClick={handleHamburgerClick}
              data-label="Burger-menu"
            >
              <HamburgerMenuIcon className="Burger-menu" />
            </button>
            <Modal
              isOpen={isOpen}
              closeModal={closeModal}
              modalRef={modalRef}
              disableBackdropClick={isOpen} // Disable backdrop click when modal is open
            />
          </div>
        </div>
      </Container>
    </header>
  )
}

export default Header
