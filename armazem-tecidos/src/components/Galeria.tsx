import AnimatedSection from './AnimatedSection'

const items = [
  {
    src: './img/armazem-loop.gif',
    alt: 'Movimento no galpão da Armazém dos Tecidos',
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
  },
]

export default function Galeria() {
  return (
    <section className="py-20 md:py-28" id="galeria" aria-label="Galeria do armazém">
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
              <div className="group relative aspect-video overflow-hidden rounded-2xl ring-1 ring-black/5">
                <img
                  src={item.src}
                  alt={item.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Desktop: editorial bento grid */}
        <div className="hidden md:grid grid-cols-3 grid-rows-[320px_320px] gap-3">

          {/* GIF — tile alto à esquerda */}
          <AnimatedSection className="row-span-2 group relative overflow-hidden rounded-2xl ring-1 ring-black/5" delay={0.05}>
            <img
              src={items[0].src}
              alt={items[0].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AnimatedSection>

          {/* Topo direita 1 */}
          <AnimatedSection className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5" delay={0.12}>
            <img
              src={items[1].src}
              alt={items[1].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AnimatedSection>

          {/* Topo direita 2 */}
          <AnimatedSection className="group relative overflow-hidden rounded-2xl ring-1 ring-black/5" delay={0.19}>
            <img
              src={items[2].src}
              alt={items[2].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AnimatedSection>

          {/* Larga embaixo (col-span-2) */}
          <AnimatedSection className="col-span-2 group relative overflow-hidden rounded-2xl ring-1 ring-black/5" delay={0.26}>
            <img
              src={items[3].src}
              alt={items[3].alt}
              loading="lazy"
              className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </AnimatedSection>

        </div>

        {/* Badge Instagram */}
        <AnimatedSection delay={0.35}>
          <div className="mt-8 flex justify-end">
            <a
              href="https://instagram.com/armazemdostecidos_"
              target="_blank"
              rel="noreferrer"
              aria-label="Visitar @armazemdostecidos_ no Instagram"
              className="group inline-flex items-center gap-3 rounded-full border border-carvao/15 px-5 py-3 transition-colors hover:border-petroleo focus:outline-none focus-visible:ring-2 focus-visible:ring-petroleo"
            >
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-petroleo transition-transform duration-300 group-hover:scale-105">
                <img src="./icones_social/instagram.svg" alt="" aria-hidden="true" className="h-4 w-4 brightness-0 invert" />
              </span>
              <span className="font-mono text-xs uppercase tracking-[0.18em] text-carvao/80">
                @armazemdostecidos_ · 20,9 mil seguidores
              </span>
            </a>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
