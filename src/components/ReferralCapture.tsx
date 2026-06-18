'use client'

import { useEffect } from 'react'
import { useSearchParams } from 'next/navigation'

const SESSION_KEY = 'lmb_ref'

export function getReferralParam(): string {
  if (typeof window === 'undefined') return ''
  return sessionStorage.getItem(SESSION_KEY) ?? ''
}

export function ReferralCapture() {
  const searchParams = useSearchParams()

  useEffect(() => {
    const r = searchParams.get('r')
    if (r) sessionStorage.setItem(SESSION_KEY, r.toUpperCase())
  }, [searchParams])

  return null
}
