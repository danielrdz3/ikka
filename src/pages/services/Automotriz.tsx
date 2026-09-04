import ServicePage from '../../components/ServicePage'
import { SERVICES } from '../../lib/data'

export default function Automotriz() {
  return <ServicePage data={SERVICES.find((s) => s.id === 'automotriz')!} />
}
