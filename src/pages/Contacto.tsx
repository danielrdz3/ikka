import { useState } from 'react'
import { G, GL, GR, GRL, WH, BD, BK, SERVICES } from '../lib/data'
import { Link } from '../lib/router'
import { WhatsAppIcon } from '../components/Layout'

export default function Contacto() {
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
    <>
      {/* Hero */}
      <section style={{ backgroundColor: G, padding: '72px 20px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <nav style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', marginBottom: '24px', letterSpacing: '0.06em' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.9)' }}>Contacto</span>
          </nav>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, margin: '0 0 18px', lineHeight: 1.18 }}>
            Habla hoy con tu Asesor Financiero en Monterrey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
            Disponibles de lunes a domingo de 9:00 a 23:00 hrs. Asesoría 100% gratuita y sin compromiso.
          </p>
        </div>
      </section>

      {/* Quick contact chips */}
      <section style={{ backgroundColor: '#003D2A', padding: '24px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/528126021053?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20gratuita." target="_blank" rel="noopener noreferrer"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: '#25D366', color: WH, padding: '10px 20px', borderRadius: '4px', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', letterSpacing: '0.06em' }}>
            <WhatsAppIcon size={16} /> WhatsApp
          </a>
          <a href="tel:+528126021053"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.12)', color: WH, padding: '10px 20px', borderRadius: '4px', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', letterSpacing: '0.06em' }}>
            📞 812 602 1053
          </a>
          <a href="mailto:emendez@socasesores.com"
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', backgroundColor: 'rgba(255,255,255,0.12)', color: WH, padding: '10px 20px', borderRadius: '4px', fontWeight: 700, fontSize: '0.82rem', textDecoration: 'none', letterSpacing: '0.06em' }}>
            ✉️ emendez@socasesores.com
          </a>
        </div>
      </section>

      {/* Main content */}
      <section style={{ backgroundColor: GL, padding: '80px 20px', borderTop: `1px solid ${BD}` }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: '56px' }} className="contact-layout">

          {/* Info */}
          <div>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>Información</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, margin: '0 0 28px', lineHeight: 1.22 }}>
              Estamos aquí para ayudarte
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '22px', marginBottom: '32px' }}>
              {[
                { icon: '📞', label: 'Teléfono / WhatsApp', value: '812 602 1053', href: 'https://wa.me/528126021053', external: true },
                { icon: '✉️', label: 'Correo electrónico', value: 'emendez@socasesores.com', href: 'mailto:emendez@socasesores.com', external: false },
                { icon: '📍', label: 'Dirección', value: 'Cumbres Madeiras, Av. Puerta de Hierro 8983-33\n64349 Monterrey, N.L., México', href: 'https://maps.google.com/?q=SOC+IKKA+CONSULTING+Monterrey', external: true },
                { icon: '🕐', label: 'Horario de atención', value: 'Lun – Dom  ·  9:00 – 23:00 hrs', href: null, external: false },
              ].map((item) => (
                <div key={item.label} style={{ display: 'flex', gap: '14px' }}>
                  <span style={{ fontSize: '1.1rem', flexShrink: 0, marginTop: '2px' }}>{item.icon}</span>
                  <div>
                    <p style={{ color: G, fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 4px' }}>{item.label}</p>
                    {item.href
                      ? <a href={item.href} target={item.external ? '_blank' : undefined} rel="noopener noreferrer"
                          style={{ color: BK, fontSize: '0.9rem', textDecoration: 'none', whiteSpace: 'pre-line' }}>{item.value}</a>
                      : <p style={{ color: BK, fontSize: '0.9rem', margin: 0, whiteSpace: 'pre-line' }}>{item.value}</p>}
                  </div>
                </div>
              ))}
            </div>

            <div style={{ display: 'flex', gap: '10px' }}>
              <a href="https://www.facebook.com/IkkaConsulting" target="_blank" rel="noopener noreferrer"
                style={{ border: `1px solid ${BD}`, color: GR, padding: '8px 16px', borderRadius: '3px', fontSize: '0.78rem', textDecoration: 'none' }}>Facebook</a>
              <a href="https://wa.me/528126021053" target="_blank" rel="noopener noreferrer"
                style={{ backgroundColor: '#25D366', color: WH, padding: '8px 16px', borderRadius: '3px', fontSize: '0.78rem', textDecoration: 'none', fontWeight: 600 }}>WhatsApp</a>
            </div>

            {/* Team quick links */}
            <div style={{ marginTop: '36px', padding: '20px', backgroundColor: WH, borderRadius: '6px', border: `1px solid ${BD}` }}>
              <p style={{ color: G, fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', fontWeight: 700, margin: '0 0 12px' }}>Contacta a un asesor</p>
              <Link to="/nosotros" style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: G, fontSize: '0.84rem', fontWeight: 600, textDecoration: 'none' }}>
                Ver equipo de asesores →
              </Link>
            </div>
          </div>

          {/* Form */}
          <div style={{ backgroundColor: WH, padding: '40px', borderRadius: '6px', border: `1px solid ${BD}` }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: '1.4rem', fontWeight: 700, margin: '0 0 24px' }}>Solicitar asesoría gratuita</h3>
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
              <div><label style={lbl}>Mensaje</label><textarea rows={4} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} style={{ ...inp, resize: 'vertical' }} placeholder="Cuéntanos qué necesitas…" /></div>
              <button type="submit" style={{ backgroundColor: sent ? '#25D366' : G, color: WH, padding: '14px 24px', borderRadius: '3px', border: 'none', cursor: 'pointer', fontWeight: 700, fontSize: '0.82rem', letterSpacing: '0.08em', textTransform: 'uppercase', transition: 'background 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                {sent ? '✓ Enviado por WhatsApp' : <><WhatsAppIcon /> Enviar por WhatsApp</>}
              </button>
              <p style={{ color: GRL, fontSize: '0.7rem', textAlign: 'center', margin: 0 }}>
                Información confidencial. <a href="https://socasesores.com/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" style={{ color: G }}>Aviso de privacidad</a>
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section style={{ backgroundColor: WH, padding: '0' }}>
        <div style={{ borderTop: `1px solid ${BD}` }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3593.4635848500698!2d-100.4148676!3d25.755246999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8662972853aa9407%3A0xd56e3218cb5a15cf!2sSOC%20%7C%20IKKA%20CONSULTING!5e0!3m2!1sen!2sus!4v1786391049772!5m2!1sen!2sus"
            width="100%"
            height="440"
            style={{ border: 0, display: 'block' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="strict-origin-when-cross-origin"
            title="Ubicación de Ikka Consulting en Monterrey"
          />
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          .contact-layout { grid-template-columns: 1fr !important; gap: 36px !important; }
          .form-row { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </>
  )
}
