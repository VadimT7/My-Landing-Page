type AnalyticsEvent = 'lead' | 'start_trial' | 'purchase' | 'click_cta'

export function track(event: AnalyticsEvent, params?: Record<string, unknown>) {
  if (typeof window === 'undefined') return

  // GA4
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const gtag = (window as any).gtag
  if (gtag) {
    try {
      gtag('event', event, params || {})
    } catch {}
  }

  // Meta Pixel
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const fbq = (window as any).fbq
  if (fbq) {
    try {
      const mapped = event === 'purchase' ? 'Purchase' : event === 'lead' ? 'Lead' : event === 'start_trial' ? 'StartTrial' : 'InitiateCheckout'
      fbq('track', mapped, params || {})
    } catch {}
  }
}

export function attachClickTracking(root?: HTMLElement) {
  if (typeof window === 'undefined') return
  const target = root || document.body
  target.addEventListener('click', (e) => {
    const el = (e.target as HTMLElement).closest('[data-analytics]') as HTMLElement | null
    if (!el) return
    const name = el.getAttribute('data-analytics') as AnalyticsEvent | null
    if (!name) return
    const meta = el.getAttribute('data-analytics-meta')
    let params: Record<string, unknown> | undefined
    if (meta) {
      try { params = JSON.parse(meta) } catch { /* noop */ }
    }
    track(name, params)
  })
}

