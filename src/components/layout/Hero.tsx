'use client'
import { motion } from 'framer-motion'
import React from 'react'
import { ImagesSlider } from '../ui/hero-image-slider'
import image1 from '../../../public/images/dimsum.jpg'
import image2 from '../../../public/images/dimsumfood1.jpg'
import image3 from '../../../public/images/dimsumfood2.jpg'

export default function Hero() {
  const images: string[] = [image1.src, image2.src, image3.src]
  console.log(image1)
  return (
    <ImagesSlider className="h-[40rem]" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.4,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-5xl md:text-8xl text-center bg-clip-text text-transparent dark:bg-gradient-to-b dark:from-neutral-50 dark:to-neutral-400 py-4 bg-gradient-to-b from-yellow-50 to-yellow-500 font-header leading-normal ">
          Legend Seafood Restaurant <br />{' '}
          <div className="text-lg md:text-4xl font-normal font-body py-4 bg-gradient-to-b from-neutral-50 to-neutral-400 text-transparent bg-clip-text">
            Authentic flavors, Local feeling
          </div>
        </motion.p>
        <button className="px-4 py-2 backdrop-blur-sm border bg-emerald-300/10 border-emerald-500/20 text-white mx-auto text-center rounded-full relative mt-4">
          <span>Menu →</span>
          <div className="absolute inset-x-0  h-px -bottom-px bg-gradient-to-r w-3/4 mx-auto from-transparent via-emerald-500 to-transparent" />
        </button>
      </motion.div>
    </ImagesSlider>
  )
}
