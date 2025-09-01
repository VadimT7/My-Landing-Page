'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function BeforeAfter() {
  const [showAfter, setShowAfter] = useState(false)
  
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden">
        <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-0' : 'opacity-100'}`}>
          <Image
            src="/images/before.jpg"
            alt="Before - Basic rental site"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-3xl font-serif text-foreground">Before</p>
            <p className="text-muted-foreground">Basic template site</p>
          </div>
        </div>
        
        <div className={`absolute inset-0 transition-opacity duration-500 ${showAfter ? 'opacity-100' : 'opacity-0'}`}>
          <Image
            src="/images/after.jpg"
            alt="After - Premium luxury site"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-3xl font-serif text-foreground">After</p>
            <p className="text-gold">Premium luxury experience</p>
          </div>
        </div>
      </div>
      
      <div className="flex justify-center gap-4 mt-6">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowAfter(false)}
          className={`border-gold ${!showAfter ? 'bg-gold text-background' : 'text-gold hover:bg-gold hover:text-background'}`}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          onClick={() => setShowAfter(true)}
          className={`border-gold ${showAfter ? 'bg-gold text-background' : 'text-gold hover:bg-gold hover:text-background'}`}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}
