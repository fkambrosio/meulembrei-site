'use client'

import { useEffect, useState } from 'react'

export function InviteBanner() {
  const [show, setShow] = useState(false)

  useEffect(() => {
    if (typeof window !== 'undefined' && sessionStorage.getItem('lmb_ref')) {
      setShow(true)
    }
  }, [])

  if (!show) return null

  return (
    <div style={{ backgroundColor: '#EFF6FF', padding: '12px 20px', textAlign: 'center', borderBottom: '1px solid #BFDBFE' }}>
      <p style={{ fontSize: 14, color: '#1D4ED8', margin: 0, fontWeight: 500 }}>
        Você recebeu um convite para conhecer o Lembrei 🎉
      </p>
    </div>
  )
}
