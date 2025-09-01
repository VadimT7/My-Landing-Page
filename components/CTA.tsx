'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Section from './Section'
import ShimmerBorder from './ShimmerBorder'
import { landingData } from '@/data/landing'

export default function CTA() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#'
  const igHandle = process.env.NEXT_PUBLIC_IG_HANDLE || '@sapphire_development'
  
  return (
    <Section className="relative bg-gradient-to-b from-background via-muted/20 to-background overflow-hidden">
      {/* Animated background gradient */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          background: 'radial-gradient(circle at 50% 50%, #C6A867 0%, transparent 70%)',
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="relative z-10 text-center max-w-3xl mx-auto"
      >
        <h2 className="text-4xl md:text-6xl font-serif text-foreground mb-6">
          {landingData.cta.title}
        </h2>
        
        <p className="text-xl md:text-2xl text-muted-foreground mb-12">
          {landingData.cta.subtitle}
        </p>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <ShimmerBorder>
            <Button 
              asChild
              size="lg"
              className="bg-gold text-background hover:bg-gold-muted font-semibold text-lg px-8 py-6 w-full"
            >
              <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
                {landingData.cta.buttons[0]}
              </a>
            </Button>
          </ShimmerBorder>
          
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-2 border-gold text-gold hover:bg-gold hover:text-background font-semibold text-lg px-8 py-6"
          >
            <a href={`https://instagram.com/${igHandle.replace('@', '')}`} target="_blank" rel="noopener noreferrer">
              {landingData.cta.buttons[1]} {igHandle}
            </a>
          </Button>
        </motion.div>
      </motion.div>
    </Section>
  )
}
