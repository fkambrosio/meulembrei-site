'use client'

import { getReferralParam } from './ReferralCapture'

const APP_URL = 'https://app.meulembrei.com.br'

function appUrl(path: string): string {
  const ref = getReferralParam()
  return ref ? `${APP_URL}${path}?r=${ref}` : `${APP_URL}${path}`
}

export function HeaderNavLinks() {
  function go(path: string) {
    return (e: React.MouseEvent<HTMLAnchorElement>) => {
      e.preventDefault()
      window.location.href = appUrl(path)
    }
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <a
        href={`${APP_URL}/login`}
        onClick={go('/login')}
        style={{ fontSize: 14, fontWeight: 500, color: '#64748B', textDecoration: 'none', padding: '8px 12px' }}
      >
        Entrar
      </a>
      <a
        href={`${APP_URL}/register`}
        onClick={go('/register')}
        style={{ fontSize: 14, fontWeight: 600, color: 'white', textDecoration: 'none', padding: '8px 16px', borderRadius: 8, backgroundColor: '#2563EB' }}
      >
        Criar conta
      </a>
    </div>
  )
}
