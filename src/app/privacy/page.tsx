import type { Metadata } from 'next'
import { SiteHeader, SiteFooter } from '@/components/SiteShell'

export const metadata: Metadata = {
  title: 'Política de Privacidade — Lembrei',
  description: 'Como o Lembrei coleta, usa e protege seus dados pessoais.',
  alternates: { canonical: 'https://meulembrei.com.br/privacy' },
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{ marginBottom: 48 }}>
      <h2 style={{ fontSize: 22, fontWeight: 800, color: '#0F172A', margin: '0 0 16px', paddingBottom: 12, borderBottom: '1px solid #E2E8F0' }}>{title}</h2>
      {children}
    </div>
  )
}

function P({ children }: { children: React.ReactNode }) {
  return <p style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, margin: '0 0 14px' }}>{children}</p>
}

function Li({ children }: { children: React.ReactNode }) {
  return (
    <li style={{ fontSize: 16, color: '#475569', lineHeight: 1.8, marginBottom: 6 }}>{children}</li>
  )
}

export default function PrivacyPage() {
  return (
    <>
      <SiteHeader />
      <main>
        <div style={{ backgroundColor: '#0F172A', padding: '64px 24px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <p style={{ fontSize: 13, fontWeight: 700, color: '#475569', textTransform: 'uppercase', letterSpacing: '0.1em', margin: '0 0 12px' }}>Legal</p>
            <h1 style={{ fontSize: 'clamp(28px, 4vw, 40px)', fontWeight: 800, color: 'white', margin: '0 0 12px', lineHeight: 1.2 }}>
              Política de Privacidade
            </h1>
            <p style={{ fontSize: 15, color: '#475569', margin: 0 }}>Última atualização: junho de 2025</p>
          </div>
        </div>

        <div style={{ padding: '64px 24px', backgroundColor: 'white' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>

            <Section title="1. Quem somos">
              <P>
                O Lembrei é um aplicativo de organização familiar desenvolvido de forma independente e disponibilizado em <strong>meulembrei.com.br</strong> e <strong>app.meulembrei.com.br</strong>.
              </P>
              <P>
                Para dúvidas sobre esta política, entre em contato: <a href="mailto:contato@meulembrei.com.br" style={{ color: '#2563EB' }}>contato@meulembrei.com.br</a>
              </P>
            </Section>

            <Section title="2. Dados que coletamos">
              <P>Coletamos apenas os dados necessários para o funcionamento do serviço:</P>
              <ul style={{ paddingLeft: 20, margin: '0 0 14px' }}>
                <Li><strong>Conta:</strong> nome, endereço de e-mail e foto de perfil (via Google OAuth ou cadastro direto).</Li>
                <Li><strong>Família:</strong> nomes de membros adicionados por você (filhos, dependentes, cônjuge).</Li>
                <Li><strong>Conteúdo:</strong> lembretes, listas, rotinas e grupos que você cria.</Li>
                <Li><strong>Notificações:</strong> token de dispositivo para envio de notificações push.</Li>
                <Li><strong>Uso:</strong> dados de acesso e telemetria anônimos para melhoria do produto (tempo de carregamento, erros técnicos).</Li>
              </ul>
              <P>Não coletamos dados de localização, histórico de navegação ou informações de pagamento.</P>
            </Section>

            <Section title="3. Como usamos seus dados">
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <Li>Autenticar sua conta e manter sua sessão ativa.</Li>
                <Li>Enviar lembretes por push e e-mail nos horários configurados por você.</Li>
                <Li>Compartilhar conteúdo com outros membros da sua família ou grupo.</Li>
                <Li>Enviar comunicações relacionadas ao serviço (confirmações, alertas técnicos).</Li>
                <Li>Identificar e corrigir erros técnicos.</Li>
              </ul>
            </Section>

            <Section title="4. Compartilhamento de dados">
              <P>
                Seus dados não são vendidos, alugados ou compartilhados com terceiros para fins comerciais.
              </P>
              <P>Utilizamos os seguintes provedores de infraestrutura, cada um com sua própria política de privacidade:</P>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <Li><strong>Google OAuth:</strong> autenticação de conta. Consulte a política do Google.</Li>
                <Li><strong>Railway:</strong> hospedagem do servidor e banco de dados.</Li>
                <Li><strong>Vercel:</strong> hospedagem do frontend.</Li>
                <Li><strong>Resend:</strong> envio de e-mails transacionais.</Li>
              </ul>
            </Section>

            <Section title="5. Armazenamento e segurança">
              <P>
                Os dados são armazenados em banco de dados PostgreSQL hospedado no Railway. Senhas são armazenadas com hash bcrypt — nunca em texto puro.
              </P>
              <P>
                A comunicação entre o aplicativo e o servidor é protegida por HTTPS/TLS. Tokens de sessão têm validade limitada e são renovados automaticamente.
              </P>
            </Section>

            <Section title="6. Retenção de dados">
              <P>
                Seus dados são mantidos enquanto sua conta estiver ativa. Ao excluir a conta, todos os dados pessoais associados são removidos dos sistemas em até 30 dias.
              </P>
              <P>
                Dados de membros da família (filhos, dependentes) são excluídos junto com a conta do responsável que os cadastrou.
              </P>
            </Section>

            <Section title="7. Seus direitos (LGPD)">
              <P>
                Em conformidade com a Lei Geral de Proteção de Dados (Lei 13.709/2018), você tem o direito de:
              </P>
              <ul style={{ paddingLeft: 20, margin: 0 }}>
                <Li>Acessar os dados pessoais que temos sobre você.</Li>
                <Li>Corrigir dados incompletos ou desatualizados.</Li>
                <Li>Solicitar a exclusão dos seus dados.</Li>
                <Li>Revogar o consentimento para uso dos dados a qualquer momento.</Li>
                <Li>Solicitar informações sobre com quem compartilhamos seus dados.</Li>
              </ul>
              <P style={{ marginTop: 14 }}>
                Para exercer qualquer um desses direitos, entre em contato pelo e-mail <a href="mailto:contato@meulembrei.com.br" style={{ color: '#2563EB' }}>contato@meulembrei.com.br</a>.
              </P>
            </Section>

            <Section title="8. Cookies e armazenamento local">
              <P>
                O Lembrei utiliza armazenamento local do navegador (localStorage e sessionStorage) para manter sua sessão ativa e melhorar a experiência de uso. Não utilizamos cookies de rastreamento de terceiros.
              </P>
            </Section>

            <Section title="9. Notificações push">
              <P>
                As notificações push são enviadas apenas com sua autorização explícita. Você pode revogar essa permissão a qualquer momento nas configurações do seu navegador ou dispositivo.
              </P>
            </Section>

            <Section title="10. Alterações nesta política">
              <P>
                Esta política pode ser atualizada periodicamente. Em caso de mudanças relevantes, notificaremos os usuários ativos por e-mail com antecedência mínima de 15 dias.
              </P>
            </Section>

            <div style={{ backgroundColor: '#F8FAFC', border: '1px solid #E2E8F0', borderRadius: 14, padding: '24px', marginTop: 16 }}>
              <p style={{ fontSize: 15, fontWeight: 700, color: '#0F172A', margin: '0 0 6px' }}>Dúvidas sobre privacidade?</p>
              <a href="mailto:contato@meulembrei.com.br" style={{ fontSize: 15, color: '#2563EB', textDecoration: 'none', fontWeight: 600 }}>
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
