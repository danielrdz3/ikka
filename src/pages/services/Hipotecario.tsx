import ServicePage from '../../components/ServicePage'
import { SERVICES } from '../../lib/data'

export default function Hipotecario() {
  return <ServicePage data={SERVICES.find((s) => s.id === 'hipotecario')!} />
}
