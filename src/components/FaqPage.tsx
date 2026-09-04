import { useState } from 'react'
import { G, GL, GR, GRL, WH, BD, BK, SERVICES } from '../lib/data'
import { Link } from '../lib/router'
import type { FaqCategory } from '../lib/faqData'
import { FAQ_CATEGORIES } from '../lib/faqData'

export default function FaqPage({ category }: { category: FaqCategory }) {
  const [open, setOpen] = useState<number | null>(null)
  const others = FAQ_CATEGORIES.filter((c) => c.id !== category.id)

  return (
    <>
      {/* JSON-LD FAQPage */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": category.faqs.map((f) => ({
          "@type": "Question",
          "name": f.q,
          "acceptedAnswer": { "@type": "Answer", "text": f.a },
        })),
      })}} />

      {/* Hero with image */}
      <section style={{ position: 'relative', minHeight: '320px', display: 'flex', alignItems: 'flex-end' }}>
        <div style={{ position: 'absolute', inset: 0 }}>
          <img
            src={category.image}
            alt={category.title}
            style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
          />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,30,20,0.88) 0%, rgba(0,50,35,0.6) 50%, rgba(0,80,55,0.3) 100%)' }} />
        </div>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', padding: '64px 20px 48px', width: '100%' }}>
          <nav style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', marginBottom: '20px', letterSpacing: '0.06em' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <Link to="/faq" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>FAQ</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>{category.title}</span>
          </nav>
          <span style={{ fontSize: '2.5rem', display: 'block', marginBottom: '12px' }}>{category.icon}</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 800, margin: '0 0 12px', lineHeight: 1.15 }}>
            Preguntas sobre {category.title} en Monterrey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '1rem', lineHeight: 1.65, margin: 0, maxWidth: '580px' }}>
            {category.description}
          </p>
        </div>
      </section>

      {/* FAQ accordion */}
      <section style={{ backgroundColor: WH, padding: '72px 20px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {category.faqs.map((faq, i) => (
              <div
                key={i}
                style={{ border: `1px solid ${open === i ? G : BD}`, borderRadius: '6px', overflow: 'hidden', backgroundColor: open === i ? GL : WH, transition: 'all 0.2s' }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  style={{ width: '100%', padding: '20px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: BK, textAlign: 'left', fontSize: '0.92rem', fontWeight: 600, gap: '14px', lineHeight: 1.4 }}
                >
                  <span>{faq.q}</span>
                  <span style={{ color: G, fontSize: '1.4rem', flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', lineHeight: 1 }}>+</span>
                </button>
                {open === i && (
                  <div style={{ padding: '0 24px 22px', borderTop: `1px solid ${BD}` }}>
                    <p style={{ color: GR, fontSize: '0.9rem', lineHeight: 1.8, margin: '16px 0 0' }}>{faq.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA inline */}
          <div style={{ marginTop: '48px', backgroundColor: G, borderRadius: '8px', padding: '36px 32px', textAlign: 'center' }}>
            <p style={{ color: 'rgba(255,255,255,0.75)', fontSize: '0.75rem', letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '10px' }}>¿Tienes más dudas?</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: '1.4rem', fontWeight: 800, margin: '0 0 14px' }}>
              Habla con un asesor ahora mismo
            </h3>
            <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.88rem', margin: '0 0 22px' }}>Asesoría gratuita y sin compromiso. Respondemos en minutos.</p>
            <a
              href={`https://wa.me/528126021053?text=Hola%2C%20tengo%20preguntas%20sobre%20${encodeURIComponent(category.title)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: 'inline-block', backgroundColor: WH, color: G, padding: '12px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.07em', textDecoration: 'none', textTransform: 'uppercase' }}
            >
              Preguntar por WhatsApp →
            </a>
          </div>
        </div>
      </section>

      {/* Other FAQ categories */}
      <section style={{ backgroundColor: GL, padding: '64px 20px', borderTop: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '28px', textAlign: 'center' }}>Otras categorías de FAQ</p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }} className="faq-others">
            {others.map((cat) => (
              <Link
                key={cat.id}
                to={cat.slug}
                style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none', borderRadius: '6px', overflow: 'hidden', border: `1px solid ${BD}`, backgroundColor: WH, transition: 'box-shadow 0.2s, transform 0.2s' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 6px 24px rgba(0,109,78,0.12)'; (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.boxShadow = 'none'; (e.currentTarget as HTMLAnchorElement).style.transform = 'none' }}
              >
                <div style={{ height: '110px', overflow: 'hidden' }}>
                  <img src={cat.image} alt={cat.title} loading="lazy" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
                </div>
                <div style={{ padding: '14px 16px 18px' }}>
                  <span style={{ fontSize: '1.2rem', marginRight: '6px' }}>{cat.icon}</span>
                  <span style={{ color: G, fontSize: '0.85rem', fontWeight: 700 }}>{cat.shortTitle}</span>
                  <p style={{ color: GRL, fontSize: '0.72rem', margin: '6px 0 0' }}>{cat.faqs.length} preguntas →</p>
                </div>
              </Link>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '32px' }}>
            <Link to="/faq" style={{ color: G, fontSize: '0.85rem', fontWeight: 700, textDecoration: 'none', letterSpacing: '0.06em' }}>
              ← Ver todas las categorías de FAQ
            </Link>
          </div>
        </div>
      </section>

      {/* Service link */}
      {(() => {
        const svc = SERVICES.find((s) => s.id === category.id || s.id === category.id.replace('broker-hipotecario', 'broker-hipotecario'))
        if (!svc) return null
        return (
          <section style={{ backgroundColor: WH, padding: '48px 20px', borderTop: `1px solid ${BD}`, textAlign: 'center' }}>
            <p style={{ color: GR, fontSize: '0.88rem', margin: '0 0 14px' }}>¿Ya listo para solicitar tu crédito?</p>
            <Link
              to={svc.slug}
              style={{ display: 'inline-block', backgroundColor: G, color: WH, padding: '12px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.07em', textDecoration: 'none', textTransform: 'uppercase' }}
            >
              Ver {svc.h1} →
            </Link>
          </section>
        )
      })()}

      <style>{`@media (max-width: 640px) { .faq-others { grid-template-columns: 1fr !important; } }`}</style>
    </>
  )
}
