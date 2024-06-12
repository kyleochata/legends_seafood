// import { useRef, useEffect } from 'react'
// import style from '@/styles/Modal.module.css'

// interface ModalProps {
//   isOpen: boolean
//   closeModal: () => void
//   modalRef: React.RefObject<HTMLDivElement>
// }

// const Modal: React.FC<ModalProps> = ({ isOpen, closeModal, modalRef }) => {
//   useEffect(() => {
//     const handleEventOutside = (e: MouseEvent | KeyboardEvent) => {
//       if (
//         modalRef.current &&
//         !modalRef.current.contains(e.target as Node) &&
//         (e.type === 'mousedown' ||
//           (e.type === 'keydown' && (e as KeyboardEvent).key === 'Escape'))
//       ) {
//         closeModal()
//       }
//     }

//     if (isOpen) {
//       document.addEventListener('mousedown', handleEventOutside)
//       document.addEventListener('keydown', handleEventOutside)
//     } else {
//       document.removeEventListener('mousedown', handleEventOutside)
//       document.removeEventListener('keydown', handleEventOutside)
//     }

//     return () => {
//       document.removeEventListener('mousedown', handleEventOutside)
//       document.removeEventListener('keydown', handleEventOutside)
//     }
//   }, [isOpen, closeModal])

//   return (
//     <>
//       {isOpen && (
//         <div className={style.modal_backdrop}>
//           <div ref={modalRef} className="modal_content">
//             <button onClick={closeModal}>Close</button>
//             <nav>
//               <a href="#dim_sum">Dim sum</a>
//               <a href="#dinner_menu">Dinner Menu</a>
//               <a href="#contact">Location</a>
//             </nav>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// Modal.tsx

import { useEffect } from 'react'
import style from '@/styles/Modal.module.css'

interface ModalProps {
  isOpen: boolean
  closeModal: () => void
  modalRef: React.RefObject<HTMLDivElement>
  disableBackdropClick?: boolean // Option to disable clicking outside when open
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  closeModal,
  modalRef,
  disableBackdropClick = false,
}) => {
  useEffect(() => {
    const handleEventOutside = (e: MouseEvent | KeyboardEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(e.target as Node) &&
        (e.type === 'mousedown' ||
          (e.type === 'keydown' && (e as KeyboardEvent).key === 'Escape'))
      ) {
        closeModal()
      } else if (
        e.type === 'mousedown' &&
        (e.target as HTMLElement)?.classList.contains('Burger-menu')
      ) {
        console.log('Burger menu clicked')
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleEventOutside)
      document.addEventListener('keydown', handleEventOutside)
    } else {
      document.removeEventListener('mousedown', handleEventOutside)
      document.removeEventListener('keydown', handleEventOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleEventOutside)
      document.removeEventListener('keydown', handleEventOutside)
    }
  }, [isOpen, disableBackdropClick])

  return (
    <>
      {isOpen && (
        <div className={style.modal_backdrop}>
          <div ref={modalRef} className="modal_content">
            <button onClick={closeModal}>Close</button>
            <nav>
              <a href="#dim_sum">Dim sum</a>
              <a href="#dinner_menu">Dinner Menu</a>
              <a href="#contact">Location</a>
            </nav>
          </div>
        </div>
      )}
    </>
  )
}

export default Modal
