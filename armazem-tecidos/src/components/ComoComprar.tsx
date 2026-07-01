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

          {/* Address card + info */}
          <div className="space-y-4" id="contato">
            <AnimatedSection delay={0.1}>
              <div className="bg-petroleo-fundo trama text-white p-8">
                <p className="font-mono text-[11px] text-white/35 tracking-[0.2em] uppercase mb-6">Localização</p>
                <div className="space-y-4">
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
                <div className="mt-8 pt-6 border-t border-white/10">
                  <a
                    href={MAPS_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-ambar text-sm font-medium hover:underline focus:outline-none focus:ring-2 focus:ring-ambar"
                    aria-label="Ver no Google Maps"
                  >
                    Ver no Google Maps
                    <span aria-hidden="true">↗</span>
                  </a>
                </div>
              </div>
            </AnimatedSection>

            {/* Map placeholder */}
            <AnimatedSection delay={0.2}>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative aspect-video bg-areia overflow-hidden group focus:outline-none focus:ring-2 focus:ring-petroleo"
                aria-label="Abrir localização no Google Maps: R. Nhanduti, 232, Caiçara, Belo Horizonte"
              >
                {/* Stylized map placeholder */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 group-hover:bg-petroleo/5 transition-colors">
                  <MapPin size={28} className="text-petroleo/50" aria-hidden="true" />
                  <p className="font-mono text-[11px] text-carvao/50 tracking-[0.15em] uppercase text-center">
                    R. Nhanduti, 232<br />Caiçara · BH
                  </p>
                  <p className="text-xs text-petroleo font-medium group-hover:underline mt-1">Ver no Google Maps</p>
                </div>
                {/* Decorative grid lines */}
                <svg className="absolute inset-0 w-full h-full opacity-10" aria-hidden="true">
                  <defs>
                    <pattern id="mapgrid" width="40" height="40" patternUnits="userSpaceOnUse">
                      <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#0E5A66" strokeWidth="0.5"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#mapgrid)" />
                </svg>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
