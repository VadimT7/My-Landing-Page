'use client'

import { motion } from 'framer-motion'

export default function GradientOrb() {
  return (
    <div className="absolute inset-0 overflow-hidden">
      <motion.div
        className="absolute -top-48 -right-48 w-96 h-96 bg-gradient-to-br from-gold/20 via-gold/10 to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          rotate: [0, 90, 0],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <motion.div
        className="absolute -bottom-48 -left-48 w-96 h-96 bg-gradient-to-tr from-gold/15 via-transparent to-transparent rounded-full blur-3xl"
        animate={{
          scale: [1.2, 1, 1.2],
          rotate: [0, -90, 0],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  )
}
