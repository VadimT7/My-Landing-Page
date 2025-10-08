'use client'

import { useState } from 'react'
import Modal from './Modal'
import { Button } from '@/components/ui/button'
import { track } from '@/lib/analytics'

interface LivePreviewFormModalProps {
  open: boolean
  onClose: () => void
}

export default function LivePreviewFormModal({ open, onClose }: LivePreviewFormModalProps) {
  const [ig, setIg] = useState('')
  const [city, setCity] = useState('')
  const [email, setEmail] = useState('')
  const [phone, setPhone] = useState('')
  const [submitting, setSubmitting] = useState(false)
  const [done, setDone] = useState(false)

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    // Stub: send to your backend or CRM here
    try {
      await new Promise((r) => setTimeout(r, 500))
      track('lead', { ig, city, email })
      setDone(true)
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <Modal open={open} onClose={onClose} className="p-6">
      {!done ? (
        <form onSubmit={onSubmit} className="space-y-4">
          <h3 className="text-2xl font-serif">See Your Live Preview</h3>
          <p className="text-sm text-muted-foreground">Well spin a preview and send you the link.</p>
          <label className="block text-sm">
            Instagram handle
            <input
              type="text"
              required
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
              placeholder="@yourbrand"
              value={ig}
              onChange={(e) => setIg(e.target.value)}
            />
          </label>
          <label className="block text-sm">
            City
            <input
              type="text"
              required
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
              placeholder="Miami"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </label>
          <label className="block text-sm">
            Email
            <input
              type="email"
              required
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
              placeholder="you@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label className="block text-sm">
            Phone
            <input
              type="tel"
              className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
              placeholder="(555) 555-5555"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </label>
          <Button type="submit" className="w-full bg-gold text-background hover:bg-gold-muted" disabled={submitting} data-analytics="lead">
            {submitting ? 'Submitting…' : 'Send Preview Request'}
          </Button>
        </form>
      ) : (
        <div className="space-y-4">
          <h3 className="text-2xl font-serif">Preview requested</h3>
          <p className="text-sm text-muted-foreground">Account created—book your 15-min setup now.</p>
          <a
            href={process.env.NEXT_PUBLIC_CALENDLY_URL || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center rounded-md bg-gold text-background px-4 py-2"
          >
            Book 15-min Setup
          </a>
        </div>
      )}
    </Modal>
  )
}


