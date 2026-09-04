import { useState } from 'react'
import { Link } from '../lib/router'
import { G, GL, GR, GRL, WH, BD, BK, SERVICES, BANK_LOGOS, STATS } from '../lib/data'
import { WhatsAppIcon } from '../components/Layout'

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section id="inicio" style={{ minHeight: 'calc(100vh - 64px)', position: 'relative', display: 'flex', alignItems: 'center' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `url(https://images.unsplash.com/photo-1596304686259-00cae6afbfab?w=1600&h=900&fit=crop&auto=format)`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#0B2A20' }} />
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(110deg, rgba(0,40,28,0.88) 0%, rgba(0,60,40,0.75) 55%, rgba(0,80,55,0.50) 100%)' }} />
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', background: `linear-gradient(90deg, transparent, ${G}, transparent)` }} />

      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 20px', width: '100%', position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '660px' }}>
          <p style={{ color: '#A8D5B8', fontSize: '0.7rem', letterSpacing: '0.22em', fontWeight: 600, textTransform: 'uppercase', display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
            <span style={{ display: 'inline-block', width: '32px', height: '2px', backgroundColor: '#A8D5B8' }} />
            SOC Asesores · Broker #1 en México
          </p>

          <h1 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(2.4rem, 5.5vw, 4rem)', fontWeight: 700, lineHeight: 1.12, marginBottom: '1.5rem' }}>
            El mejor <em style={{ color: '#7ED4A4', fontStyle: 'italic' }}>Asesor de Créditos en Monterrey</em><br />a tu servicio
          </h1>

          <p style={{ color: 'rgba(255,255,255,0.78)', fontSize: '1.05rem', lineHeight: 1.75, maxWidth: '500px', marginBottom: '2.5rem' }}>
            En Ikka Consulting, asesor de créditos en Monterrey, encontramos la mejor opción entre más de 10 bancos para tu crédito hipotecario, empresarial o automotriz. Asesoría 100% gratuita.
          </p>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '12px' }}>
            <a
              href="https://wa.me/528126021053?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20gratuita."
              target="_blank"
              rel="noopener noreferrer"
              style={{ backgroundColor: G, color: WH, padding: '14px 28px', borderRadius: '3px', textDecoration: 'none', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase', display: 'inline-flex', alignItems: 'center', gap: '8px' }}
            >
              <WhatsAppIcon /> Asesoría gratuita
            </a>
            <a
              href="#servicios"
              style={{ color: WH, border: '1px solid rgba(255,255,255,0.35)', padding: '14px 28px', borderRadius: '3px', textDecoration: 'none', fontWeight: 500, fontSize: '0.85rem', letterSpacing: '0.06em', textTransform: 'uppercase' }}
            >
              Ver servicios
            </a>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '32px', marginTop: '48px', paddingTop: '32px', borderTop: '1px solid rgba(255,255,255,0.12)' }}>
            {STATS.map((s) => (
              <div key={s.label}>
                <p style={{ fontFamily: "'Playfair Display', serif", color: '#7ED4A4', fontSize: '1.6rem', fontWeight: 700, margin: 0, lineHeight: 1 }}>{s.value}</p>
                <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.7rem', margin: '4px 0 0' }}>{s.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

// ─── Services grid ────────────────────────────────────────────────────────────
function ServicesGrid() {
  return (
    <section id="servicios" style={{ backgroundColor: WH, padding: '88px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginBottom: '48px' }}>
          <span style={{ display: 'block', width: '40px', height: '3px', backgroundColor: G, borderRadius: '2px', marginBottom: '14px' }} />
          <p style={{ color: G, fontSize: '0.65rem', letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Servicios</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 700, marginBottom: '10px', lineHeight: 1.2 }}>
            Descubre por qué somos el mejor Asesor de Créditos en Monterrey
          </h2>
          <p style={{ color: GR, fontSize: '0.92rem', maxWidth: '520px', lineHeight: 1.7, margin: 0 }}>
            Comparamos múltiples instituciones para que obtengas la mejor tasa y condiciones del mercado.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2px' }} className="svc-grid">
          {SERVICES.map((s) => (
            <Link
              key={s.id}
              to={s.slug}
              style={{ display: 'block', backgroundColor: GL, padding: '36px 28px', textDecoration: 'none', transition: 'background 0.15s', borderBottom: `3px solid transparent` }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#d9eddb'; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = G; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GL; (e.currentTarget as HTMLAnchorElement).style.borderBottomColor = 'transparent'; }}
            >
              <span style={{ fontSize: '2rem', display: 'block', marginBottom: '14px' }}>{s.icon}</span>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px' }}>{s.h1}</h3>
              <p style={{ color: GRL, fontSize: '0.75rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '10px' }}>{s.subtitle}</p>
              <p style={{ color: GR, fontSize: '0.86rem', lineHeight: 1.65, margin: '0 0 16px' }}>{s.description.slice(0, 100)}…</p>
              <span style={{ color: G, fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.06em' }}>Ver más →</span>
            </Link>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .svc-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 560px) { .svc-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}

// ─── How it works ─────────────────────────────────────────────────────────────
function HowItWorks() {
  const steps = [
    { num: '01', title: 'Consulta gratuita', desc: 'Cuéntanos tu necesidad. Evaluamos tu perfil sin costo ni compromiso.' },
    { num: '02', title: 'Comparativa bancaria', desc: 'Consultamos más de 10 instituciones para darte las mejores condiciones del mercado.' },
    { num: '03', title: 'Gestión completa', desc: 'Te acompañamos en todo el proceso hasta la firma y entrega de tu crédito.' },
  ]
  return (
    <section id="como-funciona" style={{ backgroundColor: GL, padding: '88px 0', borderTop: `1px solid ${BD}`, borderBottom: `1px solid ${BD}` }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginBottom: '48px' }}>
          <span style={{ display: 'block', width: '40px', height: '3px', backgroundColor: G, borderRadius: '2px', marginBottom: '14px' }} />
          <p style={{ color: G, fontSize: '0.65rem', letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Proceso</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 700, lineHeight: 1.2 }}>
            Así trabaja el Asesor de Créditos en Monterrey que más confía en ti
          </h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2px' }} className="steps-grid">
          {steps.map((step, i) => (
            <div key={step.num} style={{ backgroundColor: WH, padding: '40px 32px', position: 'relative', borderLeft: i === 0 ? `4px solid ${G}` : `1px solid ${BD}` }}>
              <p style={{ fontFamily: "'Playfair Display', serif", color: 'rgba(0,109,78,0.08)', fontSize: '5rem', fontWeight: 800, position: 'absolute', top: '12px', right: '20px', lineHeight: 1, margin: 0 }}>{step.num}</p>
              <p style={{ color: G, fontSize: '0.62rem', letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '10px' }}>Paso {step.num}</p>
              <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.25rem', fontWeight: 700, marginBottom: '10px' }}>{step.title}</h3>
              <p style={{ color: GR, fontSize: '0.88rem', lineHeight: 1.75, margin: 0 }}>{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; }
          .steps-grid > div { border-left: 4px solid #006D4E !important; }
        }
      `}</style>
    </section>
  )
}

// ─── Banks ────────────────────────────────────────────────────────────────────
function Banks() {
  return (
    <section id="bancos" style={{ backgroundColor: WH, padding: '88px 0' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ marginBottom: '40px', textAlign: 'center' }}>
          <span style={{ display: 'inline-block', width: '40px', height: '3px', backgroundColor: G, borderRadius: '2px', marginBottom: '14px' }} />
          <p style={{ color: G, fontSize: '0.65rem', letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>Alianzas</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 700, marginBottom: '8px' }}>
            El Asesor de Créditos en Monterrey con más alianzas bancarias
          </h2>
          <p style={{ color: GR, fontSize: '0.92rem' }}>Comparamos condiciones en tiempo real para darte la mejor oferta.</p>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2px', marginBottom: '40px' }} className="banks-grid">
          {BANK_LOGOS.map((bank) => (
            <div key={bank.name} style={{ backgroundColor: WH, padding: '20px 16px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '10px', transition: 'background 0.15s', border: `1px solid ${BD}` }}
              onMouseEnter={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = GL)}
              onMouseLeave={(e) => ((e.currentTarget as HTMLDivElement).style.backgroundColor = WH)}>
              <img src={bank.logo} alt={`Logo ${bank.name}`} style={{ height: '40px', width: 'auto', maxWidth: '100px', objectFit: 'contain' }} loading="lazy" />
              <p style={{ color: GR, fontSize: '0.72rem', fontWeight: 500, margin: 0, textAlign: 'center' }}>{bank.name}</p>
            </div>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 768px) { .banks-grid { grid-template-columns: repeat(2, 1fr) !important; } }
      `}</style>
    </section>
  )
}

// ─── About ────────────────────────────────────────────────────────────────────
function About() {
  return (
    <section id="nosotros" style={{ backgroundColor: GL, padding: '88px 0', borderTop: `1px solid ${BD}` }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '64px', alignItems: 'center' }} className="about-grid">
        <div style={{ position: 'relative' }}>
          <div style={{ backgroundImage: `url(https://images.unsplash.com/photo-1724304406928-c43b01912fa1?w=700&h=500&fit=crop&auto=format)`, backgroundSize: 'cover', backgroundPosition: 'center', height: '420px', borderRadius: '6px', backgroundColor: '#d0e8d3' }} />
          <div style={{ position: 'absolute', bottom: '-16px', right: '-16px', width: '180px', height: '180px', border: `2px solid ${G}`, borderRadius: '4px', opacity: 0.2 }} />
          <div style={{ position: 'absolute', bottom: '24px', left: '-16px', backgroundColor: G, color: WH, padding: '16px 20px', borderRadius: '4px', zIndex: 2 }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '1.8rem', fontWeight: 800, margin: 0, lineHeight: 1 }}>#1</p>
            <p style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0, opacity: 0.85 }}>Broker en México</p>
          </div>
        </div>
        <div>
          <span style={{ display: 'block', width: '40px', height: '3px', backgroundColor: G, borderRadius: '2px', marginBottom: '14px' }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 700, marginBottom: '1.2rem', lineHeight: 1.2 }}>
            El Asesor de Créditos en Monterrey comprometido con tu patrimonio
          </h2>
          <p style={{ color: GR, lineHeight: 1.8, marginBottom: '1.2rem', fontSize: '0.92rem' }}>
            Ikka Consulting forma parte de la red SOC Asesores, el broker financiero #1 en México. Desde Monterrey, ayudamos a familias y empresas a acceder al crédito que necesitan con las mejores condiciones del mercado.
          </p>
          <p style={{ color: GR, lineHeight: 1.8, marginBottom: '2rem', fontSize: '0.92rem' }}>
            Nuestra asesoría es completamente gratuita — solo ganamos cuando tú obtienes tu crédito.
          </p>
          {['Asesoría personalizada sin costo', 'Comparativa en más de 10 bancos', 'Proceso transparente de inicio a fin', 'Atención de 9:00 a 23:00 todos los días'].map((item) => (
            <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', marginBottom: '10px' }}>
              <span style={{ color: G, fontWeight: 700, marginTop: '2px', flexShrink: 0 }}>✓</span>
              <span style={{ color: BK, fontSize: '0.9rem' }}>{item}</span>
            </div>
          ))}
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .about-grid { grid-template-columns: 1fr !important; gap: 40px !important; } }`}</style>
    </section>
  )
}

// ─── FAQ ──────────────────────────────────────────────────────────────────────
function FAQ() {
  const [open, setOpen] = useState<number | null>(null)
  const faqs = [
    { q: '¿Cuánto enganche necesito para comprar una casa?', a: 'Solo necesitas el 10% del valor de la propiedad. Trabajamos con más de 10 bancos para encontrarte la mejor tasa y plazo.' },
    { q: '¿La asesoría tiene algún costo?', a: 'No. La asesoría es 100% gratuita. Ganamos una comisión del banco cuando tu crédito es aprobado, así que nuestro interés es encontrarte la mejor opción.' },
    { q: '¿Qué bancos trabajan con ustedes?', a: 'Afirme, Banamex, Banorte, BanRegio, BX+, HSBC, Ion, Mifel, Santander y Scotiabank para hipotecario y empresarial. Para auto: Afirme, HSBC, Hey Banco y Scotiabank.' },
    { q: '¿Cuánto tiempo tarda el proceso hipotecario?', a: 'El banco emite la carta de aprobación en 5–8 días hábiles. El proceso notarial toma de 2 a 4 semanas adicionales.' },
    { q: '¿Puedo combinar Infonavit con crédito bancario?', a: 'Sí. Te asesoramos en la combinación de crédito institucional (Infonavit/Fovissste) con financiamiento bancario para maximizar tu capacidad de compra.' },
    { q: '¿Dónde están ubicados?', a: 'Cumbres Madeiras, Av. Puerta de Hierro 8983-33, 64349 Monterrey, N.L.. Atendemos de 9:00 a 23:00 todos los días. WhatsApp: 812 602 1053.' },
  ]
  return (
    <section id="faq" style={{ backgroundColor: WH, padding: '88px 0', borderTop: `1px solid ${BD}` }}>
      <div style={{ maxWidth: '760px', margin: '0 auto', padding: '0 20px' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <span style={{ display: 'inline-block', width: '40px', height: '3px', backgroundColor: G, borderRadius: '2px', marginBottom: '14px' }} />
          <p style={{ color: G, fontSize: '0.65rem', letterSpacing: '0.22em', fontWeight: 700, textTransform: 'uppercase', marginBottom: '8px' }}>FAQ</p>
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.7rem, 3.5vw, 2.4rem)', fontWeight: 700 }}>
            Preguntas sobre tu Asesor de Créditos en Monterrey
          </h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
          {faqs.map((faq, i) => (
            <div key={i} style={{ border: `1px solid ${open === i ? G : BD}`, borderRadius: '4px', overflow: 'hidden', backgroundColor: open === i ? GL : WH, transition: 'all 0.2s' }}>
              <button onClick={() => setOpen(open === i ? null : i)} style={{ width: '100%', padding: '18px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'none', border: 'none', cursor: 'pointer', color: BK, textAlign: 'left', fontSize: '0.9rem', fontWeight: 600, gap: '12px' }}>
                <span>{faq.q}</span>
                <span style={{ color: G, fontSize: '1.3rem', flexShrink: 0, transform: open === i ? 'rotate(45deg)' : 'none', transition: 'transform 0.2s', lineHeight: 1 }}>+</span>
              </button>
              {open === i && (
                <div style={{ padding: '0 24px 20px', borderTop: `1px solid ${BD}` }}>
                  <p style={{ color: GR, fontSize: '0.88rem', lineHeight: 1.78, margin: '16px 0 0' }}>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// ─── Contact ──────────────────────────────────────────────────────────────────
function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', service: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const msg = `Hola, me llamo ${form.name}. Me interesa: ${form.service || 'asesoría general'}. ${form.message} Tel: ${form.phone}. Email: ${form.email}.`
    window.open(`https://wa.me/528126021053?text=${encodeURIComponent(msg)}`, '_blank')
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  const inp: React.CSSProperties = { width: '100%', backgroundColor: GL, border: `1px solid ${BD}`, borderRadius: '3px', padding: '12px 16px', color: BK, fontSize: '0.88rem', outline: 'none', boxSizing: 'border-box', fontFamily: 'Inter, sans-serif' }
  const lbl: React.CSSProperties = { color: G, fontSize: '0.68rem', letterSpacing: '0.14em', textTransform: 'uppercase', fontWeight: 700, display: 'block', marginBottom: '6px' }

  return (
    <section id="contacto" style={{ backgroundColor: GL, padding: '88px 0', borderTop: `1px solid ${BD}` }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '64px' }} className="contact-grid">
        <div>
          <span style={{ display: 'block', width: '40px', height: '3px', backgroundColor: G, borderRadius: '2px', marginBottom: '14px' }} />
          <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.7rem, 3vw, 2.3rem)', fontWeight: 700, marginBottom: '1rem', lineHeight: 1.2 }}>
            Habla hoy con tu Asesor de Créditos en Monterrey
          </h2>
          <p style={{ color: GR, lineHeight: 1.75, marginBottom: '2.5rem', fontSize: '0.92rem' }}>Disponibles todos los días de 9:00 a 23:00 hrs.</p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {[
              { icon: '📞', label: 'Teléfono / WhatsApp', value: '812 602 1053', href: 'https://wa.me/528126021053' },
              { icon: '✉️', label: 'Correo', value: 'emendez@socasesores.com', href: 'mailto:emendez@socasesores.com' },
              { icon: '📍', label: 'Dirección', value: 'Cumbres Madeiras, Av. Puerta de Hierro 8983-33, 64349 Monterrey, N.L.', href: 'https://maps.google.com/?q=Cumbres+Madeiras+Av+Puerta+de+Hierro+8983+Monterrey+NL' },
              { icon: '🕐', label: 'Horario', value: 'Lun–Dom, 9:00 – 23:00 hrs', href: null },
            ].map((item) => (
              <div key={item.label} style={{ display: 'flex', gap: '14px' }}>
                <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                <div>
                  <p style={{ color: G, fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 4px' }}>{item.label}</p>
                  {item.href
                    ? <a href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" style={{ color: BK, fontSize: '0.9rem', textDecoration: 'none' }}>{item.value}</a>
                    : <p style={{ color: BK, fontSize: '0.9rem', margin: 0 }}>{item.value}</p>}
                </div>
              </div>
            ))}
          </div>
          <div style={{ display: 'flex', gap: '10px', marginTop: '28px' }}>
            <a href="https://www.facebook.com/IkkaConsulting" target="_blank" rel="noopener noreferrer" style={{ border: `1px solid ${BD}`, color: GR, padding: '8px 16px', borderRadius: '3px', fontSize: '0.78rem', textDecoration: 'none' }}>Facebook</a>
            <a href="https://wa.me/528126021053" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#25D366', color: WH, padding: '8px 16px', borderRadius: '3px', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 600 }}>WhatsApp</a>
          </div>
        </div>
        <div style={{ backgroundColor: WH, padding: '40px', borderRadius: '6px', border: `1px solid ${BD}` }}>
          <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.4rem', fontWeight: 700, marginBottom: '24px' }}>Solicitar asesoría gratuita</h3>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }} className="form-row">
              <div><label style={lbl}>Nombre *</label><input required type="text" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} style={inp} placeholder="Tu nombre" /></div>
              <div><label style={lbl}>Teléfono *</label><input required type="tel" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} style={inp} placeholder="811 000 0000" /></div>
            </div>
            <div><label style={lbl}>Correo</label><input type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} style={inp} placeholder="correo@ejemplo.com" /></div>
            <div>
              <label style={lbl}>Servicio de interés</label>
              <select value={form.service} onChange={(e) => setForm({ ...form, service: e.target.value })} style={{ ...inp, cursor: 'pointer' }}>
                <option value="">Selecciona un servicio</option>
                {SERVICES.map((s) => <option key={s.id}>{s.h1}</option>)}
              </select>
            </div>
            <div><label style={lbl}>Mensaje</label><textarea rows={3} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inp, resize: 'vertical' }} placeholder="Cuéntanos qué necesitas…" /></div>
            <button type="submit" style={{ backgroundColor: sent ? '#25D366' : G, color: WH, padding: '14px 24px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'background 0.3s' }}>
              {sent ? '✓ Enviado por WhatsApp' : 'Enviar por WhatsApp →'}
            </button>
            <p style={{ color: GRL, fontSize: '0.7rem', textAlign: 'center', margin: 0 }}>
              Información confidencial. <a href="https://socasesores.com/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" style={{ color: G }}>Aviso de privacidad</a>
            </p>
          </form>
        </div>
      </div>
      {/* Map */}
      <div style={{ maxWidth: '1100px', margin: '48px auto 0', padding: '0 20px' }}>
        <div style={{ borderRadius: '6px', overflow: 'hidden', border: `1px solid ${BD}` }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4635848500698!2d-100.4148676!3d25.755246999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662972853aa9407%3A0xd56e3218cb5a15cf!2sSOC%20%7C%20IKKA%20CONSULTING!5e0!3m2!1sen!2sus!4v1786391049772!5m2!1sen!2sus"
            width="100%"
            height="400"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Ubicación de Ikka Consulting en Monterrey"
          />
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .contact-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}

// ─── Home ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <>
      <Hero />
      <ServicesGrid />
      <HowItWorks />
      <Banks />
      <About />
      <FAQ />
      <Contact />
    </>
  )
}
