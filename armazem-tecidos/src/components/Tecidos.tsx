import AnimatedSection from './AnimatedSection'

interface Category {
  name: string
  sub: string
  desc: string
  photo: string
  color: string
}

const categories: Category[] = [
  {
    name: 'Tricoline',
    sub: 'Lisa e Estampada',
    desc: 'Tecido plano de algodão. Versatilidade para confecção, estamparia e moda casual.',
    photo: './img/galeria-tricoline.webp',
    color: 'bg-petroleo-agua',
  },
  {
    name: 'Malha',
    sub: 'Lisa e Estampada',
    desc: 'Conforto e elasticidade. Base para moda casual, fitness e peças femininas.',
    photo: './img/galeria-malha.webp',
    color: 'bg-areia',
  },
  {
    name: 'Brim',
    sub: 'Lisa e Retalho',
    desc: 'Resistência e estrutura. Para uniformes, peças industriais e produção em escala.',
    photo: './img/galeria-brim.webp',
    color: 'bg-petroleo/10',
  },
  {
    name: 'Viscose',
    sub: 'Diversas composições',
    desc: 'Leveza e caimento para peças femininas, vestidos e coleções com volume.',
    photo: './img/viscose.webp',
    color: 'bg-areia',
  },
  {
    name: 'Retalhos',
    sub: 'Por KG',
    desc: 'Aproveitamento máximo. Retalhos de qualidade para artesanato, patchwork e costura criativa.',
    photo: './img/tecidos 2.webp',
    color: 'bg-petroleo-agua',
  },
]

function CategoryCard({ cat, index }: { cat: Category; index: number }) {
  return (
    <AnimatedSection delay={index * 0.07}>
      <div className="flex flex-col overflow-hidden rounded-3xl border border-carvao/8 bg-branco-quente shadow-sm product-card category-card transition-all duration-300">

        {/* Imagem com curva elíptica na base — padrão WelcomeScreen */}
        {cat.photo ? (
          <div className="product-card__media h-52 w-full overflow-hidden" style={{ clipPath: 'ellipse(100% 60% at 50% 40%)' }}>
            <img
              src={cat.photo}
              alt={`${cat.name} — ${cat.sub}`}
              loading="lazy"
              width="600"
              height="450"
              className="h-full w-full object-cover transition-transform duration-500"
            />
          </div>
        ) : (
          <div
            className={`product-card__media h-52 w-full ${cat.color} flex items-center justify-center`}
            style={{ clipPath: 'ellipse(100% 60% at 50% 40%)' }}
          >
            <span className="font-display font-bold text-petroleo/20 text-7xl">
              {cat.name[0]}
            </span>
          </div>
        )}

        {/* Conteúdo */}
        <div className="flex-1 px-6 pb-6 pt-2">
          <h3 className="font-display font-bold text-carvao text-xl leading-tight mb-1">
            {cat.name}
          </h3>
          <p className="font-mono text-[11px] text-petroleo/60 tracking-[0.15em] uppercase mb-3">
            {cat.sub}
          </p>
          <p className="font-body text-carvao/60 text-sm leading-relaxed">
            {cat.desc}
          </p>
        </div>

      </div>
    </AnimatedSection>
  )
}

export default function Tecidos() {
  return (
    <section className="py-20 md:py-28 bg-petroleo-agua" id="tecidos">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <AnimatedSection>
          <div className="mb-12 md:mb-14 flex flex-col md:flex-row md:items-end md:justify-between gap-4">
            <div>
              <p className="font-mono text-[11px] text-petroleo tracking-[0.22em] uppercase mb-4">
                Nossos tecidos
              </p>
              <h2
                className="font-display font-bold text-carvao leading-tight"
                style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
              >
                Ampla variedade de linhas, com opções por metro e por quilo.
              </h2>
            </div>
            <p className="text-carvao/60 text-sm md:text-base max-w-[38ch] md:text-right leading-relaxed">
              Indústria com múltiplas linhas organizadas. Você escolhe, a gente separa e envia.
            </p>
          </div>
        </AnimatedSection>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
          {categories.map((cat, i) => (
            <CategoryCard key={cat.name} cat={cat} index={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
