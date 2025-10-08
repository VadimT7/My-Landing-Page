'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import Section from './Section'
import ShimmerBorder from './ShimmerBorder'
import { landingData } from '@/data/landing'
import CalendlyModal from './CalendlyModal'
import PerformanceModal from './PerformanceModal'

export default function CTA() {
  const [calOpen, setCalOpen] = useState(false)
  const [perfOpen, setPerfOpen] = useState(false)
  
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
        transition={{ duration: 0.2 }}
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
          transition={{ duration: 0.2, delay: 0.05 }}
          viewport={{ once: true }}
        >
          <ShimmerBorder>
            <button 
              className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-zinc-900 font-semibold text-lg rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95 w-full"
              onClick={() => setPerfOpen(true)}
              data-analytics="click_cta"
              data-analytics-meta='{"label":"cta_performance"}'
            >
              <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <span className="relative z-10">{landingData.cta.buttons[0].text}</span>
            </button>
          </ShimmerBorder>
          
          <button 
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm text-zinc-100 font-semibold text-lg rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
            onClick={() => setCalOpen(true)}
            data-analytics="click_cta"
            data-analytics-meta='{"label":"cta_calendly"}'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">{landingData.cta.buttons[1].text}</span>
          </button>
        </motion.div>
      </motion.div>

      <CalendlyModal open={calOpen} onClose={() => setCalOpen(false)} />
      <PerformanceModal open={perfOpen} onClose={() => setPerfOpen(false)} />
    </Section>
  )
}
