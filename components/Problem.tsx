'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import Section from './Section'
import GradientOrb from './GradientOrb'
import { landingData } from '@/data/landing'

export default function Problem() {
  return (
    <Section className="relative bg-muted/30">
      <GradientOrb />
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Badge className="bg-gold/20 text-gold border-gold mb-4">Problem</Badge>
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
          {landingData.problem.title}
        </h2>
        
        <div className="space-y-4 mb-12">
          {landingData.problem.bullets.map((bullet, index) => (
            <motion.p
              key={index}
              className="text-lg text-foreground flex items-start"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <span className="text-gold mr-3 mt-1">•</span>
              <span>{bullet}</span>
            </motion.p>
          ))}
        </div>
        
        <motion.div
          className="bg-background/50 backdrop-blur-sm border-l-4 border-gold p-6 rounded-r-lg"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-lg md:text-xl italic text-muted-foreground">
            {landingData.problem.truthCallout}
          </p>
        </motion.div>
      </motion.div>
    </Section>
  )
}
