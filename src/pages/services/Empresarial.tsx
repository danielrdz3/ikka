import ServicePage from '../../components/ServicePage'
import { SERVICES } from '../../lib/data'

export default function Empresarial() {
  return <ServicePage data={SERVICES.find((s) => s.id === 'empresarial')!} />
}
