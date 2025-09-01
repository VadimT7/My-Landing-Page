'use client'

import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function Navbar() {
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#'
  
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="font-serif text-2xl text-foreground hover:text-gold transition-colors">
          Premium Presence
        </Link>
        <Button 
          asChild
          className="bg-gold text-background hover:bg-gold-muted font-semibold"
        >
          <a href={calendlyUrl} target="_blank" rel="noopener noreferrer">
            Book Preview
          </a>
        </Button>
      </div>
    </nav>
  )
}
