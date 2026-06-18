'use client'

import { trackEvent, type EventName } from '@/lib/analytics'
import { getReferralParam } from './ReferralCapture'

const APP_DOMAIN = 'app.meulembrei.com.br'

function buildHref(href: string): string {
  try {
    const ref = getReferralParam()
    if (!ref || !href.includes(APP_DOMAIN)) return href
    const url = new URL(href)
    url.searchParams.set('r', ref)
    return url.toString()
  } catch {
    return href
  }
}

type Props = {
  href:     string
  event:    EventName
  style?:   React.CSSProperties
  children: React.ReactNode
}

export function TrackedLink({ href, event, style, children }: Props) {
  return (
    <a href={buildHref(href)} style={style} onClick={() => trackEvent(event)}>
      {children}
    </a>
  )
}
