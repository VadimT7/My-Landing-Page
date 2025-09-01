'use client'

interface ShimmerBorderProps {
  children: React.ReactNode
  className?: string
}

export default function ShimmerBorder({ children, className = '' }: ShimmerBorderProps) {
  return (
    <div className={`relative ${className}`}>
      <div className="absolute -inset-0.5 bg-gradient-to-r from-gold via-gold-muted to-gold rounded-lg opacity-75 blur animate-shimmer"></div>
      <div className="relative bg-background rounded-lg">
        {children}
      </div>
    </div>
  )
}
