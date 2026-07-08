import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

export default function SobreNos() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.15 })

  return (
    <section
      ref={containerRef}
      className="relative overflow-hidden bg-white dark:bg-branco border-b border-black/5"
      id="sobre"
      aria-label="Sobre o Armazém dos Tecidos"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          {/* Coluna de texto */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center text-left"
          >
            {/* Eyebrow */}
            <span className="font-mono text-[11px] text-destaque tracking-[0.25em] uppercase mb-4 block">
              Sobre a Armazém
            </span>

            {/* H2 com traço abaixo estilo Cataguases */}
            <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-[42px] text-primaria leading-[1.1] mb-8 pb-4 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-[120px] after:h-[2px] after:bg-destaque">
              Mais de três décadas<br className="hidden sm:block" /> de Tradição e Parceria
            </h2>

            {/* Corpo de texto */}
            <div className="font-body text-base text-apoio leading-relaxed space-y-6 max-w-2xl mb-10">
              <p>
                A Armazém dos Tecidos nasceu há mais de 30 anos em Belo Horizonte, Minas Gerais, com a missão de oferecer tecidos de qualidade, preços competitivos e um atendimento próximo aos seus clientes. Sua trajetória começou no segmento de retalhos, atendendo lojistas e confecções que buscavam boas oportunidades de compra.
              </p>
              <p>
                Com o passar dos anos, a empresa ampliou seu portfólio, passando a trabalhar com tecidos nacionais e importados, sempre mantendo como pilares a qualidade dos produtos, a pronta entrega e a confiança nas relações comerciais.
              </p>
              <p>
                Hoje, com uma equipe de 35 colaboradores, showroom físico, estoque próprio e atendimento para todo o Brasil, a Armazém dos Tecidos segue ajudando lojistas, confecções e revendedores a crescerem por meio de produtos de qualidade, preços justos e um relacionamento construído com confiança.
              </p>
            </div>

            {/* CTA */}
            <div>
              <a
                href="#diferenciais"
                className="btn min-w-[280px]"
                aria-label="Conheça nossos diferenciais"
              >
                Conheça a Armazém dos Tecidos
              </a>
            </div>
          </motion.div>

          {/* Coluna da Imagem - Full-bleed / Editorial */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-5 flex items-center justify-center relative min-h-[350px] lg:min-h-0"
          >
            <div className="w-full h-full min-h-[400px] rounded-[32px] overflow-hidden shadow-xl border border-black/5 relative group">
              <img
                src="./img/Foto equipe armazém.png"
                alt="Equipe do Armazém dos Tecidos em Belo Horizonte"
                className="absolute inset-0 w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
