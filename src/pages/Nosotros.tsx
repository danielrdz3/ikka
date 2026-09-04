import { G, GL, GR, GRL, WH, BK } from '../lib/data'
import { Link } from '../lib/router'

import erickaMendez from '../imports/CPA_Ericka_Mendez_Asesor_Hipotecario_y_pme.jpeg'
import reneRodriguez from '../imports/Rene_Rodriguez_Asesor_Hipotecario_y_pme.jpeg'
import adanariTovar from '../imports/LIC_Adanari_Tovar_Asesor_Hipotecario_y_pme.jpeg'
import mariannaSaavedra from '../imports/Lic_Marianna_Saavedra_Mesa_Operativa.jpeg'
import rosaNellyHerrera from '../imports/lic_ROSA_NELLY_HERRERA_Asesor_Hipotecario_y_pme.jpeg'

const TEAM = [
  {
    name: 'CPA Ericka Mendez',
    role: 'Asesora Hipotecaria y PyME',
    photo: erickaMendez,
    specialties: ['Crédito Hipotecario', 'Crédito Automotriz', 'Crédito Empresarial'],
    whatsapp: 'Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20Ericka%20Mendez',
  },
  {
    name: 'Rene Rodriguez',
    role: 'Asesor Hipotecario y PyME',
    photo: reneRodriguez,
    specialties: ['Crédito Hipotecario', 'Crédito Automotriz', 'Crédito Negocio'],
    whatsapp: 'Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20Rene%20Rodriguez',
  },
  {
    name: 'LIC. Adanari Tovar',
    role: 'Asesora Hipotecaria y PyME',
    photo: adanariTovar,
    specialties: ['Crédito Hipotecario', 'Crédito Automotriz', 'Crédito Empresarial'],
    whatsapp: 'Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20Adanari%20Tovar',
  },
  {
    name: 'LIC. Marianna Saavedra',
    role: 'Mesa Operativa',
    photo: mariannaSaavedra,
    specialties: ['Crédito Hipotecario', 'Crédito Automotriz', 'Crédito Empresarial'],
    whatsapp: 'Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20Marianna%20Saavedra',
  },
  {
    name: 'LIC. Rosa Nelly Herrera',
    role: 'Asesora Hipotecaria y PyME',
    photo: rosaNellyHerrera,
    specialties: ['Crédito Hipotecario', 'Crédito Automotriz', 'Crédito Empresarial'],
    whatsapp: 'Hola%2C%20me%20gustar%C3%ADa%20hablar%20con%20Rosa%20Nelly%20Herrera',
  },
]

const SPEC_ICON: Record<string, string> = {
  'Crédito Hipotecario': '🏠',
  'Crédito Automotriz': '🚗',
  'Crédito Empresarial': '🏢',
  'Crédito Negocio': '💼',
}

export default function Nosotros() {
  return (
    <>
      {/* JSON-LD breadcrumb */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Inicio", "item": "https://ikkaconsultores.com/" },
          { "@type": "ListItem", "position": 2, "name": "Nosotros", "item": "https://ikkaconsultores.com/nosotros" },
        ]
      })}} />

      {/* Hero */}
      <section style={{ backgroundColor: G, padding: '72px 20px 64px' }}>
        <div style={{ maxWidth: '760px', margin: '0 auto', textAlign: 'center' }}>
          <nav style={{ fontSize: '0.72rem', color: 'rgba(255,255,255,0.55)', marginBottom: '24px', letterSpacing: '0.06em' }}>
            <Link to="/" style={{ color: 'rgba(255,255,255,0.55)', textDecoration: 'none' }}>Inicio</Link>
            <span style={{ margin: '0 8px' }}>›</span>
            <span style={{ color: 'rgba(255,255,255,0.85)' }}>Nosotros</span>
          </nav>
          <h1 style={{ fontFamily: "'Playfair Display', serif", color: WH, fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, margin: '0 0 18px', lineHeight: 1.18 }}>
            El equipo detrás de tu asesoría de crédito en Monterrey
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.05rem', lineHeight: 1.7, margin: 0 }}>
            Somos parte de la red <strong style={{ color: WH }}>SOC Asesores</strong>, la franquicia de intermediación financiera más grande de México. Nuestros asesores cuentan con certificación y experiencia para encontrarte el crédito ideal.
          </p>
        </div>
      </section>

      {/* Stats bar */}
      <section style={{ backgroundColor: '#003D2A', padding: '28px 20px' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', textAlign: 'center', gap: '12px' }}>
          {[
            { num: '+10', label: 'Bancos aliados' },
            { num: '+500', label: 'Créditos gestionados' },
            { num: '100%', label: 'Asesoría sin costo' },
          ].map((s) => (
            <div key={s.label}>
              <p style={{ color: '#7ED4A4', fontFamily: "'Playfair Display', serif", fontSize: '2rem', fontWeight: 800, margin: '0 0 2px' }}>{s.num}</p>
              <p style={{ color: 'rgba(255,255,255,0.55)', fontSize: '0.75rem', letterSpacing: '0.1em', textTransform: 'uppercase', margin: 0 }}>{s.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission */}
      <section style={{ backgroundColor: GL, padding: '72px 20px' }}>
        <div style={{ maxWidth: '820px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '48px', alignItems: 'center' }} className="mission-grid">
          <div>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>Nuestra misión</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 2.8vw, 2rem)', fontWeight: 800, margin: '0 0 18px', lineHeight: 1.22 }}>
              Conectarte con el mejor crédito del mercado en Monterrey
            </h2>
            <p style={{ color: GR, fontSize: '0.95rem', lineHeight: 1.75, margin: '0 0 14px' }}>
              En Ikka Consulting no cobramos por asesorarte. Trabajamos con más de 10 bancos e instituciones financieras para que obtengas la tasa más competitiva del mercado según tu perfil.
            </p>
            <p style={{ color: GR, fontSize: '0.95rem', lineHeight: 1.75, margin: 0 }}>
              Como parte de <strong>SOC Asesores</strong>, respaldamos cada operación con la solidez y reputación de la franquicia líder en intermediación de crédito en México.
            </p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
            {[
              { icon: '🎯', title: 'Sin costo para ti', desc: 'El banco paga nuestra comisión, tú no pagas nada.' },
              { icon: '🏦', title: '+10 bancos', desc: 'Comparamos opciones reales de las principales instituciones.' },
              { icon: '📋', title: 'Proceso guiado', desc: 'Te acompañamos en cada paso, desde la solicitud hasta la firma.' },
              { icon: '📍', title: 'Locales en MTY', desc: 'Equipo presencial en Cumbres, Monterrey, N.L.' },
            ].map((v) => (
              <div key={v.title} style={{ backgroundColor: WH, borderRadius: '6px', padding: '20px 16px', boxShadow: '0 1px 8px rgba(0,109,78,0.07)' }}>
                <p style={{ fontSize: '1.5rem', margin: '0 0 8px' }}>{v.icon}</p>
                <p style={{ color: G, fontSize: '0.8rem', fontWeight: 700, margin: '0 0 6px' }}>{v.title}</p>
                <p style={{ color: GRL, fontSize: '0.75rem', lineHeight: 1.55, margin: 0 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ backgroundColor: WH, padding: '80px 20px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '56px' }}>
            <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '10px' }}>Nuestros asesores</p>
            <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)', fontWeight: 800, margin: '0 0 14px' }}>
              Conoce al equipo de Ikka Consulting en Monterrey
            </h2>
            <p style={{ color: GR, fontSize: '0.95rem', maxWidth: '560px', margin: '0 auto', lineHeight: 1.65 }}>
              Profesionales certificados por SOC Asesores, especializados en crédito hipotecario, automotriz y empresarial en Nuevo León.
            </p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '28px', justifyContent: 'center' }} className="team-grid">
            {TEAM.map((member) => (
              <article key={member.name} style={{ backgroundColor: WH, border: '1px solid rgba(0,109,78,0.12)', borderRadius: '8px', overflow: 'hidden', transition: 'box-shadow 0.2s, transform 0.2s', flex: '0 0 calc(33.333% - 19px)', minWidth: '220px', maxWidth: '320px' }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 32px rgba(0,109,78,0.14)'; (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px)' }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.boxShadow = 'none'; (e.currentTarget as HTMLElement).style.transform = 'none' }}>

                {/* Photo */}
                <div style={{ aspectRatio: '3/4', overflow: 'hidden', backgroundColor: GL }}>
                  <img
                    src={member.photo}
                    alt={`${member.name} – Asesor de Créditos en Monterrey`}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center', display: 'block' }}
                  />
                </div>

                {/* Info */}
                <div style={{ padding: '20px 18px 22px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", color: BK, fontSize: '1rem', fontWeight: 700, margin: '0 0 4px', lineHeight: 1.2 }}>{member.name}</h3>
                  <p style={{ color: G, fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', margin: '0 0 14px' }}>{member.role}</p>

                  <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 18px', display: 'flex', flexDirection: 'column', gap: '6px' }}>
                    {member.specialties.map((s) => (
                      <li key={s} style={{ display: 'flex', alignItems: 'center', gap: '7px', color: GR, fontSize: '0.78rem' }}>
                        <span style={{ fontSize: '0.9rem' }}>{SPEC_ICON[s] ?? '✓'}</span>
                        {s}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/528126021053?text=${member.whatsapp}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'block', textAlign: 'center', backgroundColor: G, color: WH, fontSize: '0.73rem', letterSpacing: '0.07em', fontWeight: 700, textTransform: 'uppercase', padding: '9px 12px', borderRadius: '4px', textDecoration: 'none', transition: 'background-color 0.15s' }}
                    onMouseEnter={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = '#005A40')}
                    onMouseLeave={(e) => ((e.currentTarget as HTMLAnchorElement).style.backgroundColor = G)}
                  >
                    Contactar
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: GL, padding: '72px 20px', textAlign: 'center' }}>
        <p style={{ color: G, fontSize: '0.68rem', letterSpacing: '0.22em', textTransform: 'uppercase', fontWeight: 700, marginBottom: '12px' }}>¿Listo para empezar?</p>
        <h2 style={{ fontFamily: "'Playfair Display', serif", color: G, fontSize: 'clamp(1.5rem, 3vw, 2rem)', fontWeight: 800, margin: '0 0 16px' }}>
          Agenda tu asesoría gratuita hoy mismo
        </h2>
        <p style={{ color: GR, fontSize: '0.95rem', maxWidth: '480px', margin: '0 auto 28px', lineHeight: 1.65 }}>
          Sin compromisos. Sin costos. Solo el crédito que necesitas con la mejor tasa disponible en Monterrey.
        </p>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <a href="https://wa.me/528126021053?text=Hola%2C%20me%20interesa%20una%20asesor%C3%ADa%20gratuita." target="_blank" rel="noopener noreferrer"
            style={{ backgroundColor: G, color: WH, padding: '13px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase' }}>
            WhatsApp
          </a>
          <a href="tel:+528126021053"
            style={{ backgroundColor: 'transparent', color: G, padding: '12px 28px', borderRadius: '4px', fontWeight: 700, fontSize: '0.85rem', letterSpacing: '0.06em', textDecoration: 'none', textTransform: 'uppercase', border: `2px solid ${G}` }}>
            812 602 1053
          </a>
        </div>
      </section>

      <style>{`
        @media (max-width: 720px) {
          .mission-grid { grid-template-columns: 1fr !important; }
          .team-grid article { flex: 0 0 calc(50% - 14px) !important; }
        }
        @media (max-width: 480px) {
          .team-grid article { flex: 0 0 100% !important; max-width: 100% !important; }
        }
      `}</style>
    </>
  )
}
