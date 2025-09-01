'use client'

import { motion } from 'framer-motion'
import { Badge } from '@/components/ui/badge'
import { Check } from 'lucide-react'
import Section from './Section'
import { landingData } from '@/data/landing'

export default function Solution() {
  return (
    <Section>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <Badge className="bg-gold/20 text-gold border-gold mb-4">Solution</Badge>
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-8">
          {landingData.solution.title}
        </h2>
        
        <div className="space-y-4 mb-8">
          {landingData.solution.text.map((paragraph, index) => (
            <motion.p
              key={index}
              className="text-lg text-foreground"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              {paragraph}
            </motion.p>
          ))}
        </div>
        
        <div className="grid gap-3 mb-12">
          {landingData.solution.list.map((item, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              viewport={{ once: true }}
            >
              <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
              <span className="text-lg text-foreground">{item}</span>
            </motion.div>
          ))}
        </div>
        
        <motion.p
          className="text-2xl md:text-3xl font-serif text-gold"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {landingData.solution.punchline}
        </motion.p>
      </motion.div>
    </Section>
  )
}
