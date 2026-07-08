import { MapPin, Phone, Package } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const WA_URL = 'https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20comprar%20tecidos%20no%20atacado.'
const MAPS_URL = 'https://maps.google.com/?q=R.+Nhanduti,+232,+Cai%C3%A7ara,+Belo+Horizonte+-+MG'

const steps = [
  {
    n: '01',
    title: 'Escolha o tecido',
    body: 'Veja as linhas disponíveis: Tricoline, Viscose, Malha, Brim e Retalhos.',
  },
  {
    n: '02',
    title: 'Fale pelo WhatsApp',
    body: 'Envie uma mensagem com o tecido e a quantidade em KG desejada.',
  },
  {
    n: '03',
    title: 'Pedido confirmado',
    body: 'Nossa equipe confirma disponibilidade, peso e valor final.',
  },
  {
    n: '04',
    title: 'Enviado para você',
    body: 'Embalamos e despachamos para qualquer estado do Brasil.',
  },
]

export default function ComoComprar() {
  return (
    <section className="py-20 md:py-28 bg-petroleo-agua" id="como-comprar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="mb-12 md:mb-16">
            <p className="font-mono text-[11px] text-petroleo tracking-[0.22em] uppercase mb-4">
              Como comprar
            </p>
            <h2
              className="font-display font-bold text-carvao leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              Simples, direto e no WhatsApp
            </h2>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

          {/* Steps */}
          <div className="space-y-0">
            {steps.map((step, i) => (
              <AnimatedSection key={step.n} delay={i * 0.1}>
                <div className="flex gap-5 py-6 border-b border-carvao/10 last:border-b-0">
                  <span className="font-mono text-xs text-petroleo/50 tracking-[0.2em] pt-1 shrink-0 w-8">{step.n}</span>
                  <div>
                    <h3 className="font-display font-semibold text-carvao text-lg mb-1">{step.title}</h3>
                    <p className="text-carvao/60 text-sm leading-relaxed">{step.body}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}

            <AnimatedSection delay={0.45}>
              <div className="pt-7">
                <a
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-petroleo text-white font-medium px-7 py-4 text-base hover:bg-petroleo-fundo transition-colors focus:outline-none focus:ring-2 focus:ring-petroleo focus:ring-offset-2"
                  aria-label="Iniciar pedido pelo WhatsApp"
                >
                  <img src="./icones_social/whatsapp%20(2).svg" alt="" aria-hidden="true" className="w-[18px] h-[18px]" />
                  Iniciar pedido
                </a>
              </div>
            </AnimatedSection>
          </div>

          {/* Card de endereço + mapa integrado */}
          <div>
            <AnimatedSection delay={0.1}>
              <div className="overflow-hidden rounded-2xl border border-carvao/10 shadow-sm">

                {/* Endereço */}
                <div className="bg-petroleo-fundo trama text-white px-8 py-7">
                  <p className="font-mono text-[11px] text-white/35 tracking-[0.2em] uppercase mb-5">Localização</p>
                  <div className="space-y-3">
                    <div className="flex gap-3 items-start">
                      <MapPin size={16} className="text-ambar mt-0.5 shrink-0" aria-hidden="true" />
                      <div>
                        <p className="text-white text-sm font-medium">R. Nhanduti, 232</p>
                        <p className="text-white/60 text-sm">Caiçara, Belo Horizonte — MG</p>
                      </div>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Phone size={16} className="text-ambar mt-0.5 shrink-0" aria-hidden="true" />
                      <a href="https://wa.me/5531998338543" className="text-white text-sm hover:text-ambar transition-colors">
                        (31) 99833-8543
                      </a>
                    </div>
                    <div className="flex gap-3 items-start">
                      <Package size={16} className="text-ambar mt-0.5 shrink-0" aria-hidden="true" />
                      <p className="text-white/60 text-sm">Atacado por KG, retalhos e envio para todo o Brasil</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
                    <a
                      href={MAPS_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-ambar text-sm font-medium hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-ambar"
                      aria-label="Abrir no Google Maps"
                    >
                      Abrir no Google Maps
                      <MapPin size={13} aria-hidden="true" />
                    </a>
                  </div>
                </div>

                {/* Google Maps embed */}
                <div className="relative h-72 w-full">
                  <iframe
                    src="https://maps.google.com/maps?q=R.+Nhanduti%2C+232%2C+Cai%C3%A7ara%2C+Belo+Horizonte%2C+MG%2C+Brazil&output=embed&z=16&hl=pt-BR"
                    title="Localização do Armazém dos Tecidos — R. Nhanduti, 232, Caiçara, Belo Horizonte"
                    loading="lazy"
                    allowFullScreen
                    className="absolute inset-0 h-full w-full border-0"
                  />
                </div>

              </div>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
