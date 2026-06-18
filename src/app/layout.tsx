import type { Metadata } from 'next'
import { Suspense } from 'react'
import { ReferralCapture } from '@/components/ReferralCapture'
import './globals.css'

export const metadata: Metadata = {
  metadataBase: new URL('https://meulembrei.com.br'),
  title: 'Lembrei — Assistente Familiar para compromissos, escola e cuidados',
  description:
    'Organize compromissos escolares, medicamentos, consultas e tarefas da família em um único aplicativo com notificações automáticas.',
  alternates: {
    canonical: 'https://meulembrei.com.br',
  },
  openGraph: {
    type:        'website',
    url:         'https://meulembrei.com.br',
    title:       'Lembrei — Assistente Familiar para compromissos, escola e cuidados',
    description: 'Organize compromissos escolares, medicamentos, consultas e tarefas da família em um único aplicativo com notificações automáticas.',
    siteName:    'Lembrei',
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Lembrei — Assistente Familiar para compromissos, escola e cuidados',
    description: 'Organize compromissos escolares, medicamentos, consultas e tarefas da família em um único aplicativo com notificações automáticas.',
  },
  robots: {
    index:  true,
    follow: true,
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body style={{ margin: 0, fontFamily: 'Inter, system-ui, sans-serif', backgroundColor: '#F8FAFC' }}>
        <Suspense fallback={null}><ReferralCapture /></Suspense>
        {children}
      </body>
    </html>
  )
}
