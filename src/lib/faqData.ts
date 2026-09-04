export interface FaqItem {
  q: string
  a: string
}

export interface FaqCategory {
  id: string
  slug: string
  title: string
  shortTitle: string
  icon: string
  image: string
  color: string
  description: string
  faqs: FaqItem[]
}

export const FAQ_CATEGORIES: FaqCategory[] = [
  {
    id: 'hipotecario',
    slug: '/faq/credito-hipotecario',
    title: 'Crédito Hipotecario',
    shortTitle: 'Hipotecario',
    icon: '🏠',
    image: 'https://images.unsplash.com/photo-1741156386380-0236c72eb6f9?w=800&h=500&fit=crop&auto=format',
    color: '#006D4E',
    description: 'Todo lo que necesitas saber sobre financiamiento para comprar, construir o remodelar tu casa.',
    faqs: [
      { q: '¿Cuánto enganche necesito para un crédito hipotecario?', a: 'El enganche mínimo requerido es del 10% del valor de la propiedad. Algunos bancos pueden pedir hasta el 20% dependiendo del perfil del solicitante. Nosotros te ayudamos a encontrar el banco con las condiciones más accesibles para tu situación.' },
      { q: '¿Qué documentos necesito para solicitar un crédito hipotecario?', a: 'Los documentos básicos son: identificación oficial vigente, comprobante de ingresos (3 últimas nóminas o estados de cuenta), declaración anual si eres independiente, comprobante de domicilio, y los documentos de la propiedad. Nosotros te guiamos en todo el proceso de documentación.' },
      { q: '¿Cuánto tiempo tarda el proceso hipotecario?', a: 'La pre-aprobación del banco toma entre 5 y 8 días hábiles. Una vez que el banco aprueba el crédito, el proceso notarial tarda entre 2 y 4 semanas adicionales. En total, puedes esperar entre 4 y 6 semanas desde la solicitud hasta la firma.' },
      { q: '¿Cuál es la tasa de interés promedio para un crédito hipotecario?', a: 'Las tasas varían según el banco, el plazo y tu perfil crediticio. En general, las tasas en México oscilan entre el 8% y el 12% anual. Nosotros comparamos más de 10 bancos para conseguirte la tasa más competitiva según tu perfil.' },
      { q: '¿Puedo combinar mi Infonavit con un crédito bancario?', a: 'Sí. Existe el esquema de crédito combinado (Infonavit + banco) que te permite complementar tu saldo de Infonavit con un crédito hipotecario bancario. Esto aumenta significativamente tu poder de compra. Te asesoramos sin costo para calcular exactamente cuánto puedes obtener.' },
      { q: '¿Qué bancos trabajan con ustedes para hipotecario?', a: 'Trabajamos con Afirme, Banamex, Banorte, BanRegio, BX+, HSBC, Ion, Mifel, Santander y Scotiabank. Comparamos todas las opciones disponibles para darte la propuesta más conveniente.' },
      { q: '¿Puedo solicitar un crédito hipotecario siendo trabajador independiente?', a: 'Sí. Los trabajadores independientes o freelancers pueden calificar presentando sus declaraciones anuales de los últimos 2 años y estados de cuenta. Tenemos opciones con varios bancos que aceptan este perfil.' },
      { q: '¿Cuánto cobra Ikka Consulting por la asesoría?', a: 'La asesoría es completamente gratuita para ti. Nuestros honorarios son pagados por el banco al momento en que tu crédito es formalizado, por lo que no tienes ningún costo adicional.' },
    ],
  },
  {
    id: 'broker-hipotecario',
    slug: '/faq/broker-hipotecario',
    title: 'Broker Hipotecario',
    shortTitle: 'Broker Hipotecario',
    icon: '🤝',
    image: 'https://images.unsplash.com/photo-1638262052640-82e94d64664a?w=800&h=500&fit=crop&auto=format',
    color: '#005A40',
    description: 'Preguntas sobre el servicio de intermediación hipotecaria y cómo un broker te ayuda a conseguir la mejor tasa.',
    faqs: [
      { q: '¿Qué es un broker hipotecario?', a: 'Un broker hipotecario es un intermediario profesional que trabaja entre tú y los bancos. Su función es comparar las ofertas de múltiples instituciones financieras para conseguirte el crédito con la mejor tasa, plazo y condiciones según tu perfil. En Ikka Consulting somos parte de SOC Asesores, la red de brokers hipotecarios más grande de México.' },
      { q: '¿Cuál es la ventaja de usar un broker frente a ir directamente al banco?', a: 'Un broker accede a múltiples bancos en una sola gestión, lo que te ahorra tiempo, comparativas manuales y trámites. Además, al tener relaciones comerciales establecidas con los bancos, puede negociar mejores condiciones que las que obtendrías de forma individual.' },
      { q: '¿El broker hipotecario me cobra alguna comisión?', a: 'No. La comisión del broker es pagada por el banco, no por el cliente. Para ti la intermediación es completamente gratuita. Nuestro incentivo es conseguirte el mejor crédito porque solo ganamos cuando tú obtienes el financiamiento.' },
      { q: '¿Con cuántos bancos trabajan como brokers?', a: 'Trabajamos con más de 10 instituciones bancarias: Afirme, Banamex, Banorte, BanRegio, BX+, HSBC, Ion, Mifel, Santander y Scotiabank. Esto nos permite ofrecerte una comparativa real y objetiva del mercado.' },
      { q: '¿Qué tipos de crédito hipotecario pueden gestionar?', a: 'Gestionamos créditos para compra de casa nueva o usada, construcción en terreno propio, ampliación y remodelación, sustitución hipotecaria (para mejorar la tasa de un crédito existente) y liberación de gravamen.' },
      { q: '¿Cuánto tiempo tarda el proceso con un broker?', a: 'Al tramitar con un broker el proceso es generalmente más rápido porque sabemos exactamente qué banco aprueba mejor tu perfil. La pre-aprobación puede estar lista en 3 a 5 días hábiles.' },
    ],
  },
  {
    id: 'empresarial',
    slug: '/faq/credito-empresarial',
    title: 'Crédito Empresarial',
    shortTitle: 'Empresarial',
    icon: '🏢',
    image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?w=800&h=500&fit=crop&auto=format',
    color: '#004D36',
    description: 'Preguntas sobre financiamiento para PyMEs, negocios y empresas en Monterrey.',
    faqs: [
      { q: '¿Qué tipos de crédito empresarial ofrecen?', a: 'Ofrecemos crédito simple a plazo fijo, línea de crédito revolvente, crédito de nómina, arrendamiento financiero (leasing) y crédito puente. Cada modalidad se adapta a distintas necesidades: capital de trabajo, expansión, equipamiento o liquidez temporal.' },
      { q: '¿Qué documentos necesita mi empresa para solicitar un crédito?', a: 'Los documentos típicos son: acta constitutiva, comprobante de domicilio fiscal, estados financieros de los últimos 2 años, declaraciones anuales, estados de cuenta bancarios de los últimos 6 meses e identificación oficial de los socios. Te indicamos exactamente qué pide cada banco según el monto que necesitas.' },
      { q: '¿Mi empresa necesita antigüedad mínima para calificar?', a: 'La mayoría de los bancos piden entre 1 y 2 años de operación mínima. Sin embargo, tenemos opciones para empresas de reciente creación con al menos 6 meses de actividad y flujos comprobables.' },
      { q: '¿Cuáles son los montos disponibles para crédito empresarial?', a: 'Los montos varían según el banco y el perfil de tu empresa. En general, los créditos van desde $100,000 MXN hasta varios millones. Para líneas de crédito revolventes los límites también dependen de tus ventas anuales.' },
      { q: '¿Necesito aval personal para el crédito empresarial?', a: 'En la mayoría de los casos sí. Los bancos solicitan el aval personal de los socios principales. Existen opciones con garantías alternativas como prendas o garantías hipotecarias, dependiendo del monto y la institución.' },
      { q: '¿Cuánto tiempo tarda la aprobación de un crédito empresarial?', a: 'Dependiendo del banco y el monto, la aprobación tarda entre 5 y 15 días hábiles. Para líneas de crédito revolventes los procesos suelen ser más rápidos (5–7 días). Nosotros preparamos el expediente para maximizar la probabilidad de aprobación en el menor tiempo posible.' },
      { q: '¿Pueden ayudarme a mejorar las condiciones de un crédito que ya tengo?', a: 'Sí. Si ya tienes un crédito empresarial con tasas o condiciones poco favorables, podemos buscar opciones de refinanciamiento o sustitución con mejores términos en otra institución.' },
    ],
  },
  {
    id: 'automotriz',
    slug: '/faq/credito-automotriz',
    title: 'Crédito Automotriz',
    shortTitle: 'Automotriz',
    icon: '🚗',
    image: 'https://images.unsplash.com/photo-1565043666747-69f6646db940?w=800&h=500&fit=crop&auto=format',
    color: '#006D4E',
    description: 'Todo sobre créditos para auto nuevo, seminuevo y motos en Monterrey.',
    faqs: [
      { q: '¿Qué tipos de vehículos financian?', a: 'Financiamos automóviles nuevos, seminuevos de hasta 5 años de antigüedad, SUVs, camionetas de uso personal y motocicletas. Para autos de uso comercial o flotillas también tenemos opciones especiales.' },
      { q: '¿Cuánto enganche necesito para un auto?', a: 'El enganche mínimo varía según el banco y el tipo de vehículo. En general se solicita entre el 10% y el 20% del valor del auto. Algunos bancos ofrecen opciones con 0% de enganche para autos nuevos con ciertas condiciones.' },
      { q: '¿Cuántos años de plazo puedo obtener para el crédito automotriz?', a: 'Los plazos disponibles son de 12 hasta 72 meses para automóviles. Para motocicletas los plazos van de 12 a 60 meses. Un plazo más largo reduce tu mensualidad pero aumenta el costo total del crédito; te asesoramos para elegir el plazo ideal.' },
      { q: '¿Puedo financiar un auto seminuevo particular (no de agencia)?', a: 'Sí, varios bancos financian la compra de autos seminuevos entre particulares, aunque el proceso es un poco diferente al de una agencia. El vehículo debe cumplir ciertos criterios de antigüedad y valor. Te orientamos en todo el trámite.' },
      { q: '¿Qué bancos trabajan con ustedes para crédito automotriz?', a: 'Para crédito automotriz trabajamos con Afirme, HSBC, Hey Banco y Scotiabank, entre otros. Comparamos tasas y mensualidades para conseguirte la mejor opción según el auto que deseas.' },
      { q: '¿El seguro de auto es obligatorio con el crédito?', a: 'Sí. Todos los bancos exigen que el auto financiado cuente con seguro de daños vigente durante la vida del crédito. Podemos orientarte sobre las opciones de seguro disponibles para que elijas la que mejor se adapte a tu presupuesto.' },
      { q: '¿Cuánto tiempo tarda la aprobación del crédito automotriz?', a: 'El proceso de aprobación es generalmente rápido: entre 24 y 72 horas hábiles para coches nuevos con agencia, y entre 3 y 5 días para seminuevos. Una vez aprobado, la entrega del vehículo puede ser casi inmediata.' },
    ],
  },
]
