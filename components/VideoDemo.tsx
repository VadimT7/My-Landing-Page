'use client'

import { useState } from 'react'
import { Play, Pause, ExternalLink } from 'lucide-react'
import { motion } from 'framer-motion'

export default function VideoDemo() {
  const [isPlaying, setIsPlaying] = useState(false)
  
  const toggleVideo = () => {
    const video = document.getElementById('demoVideo') as HTMLVideoElement
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
        {/* Video */}
        <video
          id="demoVideo"
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          poster="/videos/video-preview.png"
          preload="metadata"
          onError={(e) => console.error('Video error:', e)}
          onLoadStart={() => console.log('Video loading started')}
          onCanPlay={() => console.log('Video can play')}
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        >
          <source src="/videos/ValoreRentalSiteDemo.mp4" type="video/mp4" />
          <source src="/videos/ValoreRentalSiteDemo.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
        
        {/* Video Controls Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        
        {/* Bottom Left Label - Hidden when playing */}
        <motion.div 
          className="absolute bottom-8 left-8"
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-3xl font-serif text-foreground mb-2">Premium Luxury Experience</p>
          <p className="text-gold">Live Demo - Valore Rentals</p>
        </motion.div>
        
        {/* Play/Pause Button - Hidden when playing */}
        <motion.button
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full p-6 hover:bg-gold/30 transition-colors group"
          onClick={toggleVideo}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          initial={{ opacity: 1 }}
          animate={{ opacity: isPlaying ? 0 : 1 }}
          transition={{ duration: 0.5 }}
        >
          {isPlaying ? (
            <Pause className="w-10 h-10 text-gold" />
          ) : (
            <Play className="w-10 h-10 text-gold ml-1" />
          )}
        </motion.button>
        
        {/* External Link to Live Site */}
        <motion.a
          href="https://valor-rental-web.vercel.app"
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-6 right-6 bg-gold/20 backdrop-blur-sm border border-gold/30 rounded-full p-3 hover:bg-gold/30 transition-colors group"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          title="Visit Live Site"
        >
          <ExternalLink className="w-5 h-5 text-gold" />
        </motion.a>
      </div>
      
      {/* Video Description */}
      <div className="text-center mt-6">
        <p className="text-sm uppercase tracking-wider text-muted-foreground mb-2">
          Live Website Demo
        </p>
        <p className="text-lg text-foreground">
          Watch how we transformed a basic rental from Instagram into a luxury experience
        </p>
      </div>
    </div>
  )
}
