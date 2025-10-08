'use client'

import { useEffect } from 'react'
import { attachClickTracking } from '@/lib/analytics'

export default function ClientAnalytics() {
  useEffect(() => {
    attachClickTracking()
  }, [])
  return null
}


