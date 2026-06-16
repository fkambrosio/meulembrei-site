const APP_URL = 'https://app.meulembrei.com.br'

// ─── Data ────────────────────────────────────────────────────────────────────

const features = [
  {
    icon: '🔔',
    title: 'Lembretes Compartilhados',
    desc: 'Crie lembretes para você, sua família ou grupos. Todos recebem as notificações.',
  },
  {
    icon: '📋',
    title: 'Listas',
    desc: 'Organize compras, materiais escolares e tarefas em listas colaborativas.',
  },
  {
    icon: '🔁',
    title: 'Rotinas',
    desc: 'Atividades recorrentes sem precisar recriar tudo. Configure uma vez, use sempre.',
  },
  {
    icon: '📲',
    title: 'Notificações',
    desc: 'Receba avisos por Push e Email. 24h antes, 3 horas antes e na hora exata.',
  },
  {
    icon: '👥',
    title: 'Grupos',
    desc: 'Escolas, igrejas, esportes e comunidades. Lembretes coletivos para todos.',
  },
  {
    icon: '❤️',
    title: 'Central de Cuidados',
    desc: 'Visualize rapidamente tudo que exige atenção da família em um só lugar.',
  },
]

const steps = [
  { n: '1', title: 'Crie sua conta',              desc: 'Cadastro rápido com Google ou e-mail.' },
  { n: '2', title: 'Monte sua família',            desc: 'Adicione cônjuge, filhos e dependentes.' },
  { n: '3', title: 'Convide outras pessoas',       desc: 'Compartilhe com quem precisa saber.' },
  { n: '4', title: 'Cadastre lembretes e listas',  desc: 'Organize compromissos e tarefas.' },
  { n: '5', title: 'Receba notificações',          desc: 'Alertas automáticos no tempo certo.' },
]

const useCases = [
  { icon: '👨‍👩‍👧', title: 'Famílias com filhos',   desc: 'Controle total de compromissos escolares.' },
  { icon: '👴',    title: 'Pais e avós',           desc: 'Controle de medicamentos e consultas.' },
  { icon: '🏥',   title: 'Cuidadores',             desc: 'Acompanhamento compartilhado e organizado.' },
  { icon: '🏫',   title: 'Escolas',                desc: 'Organização de eventos e comunicados.' },
  { icon: '⛪',   title: 'Igrejas e grupos',       desc: 'Lembretes coletivos para a comunidade.' },
]

const positionings = [
  {
    badge:  'Prioridade 1',
    icon:   '🏫',
    title:  'Escola dos filhos',
    desc:   'Receba lembretes antes dos compromissos escolares importantes e compartilhe responsabilidades com toda a família.',
    items:  ['Reuniões de pais', 'Passeios e excursões', 'Material escolar', 'Provas e trabalhos', 'Festas e apresentações', 'Autorizações'],
    color:  '#EFF6FF',
    border: '#BFDBFE',
    badge_bg: '#2563EB',
  },
  {
    badge:  'Prioridade 2',
    icon:   '💊',
    title:  'Medicamentos e cuidados',
    desc:   'Ajude pais, avós e familiares a manterem tratamentos e compromissos de saúde sempre em dia.',
    items:  ['Medicamentos contínuos', 'Consultas e exames', 'Retorno médico', 'Cuidados com idosos', 'Tratamentos em andamento'],
    color:  '#F0FDF4',
    border: '#BBF7D0',
    badge_bg: '#16A34A',
  },
  {
    badge:  'Prioridade 3',
    icon:   '🏠',
    title:  'Organização da família',
    desc:   'Centralize tudo que a família precisa lembrar: compras, contas, eventos e rotinas do dia a dia.',
    items:  ['Lista de compras', 'Tarefas domésticas', 'Contas e vencimentos', 'Eventos e comemorações', 'Rotinas compartilhadas'],
    color:  '#FFF7ED',
    border: '#FED7AA',
    badge_bg: '#EA580C',
  },
]

// ─── Components ──────────────────────────────────────────────────────────────

function Header() {
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
          <div style={{ width: 36, height: 36, borderRadius: 10, backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18 }}>
            🔔
          </div>
          <span style={{ fontSize: 18, fontWeight: 700, color: '#0F172A' }}>Lembrei</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <a
            href={`${APP_URL}/login`}
            style={{ fontSize: 14, fontWeight: 600, color: '#2563EB', textDecoration: 'none', padding: '8px 16px', borderRadius: 8, border: '1px solid #BFDBFE', backgroundColor: 'white' }}
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

function Hero() {
  return (
    <section style={{ backgroundColor: 'white', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '80px 24px', display: 'grid', gridTemplateColumns: '1fr', gap: 48, alignItems: 'center' }}>
        <div style={{ maxWidth: 680 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#EFF6FF', borderRadius: 99, padding: '6px 14px', marginBottom: 24 }}>
            <span style={{ fontSize: 14 }}>🎓</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#2563EB' }}>Para famílias com filhos na escola</span>
          </div>

          <h1 style={{ fontSize: 'clamp(32px, 5vw, 52px)', fontWeight: 800, lineHeight: 1.15, color: '#0F172A', margin: '0 0 20px' }}>
            Nunca mais esqueça uma reunião escolar, um remédio importante ou um compromisso da família.
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#475569', margin: '0 0 36px', maxWidth: 560 }}>
            O Lembrei ajuda famílias a organizarem compromissos, cuidados e responsabilidades em um único lugar, com lembretes compartilhados e notificações automáticas.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <a
              href={`${APP_URL}/register`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#2563EB', color: 'white', textDecoration: 'none', padding: '14px 28px', borderRadius: 12, fontSize: 16, fontWeight: 700, boxShadow: '0 4px 14px rgba(37,99,235,0.35)' }}
            >
              Criar conta grátis
            </a>
            <a
              href={`${APP_URL}/login`}
              style={{ display: 'inline-flex', alignItems: 'center', gap: 8, color: '#374151', textDecoration: 'none', padding: '14px 28px', borderRadius: 12, fontSize: 16, fontWeight: 600, border: '1px solid #E2E8F0', backgroundColor: 'white' }}
            >
              Já tenho conta
            </a>
          </div>

          <p style={{ fontSize: 13, color: '#94A3B8', marginTop: 16 }}>
            Gratuito · Sem cartão de crédito
          </p>
        </div>

        <PhoneMockup />
      </div>
    </section>
  )
}

function PhoneMockup() {
  const items = [
    { icon: '🏫', text: 'Reunião escolar — amanhã 19h',    tag: '24h', tagColor: '#EFF6FF', tagText: '#2563EB' },
    { icon: '💊', text: 'Remédio do Pedro — 12h e 20h',    tag: 'Hoje',tag: '✓', tagColor: '#F0FDF4', tagText: '#16A34A' },
    { icon: '🦷', text: 'Dentista — sex, 10:30',           tag: '3d',  tagColor: '#FFF7ED', tagText: '#EA580C' },
    { icon: '📚', text: 'Material de ciências — até sex',  tag: '!',   tagColor: '#FEF2F2', tagText: '#DC2626' },
  ]
  return (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <div style={{
        width:           320,
        backgroundColor: '#0F172A',
        borderRadius:    40,
        padding:         '12px 8px',
        boxShadow:       '0 25px 60px rgba(0,0,0,0.25)',
      }}>
        <div style={{ backgroundColor: '#F8FAFC', borderRadius: 32, overflow: 'hidden', padding: '20px 16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
            <div style={{ width: 32, height: 32, borderRadius: 9, backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 16 }}>🔔</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Lembrei</div>
              <div style={{ fontSize: 11, color: '#64748B' }}>Hoje, segunda-feira</div>
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {items.map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, backgroundColor: 'white', borderRadius: 14, padding: '12px 14px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: 20 }}>{item.icon}</span>
                <span style={{ fontSize: 13, color: '#0F172A', flex: 1, fontWeight: 500 }}>{item.text}</span>
                <span style={{ fontSize: 11, fontWeight: 700, backgroundColor: item.tagColor, color: item.tagText, borderRadius: 6, padding: '2px 7px' }}>{item.tag}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 16, backgroundColor: '#EFF6FF', borderRadius: 12, padding: '10px 14px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#2563EB', fontWeight: 600 }}>4 itens para hoje</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Positionings() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Pensado para quem cuida da família
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            Tudo o que a família precisa lembrar
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 24 }}>
          {positionings.map((p) => (
            <div
              key={p.title}
              style={{
                backgroundColor: p.color,
                border:          `1px solid ${p.border}`,
                borderRadius:    20,
                padding:         '32px',
                display:         'grid',
                gridTemplateColumns: 'auto 1fr',
                gap:             32,
                alignItems:      'start',
              }}
            >
              <div style={{ fontSize: 48 }}>{p.icon}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'white', backgroundColor: p.badge_bg, borderRadius: 99, padding: '3px 10px', letterSpacing: '0.05em' }}>
                    {p.badge}
                  </span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: 16, color: '#475569', margin: '0 0 16px', lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                  {p.items.map((item) => (
                    <span key={item} style={{ fontSize: 13, color: '#374151', backgroundColor: 'white', borderRadius: 8, padding: '4px 12px', fontWeight: 500, boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Recursos
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            Tudo que você precisa em um só lugar
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {features.map((f) => (
            <div
              key={f.title}
              style={{
                backgroundColor: '#F8FAFC',
                borderRadius:    16,
                padding:         '24px',
                border:          '1px solid #E2E8F0',
              }}
            >
              <div style={{ fontSize: 36, marginBottom: 14 }}>{f.icon}</div>
              <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', margin: '0 0 8px' }}>{f.title}</h3>
              <p style={{ fontSize: 14, color: '#64748B', margin: 0, lineHeight: 1.6 }}>{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function HowItWorks() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Como funciona
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            Em 5 passos simples
          </h2>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{
                  width:           44,
                  height:          44,
                  borderRadius:    '50%',
                  backgroundColor: '#2563EB',
                  display:         'flex',
                  alignItems:      'center',
                  justifyContent:  'center',
                  fontSize:         18,
                  fontWeight:       800,
                  color:            'white',
                  flexShrink:       0,
                }}>
                  {s.n}
                </div>
                {i < steps.length - 1 && (
                  <div style={{ width: 2, height: 40, backgroundColor: '#BFDBFE', marginTop: 4 }} />
                )}
              </div>
              <div style={{ paddingTop: 10, paddingBottom: i < steps.length - 1 ? 0 : 0 }}>
                <h3 style={{ fontSize: 17, fontWeight: 700, color: '#0F172A', margin: '0 0 4px' }}>{s.title}</h3>
                <p style={{ fontSize: 14, color: '#64748B', margin: i < steps.length - 1 ? '0 0 36px' : 0, lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function UseCases() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', margin: '0 0 12px' }}>
            Casos de uso
          </p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            Para quem é o Lembrei?
          </h2>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {useCases.map((u) => (
            <div
              key={u.title}
              style={{ textAlign: 'center', padding: '28px 20px', backgroundColor: '#F8FAFC', borderRadius: 16, border: '1px solid #E2E8F0' }}
            >
              <div style={{ fontSize: 40, marginBottom: 12 }}>{u.icon}</div>
              <h3 style={{ fontSize: 16, fontWeight: 700, color: '#0F172A', margin: '0 0 6px' }}>{u.title}</h3>
              <p style={{ fontSize: 13, color: '#64748B', margin: 0, lineHeight: 1.5 }}>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function FinalCTA() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#2563EB' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'white', margin: '0 0 16px', lineHeight: 1.2 }}>
          Organize os cuidados da sua família.
        </h2>
        <p style={{ fontSize: 18, color: '#BFDBFE', margin: '0 0 36px', lineHeight: 1.6 }}>
          Comece gratuitamente e mantenha todos informados sobre o que realmente importa.
        </p>
        <a
          href={`${APP_URL}/register`}
          style={{
            display:         'inline-flex',
            alignItems:      'center',
            backgroundColor: 'white',
            color:           '#2563EB',
            textDecoration:  'none',
            padding:         '16px 32px',
            borderRadius:    12,
            fontSize:        17,
            fontWeight:      800,
            boxShadow:       '0 4px 20px rgba(0,0,0,0.15)',
          }}
        >
          Criar conta grátis
        </a>
        <p style={{ fontSize: 13, color: '#93C5FD', marginTop: 16 }}>
          Gratuito · Sem cartão de crédito
        </p>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer style={{ backgroundColor: '#0F172A', padding: '32px 24px' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
        <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 8, textDecoration: 'none' }}>
          <div style={{ width: 30, height: 30, borderRadius: 8, backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 15 }}>🔔</div>
          <span style={{ fontSize: 16, fontWeight: 700, color: 'white' }}>Lembrei</span>
        </a>
        <div style={{ display: 'flex', gap: 24 }}>
          <a href={`${APP_URL}/login`}    style={{ fontSize: 14, color: '#64748B', textDecoration: 'none' }}>Entrar</a>
          <a href={`${APP_URL}/register`} style={{ fontSize: 14, color: '#64748B', textDecoration: 'none' }}>Criar conta</a>
          <a href="mailto:contato@meulembrei.com.br" style={{ fontSize: 14, color: '#64748B', textDecoration: 'none' }}>Contato</a>
        </div>
        <p style={{ fontSize: 13, color: '#475569', margin: 0 }}>
          © {new Date().getFullYear()} Lembrei. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Positionings />
        <Features />
        <HowItWorks />
        <UseCases />
        <FinalCTA />
      </main>
      <Footer />
    </>
  )
}
