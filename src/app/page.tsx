import { SiteHeader, SiteFooter, APP_URL } from '@/components/SiteShell'
import { TrackedLink } from '@/components/TrackedLink'
import { PageViewTracker } from '@/components/PageViewTracker'
import { Events } from '@/lib/analytics'

// ─── Data ────────────────────────────────────────────────────────────────────

const socialProofItems = [
  'Compromissos escolares',
  'Medicamentos e consultas',
  'Tarefas compartilhadas',
  'Rotinas familiares',
  'Eventos importantes',
]

const positionings = [
  {
    badge:    'Prioridade 1',
    icon:     '🏫',
    title:    'Filhos e Escola',
    desc:     'Receba lembretes antes dos compromissos escolares importantes e compartilhe responsabilidades com toda a família.',
    items:    ['Reuniões de pais', 'Passeios e excursões', 'Material escolar', 'Provas e trabalhos', 'Festas e apresentações', 'Autorizações'],
    color:    '#EFF6FF',
    border:   '#BFDBFE',
    badge_bg: '#2563EB',
    ctaEvent: Events.SCHOOL_SECTION_CTA_CLICK,
  },
  {
    badge:    'Prioridade 2',
    icon:     '💊',
    title:    'Saúde e Medicamentos',
    desc:     'Ajude pais, avós e familiares a manterem tratamentos e compromissos de saúde sempre em dia.',
    items:    ['Medicamentos contínuos', 'Consultas e exames', 'Retorno médico', 'Cuidados com idosos', 'Tratamentos em andamento'],
    color:    '#F0FDF4',
    border:   '#BBF7D0',
    badge_bg: '#16A34A',
    ctaEvent: Events.HEALTH_SECTION_CTA_CLICK,
  },
  {
    badge:    'Prioridade 3',
    icon:     '🏠',
    title:    'Organização Familiar',
    desc:     'Centralize tudo que a família precisa lembrar: compras, contas, eventos e rotinas do dia a dia.',
    items:    ['Lista de compras', 'Tarefas domésticas', 'Contas e vencimentos', 'Eventos e comemorações', 'Rotinas compartilhadas'],
    color:    '#FFF7ED',
    border:   '#FED7AA',
    badge_bg: '#EA580C',
    ctaEvent: Events.FAMILY_SECTION_CTA_CLICK,
  },
]

const forWhom = [
  { icon: '👨‍👩‍👧‍👦', title: 'Famílias',                        desc: 'Organize compromissos, tarefas e responsabilidades compartilhadas.' },
  { icon: '🏫',    title: 'Pais com filhos em idade escolar', desc: 'Nunca perca reuniões, eventos, materiais ou comunicados importantes.' },
  { icon: '👵',    title: 'Pais e avós',                      desc: 'Acompanhe medicamentos, consultas e exames.' },
  { icon: '🤝',   title: 'Cuidadores',                        desc: 'Compartilhe responsabilidades com familiares e responsáveis.' },
  { icon: '⛪',   title: 'Igrejas, grupos e comunidades',     desc: 'Organize atividades e compromissos coletivos.' },
]

const features = [
  { icon: '🔔', title: 'Lembretes Compartilhados', desc: 'Crie lembretes para você, sua família ou grupos. Todos recebem notificações por push e e-mail.' },
  { icon: '📋', title: 'Listas',                   desc: 'Organize compras, materiais escolares e tarefas em listas colaborativas.' },
  { icon: '🔁', title: 'Rotinas',                  desc: 'Atividades recorrentes sem precisar recriar tudo. Configure uma vez, use sempre.' },
  { icon: '📲', title: 'Notificações',             desc: 'Alertas automáticos 24h antes, 3 horas antes e na hora exata — por push e e-mail.' },
  { icon: '👥', title: 'Grupos',                   desc: 'Escolas, igrejas, esportes e comunidades. Lembretes coletivos para todos os membros.' },
  { icon: '❤️', title: 'Central de Cuidados',      desc: 'Visualize rapidamente tudo que exige atenção da família em um só lugar.' },
]

const steps = [
  { n: '1', title: 'Crie sua conta',             desc: 'Cadastro rápido com Google ou e-mail. Sem cartão de crédito.' },
  { n: '2', title: 'Monte sua família',           desc: 'Adicione cônjuge, filhos e dependentes.' },
  { n: '3', title: 'Convide outras pessoas',      desc: 'Compartilhe com quem precisa saber.' },
  { n: '4', title: 'Cadastre lembretes e listas', desc: 'Organize compromissos e tarefas em um só lugar.' },
  { n: '5', title: 'Receba notificações',         desc: 'Alertas automáticos no tempo certo, para todos.' },
]

// ─── Components ──────────────────────────────────────────────────────────────

function Hero() {
  return (
    <section style={{ backgroundColor: 'white', borderBottom: '1px solid #E2E8F0' }}>
      <div style={{
        maxWidth:            1200,
        margin:              '0 auto',
        padding:             '80px 24px',
        display:             'grid',
        gridTemplateColumns: 'minmax(0,1fr) auto',
        gap:                 64,
        alignItems:          'center',
      }}>
        <div style={{ maxWidth: 620 }}>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, backgroundColor: '#EFF6FF', borderRadius: 99, padding: '6px 14px', marginBottom: 28 }}>
            <span style={{ fontSize: 14 }}>🎓</span>
            <span style={{ fontSize: 13, fontWeight: 600, color: '#2563EB' }}>Aplicativo para famílias brasileiras</span>
          </div>

          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 50px)', fontWeight: 800, lineHeight: 1.2, color: '#0F172A', margin: '0 0 24px' }}>
            <span style={{ color: '#94A3B8', fontWeight: 600 }}>A escola avisou.<br />O remédio venceu.<br />A reunião mudou.</span>
            <br /><br />
            O Lembrei ajuda sua família a não esquecer.
          </h1>

          <p style={{ fontSize: 18, lineHeight: 1.7, color: '#475569', margin: '0 0 36px', maxWidth: 520 }}>
            Organize compromissos escolares, medicamentos, consultas e tarefas em um único lugar, com lembretes compartilhados e notificações automáticas por push e e-mail.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12 }}>
            <TrackedLink
              event={Events.HERO_CREATE_ACCOUNT_CLICK}
              href={`${APP_URL}/register`}
              style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#2563EB', color: 'white', textDecoration: 'none', padding: '14px 28px', borderRadius: 12, fontSize: 16, fontWeight: 700, boxShadow: '0 4px 14px rgba(37,99,235,0.35)' }}
            >
              Criar conta
            </TrackedLink>
            <TrackedLink
              event={Events.HERO_LOGIN_CLICK}
              href={`${APP_URL}/login`}
              style={{ display: 'inline-flex', alignItems: 'center', color: '#374151', textDecoration: 'none', padding: '14px 28px', borderRadius: 12, fontSize: 16, fontWeight: 600, border: '1px solid #E2E8F0', backgroundColor: 'white' }}
            >
              Entrar
            </TrackedLink>
          </div>
        </div>

        <PhoneMockup />
      </div>
    </section>
  )
}

function PhoneMockup() {
  const items = [
    { icon: '🏫', text: 'Reunião escolar — amanhã 19h',   tagColor: '#EFF6FF', tagText: '#2563EB', tag: '24h' },
    { icon: '💊', text: 'Remédio do Pedro — 12h e 20h',   tagColor: '#F0FDF4', tagText: '#16A34A', tag: '✓' },
    { icon: '🦷', text: 'Dentista — sex, 10:30',          tagColor: '#FFF7ED', tagText: '#EA580C', tag: '3d' },
    { icon: '📚', text: 'Material de ciências — até sex', tagColor: '#FEF2F2', tagText: '#DC2626', tag: '!' },
  ]
  return (
    <div style={{ flexShrink: 0 }}>
      <div style={{ width: 300, backgroundColor: '#0F172A', borderRadius: 40, padding: '12px 8px', boxShadow: '0 25px 60px rgba(0,0,0,0.25)' }}>
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
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'white', borderRadius: 14, padding: '11px 12px', boxShadow: '0 1px 3px rgba(0,0,0,0.06)' }}>
                <span style={{ fontSize: 18 }}>{item.icon}</span>
                <span style={{ fontSize: 12, color: '#0F172A', flex: 1, fontWeight: 500, lineHeight: 1.3 }}>{item.text}</span>
                <span style={{ fontSize: 11, fontWeight: 700, backgroundColor: item.tagColor, color: item.tagText, borderRadius: 6, padding: '2px 6px', flexShrink: 0 }}>{item.tag}</span>
              </div>
            ))}
          </div>
          <div style={{ marginTop: 14, backgroundColor: '#EFF6FF', borderRadius: 10, padding: '9px 12px', textAlign: 'center' }}>
            <div style={{ fontSize: 12, color: '#2563EB', fontWeight: 600 }}>4 itens para hoje</div>
          </div>
        </div>
      </div>
    </div>
  )
}

function SocialProof() {
  return (
    <section style={{ backgroundColor: '#F8FAFC', borderBottom: '1px solid #E2E8F0', padding: '48px 24px' }}>
      <div style={{ maxWidth: 800, margin: '0 auto', textAlign: 'center' }}>
        <p style={{ fontSize: 20, fontWeight: 700, color: '#0F172A', margin: '0 0 24px' }}>
          Já ajudando famílias a organizarem:
        </p>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 16 }}>
          {socialProofItems.map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 8, backgroundColor: 'white', borderRadius: 99, padding: '10px 20px', border: '1px solid #E2E8F0', boxShadow: '0 1px 3px rgba(0,0,0,0.05)' }}>
              <span style={{ color: '#16A34A', fontWeight: 800, fontSize: 16 }}>✓</span>
              <span style={{ fontSize: 15, color: '#374151', fontWeight: 500 }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Screenshots() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: 'white', overflow: 'hidden' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', margin: '0 0 12px' }}>Veja o produto</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', margin: 0 }}>
            Simples de usar, poderoso para a família
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: 24, justifyItems: 'center' }}>
          <ScreenCare />
          <ScreenReminder />
          <ScreenList />
          <ScreenRoutine />
        </div>
      </div>
    </section>
  )
}

function PhoneFrame({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 16 }}>
      <div style={{ width: 240, backgroundColor: '#0F172A', borderRadius: 36, padding: '10px 6px', boxShadow: '0 16px 48px rgba(0,0,0,0.2)' }}>
        <div style={{ backgroundColor: '#F8FAFC', borderRadius: 28, overflow: 'hidden', minHeight: 420 }}>
          {children}
        </div>
      </div>
      <p style={{ fontSize: 13, fontWeight: 600, color: '#64748B', margin: 0, textAlign: 'center' }}>{label}</p>
    </div>
  )
}

function ScreenCare() {
  const items = [
    { name: 'Pedro', task: 'Reunião Escolar',  time: 'Hoje 19h',  urgent: true },
    { name: 'Avó',   task: 'Medicamento',      time: 'Hoje 12h',  urgent: true },
    { name: 'Ana',   task: 'Dentista',         time: 'Sex 10:30', urgent: false },
    { name: 'Pedro', task: 'Prova de história',time: 'Qui',       urgent: false },
  ]
  return (
    <PhoneFrame label="Central de Cuidados">
      <div style={{ padding: '16px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🔔</div>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Lembrei</span>
        </div>
        <p style={{ fontSize: 12, fontWeight: 700, color: '#0F172A', margin: '0 0 10px' }}>❤️ Central de Cuidados</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((item, i) => (
            <div key={i} style={{ backgroundColor: item.urgent ? '#FEF2F2' : 'white', border: `1px solid ${item.urgent ? '#FECACA' : '#E2E8F0'}`, borderRadius: 10, padding: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <p style={{ fontSize: 11, fontWeight: 700, color: '#0F172A', margin: '0 0 2px' }}>{item.task}</p>
                  <p style={{ fontSize: 10, color: '#64748B', margin: 0 }}>👤 {item.name}</p>
                </div>
                <span style={{ fontSize: 10, fontWeight: 700, color: item.urgent ? '#DC2626' : '#64748B', backgroundColor: item.urgent ? '#FEE2E2' : '#F1F5F9', borderRadius: 4, padding: '2px 6px', flexShrink: 0 }}>
                  {item.time}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

function ScreenReminder() {
  return (
    <PhoneFrame label="Lembrete Escolar">
      <div style={{ padding: '16px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🔔</div>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Lembrei</span>
        </div>
        <div style={{ backgroundColor: '#EFF6FF', borderRadius: 12, padding: '16px', marginBottom: 12 }}>
          <div style={{ fontSize: 28, marginBottom: 8 }}>🏫</div>
          <p style={{ fontSize: 14, fontWeight: 800, color: '#0F172A', margin: '0 0 4px' }}>Reunião de Pais</p>
          <p style={{ fontSize: 12, color: '#2563EB', fontWeight: 600, margin: '0 0 12px' }}>Hoje às 19h</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ fontSize: 11, color: '#475569' }}>📍 Escola Estadual São Paulo</div>
            <div style={{ fontSize: 11, color: '#475569' }}>👤 Pedro — 3º ano B</div>
          </div>
        </div>
        <p style={{ fontSize: 11, fontWeight: 600, color: '#64748B', margin: '0 0 8px' }}>Notificações</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
          {['24h antes ✓', '3h antes ✓', 'Na hora ✓'].map((n) => (
            <div key={n} style={{ fontSize: 11, color: '#16A34A', backgroundColor: '#F0FDF4', borderRadius: 6, padding: '6px 10px' }}>{n}</div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

function ScreenList() {
  const items = [
    { text: 'Caderno de desenho A4', done: true },
    { text: 'Cola bastão',           done: true },
    { text: 'Tesoura sem ponta',     done: true },
    { text: 'Régua 30cm',            done: false },
    { text: 'Lápis de cor 24 cores', done: false },
    { text: 'Borracha',              done: false },
  ]
  return (
    <PhoneFrame label="Lista Compartilhada">
      <div style={{ padding: '16px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🔔</div>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Lembrei</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
          <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: 0 }}>📚 Material Escolar</p>
          <span style={{ fontSize: 10, color: '#64748B', backgroundColor: '#F1F5F9', borderRadius: 6, padding: '3px 8px' }}>3 de 6</span>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {items.map((item, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
              <div style={{ width: 18, height: 18, borderRadius: 5, border: `2px solid ${item.done ? '#2563EB' : '#CBD5E1'}`, backgroundColor: item.done ? '#2563EB' : 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {item.done && <span style={{ color: 'white', fontSize: 11, fontWeight: 800 }}>✓</span>}
              </div>
              <span style={{ fontSize: 11, color: item.done ? '#94A3B8' : '#0F172A', textDecoration: item.done ? 'line-through' : 'none' }}>{item.text}</span>
            </div>
          ))}
        </div>
      </div>
    </PhoneFrame>
  )
}

function ScreenRoutine() {
  const tasks = [
    { icon: '🏊', text: 'Natação do Pedro',   day: 'Ter / Qui' },
    { icon: '💊', text: 'Remédio da manhã',   day: 'Todos os dias' },
    { icon: '🎸', text: 'Aula de violão',     day: 'Sábado' },
    { icon: '📖', text: 'Revisão para provas',day: 'Dom' },
  ]
  return (
    <PhoneFrame label="Rotina Familiar">
      <div style={{ padding: '16px 12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 16 }}>
          <div style={{ width: 28, height: 28, borderRadius: 8, backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14 }}>🔔</div>
          <span style={{ fontSize: 13, fontWeight: 700, color: '#0F172A' }}>Lembrei</span>
        </div>
        <p style={{ fontSize: 13, fontWeight: 700, color: '#0F172A', margin: '0 0 12px' }}>🔁 Rotina da Família</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
          {tasks.map((t, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10, backgroundColor: 'white', border: '1px solid #E2E8F0', borderRadius: 10, padding: '10px' }}>
              <span style={{ fontSize: 18, flexShrink: 0 }}>{t.icon}</span>
              <div style={{ flex: 1 }}>
                <p style={{ fontSize: 11, fontWeight: 600, color: '#0F172A', margin: '0 0 2px' }}>{t.text}</p>
                <p style={{ fontSize: 10, color: '#94A3B8', margin: 0 }}>{t.day}</p>
              </div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 12, backgroundColor: '#EFF6FF', borderRadius: 8, padding: '8px 10px', textAlign: 'center' }}>
          <span style={{ fontSize: 11, color: '#2563EB', fontWeight: 600 }}>4 atividades recorrentes</span>
        </div>
      </div>
    </PhoneFrame>
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
            <div key={p.title} style={{ backgroundColor: p.color, border: `1px solid ${p.border}`, borderRadius: 20, padding: '32px', display: 'grid', gridTemplateColumns: 'auto 1fr', gap: 32, alignItems: 'start' }}>
              <div style={{ fontSize: 48 }}>{p.icon}</div>
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <span style={{ fontSize: 11, fontWeight: 700, color: 'white', backgroundColor: p.badge_bg, borderRadius: 99, padding: '3px 10px', letterSpacing: '0.05em' }}>{p.badge}</span>
                  <h3 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', margin: 0 }}>{p.title}</h3>
                </div>
                <p style={{ fontSize: 16, color: '#475569', margin: '0 0 16px', lineHeight: 1.6 }}>{p.desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 20 }}>
                  {p.items.map((item) => (
                    <span key={item} style={{ fontSize: 13, color: '#374151', backgroundColor: 'white', borderRadius: 8, padding: '4px 12px', fontWeight: 500, boxShadow: '0 1px 2px rgba(0,0,0,0.06)' }}>{item}</span>
                  ))}
                </div>
                <TrackedLink
                  event={p.ctaEvent}
                  href={`${APP_URL}/register`}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 4, fontSize: 14, fontWeight: 600, color: p.badge_bg, textDecoration: 'none', padding: '8px 0' }}
                >
                  Começar agora →
                </TrackedLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function ForWhom() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', margin: '0 0 12px' }}>Casos de uso</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', margin: 0 }}>Para quem é o Lembrei?</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 16 }}>
          {forWhom.map((u) => (
            <div key={u.title} style={{ textAlign: 'center', padding: '28px 20px', backgroundColor: '#F8FAFC', borderRadius: 16, border: '1px solid #E2E8F0' }}>
              <div style={{ fontSize: 40, marginBottom: 12 }}>{u.icon}</div>
              <h3 style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: '0 0 8px', lineHeight: 1.3 }}>{u.title}</h3>
              <p style={{ fontSize: 13, color: '#64748B', margin: 0, lineHeight: 1.5 }}>{u.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Features() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#F8FAFC' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', margin: '0 0 12px' }}>Recursos</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', margin: 0 }}>Tudo que você precisa em um só lugar</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: 20 }}>
          {features.map((f) => (
            <div key={f.title} style={{ backgroundColor: 'white', borderRadius: 16, padding: '24px', border: '1px solid #E2E8F0' }}>
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
    <section style={{ padding: '80px 24px', backgroundColor: 'white' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <p style={{ fontSize: 13, fontWeight: 700, letterSpacing: '0.1em', color: '#94A3B8', textTransform: 'uppercase', margin: '0 0 12px' }}>Como funciona</p>
          <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: '#0F172A', margin: 0 }}>Em 5 passos simples</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {steps.map((s, i) => (
            <div key={s.n} style={{ display: 'flex', gap: 20, alignItems: 'flex-start' }}>
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', flexShrink: 0 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', backgroundColor: '#2563EB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, fontWeight: 800, color: 'white' }}>
                  {s.n}
                </div>
                {i < steps.length - 1 && <div style={{ width: 2, height: 40, backgroundColor: '#BFDBFE', marginTop: 4 }} />}
              </div>
              <div style={{ paddingTop: 10 }}>
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

function FinalCTA() {
  return (
    <section style={{ padding: '80px 24px', backgroundColor: '#2563EB' }}>
      <div style={{ maxWidth: 640, margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'white', margin: '0 0 16px', lineHeight: 1.2 }}>
          Organize os cuidados da sua família.
        </h2>
        <p style={{ fontSize: 18, color: '#BFDBFE', margin: '0 0 36px', lineHeight: 1.6 }}>
          Mantenha todos informados sobre o que realmente importa.
        </p>
        <TrackedLink
          event={Events.FOOTER_CREATE_ACCOUNT_CLICK}
          href={`${APP_URL}/register`}
          style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: 'white', color: '#2563EB', textDecoration: 'none', padding: '16px 32px', borderRadius: 12, fontSize: 17, fontWeight: 800, boxShadow: '0 4px 20px rgba(0,0,0,0.15)' }}
        >
          Criar conta
        </TrackedLink>
      </div>
    </section>
  )
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LandingPage() {
  return (
    <>
      <PageViewTracker />
      <SiteHeader />
      <main>
        <Hero />
        <SocialProof />
        <Screenshots />
        <Positionings />
        <ForWhom />
        <Features />
        <HowItWorks />
        <FinalCTA />
      </main>
      <SiteFooter />
    </>
  )
}
