'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import BeforeAfter from './BeforeAfter'
import ParallaxWrapper from './ParallaxWrapper'
import { landingData } from '@/data/landing'

export default function CaseStudy() {
  return (
    <Section className="relative bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden">
      {/* Luxury accent lines */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-b from-gold/50 to-transparent"></div>
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-32 bg-gradient-to-t from-gold/50 to-transparent"></div>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-12">
          {landingData.caseStudy.title}
        </h2>
        
        <ParallaxWrapper offset={30}>
          <motion.blockquote
            className="text-xl md:text-2xl lg:text-3xl font-serif text-foreground leading-relaxed mb-8 max-w-4xl mx-auto"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            &ldquo;{landingData.caseStudy.quote}&rdquo;
          </motion.blockquote>
        </ParallaxWrapper>
        
        <motion.p
          className="text-lg md:text-xl italic text-gold mb-12"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {landingData.caseStudy.testimonial}
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-wider text-muted-foreground mb-4">
            {landingData.caseStudy.beforeAfterCaption}
          </p>
          <BeforeAfter />
        </motion.div>
      </motion.div>
    </Section>
  )
}
