import FaqPage from '../../components/FaqPage'
import { FAQ_CATEGORIES } from '../../lib/faqData'

export default function FaqHipotecario() {
  return <FaqPage category={FAQ_CATEGORIES.find((c) => c.id === 'hipotecario')!} />
}
