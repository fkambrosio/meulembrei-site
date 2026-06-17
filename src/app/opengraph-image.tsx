import { ImageResponse } from 'next/og'

export const runtime     = 'edge'
export const alt         = 'Lembrei — Assistente Familiar'
export const size        = { width: 1200, height: 630 }
export const contentType = 'image/png'

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width:           '100%',
          height:          '100%',
          display:         'flex',
          flexDirection:   'column',
          alignItems:      'center',
          justifyContent:  'center',
          backgroundColor: '#1E3A8A',
          fontFamily:      'system-ui, sans-serif',
        }}
      >
        {/* Background decorative circles */}
        <div style={{
          position:        'absolute',
          top:             -120,
          right:           -120,
          width:           480,
          height:          480,
          borderRadius:    '50%',
          backgroundColor: 'rgba(37,99,235,0.3)',
          display:         'flex',
        }} />
        <div style={{
          position:        'absolute',
          bottom:          -80,
          left:            -80,
          width:           320,
          height:          320,
          borderRadius:    '50%',
          backgroundColor: 'rgba(37,99,235,0.2)',
          display:         'flex',
        }} />

        {/* Logo */}
        <div style={{
          display:         'flex',
          alignItems:      'center',
          gap:             16,
          marginBottom:    32,
        }}>
          <div style={{
            width:           72,
            height:          72,
            borderRadius:    20,
            overflow:        'hidden',
            display:         'flex',
          }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="https://meulembrei.com.br/icon.png" width={72} height={72} alt="Lembrei" />
          </div>
          <span style={{ fontSize: 52, fontWeight: 800, color: 'white' }}>Lembrei</span>
        </div>

        {/* Tagline */}
        <p style={{
          fontSize:   28,
          color:      '#BFDBFE',
          margin:     0,
          textAlign:  'center',
          maxWidth:   700,
          lineHeight: 1.4,
        }}>
          Organize escola, medicamentos e compromissos da família.
        </p>

        {/* Badges */}
        <div style={{ display: 'flex', gap: 16, marginTop: 40 }}>
          {['🏫 Escola', '💊 Saúde', '🏠 Família'].map((label) => (
            <div
              key={label}
              style={{
                backgroundColor: 'rgba(37,99,235,0.4)',
                borderRadius:    99,
                padding:         '10px 24px',
                fontSize:        20,
                color:           '#DBEAFE',
                fontWeight:      600,
                display:         'flex',
                alignItems:      'center',
              }}
            >
              {label}
            </div>
          ))}
        </div>

        {/* URL */}
        <p style={{ fontSize: 18, color: '#3B82F6', marginTop: 40, fontWeight: 600 }}>
          meulembrei.com.br
        </p>
      </div>
    ),
    { width: 1200, height: 630 },
  )
}
