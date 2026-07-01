import AnimatedSection from './AnimatedSection'

interface GaleriaItem {
  src: string
  alt: string
  span?: string
}

const items: GaleriaItem[] = [
  {
    src: './img/hero-galpao.jpg',
    alt: 'Rolos de tecido empilhados no atacado do Armazém dos Tecidos',
    span: 'row-span-2',
  },
  {
    src: './img/galeria-tricoline.jpg',
    alt: 'Seção de Tricoline Lisa e Estampada no galpão',
  },
  {
    src: './img/galeria-brim.jpg',
    alt: 'Seção de Brim e Retalho de Brim organizados por cor',
  },
  {
    src: './img/galeria-malha.jpg',
    alt: 'Seção de Malha Lisa e Estampada com rolos coloridos',
    span: 'col-span-2',
  },
]

export default function Galeria() {
  return (
    <section className="py-20 md:py-28 bg-branco-quente" id="galeria" aria-label="Galeria do armazém">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="mb-12 md:mb-14">
            <p className="font-mono text-[11px] text-petroleo tracking-[0.22em] uppercase mb-4">
              O dia a dia do armazém
            </p>
            <h2
              className="font-display font-bold text-carvao leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              Um galpão cheio, pronto para o seu pedido
            </h2>
          </div>
        </AnimatedSection>

        {/* Mobile: single column stack */}
        <div className="flex flex-col gap-3 md:hidden">
          {items.map((item, i) => (
            <AnimatedSection key={i} delay={i * 0.07}>
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  width="800"
                  height="450"
                  className="w-full h-full object-cover"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop: editorial bento grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-[320px_320px] gap-3">
          {/* Tall portrait left */}
          <AnimatedSection className="row-span-2 overflow-hidden" delay={0.05}>
            <img
              src={items[0].src}
              alt={items[0].alt}
              loading="lazy"
              width="600"
              height="800"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
            />
          </AnimatedSection>

          {/* Top right */}
          <AnimatedSection className="overflow-hidden" delay={0.12}>
            <img
              src={items[1].src}
              alt={items[1].alt}
              loading="lazy"
              width="600"
              height="320"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
            />
          </AnimatedSection>

          {/* Top far right */}
          <AnimatedSection className="overflow-hidden" delay={0.19}>
            <img
              src={items[2].src}
              alt={items[2].alt}
              loading="lazy"
              width="600"
              height="320"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
            />
          </AnimatedSection>

          {/* Bottom wide (col-span-2) */}
          <AnimatedSection className="col-span-2 overflow-hidden" delay={0.26}>
            <img
              src={items[3].src}
              alt={items[3].alt}
              loading="lazy"
              width="900"
              height="320"
              className="w-full h-full object-cover hover:scale-[1.03] transition-transform duration-700"
            />
          </AnimatedSection>
        </div>

        {/* Caption */}
        <AnimatedSection delay={0.35}>
          <p className="font-mono text-[11px] text-carvao/40 tracking-[0.18em] uppercase mt-6 text-right">
            @armazemdostecidos_ · 20,9 mil seguidores no Instagram
          </p>
        </AnimatedSection>
      </div>
    </section>
  )
}
