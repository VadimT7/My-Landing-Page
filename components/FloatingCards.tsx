'use client'

import { motion } from 'framer-motion'

export default function FloatingCards() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Floating decorative cards */}
      <motion.div
        className="absolute top-10 left-10 w-32 h-48 bg-gradient-to-br from-gold/10 to-transparent rounded-lg backdrop-blur-sm"
        animate={{
          y: [0, -20, 0],
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute bottom-20 right-20 w-40 h-32 bg-gradient-to-tl from-gold/10 to-transparent rounded-lg backdrop-blur-sm"
        animate={{
          y: [0, 20, 0],
          rotate: [0, -5, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        className="absolute top-1/3 right-1/4 w-24 h-36 bg-gradient-to-bl from-gold/5 to-transparent rounded-lg backdrop-blur-sm"
        animate={{
          y: [0, 15, 0],
          x: [0, -10, 0],
          rotate: [0, 3, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </div>
  )
}
