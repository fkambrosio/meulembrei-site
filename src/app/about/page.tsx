import type { Metadata } from 'next'
import { SiteHeader, SiteFooter } from '@/components/SiteShell'

export const metadata: Metadata = {
  title: 'Sobre — Lembrei',
  description: 'Como nasceu o Lembrei, o que resolve e para quem foi criado. Aplicativo de organização familiar para compromissos escolares, medicamentos e tarefas.',
  alternates: { canonical: 'https://meulembrei.com.br/about' },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 24, fontWeight: 800, color: '#0F172A', margin: '0 0 16px' }}>{title}</h2>
      {children}
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 17, color: '#475569', lineHeight: 1.8, margin: '0 0 16px' }}>{children}</p>
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div style={{ backgroundColor: '#2563EB', padding: '64px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#93C5FD', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>Sobre o Lembrei</p>
            <h1 style={{ fontSize: 'clamp(32px, 5vw, 48px)', fontWeight: 800, color: 'white', margin: 0, lineHeight: 1.2 }}>
              O Lembrei nasceu de um problema real de família.
            </h1>
          </div>
        </div>

        <div style={{ padding: '64px 24px', backgroundColor: 'white' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>

            <Section title="Como nasceu o Lembrei">
              <P>
                O Lembrei nasceu de uma necessidade simples: ajudar famílias a organizarem compromissos importantes sem depender da memória de uma única pessoa.
              </P>
              <P>
                Entre reuniões escolares, medicamentos, consultas, tarefas e compromissos do dia a dia, percebemos que muitas responsabilidades acabam concentradas em uma única pessoa da família.
              </P>
              <P>
                O Lembrei foi criado para compartilhar essas responsabilidades e ajudar todos a se manterem informados sobre o que realmente importa.
              </P>
            </Section>

            <Section title="O que o Lembrei resolve">
              <P>
                Famílias com filhos vivem sobrecarregadas de informação. Escola, saúde, compromissos pessoais, tarefas domésticas — tudo ao mesmo tempo, espalhado entre WhatsApp, agendas de papel, aplicativos de notas e a memória de cada um.
              </P>
              <P>
                O Lembrei centraliza isso em um único lugar. Você cria um lembrete, define quem precisa saber, e todos os responsáveis recebem notificações automáticas por push e e-mail antes do compromisso acontecer.
              </P>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10, margin: '24px 0' }}>
                {[
                  '🏫  Reuniões, eventos e materiais escolares',
                  '💊  Medicamentos, consultas e retornos médicos',
                  '📋  Listas compartilhadas e tarefas da família',
                  '🔁  Rotinas recorrentes sem precisar recriar',
                  '👥  Grupos para escolas, igrejas e comunidades',
                ].map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, backgroundColor: '#F8FAFC', borderRadius: 10, padding: '12px 16px', border: '1px solid #E2E8F0' }}>
                    <span style={{ fontSize: 15, color: '#374151' }}>{item}</span>
                  </div>
                ))}
              </div>
            </Section>

            <Section title="Quem desenvolve">
              <P>
                O Lembrei é desenvolvido de forma independente, com foco total na experiência de famílias reais. Não é um projeto corporativo nem uma startup buscando crescimento rápido a qualquer custo.
              </P>
              <P>
                É um produto feito por uma pessoa que acredita que organização familiar não deveria ser tão difícil — e que a tecnologia pode ajudar sem complicar.
              </P>
            </Section>

            <Section title="Visão do produto">
              <P>
                O Lembrei quer ser o assistente de memória da família. Não um super-app cheio de funcionalidades que ninguém usa. Não uma plataforma que vende seus dados. Não um produto que exige que toda a família seja tecnológica.
              </P>
              <P>
                Simples. Rápido. Confiável. Para quem precisa que as coisas funcionem — sem manuais, sem tutoriais, sem frustração.
              </P>
            </Section>

            <Section title="Em evolução contínua">
              <P>
                O Lembrei está em constante evolução. Novas funcionalidades são adicionadas regularmente com base no uso real das famílias que utilizam a plataforma.
              </P>
              <P>
                Cada atualização parte de um problema real — relatado por usuários, identificado no uso diário ou percebido em situações que a versão anterior não cobria bem.
              </P>
            </Section>

            <div style={{ backgroundColor: '#EFF6FF', borderRadius: 16, padding: '32px', textAlign: 'center', border: '1px solid #BFDBFE' }}>
              <p style={{ fontSize: 18, fontWeight: 700, color: '#1D4ED8', margin: '0 0 8px' }}>
                Tem sugestões ou quer conversar?
              </p>
              <p style={{ fontSize: 15, color: '#3B82F6', margin: '0 0 20px' }}>
                A porta está sempre aberta.
              </p>
              <a
                href="mailto:contato@meulembrei.com.br"
                style={{ display: 'inline-flex', alignItems: 'center', backgroundColor: '#2563EB', color: 'white', textDecoration: 'none', padding: '12px 24px', borderRadius: 10, fontSize: 15, fontWeight: 600 }}
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
