export const APP_URL = 'https://app.meulembrei.com.br'

export function SiteHeader() {
  return (
    <header style={{
      position:        'sticky',
      top:             0,
      zIndex:          50,
      backgroundColor: 'rgba(255,255,255,0.95)',
      backdropFilter:  'blur(8px)',
      borderBottom:    '1px solid #E2E8F0',
    }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 64 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none' }}>
          <img src="/icon.png" width={36} height={36} alt="Lembrei" style={{ borderRadius: 10 }} />
          <span style={{ fontSize: 18, fontWeight: 700, color: '#0F172A' }}>Lembrei</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href={`${APP_URL}/login`}
            style={{ fontSize: 14, fontWeight: 500, color: '#64748B', textDecoration: 'none', padding: '8px 12px' }}
          >
            Entrar
          </a>
          <a
            href={`${APP_URL}/register`}
            style={{ fontSize: 14, fontWeight: 600, color: 'white', textDecoration: 'none', padding: '8px 16px', borderRadius: 8, backgroundColor: '#2563EB' }}
          >
            Criar conta
          </a>
        </div>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer style={{ backgroundColor: '#0F172A', padding: '48px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 40, marginBottom: 40 }}>
          <div>
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none', marginBottom: 12 }}>
              <img src="/icon.png" width={30} height={30} alt="Lembrei" style={{ borderRadius: 8 }} />
              <span style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>Lembrei</span>
            </a>
            <p style={{ fontSize: 13, color: '#475569', margin: '0 0 12px', lineHeight: 1.6 }}>
              Organize compromissos escolares, medicamentos<br />e tarefas da família em um único lugar.
            </p>
            <span style={{ fontSize: 11, fontWeight: 600, color: '#2563EB', backgroundColor: '#1E293B', borderRadius: 6, padding: '4px 10px' }}>
              Em evolução contínua
            </span>
          </div>
          <div style={{ display: 'flex', gap: 48, flexWrap: 'wrap' }}>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Produto</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href={`${APP_URL}/register`} style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>Criar conta</a>
                <a href={`${APP_URL}/login`}    style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>Entrar</a>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Empresa</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <a href="/about"   style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>Sobre</a>
                <a href="/support" style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>Suporte</a>
                <a href="/privacy" style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>Privacidade</a>
              </div>
            </div>
            <div>
              <p style={{ fontSize: 12, fontWeight: 700, color: '#64748B', textTransform: 'uppercase', letterSpacing: '0.08em', margin: '0 0 12px' }}>Contato</p>
              <a href="mailto:contato@meulembrei.com.br" style={{ fontSize: 14, color: '#94A3B8', textDecoration: 'none' }}>
                contato@meulembrei.com.br
              </a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid #1E293B', paddingTop: 24 }}>
          <p style={{ fontSize: 13, color: '#334155', margin: 0 }}>
            © {new Date().getFullYear()} Lembrei. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  )
}
