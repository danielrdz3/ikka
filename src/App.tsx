import { RouterProvider, Routes } from './lib/router'
import Layout from './components/Layout'
import Home from './pages/Home'
import Hipotecario from './pages/services/Hipotecario'
import BrokerHipotecario from './pages/services/BrokerHipotecario'
import Empresarial from './pages/services/Empresarial'
import Automotriz from './pages/services/Automotriz'
import AsesorCredito from './pages/services/AsesorCredito'
import AsesorFinanciero from './pages/services/AsesorFinanciero'
import Nosotros from './pages/Nosotros'
import HomeCreditos from './pages/HomeCreditos'
import ComoFunciona from './pages/ComoFunciona'
import Bancos from './pages/Bancos'
import Contacto from './pages/Contacto'
import FAQ from './pages/FAQ'
import FaqHipotecario from './pages/faq/FaqHipotecario'
import FaqBrokerHipotecario from './pages/faq/FaqBrokerHipotecario'
import FaqEmpresarial from './pages/faq/FaqEmpresarial'
import FaqAutomotriz from './pages/faq/FaqAutomotriz'

const routes = [
  { path: '/', component: <Home /> },
  { path: '/asesor-de-creditos-monterrey', component: <HomeCreditos /> },
  { path: '/como-funciona', component: <ComoFunciona /> },
  { path: '/bancos', component: <Bancos /> },
  { path: '/contacto', component: <Contacto /> },
  { path: '/faq', component: <FAQ /> },
  { path: '/faq/credito-hipotecario', component: <FaqHipotecario /> },
  { path: '/faq/broker-hipotecario', component: <FaqBrokerHipotecario /> },
  { path: '/faq/credito-empresarial', component: <FaqEmpresarial /> },
  { path: '/faq/credito-automotriz', component: <FaqAutomotriz /> },
  { path: '/credito-hipotecario-monterrey', component: <Hipotecario /> },
  { path: '/broker-hipotecario-monterrey', component: <BrokerHipotecario /> },
  { path: '/credito-empresarial-monterrey', component: <Empresarial /> },
  { path: '/credito-automotriz-monterrey', component: <Automotriz /> },
  { path: '/asesor-de-credito-monterrey', component: <AsesorCredito /> },
  { path: '/asesor-financiero-monterrey', component: <AsesorFinanciero /> },
  { path: '/nosotros', component: <Nosotros /> },
]

export default function App() {
  return (
    <RouterProvider>
      <Layout>
        <Routes routes={routes} />
      </Layout>
    </RouterProvider>
  )
}
