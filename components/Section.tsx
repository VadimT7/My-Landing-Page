import { ReactNode } from 'react'
import { cn } from '@/lib/cn'

interface SectionProps {
  children: ReactNode
  className?: string
  id?: string
}

export default function Section({ children, className, id }: SectionProps) {
  return (
    <section id={id} className={cn("px-4 py-16 md:py-24", className)}>
      <div className="max-w-6xl mx-auto">
        {children}
      </div>
    </section>
  )
}
