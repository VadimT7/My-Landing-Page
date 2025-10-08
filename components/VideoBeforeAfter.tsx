'use client'

import { useState } from 'react'
import { ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function VideoBeforeAfter() {
  const [showAfter, setShowAfter] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  
  const toggleVideo = () => {
    const video = document.getElementById('afterVideo') as HTMLVideoElement
    if (video) {
      if (isPlaying) {
        video.pause()
      } else {
        video.play()
      }
      setIsPlaying(!isPlaying)
    }
  }
  
  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative aspect-[16/9] bg-muted rounded-lg overflow-hidden border border-gold/20">
        {/* Before - Static Image */}
        <motion.div 
          className={`absolute inset-0 transition-all duration-700 ${showAfter ? 'opacity-0 scale-105' : 'opacity-100 scale-100'}`}
          style={{ zIndex: showAfter ? 1 : 2 }}
        >
          <div className="w-full h-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
            <div className="text-center text-gray-600">
              <div className="text-4xl font-bold mb-2">BEFORE</div>
              <div className="text-lg">Basic template site</div>
              <div className="mt-4 w-32 h-20 bg-white/50 rounded mx-auto flex items-center justify-center">
                <div className="text-xs text-gray-500">Generic Layout</div>
              </div>
            </div>
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-3xl font-serif text-foreground">Before</p>
            <p className="text-muted-foreground">Basic template site</p>
          </div>
        </motion.div>
        
        {/* After - Video or Live Preview */}
        <motion.div 
          className={`absolute inset-0 transition-all duration-700 ${showAfter ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
          style={{ zIndex: showAfter ? 2 : 1 }}
        >
          {/* Option 1: Video */}
          <video
            id="afterVideo"
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            poster="/videos/video-preview.png"
            preload="metadata"
            onError={(e) => console.error('Video error:', e)}
            onLoadStart={() => console.log('Video loading started')}
            onCanPlay={() => console.log('Video can play')}
          >
            <source src="/videos/ValoreRentalSiteDemo.mp4" type="video/mp4" />
            <source src="/videos/ValoreRentalSiteDemo.webm" type="video/webm" />
            Your browser does not support the video tag.
          </video>
          
          
          {/* Video Controls Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
          <div className="absolute bottom-8 left-8">
            <p className="text-3xl font-serif text-foreground">After</p>
            <p className="text-gold">Premium luxury experience</p>
          </div>
          
          {/* Play/Pause Button */}
          <motion.button
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full p-4 hover:bg-gold/30 transition-colors"
            onClick={toggleVideo}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {isPlaying ? (
              <Pause className="w-8 h-8 text-gold" />
            ) : (
              <Play className="w-8 h-8 text-gold ml-1" />
            )}
          </motion.button>
        </motion.div>
      </div>
      
      {/* Navigation Controls */}
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
      
      {/* Quick Toggle Buttons */}
      <div className="flex justify-center gap-2 mt-4">
        <button
          onClick={() => setShowAfter(false)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            !showAfter ? 'bg-gold text-background' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          Before
        </button>
        <button
          onClick={() => setShowAfter(true)}
          className={`px-4 py-2 rounded-full text-sm transition-colors ${
            showAfter ? 'bg-gold text-background' : 'text-muted-foreground hover:text-foreground'
          }`}
        >
          After
        </button>
      </div>
    </div>
  )
}
