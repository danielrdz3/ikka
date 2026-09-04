import { G, GL, GR, GRL, WH, BD, BK, SERVICES } from '../lib/data'
import { Link } from '../lib/router'

const STEPS = [
  {
    num: '01',
    icon: '📋',
    title: 'Consulta gratuita',
    desc: 'Cuéntanos qué necesitas: comprar casa, financiar tu negocio, estrenar auto. Evaluamos tu perfil crediticio sin costo y sin compromiso.',
    detail: ['Llamada o WhatsApp de 15–20 min', 'Sin documentos en esta etapa', 'Te explicamos todas tus opciones', 'Calculamos tu capacidad de pago'],
  },
  {
    num: '02',
    icon: '🏦',
    title: 'Comparativa bancaria',
    desc: 'Consultamos en paralelo más de 10 bancos e instituciones para encontrar la tasa y condiciones que mejor se adaptan a tu perfil.',
    detail: ['Afirme, Banamex, Banorte, BanRegio', 'HSBC, Ion, Mifel, Santander, Scotiabank, BX+', 'Negociamos condiciones directamente', 'Presentamos resumen comparativo claro'],
  },
  {
    num: '03',
    icon: '📄',
    title: 'Integración del expediente',
    desc: 'Te decimos exactamente qué documentos necesitas según el banco elegido. Revisamos que todo esté correcto antes de enviar.',
    detail: ['Lista de documentos personalizada', 'Revisión previa al envío al banco', 'Tiempo de aprobación: 5–8 días hábiles', 'Te avisamos en cada etapa'],
  },
  {
    num: '04',
    icon: '✅',
    title: 'Aprobación y firma',
    desc: 'Una vez aprobado el crédito, te acompañamos en el proceso notarial o de entrega del vehículo hasta que el trámite esté 100% concluido.',
    detail: ['Coordinación con notario (hipotecario)', 'Revisión de contrato de crédito', 'Acompañamiento hasta la firma', 'Asesoría post-cierre sin costo'],
  },
]

const BENEFITS = [
  { icon: '💸', title: 'Sin costo para ti', desc: 'El banco paga nuestra comisión al formalizar el crédito. Para ti la asesoría es siempre gratuita.' },
  { icon: '⚡', title: 'Proceso más rápido', desc: 'Sabemos qué banco aprueba mejor tu perfil, reduciendo el tiempo de gestión en hasta un 40%.' },
  { icon: '🎯', title: 'Mejores condiciones', desc: 'Accedemos a tasas preferenciales que no están disponibles en ventanilla para el público general.' },
  { icon: '🤝', title: 'Asesor dedicado', desc: 'Un asesor certificado te acompaña de inicio a fin. No eres un número, eres un cliente.' },
  { icon: '📊', title: 'Comparativa real', desc: 'Presentamos opciones reales de bancos reales, no estimaciones genéricas del mercado.' },
  { icon: '🔒', title: 'Datos protegidos', desc: 'Tu información es confidencial y solo se comparte con las instituciones que tú autorices.' },
]

export default function ComoFunciona() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: G, padding: '72px 20px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <nav style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', marginBottom: '24px', letterSpacing: '0.06em' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Cómo funciona</span>
          </nav>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, margin: '0 0 18px', lineHeight: 1.18 }}>
            Así conseguimos el mejor crédito para ti en Monterrey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 28px' }}>
            Un proceso claro, sin costos ocultos y con un asesor dedicado de principio a fin.
          </p>
          <a href="https://wa.me/528126021053?text=Hola%2C%20me%20interesa%20saber%20c%C3%B3mo%20funciona%20el%20proceso." target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-block', backgroundColor: WH, color: G, padding: '12px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.07em', textDecoration: 'none', textTransform: 'uppercase' }}>
            Iniciar asesoría gratuita
          </a>
        </div>
      </section>

      {/* Steps */}
      <section style={{ backgroundColor: WH, padding: '88px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>El proceso</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: 0 }}>
              4 pasos para obtener tu crédito
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
            {STEPS.map((step, i) => (
              <div key={step.num} style={{ display: 'grid', gridTemplateColumns: '80px 1fr', gap: '0', position: 'relative' }} className="step-row">
                {/* Timeline column */}
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '50%', backgroundColor: G, color: WH, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: '1rem', flexShrink: 0, zIndex: 1 }}>
                    {step.num}
                  </div>
                  {i < STEPS.length - 1 && (
                    <div style={{ width: '2px', flex: 1, minHeight: '40px', backgroundColor: BD, margin: '0' }} />
                  )}
                </div>
                {/* Content */}
                <div style={{ paddingBottom: i < STEPS.length - 1 ? '48px' : '0', paddingLeft: '24px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '10px' }}>
                    <span style={{ fontSize: '1.4rem' }}>{step.icon}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.2rem', fontWeight: 800, margin: 0 }}>{step.title}</h3>
                  </div>
                  <p style={{ color: GR, fontSize: '0.95rem', lineHeight: 1.7, margin: '0 0 16px', maxWidth: '560px' }}>{step.desc}</p>
                  <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 20px' }} className="step-detail">
                    {step.detail.map((d) => (
                      <li key={d} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', color: GR, fontSize: '0.82rem' }}>
                        <span style={{ color: G, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                        {d}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ backgroundColor: GL, padding: '88px 20px', borderTop: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>Ventajas</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: 0 }}>
              Por qué trabajar con Ikka Consulting
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="benefits-grid">
            {BENEFITS.map((b) => (
              <div key={b.title} style={{ backgroundColor: WH, padding: '32px 28px' }}>
                <p style={{ fontSize: '1.8rem', margin: '0 0 14px' }}>{b.icon}</p>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.05rem', fontWeight: 700, margin: '0 0 8px' }}>{b.title}</h3>
                <p style={{ color: GR, fontSize: '0.86rem', lineHeight: 1.7, margin: 0 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services CTA */}
      <section style={{ backgroundColor: WH, padding: '80px 20px', borderTop: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>Servicios</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, margin: 0 }}>
              ¿Qué crédito necesitas?
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }} className="svc-cta-grid">
            {SERVICES.map((s) => (
              <Link key={s.id} to={s.slug} style={{ display: 'flex', alignItems: 'center', gap: '18px', padding: '24px 28px', backgroundColor: GL, textDecoration: 'none', transition: 'background 0.15s', borderBottom: `3px solid transparent` }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d9eddb'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = G }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GL; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}>
                <span style={{ fontSize: '2rem', flexShrink: 0 }}>{s.icon}</span>
                <div>
                  <p style={{ fontFamily: "'Playfair Display', serif", color: G, fontWeight: 700, fontSize: '1rem', margin: '0 0 4px' }}>{s.h1}</p>
                  <p style={{ color: GRL, fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>{s.subtitle}</p>
                </div>
                <span style={{ color: G, fontWeight: 700, marginLeft: 'auto', fontSize: '1.1rem' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 640px) {
          .step-detail { grid-template-columns: 1fr !important; }
          .benefits-grid { grid-template-columns: 1fr !important; }
          .svc-cta-grid { grid-template-columns: 1fr !important; }
          .step-row { grid-template-columns: 56px 1fr !important; }
        }
        @media (max-width: 860px) {
          .benefits-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}
