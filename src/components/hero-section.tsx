'use client'

import Image from "next/image"
import { motion } from "framer-motion";
import HeroImg from '@images/steptodown.com307454.jpg';
import Link from "next/link";

export default function HeroComponent(){
  return (
    <section className="relative h-[80vh] bg-gradient-to-r from-pink-400/90 to-pink-600/90">
      <Image
        src={HeroImg}
        alt='Students Learning'
        fill
        className="mix-blend-overlay object-cover"
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h2 className="text-2xl mb-4">WELCOME TO</h2>
          <h1 className="text-3xl md:text-5xl lg:text-7xl font-black mb-4">DE MONTESSORI CARE INTERNATIONAL SCHOOL</h1>
          <Link href='/contact'>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-pink-600 px-6 py-3 rounded-full font-semibold"
            >
              CONTACT NOW
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  )
}