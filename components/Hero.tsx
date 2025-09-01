'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { landingData } from '@/data/landing'
import ParticleBackground from './ParticleBackground'

export default function Hero() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#'
  const igHandle = process.env.NEXT_PUBLIC_IG_HANDLE || '@sapphire_development'
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {landingData.hero.headline.split(' ').map((word, index) => {
            if (word === '$1M') {
              return <span key={index} className="text-gold gold-underline">{word} </span>
            }
            return word + ' '
          })}
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {landingData.hero.subheadline}
        </motion.p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button 
            asChild
            size="lg"
            className="bg-gold text-background hover:bg-gold-muted font-semibold text-lg px-8"
          >
            <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
              Book a 15-min preview
            </a>
          </Button>
          
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-background font-semibold text-lg px-8"
          >
            <a href={`https://instagram.com/${igHandle.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
              DM us {igHandle}
            </a>
          </Button>
        </motion.div>
      </div>
    </section>
  )
}
