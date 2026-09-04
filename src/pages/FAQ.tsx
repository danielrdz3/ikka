import { useState } from 'react'
import { G, GL, GR, GRL, WH, BD, BK } from '../lib/data'
import { Link } from '../lib/router'
import { FAQ_CATEGORIES } from '../lib/faqData'

export default function FAQ() {
  return (
    <>
      {/* Hero */}
      <section style={{ backgroundColor: G, padding: '72px 20px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <nav style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', marginBottom: '24px', letterSpacing: '0.06em' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>Preguntas Frecuentes</span>
          </nav>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, margin: '0 0 18px', lineHeight: 1.18 }}>
            Preguntas Frecuentes sobre créditos en Monterrey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
            Encuentra respuestas claras sobre crédito hipotecario, empresarial, automotriz y más. Selecciona la categoría que te interesa.
          </p>
        </div>
      </section>

      {/* Category cards */}
      <section style={{ backgroundColor: WH, padding: '80px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>Categorías</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, margin: 0 }}>
              ¿Sobre qué crédito tienes dudas?
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '28px' }} className="faq-grid">
            {FAQ_CATEGORIES.map((cat) => (
              <Link
                key={cat.id}
                to={cat.slug}
                style={{ display: 'block', textDecoration: 'none', borderRadius: '8px', overflow: 'hidden', border: `1px solid ${BD}`, transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 12px 40px rgba(0,109,78,0.15)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-4px)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; (e.currentTarget as HTMLAnchorElement).style.transform = 'none' }}
              >
                {/* Image */}
                <div style={{ height: '220px', overflow: 'hidden', position: 'relative' }}>
                  <img
                    src={cat.image}
                    alt={cat.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1.04)')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLImageElement).style.transform = 'scale(1)')}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,40,28,0.6) 0%, transparent 60%)' }} />
                  <span style={{ position: 'absolute', bottom: '16px', left: '20px', fontSize: '2rem' }}>{cat.icon}</span>
                </div>

                {/* Content */}
                <div style={{ padding: '24px 24px 28px', backgroundColor: WH }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.25rem', fontWeight: 800, margin: '0 0 8px' }}>{cat.title}</h3>
                  <p style={{ color: GR, fontSize: '0.88rem', lineHeight: 1.65, margin: '0 0 18px' }}>{cat.description}</p>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <span style={{ color: GRL, fontSize: '0.75rem' }}>{cat.faqs.length} preguntas</span>
                    <span style={{ color: G, fontSize: '0.82rem', fontWeight: 700, letterSpacing: '0.05em' }}>
                      Ver preguntas →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* General questions */}
      <section style={{ backgroundColor: GL, padding: '72px 20px', borderTop: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '48px' }}>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>General</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, margin: 0 }}>
              Preguntas generales sobre Ikka Consulting
            </h2>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {[
              { q: '¿Cuánto cobra Ikka Consulting por asesorar?', a: 'La asesoría es 100% gratuita. El banco paga nuestra comisión al formalizar el crédito, así que para ti no existe ningún costo.' },
              { q: '¿Dónde están ubicados?', a: 'Cumbres Madeiras, Av. Puerta de Hierro 8983-33, 64349 Monterrey, N.L. Atendemos también por WhatsApp y videollamada.' },
              { q: '¿Cuál es el horario de atención?', a: 'Atendemos de lunes a domingo de 9:00 a 23:00 hrs, incluidos días festivos. Puedes escribirnos por WhatsApp en cualquier momento.' },
              { q: '¿Con qué bancos trabajan?', a: 'Trabajamos con más de 10 instituciones: Afirme, Banamex, Banorte, BanRegio, BX+, HSBC, Ion, Mifel, Santander y Scotiabank, entre otros.' },
            ].map((item, i) => (
              <GeneralAccordion key={i} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: G, padding: '64px 20px', textAlign: 'center' }}>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(1.4rem, 3vw, 1.9rem)', fontWeight: 800, margin: '0 0 14px' }}>
          ¿No encontraste tu respuesta?
        </h2>
        <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.95rem', margin: '0 0 28px' }}>Escríbenos y te respondemos en minutos.</p>
        <a
          href="https://wa.me/528126021053?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20cr%C3%A9ditos."
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: 'inline-block', backgroundColor: WH, color: G, padding: '13px 32px', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.07em', textDecoration: 'none', textTransform: 'uppercase' }}
        >
          Preguntar por WhatsApp
        </a>
      </section>

      <style>{`@media (max-width: 720px) { .faq-grid { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}

// ─── Inline accordion for general questions ───────────────────────────────────
function GeneralAccordion({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div style={{ border: `1px solid ${open ? G : BD}`, borderRadius: '4px', overflow: 'hidden', backgroundColor: open ? WH : WH, transition: 'border-color 0.2s' }}>
      <button
        onClick={() => setOpen(!open)}
        style={{ width: '100%', padding: '16px 22px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: BK, textAlign: 'left', fontSize: '0.9rem', fontWeight: 600, gap: '12px' }}
      >
        <span>{q}</span>
        <span style={{ color: G, fontSize: '1.3rem', flexShrink: 0, transform: open ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', lineHeight: 1 }}>+</span>
      </button>
      {open && (
        <div style={{ padding: '0 22px 18px', borderTop: `1px solid ${BD}` }}>
          <p style={{ color: GR, fontSize: '0.88rem', lineHeight: 1.78, margin: '14px 0 0' }}>{a}</p>
        </div>
      )}
    </div>
  )
}

