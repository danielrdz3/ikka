import ServicePage from '../../components/ServicePage'
import { SERVICES } from '../../lib/data'

export default function AsesorCredito() {
  return <ServicePage data={SERVICES.find((s) => s.id === 'asesor-credito')!} />
}
