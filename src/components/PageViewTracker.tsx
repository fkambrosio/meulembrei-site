'use client'

import { useEffect } from 'react'
import { trackEvent, Events } from '@/lib/analytics'

export function PageViewTracker() {
  useEffect(() => {
    trackEvent(Events.LANDING_VIEW)
  }, [])
  return null
}
