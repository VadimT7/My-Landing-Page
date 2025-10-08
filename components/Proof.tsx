'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Section from './Section'
import { Button } from './ui/button'

const receipts = [
  { id: 1, label: 'WhatsApp Close', img: '/images/before.jpg' },
  { id: 2, label: 'Checkout Success', img: '/images/after.jpg' },
  { id: 3, label: 'Before/After Speed', img: '/images/before.jpg' },
]

export default function Proof() {
  const [active, setActive] = useState(0)
  
  return (
    <Section className="bg-gradient-to-b from-background via-muted/20 to-background">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-5xl font-serif text-foreground mb-4">Why this prints money</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-semibold mb-2">Kills DM ping-pong</h3>
            <p className="text-muted-foreground">Instant bookings on your site. No back-and-forth.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Looks like your price</h3>
            <p className="text-muted-foreground">Luxury design, mobile-first. Clients trust you before the call.</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Fast wins</h3>
            <p className="text-muted-foreground">First booking often in 7 days. Perceived likelihood ↑</p>
          </div>
        </div>

        <div>
          <div className="relative aspect-[4/3] bg-muted rounded-lg overflow-hidden border border-gold/20">
            <motion.img
              key={active}
              src={receipts[active].img}
              alt={receipts[active].label}
              className="w-full h-full object-cover filter blur-sm"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
            <p className="absolute bottom-4 left-4 text-foreground font-semibold">{receipts[active].label}</p>
          </div>
          <div className="flex justify-center gap-3 mt-4">
            <Button
              variant="outline"
              size="icon"
              onClick={() => setActive((active - 1 + receipts.length) % receipts.length)}
              className="border-gold text-gold"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>
            {receipts.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full ${i === active ? 'bg-gold' : 'bg-border'}`}
              />
            ))}
            <Button
              variant="outline"
              size="icon"
              onClick={() => setActive((active + 1) % receipts.length)}
              className="border-gold text-gold"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-muted-foreground text-center mt-3">
            Perceived likelihood ↑ with proof matched to your situation (owner-led, city, fleet size).
          </p>
        </div>
      </div>
    </Section>
  )
}
