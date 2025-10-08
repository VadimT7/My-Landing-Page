'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import CalendlyModal from './CalendlyModal'
import PerformanceModal from './PerformanceModal'

export default function Navbar() {
  const [calOpen, setCalOpen] = useState(false)
  const [perfOpen, setPerfOpen] = useState(false)
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-3 font-serif text-2xl text-foreground hover:text-gold transition-all duration-300">
          <div className="relative">
            <Image
              src="/sapphire-logo-navbar.svg"
              alt="Sapphire Drive Logo"
              width={32}
              height={32}
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <span className="relative">
            Sapphire Drive
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-3">
          <button 
            className="group relative px-6 py-2.5 bg-gradient-to-r from-amber-400 via-amber-500 to-yellow-500 text-zinc-900 font-semibold text-sm rounded-lg overflow-hidden shadow-md hover:shadow-lg hover:shadow-amber-500/30 transition-all duration-300 hover:scale-105 active:scale-95"
            onClick={() => setPerfOpen(true)}
            data-analytics="click_cta"
            data-analytics-meta='{"label":"navbar_performance"}'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10">Start for $0</span>
          </button>
          <button 
            className="group relative px-6 py-2.5 bg-white/5 backdrop-blur-sm text-zinc-100 font-semibold text-sm rounded-lg overflow-hidden border border-white/10 hover:border-amber-500/50 shadow-md hover:shadow-lg hover:shadow-amber-500/10 transition-all duration-300 hover:scale-105 active:scale-95 hover:bg-white/10"
            onClick={() => setCalOpen(true)}
            data-analytics="click_cta"
            data-analytics-meta='{"label":"navbar_calendly"}'
          >
            <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-yellow-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative z-10 flex items-center gap-1.5">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>Book Preview</span>
            </span>
          </button>
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 text-foreground hover:text-amber-400 transition-colors"
          onClick={() => setPerfOpen(true)}
          data-analytics="click_cta"
          data-analytics-meta='{"label":"navbar_mobile_cta"}'
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      <CalendlyModal open={calOpen} onClose={() => setCalOpen(false)} />
      <PerformanceModal open={perfOpen} onClose={() => setPerfOpen(false)} />
    </nav>
  )
}
