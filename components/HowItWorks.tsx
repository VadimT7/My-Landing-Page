'use client'

import { motion } from 'framer-motion'
import Section from './Section'
import { Send, Phone, Rocket, Smartphone } from 'lucide-react'

const steps = [
  {
    icon: Send,
    title: 'Send IG handle',
    desc: 'We spin a live preview of your brand.',
  },
  {
    icon: Phone,
    title: '15-min call',
    desc: 'Deposit/delivery rules, domain, Stripe connect.',
  },
  {
    icon: Rocket,
    title: 'Go live in 24h',
    desc: 'Get the full luxury website and booking system in less than 24 hours.',
  },
  {
    icon: Smartphone,
    title: 'Watch bookings hit your bank account',
    desc: 'First booking often in 7 days.',
  },
]

export default function HowItWorks() {
  return (
    <Section className="bg-muted/30">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">How it works</h2>
      </div>
      
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-gold/20 border border-gold/30 mb-4">
              <step.icon className="w-8 h-8 text-gold" />
            </div>
            <div className="text-sm font-semibold text-muted-foreground mb-1">Step {i + 1}</div>
            <h3 className="text-xl font-serif text-foreground mb-2">{step.title}</h3>
            <p className="text-sm text-muted-foreground">{step.desc}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
