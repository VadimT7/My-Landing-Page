'use client'

import { useCallback, useState } from 'react'
import { loadStripe } from '@stripe/stripe-js'
import { Elements, PaymentElement, useElements, useStripe } from '@stripe/react-stripe-js'
import Modal from './Modal'
import { Button } from '@/components/ui/button'
import { track } from '@/lib/analytics'

const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLIC_KEY || '')

interface PerformanceModalProps {
  open: boolean
  onClose: () => void
}

export default function PerformanceModal({ open, onClose }: PerformanceModalProps) {
  const [clientSecret, setClientSecret] = useState<string | null>(null)
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)

  const init = useCallback(async () => {
    if (!open || clientSecret) return
    try {
      setLoading(true)
      const res = await fetch('/api/create-setup-intent', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      })
      const data = await res.json()
      if (data.clientSecret) {
        setClientSecret(data.clientSecret)
      }
    } finally {
      setLoading(false)
    }
  }, [open, clientSecret, email])

  return (
    <Modal open={open} onClose={onClose} className="p-6">
      <div className="space-y-4">
        <h3 className="text-2xl font-serif">Start on $0 — Performance Plan</h3>
        <p className="text-sm text-muted-foreground">
          Card stored for future charges related to your account per Terms. No charge today. Rev-share collected from bookings.
        </p>
        <label className="block text-sm">
          Email
          <input
            type="email"
            className="mt-1 w-full rounded-md border border-border bg-background px-3 py-2"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        {!clientSecret ? (
          <Button
            onClick={init}
            disabled={loading || !email}
            className="w-full bg-gold text-background hover:bg-gold-muted"
            data-analytics="click_cta"
            data-analytics-meta='{"label":"performance_init"}'
          >
            {loading ? 'Loading…' : 'Continue'}
          </Button>
        ) : (
          <Elements options={{ clientSecret }} stripe={stripePromise}>
            <SetupForm onClose={onClose} />
          </Elements>
        )}
      </div>
    </Modal>
  )
}

function SetupForm({ onClose }: { onClose: () => void }) {
  const stripe = useStripe()
  const elements = useElements()
  const [submitting, setSubmitting] = useState(false)

  const onSubmit = async () => {
    if (!stripe || !elements) return
    setSubmitting(true)
    const { error } = await stripe.confirmSetup({
      elements,
      confirmParams: {
        return_url: (process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000') + '/setup-complete',
      },
      redirect: 'if_required',
    })
    setSubmitting(false)
    if (!error) {
      track('start_trial', { plan: 'performance' })
      onClose()
      // The app can show a success toast or navigate to Calendly
      window.location.href = (process.env.NEXT_PUBLIC_CALENDLY_URL || '#')
    }
  }

  return (
    <div className="space-y-4">
      <PaymentElement />
      <Button
        onClick={onSubmit}
        disabled={submitting || !stripe}
        className="w-full bg-gold text-background hover:bg-gold-muted"
        data-analytics="start_trial"
        data-analytics-meta='{"plan":"performance"}'
      >
        {submitting ? 'Saving…' : 'Save card — $0 today'}
      </Button>
    </div>
  )
}


