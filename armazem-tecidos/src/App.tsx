import Header from './components/Header'
import Hero from './components/Hero'
import SobreNos from './components/SobreNos'
import Diferenciais from './components/Diferenciais'
import Tecidos from './components/Tecidos'
import Galeria from './components/Galeria'
import ComoComprar from './components/ComoComprar'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <SobreNos />
        <Diferenciais />
        <Tecidos />
        <Galeria />
        <ComoComprar />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
