import ServicePage from '../../components/ServicePage'
import { SERVICES } from '../../lib/data'

export default function BrokerHipotecario() {
  return <ServicePage data={SERVICES.find((s) => s.id === 'broker-hipotecario')!} />
}
