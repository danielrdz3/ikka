import ServicePage from '../../components/ServicePage'
import { SERVICES } from '../../lib/data'

export default function AsesorFinanciero() {
  return <ServicePage data={SERVICES.find((s) => s.id === 'asesor-financiero')!} />
}
