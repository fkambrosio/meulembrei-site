import type { Metadata } from 'next'
import { SiteHeader, SiteFooter, APP_URL } from '@/components/SiteShell'

export const metadata: Metadata = {
  title: 'Suporte — Lembrei',
  description: 'Dúvidas sobre o Lembrei? Entre em contato ou consulte as perguntas frequentes.',
  alternates: { canonical: 'https://meulembrei.com.br/support' },
}

const faqs = [
  {
    q: 'Como criar uma família no Lembrei?',
    a: 'Após criar sua conta, você será direcionado ao onboarding. Basta clicar em "Criar família", dar um nome e pronto — sua família está criada. Você pode adicionar filhos e dependentes logo em seguida.',
  },
  {
    q: 'Como convidar membros para a família?',
    a: 'Acesse o menu Família e toque em "Convidar". Um link de convite será gerado. Compartilhe com quem você quer incluir — a pessoa cria a conta e já entra direto na sua família.',
  },
  {
    q: 'Como ativar as notificações push?',
    a: 'Na primeira vez que acessar o Lembrei, o navegador pedirá permissão para enviar notificações. Autorize. Se recusou na primeira vez, acesse as configurações do seu navegador, encontre o Lembrei na lista de sites e ative as notificações.',
  },
  {
    q: 'Como recuperar o acesso à conta?',
    a: 'Na tela de login, clique em "Esqueci minha senha". Um e-mail com o link de redefinição será enviado em alguns minutos. Verifique também a pasta de spam se não encontrar na caixa de entrada.',
  },
  {
    q: 'Posso usar o Lembrei em vários dispositivos?',
    a: 'Sim. O Lembrei é um Progressive Web App (PWA). Você pode instalar no celular, tablet e computador e acessar de todos ao mesmo tempo com a mesma conta.',
  },
  {
    q: 'Os lembretes chegam mesmo quando o app está fechado?',
    a: 'Sim, desde que as notificações push estejam ativas no seu dispositivo. Para garantir o recebimento, você também pode ativar os lembretes por e-mail nas configurações do seu perfil.',
  },
]

export default function SupportPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div style={{ backgroundColor: '#2563EB', padding: '64px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#93C5FD', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>Suporte</p>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'white', margin: '0 0 16px', lineHeight: 1.2 }}>
              Como podemos ajudar?
            </h1>
            <p style={{ fontSize: 18, color: '#BFDBFE', margin: 0 }}>
              Estamos disponíveis por e-mail e respondemos em até 24 horas.
            </p>
          </div>
        </div>

        <div style={{ padding: '64px 24px', backgroundColor: 'white' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>

            {/* Contact card */}
            <div style={{ backgroundColor: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: 16, padding: '32px', marginBottom: 56, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 20 }}>
              <div>
                <p style={{ fontSize: 13, fontWeight: 700, color: '#2563EB', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 6px' }}>E-mail de suporte</p>
                <a
                  href="mailto:contato@meulembrei.com.br"
                  style={{ fontSize: 20, fontWeight: 800, color: '#1D4ED8', textDecoration: 'none' }}
                >
                  contato@meulembrei.com.br
                </a>
                <p style={{ fontSize: 14, color: '#3B82F6', margin: '6px 0 0' }}>Respondemos em até 24 horas nos dias úteis.</p>
              </div>
              <a
                href="mailto:contato@meulembrei.com.br"
                style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#2563EB', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 10, fontSize: 15, fontWeight: 600, flexShrink: 0 }}
              >
                Enviar e-mail
              </a>
            </div>

            {/* FAQ */}
            <h2 style={{ fontSize: 28, fontWeight: 800, color: '#0F172A', margin: '0 0 32px' }}>Perguntas frequentes</h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              {faqs.map((faq, i) => (
                <div key={i} style={{ border: '1px solid #E2E8F0', borderRadius: 14, padding: '24px' }}>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: '0 0 10px' }}>{faq.q}</h3>
                  <p style={{ fontSize: 15, color: '#475569', margin: 0, lineHeight: 1.7 }}>{faq.a}</p>
                </div>
              ))}
            </div>

            {/* Didn't find */}
            <div style={{ textAlign: 'center', marginTop: 48, padding: '32px', backgroundColor: '#F8FAFC', borderRadius: 16, border: '1px solid #E2E8F0' }}>
              <p style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', margin: '0 0 8px' }}>Não encontrou o que precisava?</p>
              <p style={{ fontSize: 15, color: '#64748B', margin: '0 0 20px' }}>
                Mande um e-mail descrevendo o problema e responderemos assim que possível.
              </p>
              <a
                href="mailto:contato@meulembrei.com.br"
                style={{ display: 'inline-flex', alignItems: 'center', color: '#2563EB', textDecoration: 'none', fontSize: 15, fontWeight: 600, border: '1px solid #BFDBFE', backgroundColor: 'white', padding: '10px 20px', borderRadius: 8 }}
              >
                contato@meulembrei.com.br
              </a>
            </div>

          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
