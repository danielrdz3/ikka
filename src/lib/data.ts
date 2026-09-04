// ─── Palette ─────────────────────────────────────────────────────────────────
export const G = '#006D4E'
export const GL = '#EDF6EA'
export const BK = '#111111'
export const GR = '#4A4A4A'
export const GRL = '#7A8A85'
export const WH = '#FFFFFF'
export const BD = 'rgba(0,109,78,0.14)'

// ─── Types ────────────────────────────────────────────────────────────────────
export interface ServiceData {
  id: string
  slug: string
  icon: string
  navLabel: string
  h1: string
  subtitle: string
  description: string
  heroImage: string
  heroAlt: string
  items: string[]
  extraSections?: { title: string; items: string[] }[]
  metaDescription: string
}

// ─── Services ─────────────────────────────────────────────────────────────────
export const SERVICES: ServiceData[] = [
  {
    id: 'hipotecario',
    slug: '/credito-hipotecario-monterrey',
    icon: '🏠',
    navLabel: 'Hipotecario',
    h1: 'Crédito Hipotecario en Monterrey',
    subtitle: 'Desde 10% de enganche · Más de 10 bancos',
    description:
      'Ikka Consulting, asesor de créditos en Monterrey, te ayuda a encontrar la mejor tasa hipotecaria comparando más de 10 bancos. Compra, construye, renueva o libera tu inmueble — acompañamiento completo hasta la firma de escrituras.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=700&fit=crop&auto=format',
    heroAlt: 'Crédito hipotecario en Monterrey — llaves de casa nueva',
    items: [
      'Compra de casa habitación',
      'Construcción en terreno propio',
      'Sustitución y mejora de tasa',
      'Liquidez con garantía hipotecaria',
      'Compra de terreno',
      'Remodelación (hasta 50% del valor)',
      'Preventa residencial',
      'Liquidez + sustitución simultánea',
    ],
    extraSections: [
      {
        title: '¿Cómo funciona el proceso?',
        items: [
          'Presentas documentación básica (identificación, comprobante de ingresos)',
          'El banco revisa tu perfil en 5–8 días hábiles',
          'Recibes carta de aprobación con condiciones',
          'El notario valida los documentos del inmueble',
          'Firma de escrituras y entrega de llaves',
        ],
      },
    ],
    metaDescription:
      'Crédito hipotecario en Monterrey con Ikka Consulting. Comparamos más de 10 bancos: Banorte, HSBC, Santander, Scotiabank y más. Solo 10% de enganche. Asesoría gratuita al 8126021053.',
  },
  {
    id: 'broker-hipotecario',
    slug: '/broker-hipotecario-monterrey',
    icon: '🔑',
    navLabel: 'Broker Hipotecario',
    h1: 'Broker Hipotecario en Monterrey',
    subtitle: 'Comparamos todos los bancos por ti · Sin costo',
    description:
      'Como broker hipotecario en Monterrey, Ikka Consulting negocia directamente con más de 10 bancos para conseguirte la tasa y condiciones que no encontrarías por tu cuenta. Tú eliges, nosotros gestionamos.',
    heroImage: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=1400&h=700&fit=crop&auto=format',
    heroAlt: 'Broker hipotecario en Monterrey — comparativa bancaria',
    items: [
      'Comparativa de tasas en tiempo real',
      'Negociación directa con el banco',
      'Análisis de capacidad de pago',
      'Gestión de expediente completo',
      'Seguimiento hasta la firma',
      'Sin costo para el solicitante',
      'Más de 10 bancos aliados',
      'Acceso a tasas preferenciales',
    ],
    extraSections: [
      {
        title: '¿Por qué usar un broker hipotecario?',
        items: [
          'Accedes a mejores tasas que las publicadas en ventanilla',
          'Ahorra tiempo: una solicitud, múltiples respuestas',
          'Expertos que conocen los requisitos de cada banco',
          'Acompañamiento hasta escrituras sin costo adicional',
        ],
      },
    ],
    metaDescription:
      'Broker hipotecario en Monterrey. Ikka Consulting compara más de 10 bancos para conseguirte la mejor tasa hipotecaria. Gestión completa sin costo. Llámanos al 8126021053.',
  },
  {
    id: 'empresarial',
    slug: '/credito-empresarial-monterrey',
    icon: '🏢',
    navLabel: 'Empresarial',
    h1: 'Crédito Empresarial en Monterrey',
    subtitle: 'PyMEs y grandes empresas · Plazos de 1 a 5 años',
    description:
      'Como asesor de créditos en Monterrey, en Ikka Consulting encontramos el financiamiento ideal para tu negocio: capital de trabajo, expansión, equipamiento o liquidez. Sin burocracia, con asesoría experta.',
    heroImage: 'https://images.unsplash.com/photo-1777077689316-382b316659bc?w=1400&h=700&fit=crop&auto=format',
    heroAlt: 'Crédito empresarial en Monterrey para PyMEs',
    items: [
      'Crédito simple (1 a 5 años)',
      'Línea revolvente PyME',
      'Anticipo de ventas',
      'Tarjeta empresarial Visa',
      'Crédito hipotecario empresarial',
      'Arrendamiento de equipo',
      'Factoraje financiero',
      'Capital de trabajo',
    ],
    extraSections: [
      {
        title: '¿Quién puede aplicar?',
        items: [
          'Personas morales con mínimo 1 año de operación',
          'Personas físicas con actividad empresarial',
          'Ingresos demostrables (estados de cuenta o declaraciones)',
          'Buró de crédito en orden',
        ],
      },
    ],
    metaDescription:
      'Crédito empresarial en Monterrey para PyMEs y grandes empresas. Ikka Consulting compara múltiples bancos para encontrar el mejor financiamiento para tu negocio. Asesoría gratuita.',
  },
  {
    id: 'asesor-credito',
    slug: '/asesor-de-credito-monterrey',
    icon: '💳',
    navLabel: 'Asesor de Crédito',
    h1: 'Asesor de Crédito en Monterrey',
    subtitle: 'Guía experta · Sin costo · Todos los créditos',
    description:
      'Un asesor de crédito en Monterrey evalúa tu perfil, compara más de 10 bancos y gestiona el proceso completo hasta que obtengas el financiamiento que necesitas. Ikka Consulting es tu aliado financiero sin costo.',
    heroImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=1400&h=700&fit=crop&auto=format',
    heroAlt: 'Asesor de crédito en Monterrey — consultoría financiera',
    items: [
      'Evaluación gratuita de tu perfil crediticio',
      'Comparativa de más de 10 instituciones',
      'Gestión de documentación completa',
      'Negociación de tasas preferenciales',
      'Crédito hipotecario, automotriz y empresarial',
      'Broker hipotecario certificado SOC Asesores',
      'Atención personalizada 9–23 hrs todos los días',
      'Sin costo para el solicitante',
    ],
    extraSections: [
      {
        title: '¿Qué hace un asesor de crédito?',
        items: [
          'Analiza tu situación financiera y capacidad de pago',
          'Identifica el tipo de crédito más adecuado para ti',
          'Compara tasas y condiciones en múltiples bancos',
          'Prepara y revisa tu expediente antes de enviarlo',
          'Da seguimiento hasta la aprobación y firma',
        ],
      },
    ],
    metaDescription:
      'Asesor de crédito en Monterrey. Ikka Consulting compara más de 10 bancos para conseguirte el mejor crédito hipotecario, empresarial o automotriz. Asesoría 100% gratuita al 812 602 1053.',
  },
  {
    id: 'asesor-financiero',
    slug: '/asesor-financiero-monterrey',
    icon: '📈',
    navLabel: 'Asesor Financiero',
    h1: 'Asesor Financiero en Monterrey',
    subtitle: 'Intermediación financiera · SOC Asesores · Gratis',
    description:
      'Como asesor financiero en Monterrey, Ikka Consulting te orienta en la toma de decisiones de crédito: qué banco elegir, qué tasa es justa, cómo preparar tu expediente y cómo maximizar tu capacidad de endeudamiento.',
    heroImage: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1400&h=700&fit=crop&auto=format',
    heroAlt: 'Asesor financiero en Monterrey — reunión de planeación',
    items: [
      'Planeación financiera para tu crédito',
      'Análisis de capacidad de pago real',
      'Optimización de perfil crediticio',
      'Comparativa objetiva entre bancos',
      'Asesoría en crédito hipotecario',
      'Financiamiento empresarial y automotriz',
      'Parte de la red SOC Asesores #1 en México',
      'Certificación y experiencia comprobable',
    ],
    extraSections: [
      {
        title: '¿Por qué elegir a Ikka Consulting?',
        items: [
          'Somos parte de SOC Asesores, el broker #1 en México',
          'Equipo de asesores certificados en Monterrey, N.L.',
          'Acceso a tasas que no están disponibles en ventanilla',
          'Proceso 100% gratuito y sin compromisos',
          'Más de 10 bancos en un solo trámite',
        ],
      },
    ],
    metaDescription:
      'Asesor financiero en Monterrey, NL. Ikka Consulting — parte de SOC Asesores — te orienta en crédito hipotecario, empresarial y automotriz. Asesoría gratuita al 812 602 1053.',
  },
  {
    id: 'automotriz',
    slug: '/credito-automotriz-monterrey',
    icon: '🚗',
    navLabel: 'Automotriz',
    h1: 'Crédito Automotriz en Monterrey',
    subtitle: 'Hasta 72 meses · Solo 10% de enganche',
    description:
      'Estrena tu auto nuevo o usado con la mejor tasa del mercado. Tu asesor de créditos en Monterrey, Ikka Consulting, gestiona tu crédito automotriz con Afirme, HSBC, Hey Banco y Scotiabank.',
    heroImage: 'https://images.unsplash.com/photo-1783614221260-719a421f39d4?w=1400&h=700&fit=crop&auto=format',
    heroAlt: 'Crédito automotriz en Monterrey — auto nuevo',
    items: [
      'Auto nuevo o seminuevo',
      'Hasta 72 meses de plazo',
      'Solo 10% de enganche',
      'Motocicletas (hasta 60 meses)',
      'Monto máximo motos: $800,000 MXN',
      'Sustitución de crédito auto',
      'Aprobación en 48 horas',
      'Sin aval en la mayoría de casos',
    ],
    extraSections: [
      {
        title: 'Documentos necesarios',
        items: [
          'Identificación oficial vigente',
          'Comprobante de domicilio reciente',
          'Comprobante de ingresos (3 últimos meses)',
          'RFC y CURP',
          'Estados de cuenta bancarios',
        ],
      },
    ],
    metaDescription:
      'Crédito automotriz en Monterrey con Ikka Consulting. Auto nuevo o usado hasta 72 meses, motos hasta 60 meses. Solo 10% de enganche. Comparamos Afirme, HSBC, Scotiabank y más.',
  },
]

// ─── Banks ────────────────────────────────────────────────────────────────────
export const BANK_LOGOS = [
  { name: 'Afirme',    logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Afirme.png' },
  { name: 'Banamex',   logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/banamex.png' },
  { name: 'Banorte',   logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/banorte.png' },
  { name: 'BanRegio',  logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/banregio.png' },
  { name: 'Mifel',     logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Mifel.png' },
  { name: 'Ion',       logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Ion.png' },
  { name: 'HSBC',      logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Hsbc.png' },
  { name: 'BX+',       logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/bx+.png' },
  { name: 'Santander', logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Santander.png' },
  { name: 'Scotiabank',logo: 'https://socasesores.com/oficinas/img/bancos/hipotecario/Scotiabank.png' },
]

export const STATS = [
  { value: '+10', label: 'Bancos aliados' },
  { value: '100%', label: 'Asesoría gratuita' },
  { value: '9–23h', label: 'Horario de atención' },
  { value: '#1', label: 'Broker en México' },
]
