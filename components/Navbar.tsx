'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#'
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/50 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="group font-serif text-2xl text-foreground hover:text-gold transition-all duration-300">
          <span className="relative">
            Premium Presence
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gold transition-all duration-300 group-hover:w-full"></span>
          </span>
        </Link>
        <Button 
          asChild
          className="relative bg-gold text-background hover:bg-gold-muted font-semibold overflow-hidden group"
        >
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book Preview
          </a>
        </Button>
      </div>
    </nav>
  )
}
