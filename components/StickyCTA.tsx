'use client'

import { useEffect, useState } from 'react'
import CalendlyModal from './CalendlyModal'
import PerformanceModal from './PerformanceModal'

export default function StickyCTA() {
  const [visible, setVisible] = useState(false)
  const [calOpen, setCalOpen] = useState(false)
  const [perfOpen, setPerfOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY + window.innerHeight
      const total = document.documentElement.scrollHeight
      setVisible(scrolled > total * 0.7)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  if (!visible) return null
  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-background/90 backdrop-blur-md border-t border-border p-4">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-sm md:text-base text-foreground">Ready to look luxurious & get paid in 7 days?</p>
        <div className="flex gap-3">
          <button
            className="group relative px-6 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-zinc-900 font-semibold text-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setPerfOpen(true)}
            data-analytics="click_cta"
            data-analytics-meta='{"label":"sticky_performance"}'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start for $0</span>
          </button>
          <button
            className="group relative px-6 py-2.5 bg-white/5 backdrop-blur-sm text-zinc-100 font-semibold text-sm rounded-lg overflow-hidden border border-white/10 hover:border-amber-500/50 shadow-md hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
            onClick={() => setCalOpen(true)}
            data-analytics="click_cta"
            data-analytics-meta='{"label":"sticky_calendly"}'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Book Preview</span>
          </button>
        </div>
      </div>
      <CalendlyModal open={calOpen} onClose={() => setCalOpen(false)} />
      <PerformanceModal open={perfOpen} onClose={() => setPerfOpen(false)} />
    </div>
  )
}
