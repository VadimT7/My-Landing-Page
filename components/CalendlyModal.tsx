'use client'

import { useEffect, useRef } from 'react'
import Modal from './Modal'

interface CalendlyModalProps {
  open: boolean
  onClose: () => void
}

export default function CalendlyModal({ open, onClose }: CalendlyModalProps) {
  const ref = useRef<HTMLDivElement | null>(null)
  const calendlyUrl = process.env.NEXT_PUBLIC_CALENDLY_URL || '#'

  useEffect(() => {
    if (!open) return
    // Inject Calendly widget script once
    const existing = document.getElementById('calendly-widget')
    if (!existing) {
      const s = document.createElement('script')
      s.src = 'https://assets.calendly.com/assets/external/widget.js'
      s.async = true
      s.id = 'calendly-widget'
      document.body.appendChild(s)
    }
  }, [open])

  return (
    <Modal open={open} onClose={onClose} className="p-0 overflow-hidden">
      <div className="h-[75vh]">
        <div
          ref={ref}
          className="calendly-inline-widget"
          data-url={calendlyUrl}
          style={{ minWidth: '320px', height: '100%' }}
        />
      </div>
    </Modal>
  )
}


