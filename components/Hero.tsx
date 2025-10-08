'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import ParticleBackground from './ParticleBackground'
import CalendlyModal from './CalendlyModal'
import PerformanceModal from './PerformanceModal'
import LivePreviewFormModal from './LivePreviewFormModal'
import { CheckCircle, CreditCard, Rocket } from 'lucide-react'

export default function Hero() {
  const [calOpen, setCalOpen] = useState(false)
  const [perfOpen, setPerfOpen] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)
  
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 pt-16 overflow-hidden">
      <ParticleBackground />
      <div className="relative z-10 max-w-5xl mx-auto text-center">
        <motion.h1 
          className="text-4xl md:text-6xl lg:text-7xl font-serif text-foreground mb-6 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          Turn IG traffic into paid bookings in <span className="text-gold">7 days</span>.
        </motion.h1>
        
        <motion.p 
          className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.05 }}
        >
          Go live in <span className="text-foreground font-semibold">24 hours</span>. Instant book + premium site + admin dashboard. Done-for-you launch.
        </motion.p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-10 text-left max-w-4xl mx-auto">
          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-500/30 transition-colors duration-300">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <CheckCircle className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-foreground text-sm">Live preview of your brand before you pay</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-500/30 transition-colors duration-300">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <Rocket className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-foreground text-sm">Do-For-You Setup: we import IG cars, connect Stripe, and launch for you</p>
            </div>
          </div>
          <div className="flex items-start gap-3 p-4 rounded-lg bg-white/5 border border-white/10 backdrop-blur-sm hover:border-amber-500/30 transition-colors duration-300">
            <div className="p-2 rounded-lg bg-amber-500/10">
              <CreditCard className="w-5 h-5 text-amber-400" />
            </div>
            <div>
              <p className="text-foreground text-sm">Zero Risk: Not live in 24h → We Give You a $250 Credit</p>
            </div>
          </div>
        </div>

        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.1 }}
        >
          <button 
            className="group relative px-8 py-4 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-zinc-900 font-semibold text-base rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setPerfOpen(true)}
            data-analytics="click_cta"
            data-analytics-meta='{"label":"hero_performance"}'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <span>Start for $0 — Pay from Bookings</span>
              <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </span>
          </button>
          
          <button 
            className="group relative px-8 py-4 bg-white/5 backdrop-blur-sm text-zinc-100 font-semibold text-base rounded-xl overflow-hidden border border-white/10 hover:border-amber-500/50 shadow-lg hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
            onClick={() => setPreviewOpen(true)}
            data-analytics="click_cta"
            data-analytics-meta='{"label":"hero_live_preview"}'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
              <span>See Your Live Preview</span>
            </span>
          </button>
        </motion.div>
      </div>

      <CalendlyModal open={calOpen} onClose={() => setCalOpen(false)} />
      <PerformanceModal open={perfOpen} onClose={() => setPerfOpen(false)} />
      <LivePreviewFormModal open={previewOpen} onClose={() => setPreviewOpen(false)} />
    </section>
  )
}
