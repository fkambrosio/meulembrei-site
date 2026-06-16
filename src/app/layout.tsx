import type { Metadata } from 'next'
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
    images: [
      {
        url:    '/og-image.png',
        width:  1200,
        height: 630,
        alt:    'Lembrei — Assistente Familiar',
      },
    ],
  },
  twitter: {
    card:        'summary_large_image',
    title:       'Lembrei — Assistente Familiar para compromissos, escola e cuidados',
    description: 'Organize compromissos escolares, medicamentos, consultas e tarefas da família em um único aplicativo com notificações automáticas.',
    images:      ['/og-image.png'],
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
        {children}
      </body>
    </html>
  )
}
