'use client'

import { trackEvent, type EventName } from '@/lib/analytics'

type Props = {
  href:     string
  event:    EventName
  style?:   React.CSSProperties
  children: React.ReactNode
}

export function TrackedLink({ href, event, style, children }: Props) {
  return (
    <a href={href} style={style} onClick={() => trackEvent(event)}>
      {children}
    </a>
  )
}
