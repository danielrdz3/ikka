import { Link } from '../lib/router'
import type { ServiceData } from '../lib/data'
import { G, GL, GR, GRL, WH, BD, BK, BANK_LOGOS, SERVICES } from '../lib/data'
import { WhatsAppIcon } from './Layout'

function SectionLabel({ text }: { text: string }) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}>
      <span style={{ display: 'inline-block', width: '36px', height: '3px', backgroundColor: G, borderRadius: '2px', flexShrink: 0 }} />
      <p style={{ color: G, fontSize: '0.65rem', letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase', margin: 0 }}>{text}</p>
    </div>
  )
}

export default function ServicePage({ data }: { data: ServiceData }) {
  const waText = encodeURIComponent(`Hola, me interesa el ${data.h1}. ¿Me pueden dar más información?`)

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section style={{ position: 'relative', minHeight: '60vh', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(${data.heroImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0B2A20' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(0,40,28,0.90) 0%, rgba(0,60,40,0.78) 55%, rgba(0,80,55,0.55) 100%)' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${G}, transparent)` }} />

        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 20px 72px', width: '100%', position: 'relative', zIndex: 1 }}>
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" style={{ marginBottom: '20px' }}>
            <ol style={{ listStyle: 'none', display: 'flex', gap: '6px', alignItems: 'center', margin: 0, padding: 0, flexWrap: 'wrap' }}>
              <li><Link to="/" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', textDecoration: 'none' }}>Inicio</Link></li>
              <li style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.75rem' }}>›</li>
              <li><span style={{ color: '#7ED4A4', fontSize: '0.75rem' }}>{data.h1}</span></li>
            </ol>
          </nav>

          <div style={{ maxWidth: '620px' }}>
            <p style={{ color: '#A8D5B8', fontSize: '0.7rem', letterSpacing: '0.22em', fontWeight: 600, textTransform: 'uppercase', marginBottom: '14px' }}>
              {data.icon} Ikka Consulting
            </p>
            <h1 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 700, lineHeight: 1.12, marginBottom: '1rem' }}>
              {data.h1}
            </h1>
            <p style={{ color: '#A8D5B8', fontSize: '0.8rem', letterSpacing: '0.1em', fontWeight: 600, marginBottom: '1.2rem', textTransform: 'uppercase' }}>
              {data.subtitle}
            </p>
            <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1rem', lineHeight: 1.75, marginBottom: '2rem' }}>
              {data.description}
            </p>
            <a
              href={`https://wa.me/528126021053?text=${waText}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: G, color: WH, padding: '13px 26px', borderRadius: '3px', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              <WhatsAppIcon /> Consultar gratis
            </a>
          </div>
        </div>
      </section>

      {/* ── Main items ───────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: GL, padding: '72px 0', borderBottom: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '56px', alignItems: 'start' }} className="sp-two-col">
          <div>
            <SectionLabel text="Productos incluidos" />
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
              ¿Qué incluye el {data.h1}?
            </h2>
            <p style={{ color: GR, lineHeight: 1.78, marginBottom: '1.8rem', fontSize: '0.92rem' }}>
              Como asesor de créditos en Monterrey con más de 10 bancos aliados, te presentamos todas las opciones disponibles y te explicamos cada condición antes de firmar.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px 20px' }}>
              {data.items.map((item) => (
                <li key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: BK, fontSize: '0.88rem', lineHeight: 1.5 }}>
                  <span style={{ color: G, fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Extra sections (steps, requirements, etc.) */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {data.extraSections?.map((sec) => (
              <div key={sec.title} style={{ backgroundColor: WH, padding: '28px 28px', borderRadius: '4px', border: `1px solid ${BD}` }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.15rem', fontWeight: 700, marginBottom: '16px' }}>{sec.title}</h3>
                <ol style={{ margin: 0, padding: '0 0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {sec.items.map((item, i) => (
                    <li key={i} style={{ color: GR, fontSize: '0.88rem', lineHeight: 1.6 }}>{item}</li>
                  ))}
                </ol>
              </div>
            ))}

            {/* CTA card */}
            <div style={{ backgroundColor: G, padding: '28px', borderRadius: '4px' }}>
              <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '8px' }}>Asesoría gratuita</p>
              <p style={{ color: WH, fontFamily: "'Playfair Display', serif", fontSize: '1.2rem', fontWeight: 700, marginBottom: '16px', lineHeight: 1.3 }}>
                ¿Listo para iniciar? Escríbenos ahora.
              </p>
              <a
                href={`https://wa.me/528126021053?text=${waText}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: WH, color: G, padding: '11px 20px', borderRadius: '3px', textDecoration: 'none', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}
              >
                <WhatsAppIcon /> Escribir por WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ── Why Ikka ─────────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: WH, padding: '72px 0', borderBottom: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <SectionLabel text="Por qué elegirnos" />
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 700, marginBottom: '40px', maxWidth: '600px', lineHeight: 1.2 }}>
            El asesor de créditos en Monterrey que trabaja para ti, no para el banco
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="sp-three-col">
            {[
              { icon: '🆓', title: 'Asesoría sin costo', desc: 'Nuestra asesoría es 100% gratuita. Solo ganamos cuando tú obtienes tu crédito.' },
              { icon: '🏦', title: 'Más de 10 bancos', desc: 'Comparamos condiciones en tiempo real para darte la mejor tasa y plazo disponible.' },
              { icon: '📋', title: 'Acompañamiento total', desc: 'Desde la primera consulta hasta la firma de tu contrato, estamos contigo en cada paso.' },
            ].map((item) => (
              <div key={item.title} style={{ backgroundColor: GL, padding: '32px 28px' }}>
                <span style={{ fontSize: '1.6rem', display: 'block', marginBottom: '12px' }}>{item.icon}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.1rem', fontWeight: 700, marginBottom: '8px' }}>{item.title}</h3>
                <p style={{ color: GR, fontSize: '0.87rem', lineHeight: 1.7, margin: 0 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Banks strip ──────────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: GL, padding: '48px 0', borderBottom: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <p style={{ color: GRL, fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', textAlign: 'center', marginBottom: '20px', fontWeight: 700 }}>
            Comparamos estas instituciones para ti
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '8px' }}>
            {BANK_LOGOS.map((b) => (
              <div
                key={b.name}
                style={{ display: 'inline-flex', flexDirection: 'column', alignItems: 'center', gap: '6px', border: `1px solid ${BD}`, borderRadius: '3px', padding: '10px 16px', backgroundColor: WH }}
              >
                <img src={b.logo} alt={`Logo ${b.name}`} style={{ height: '28px', width: 'auto', maxWidth: '80px', objectFit: 'contain' }} loading="lazy" />
                <span style={{ fontSize: '0.68rem', color: GR }}>{b.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Other services ───────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: WH, padding: '72px 0' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
          <SectionLabel text="Otros servicios" />
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 700, marginBottom: '32px' }}>
            Más soluciones de tu asesor de créditos en Monterrey
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '2px' }} className="sp-four-col">
            {SERVICES.filter((s) => s.id !== data.id).map((s) => (
              <Link
                key={s.id}
                to={s.slug}
                style={{ display: 'block', backgroundColor: GL, padding: '24px 20px', textDecoration: 'none', transition: 'background 0.15s' }}
                onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d9eddb')}
                onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = GL)}
              >
                <span style={{ fontSize: '1.5rem', display: 'block', marginBottom: '10px' }}>{s.icon}</span>
                <p style={{ color: G, fontFamily: "'Playfair Display', serif", fontSize: '0.95rem', fontWeight: 700, marginBottom: '6px' }}>{s.h1}</p>
                <p style={{ color: GRL, fontSize: '0.75rem', margin: 0 }}>{s.subtitle}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .sp-two-col { grid-template-columns: 1fr !important; }
          .sp-three-col { grid-template-columns: 1fr !important; }
          .sp-four-col { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </>
  )
}
