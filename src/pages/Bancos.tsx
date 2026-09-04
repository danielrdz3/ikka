import { G, GL, GR, GRL, WH, BD, BK, BANK_LOGOS, SERVICES } from '../lib/data'
import { Link } from '../lib/router'

const BANK_DETAILS = [
  { name: 'Afirme',     logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Afirme.png',     services: ['Hipotecario', 'Empresarial', 'Automotriz'], tagline: 'Banco 100% mexicano con presencia regional fuerte en Noreste.' },
  { name: 'Banamex',    logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/banamex.png',    services: ['Hipotecario', 'Empresarial'],               tagline: 'Tasas hipotecarias competitivas y amplia red de sucursales.' },
  { name: 'Banorte',    logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/banorte.png',    services: ['Hipotecario', 'Empresarial'],               tagline: 'El banco más grande de capital 100% mexicano.' },
  { name: 'BanRegio',   logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/banregio.png',   services: ['Hipotecario', 'Empresarial'],               tagline: 'Banco regional con fuerte presencia en Monterrey y N.L.' },
  { name: 'Mifel',      logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Mifel.png',      services: ['Hipotecario'],                             tagline: 'Tasas hipotecarias fijas altamente competitivas.' },
  { name: 'Ion',        logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Ion.png',        services: ['Hipotecario'],                             tagline: 'Especialista en crédito hipotecario con proceso ágil.' },
  { name: 'HSBC',       logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Hsbc.png',       services: ['Hipotecario', 'Empresarial', 'Automotriz'], tagline: 'Banco global con productos financieros integrales.' },
  { name: 'BX+',        logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/bx+.png',        services: ['Hipotecario', 'Empresarial'],               tagline: 'Soluciones financieras flexibles para personas y empresas.' },
  { name: 'Santander',  logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Santander.png',  services: ['Hipotecario', 'Empresarial'],               tagline: 'Grupo bancario internacional con amplia oferta hipotecaria.' },
  { name: 'Scotiabank', logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Scotiabank.png', services: ['Hipotecario', 'Empresarial', 'Automotriz'], tagline: 'Financiamiento para auto, casa y empresa con tasas fijas.' },
]

const SERVICE_COLOR: Record<string, string> = {
  'Hipotecario':  '#006D4E',
  'Empresarial':  '#004D36',
  'Automotriz':   '#005A40',
}

export default function Bancos() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: G, padding: '72px 20px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <nav style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', marginBottom: '24px', letterSpacing: '0.06em' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Bancos aliados</span>
          </nav>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, margin: '0 0 18px', lineHeight: 1.18 }}>
            Más de 10 bancos aliados para tu crédito en Monterrey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, margin: '0 0 28px' }}>
            Comparamos en tiempo real las ofertas de las principales instituciones financieras de México para conseguirte la mejor tasa y condiciones según tu perfil.
          </p>
          <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://wa.me/528126021053?text=Hola%2C%20quiero%20saber%20qu%C3%A9%20banco%20es%20mejor%20para%20mi%20perfil." target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: WH, color: G, padding: '12px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.07em', textDecoration: 'none', textTransform: 'uppercase' }}>
              ¿Cuál banco me conviene?
            </a>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: '#003D2A', padding: '28px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center', gap: '12px' }}>
          {[
            { num: '10+', label: 'Bancos comparados' },
            { num: '1', label: 'Solicitud para todos' },
            { num: '100%', label: 'Asesoría sin costo' },
          ].map((s) => (
            <div key={s.label}>
              <p style={{ color: '#7ED4A4', fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 800, margin: '0 0 2px' }}>{s.num}</p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Bank cards */}
      <section style={{ backgroundColor: WH, padding: '80px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>Instituciones</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, margin: '0 0 12px' }}>
              Nuestros bancos aliados en Monterrey
            </h2>
            <p style={{ color: GR, fontSize: '0.92rem', maxWidth: '520px', margin: '0 auto' }}>
              Con una sola solicitud accedes a las propuestas de todos ellos. Tú eliges la que mejor te conviene.
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '16px' }}>
            {BANK_DETAILS.map((bank) => (
              <div key={bank.name} style={{ backgroundColor: WH, border: `1px solid ${BD}`, borderRadius: '6px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '14px', transition: 'box-shadow 0.2s' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = '0 6px 24px rgba(0,109,78,0.1)')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.boxShadow = 'none')}>
                <div style={{ height: '48px', display: 'flex', alignItems: 'center' }}>
                  <img src={bank.logo} alt={`Logo ${bank.name}`} style={{ height: '40px', width: 'auto', maxWidth: '140px', objectFit: 'contain' }} loading="lazy" />
                </div>
                <p style={{ color: GR, fontSize: '0.84rem', lineHeight: 1.6, margin: 0 }}>{bank.tagline}</p>
                <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                  {bank.services.map((svc) => (
                    <span key={svc} style={{ backgroundColor: GL, color: G, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', padding: '3px 10px', borderRadius: '2px' }}>
                      {svc}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why compare */}
      <section style={{ backgroundColor: GL, padding: '80px 20px', borderTop: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="compare-grid">
          <div>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>¿Por qué comparar?</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, margin: '0 0 18px', lineHeight: 1.22 }}>
              Una diferencia de 0.5% en la tasa puede significar miles de pesos
            </h2>
            <p style={{ color: GR, fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 14px' }}>
              En un crédito hipotecario de $2,000,000 MXN a 15 años, una reducción de 0.5% en la tasa anual representa un ahorro de más de $80,000 pesos en intereses totales.
            </p>
            <p style={{ color: GR, fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 24px' }}>
              Nosotros hacemos esa comparativa por ti, sin costo, en días hábiles.
            </p>
            <a href="https://wa.me/528126021053?text=Hola%2C%20quiero%20comparar%20bancos%20para%20mi%20cr%C3%A9dito." target="_blank" rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: G, color: WH, padding: '12px 24px', borderRadius: '4px', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.07em', textDecoration: 'none', textTransform: 'uppercase' }}>
              Comparar bancos ahora →
            </a>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { label: 'Si vas directo al banco', value: 'Una oferta, sin comparativa', bad: true },
              { label: 'Con Ikka Consulting', value: '10+ ofertas en paralelo', bad: false },
              { label: 'Tiempo de gestión', value: '3–8 días hábiles', bad: false },
              { label: 'Costo de la asesoría', value: '$0 para ti', bad: false },
              { label: 'Acceso a tasas preferenciales', value: 'Sí, por volumen', bad: false },
            ].map((row) => (
              <div key={row.label} style={{ backgroundColor: WH, borderRadius: '4px', padding: '14px 18px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', border: `1px solid ${BD}` }}>
                <span style={{ color: GR, fontSize: '0.85rem' }}>{row.label}</span>
                <span style={{ color: row.bad ? '#cc3300' : G, fontSize: '0.85rem', fontWeight: 700 }}>{row.value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section style={{ backgroundColor: WH, padding: '72px 20px', borderTop: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>Productos</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, margin: '0 0 40px' }}>
            Elige tu tipo de crédito
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }} className="svc-link-grid">
            {SERVICES.map((s) => (
              <Link key={s.id} to={s.slug} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '22px 24px', backgroundColor: GL, textDecoration: 'none', transition: 'background 0.15s', borderBottom: '3px solid transparent' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d9eddb'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = G }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GL; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent' }}>
                <span style={{ fontSize: '1.8rem' }}>{s.icon}</span>
                <div style={{ textAlign: 'left' }}>
                  <p style={{ fontFamily: "'Playfair Display', serif", color: G, fontWeight: 700, fontSize: '1rem', margin: '0 0 2px' }}>{s.h1}</p>
                  <p style={{ color: GRL, fontSize: '0.72rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', margin: 0 }}>{s.subtitle}</p>
                </div>
                <span style={{ color: G, fontWeight: 700, marginLeft: 'auto' }}>→</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .compare-grid { grid-template-columns: 1fr !important; }
          .svc-link-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
