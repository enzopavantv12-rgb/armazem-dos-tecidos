import Header from './components/Header'
import Hero from './components/Hero'
import SilkBackground from './components/ui/SilkBackground'
import SobreNos from './components/SobreNos'
import Diferenciais from './components/Diferenciais'
import Tecidos from './components/Tecidos'
import Galeria from './components/Galeria'
import ComoComprar from './components/ComoComprar'
import Contato from './components/Contato'
import FAQ from './components/FAQ'
import CTAFinal from './components/CTAFinal'
import Footer from './components/Footer'
import FloatingWhatsApp from './components/FloatingWhatsApp'

function App() {
  return (
    <>
      <SilkBackground />
      <Header />
      <main>
        <Hero />
        <SobreNos />
        <Diferenciais />
        <Tecidos />
        <Galeria />
        <FAQ />
        <Contato />
        <ComoComprar />
        <CTAFinal />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  )
}

export default App
