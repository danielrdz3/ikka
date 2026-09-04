import { useState, type ReactNode } from 'react'
import { Link, useLocation } from '../lib/router'
import { G, GL, GR, GRL, WH, BD, BK, SERVICES } from '../lib/data'
import logoImg from '../imports/image_-_2026-08-27T224026.021.png'

// ─── WhatsApp SVG ─────────────────────────────────────────────────────────────
export function WhatsAppIcon({ size = 17 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

// ─── Navbar ───────────────────────────────────────────────────────────────────
function Navbar() {
  const [open, setOpen] = useState(false)
  const [servicesOpen, setServicesOpen] = useState(false)
  const { pathname } = useLocation()

  const mainLinks = [
    { to: '/como-funciona', label: 'Cómo funciona', spa: true },
    { to: '/bancos', label: 'Bancos', spa: true },
    { to: '/nosotros', label: 'Nosotros', spa: true },
    { to: '/faq', label: 'FAQ', spa: true },
    { to: '/contacto', label: 'Contacto', spa: true },
  ]

  return (
    <header style={{ backgroundColor: WH, borderBottom: `1px solid ${BD}`, position: 'fixed', top: 0, left: 0, right: 0, zIndex: 50, boxShadow: '0 1px 12px rgba(0,109,78,0.06)' }}>
      <nav style={{ maxWidth: '1100px', margin: '0 auto', padding: '0 20px', height: '72px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>

        <Link to="/" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }} aria-label="Ikka Consulting">
          <img src={logoImg} alt="SOC Ikka Consulting – Líderes en Asesoría Financiera" style={{ height: '52px', width: 'auto', display: 'block' }} />
        </Link>

        {/* Desktop nav */}
        <ul style={{ display: 'flex', gap: '20px', listStyle: 'none', margin: 0, padding: 0, alignItems: 'center' }} className="nav-desktop">
          <li style={{ position: 'relative' }}
            onMouseEnter={() => setServicesOpen(true)}
            onMouseLeave={() => setServicesOpen(false)}
          >
            <button style={{ background: 'none', border: 'none', cursor: 'pointer', color: GR, fontSize: '0.8rem', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '4px', padding: '4px 0' }}>
              Servicios
              <svg width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ transform: servicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.15s' }}>
                <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </button>
            {servicesOpen && (
              <div style={{ position: 'absolute', top: '100%', left: 0, backgroundColor: WH, border: `1px solid ${BD}`, borderRadius: '4px', padding: '8px 0', minWidth: '240px', boxShadow: '0 8px 24px rgba(0,109,78,0.1)', zIndex: 60 }}>
                {SERVICES.map((s) => (
                  <Link
                    key={s.id}
                    to={s.slug}
                    style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '10px 18px', textDecoration: 'none', color: pathname === s.slug ? G : BK, fontSize: '0.85rem', backgroundColor: pathname === s.slug ? GL : 'transparent', fontWeight: pathname === s.slug ? 600 : 400 }}
                    onMouseEnter={(e) => { if (pathname !== s.slug) (e.currentTarget as HTMLAnchorElement).style.backgroundColor = GL }}
                    onMouseLeave={(e) => { if (pathname !== s.slug) (e.currentTarget as HTMLAnchorElement).style.backgroundColor = 'transparent' }}
                  >
                    <span>{s.icon}</span>
                    <span>{s.h1.replace(' en Monterrey', '')}</span>
                  </Link>
                ))}
              </div>
            )}
          </li>

          {mainLinks.map((l) => (
            <li key={l.to}>
              {(l as any).spa
                ? <Link to={l.to} style={{ color: GR, fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = G)}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = GR)}>{l.label}</Link>
                : <a href={l.to} style={{ color: GR, fontSize: '0.8rem', fontWeight: 500, textDecoration: 'none', transition: 'color 0.15s' }}
                    onMouseEnter={(e) => ((e.target as HTMLAnchorElement).style.color = G)}
                    onMouseLeave={(e) => ((e.target as HTMLAnchorElement).style.color = GR)}>{l.label}</a>
              }
            </li>
          ))}
        </ul>

        <a href="https://wa.me/528126021053?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20gratuita." target="_blank" rel="noopener noreferrer"
          style={{ backgroundColor: G, color: WH, fontSize: '0.75rem', letterSpacing: '0.06em', padding: '9px 18px', borderRadius: '3px', textDecoration: 'none', fontWeight: 600, textTransform: 'uppercase' }}
          className="nav-cta">
          Asesoría gratis
        </a>

        <button onClick={() => setOpen(!open)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '6px', display: 'none' }} className="nav-burger" aria-label="Menú">
          {[0,1,2].map((i) => <span key={i} style={{ display: 'block', width: '22px', height: '2px', backgroundColor: G, margin: '4px 0' }} />)}
        </button>
      </nav>

      {open && (
        <div style={{ backgroundColor: WH, borderTop: `1px solid ${BD}` }}>
          <ul style={{ listStyle: 'none', margin: 0, padding: '8px 0' }}>
            <li><p style={{ color: GRL, fontSize: '0.65rem', letterSpacing: '0.16em', textTransform: 'uppercase', padding: '8px 24px 4px', margin: 0, fontWeight: 700 }}>Servicios</p></li>
            {SERVICES.map((s) => (
              <li key={s.id}>
                <Link to={s.slug} onClick={() => setOpen(false)} style={{ display: 'block', padding: '9px 24px', color: pathname === s.slug ? G : BK, fontSize: '0.88rem', textDecoration: 'none' }}>
                  {s.icon} {s.h1.replace(' en Monterrey', '')}
                </Link>
              </li>
            ))}
            {mainLinks.map((l) => (
              <li key={l.to}>
                {(l as any).spa
                  ? <Link to={l.to} onClick={() => setOpen(false)} style={{ display: 'block', padding: '9px 24px', color: BK, fontSize: '0.9rem', textDecoration: 'none' }}>{l.label}</Link>
                  : <a href={l.to} onClick={() => setOpen(false)} style={{ display: 'block', padding: '9px 24px', color: BK, fontSize: '0.9rem', textDecoration: 'none' }}>{l.label}</a>
                }
              </li>
            ))}
            <li style={{ padding: '8px 24px' }}>
              <a href="https://wa.me/528126021053" target="_blank" rel="noopener noreferrer" style={{ display: 'block', textAlign: 'center', backgroundColor: G, color: WH, padding: '10px', borderRadius: '3px', fontWeight: 600, fontSize: '0.85rem', textDecoration: 'none' }}>WhatsApp</a>
            </li>
          </ul>
        </div>
      )}

      <style>{`
        @media (max-width: 860px) {
          .nav-desktop { display: none !important; }
          .nav-cta { display: none !important; }
          .nav-burger { display: block !important; }
        }
      `}</style>
    </header>
  )
}

// ─── Footer ───────────────────────────────────────────────────────────────────
function Footer() {
  return (
    <footer style={{ backgroundColor: '#002818', color: WH, padding: '56px 20px 28px' }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '48px', marginBottom: '40px' }} className="footer-grid">
          <div>
            <div style={{ display: 'inline-block', backgroundColor: WH, borderRadius: '4px', padding: '6px 12px', marginBottom: '14px' }}>
              <img src={logoImg} alt="SOC Ikka Consulting" style={{ height: '32px', width: 'auto', display: 'block' }} />
            </div>
            <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.85rem', lineHeight: 1.7, maxWidth: '300px', margin: '0 0 12px' }}>
              Asesor de créditos en Monterrey, NL especializado en crédito hipotecario, empresarial, automotriz y broker hipotecario.
            </p>
            <address style={{ fontStyle: 'normal', color: 'rgba(255,255,255,0.4)', fontSize: '0.75rem', lineHeight: 1.6 }}>
              Cumbres Madeiras, Av. Puerta de Hierro 8983-33<br />64349 Monterrey, N.L., México
            </address>
          </div>
          <div>
            <p style={{ color: '#7ED4A4', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '14px' }}>Servicios</p>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
              {SERVICES.map((s) => (
                <li key={s.id}>
                  <Link to={s.slug} style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', textDecoration: 'none' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = '#7ED4A4')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.color = 'rgba(255,255,255,0.55)')}>
                    {s.h1}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p style={{ color: '#7ED4A4', fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '14px' }}>Contacto</p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <a href="tel:+528126021053" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', textDecoration: 'none' }}>812 602 1053</a>
              <a href="mailto:emendez@socasesores.com" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', textDecoration: 'none' }}>emendez@socasesores.com</a>
              <a href="https://www.facebook.com/IkkaConsulting" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.82rem', textDecoration: 'none' }}>Facebook</a>
            </div>
          </div>
        </div>
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px' }}>
          <p style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', margin: 0 }}>© {new Date().getFullYear()} Ikka Consulting · SOC Asesores.</p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a href="https://socasesores.com/terminos-y-condiciones" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textDecoration: 'none' }}>Términos y condiciones</a>
            <a href="https://socasesores.com/aviso-de-privacidad" target="_blank" rel="noopener noreferrer" style={{ color: 'rgba(255,255,255,0.3)', fontSize: '0.7rem', textDecoration: 'none' }}>Aviso de privacidad</a>
          </div>
        </div>
      </div>
      <style>{`@media (max-width: 768px) { .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; } }`}</style>
    </footer>
  )
}

// ─── WhatsApp float ───────────────────────────────────────────────────────────
function WhatsAppFloat() {
  return (
    <a href="https://wa.me/528126021053?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20gratuita." target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp"
      style={{ position: 'fixed', bottom: '24px', right: '24px', width: '56px', height: '56px', backgroundColor: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 18px rgba(37,211,102,0.35)', zIndex: 100, transition: 'transform 0.18s' }}
      onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1.1)')}
      onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.transform = 'scale(1)')}>
      <WhatsAppIcon size={26} />
    </a>
  )
}

// ─── Root layout ──────────────────────────────────────────────────────────────
export default function Layout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <main style={{ paddingTop: '72px' }}>
        {children}
      </main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
