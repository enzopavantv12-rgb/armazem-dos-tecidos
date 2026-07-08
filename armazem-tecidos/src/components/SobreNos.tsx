import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const WA_URL = 'https://wa.me/5531998338543'

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.13 },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.25, 0.1, 0.25, 1] as const },
  },
}

export default function SobreNos() {
  const textRef = useRef<HTMLDivElement>(null)
  const imageRef = useRef<HTMLDivElement>(null)
  const textInView = useInView(textRef, { once: true, amount: 0.25 })
  const imageInView = useInView(imageRef, { once: true, amount: 0.25 })

  return (
    <section
      className="relative overflow-hidden"
      id="sobre"
      aria-label="Sobre o Armazém dos Tecidos"
    >
      {/* Subtle warm gradient — sangra do canto esquerdo, bem sutil */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at -10% 50%, rgba(231,222,207,0.45) 0%, transparent 65%)',
        }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center py-20 lg:py-28">

        {/* Coluna esquerda: círculo centralizado na própria coluna */}
        <motion.div
          ref={imageRef}
          initial={{ opacity: 0, x: -40 }}
          animate={imageInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.85, ease: [0.25, 0.1, 0.25, 1] }}
          className="lg:col-span-5 flex justify-center items-center"
        >
          <div className="w-full max-w-[460px] rounded-2xl overflow-hidden lg:ml-auto">
            <img
              src="./img/Foto equipe armazém.png"
              alt="Equipe do Armazém dos Tecidos em Belo Horizonte"
              className="w-full h-full object-cover object-center"
              loading="lazy"
            />
          </div>
        </motion.div>

        {/* Coluna direita: conteúdo textual */}
        <motion.div
          ref={textRef}
          variants={containerVariants}
          initial="hidden"
          animate={textInView ? 'visible' : 'hidden'}
          className="lg:col-span-7"
        >
          {/* Eyebrow: traço + label DM Mono */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="block w-10 h-px bg-petroleo mb-4" aria-hidden="true" />
            <span className="font-mono text-[11px] text-carvao tracking-[0.22em] uppercase">
              O ARMAZÉM
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h2
            variants={itemVariants}
            className="font-display font-bold uppercase text-petroleo leading-[0.95] mb-8"
            style={{ fontSize: 'clamp(2.4rem, 5vw, 4.2rem)' }}
          >
            QUALIDADE E CONFIANÇA EM CADA METRO DE TECIDO
          </motion.h2>

          {/* Corpo */}
          <motion.p
            variants={itemVariants}
            className="font-body text-base text-carvao/70 leading-[1.6] max-w-[46ch] mb-10"
          >
            Há mais de 30 anos em Belo Horizonte, a Armazém dos Tecidos nasceu nos retalhos e cresceu oferecendo tecidos nacionais e importados, com qualidade, pronta entrega e confiança. Hoje, com 35 colaboradores, atende o Brasil com preço justo.
          </motion.p>

          {/* Botão pill */}
          <motion.div variants={itemVariants}>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-petroleo text-white font-body font-medium px-8 py-4 hover:bg-petroleo-fundo transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-petroleo focus:ring-offset-2 focus:ring-offset-branco-quente"
              aria-label="Fale conosco pelo WhatsApp"
            >
              Fale conosco
            </a>
          </motion.div>
        </motion.div>

        </div>
      </div>
    </section>
  )
}
