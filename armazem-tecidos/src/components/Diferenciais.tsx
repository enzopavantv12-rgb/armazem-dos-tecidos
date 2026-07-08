import { motion } from 'framer-motion'
import { useRef } from 'react'
import { useInView } from 'framer-motion'

const diferenciais = [
  {
    n: '01',
    title: 'Preço competitivo de atacado',
    desc: 'Condições que ajudam lojistas e confecções a aumentarem sua margem de lucro.',
  },
  {
    n: '02',
    title: 'Qualidade comprovada',
    desc: 'Tecidos selecionados para oferecer excelente acabamento, durabilidade e satisfação ao cliente final.',
  },
  {
    n: '03',
    title: 'Pronta entrega',
    desc: 'Estoque próprio para atender pedidos com rapidez e agilidade na reposição.',
  },
  {
    n: '04',
    title: 'Envio para todo o Brasil',
    desc: 'Atendemos clientes de todos os estados com logística eficiente e suporte durante todo o processo.',
  },
  {
    n: '05',
    title: 'Mais de 30 anos de experiência',
    desc: 'Uma trajetória construída com confiança, credibilidade e relacionamento de longo prazo.',
  },
  {
    n: '06',
    title: 'Atendimento próximo e consultivo',
    desc: 'Nossa equipe ajuda o cliente a encontrar as melhores opções para o seu negócio.',
  },
]

const stats = [
  { value: '+30', label: 'anos de mercado' },
  { value: '35', label: 'colaboradores' },
  { value: '27', label: 'estados atendidos' },
  { value: '+10 mil', label: 'metros/mês no maior cliente ativo' },
]

export default function Diferenciais() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section className="py-24 lg:py-32 bg-secundaria/15 dark:bg-secundaria/5" id="diferenciais">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        
        {/* Cabeçalho centralizado com traço abaixo estilo Cataguases */}
        <div className="mx-auto mb-20 max-w-3xl text-center flex flex-col items-center">
          <span className="font-mono text-[11px] text-destaque tracking-[0.25em] uppercase mb-4 block">
            Diferenciais
          </span>
          <h2 className="font-sans font-bold text-3xl md:text-4xl lg:text-[42px] text-primaria uppercase leading-tight pb-6 relative after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-[200px] after:h-[2px] after:bg-destaque">
            Por que escolher a Armazém
          </h2>
        </div>

        {/* Grid de diferenciais numerado */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {diferenciais.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="bg-white dark:bg-branco p-8 rounded-[24px] border border-black/5 hover:border-destaque/30 shadow-sm hover:shadow-md transition-all duration-300 relative overflow-hidden group"
            >
              {/* Número grande itálico serif-like de apoio */}
              <span className="font-sans italic font-bold text-5xl md:text-6xl text-destaque/20 group-hover:text-destaque/30 transition-colors duration-300 mb-6 block">
                {item.n}.
              </span>
              <h3 className="font-sans font-bold text-lg md:text-xl text-primaria mb-3">
                {item.title}
              </h3>
              <p className="font-body text-sm text-apoio leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Barra de números/estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="bg-primaria text-white py-12 md:py-16 px-6 md:px-12 rounded-[32px] mt-16 md:mt-24 shadow-2xl relative overflow-hidden flex flex-col justify-center items-center"
        >
          {/* Trama de fundo sutil */}
          <div className="absolute inset-0 trama opacity-20 pointer-events-none" />
          
          <div className="relative z-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col items-center justify-center p-4 ${i >= 2 ? 'pt-8 lg:pt-4' : 'pt-4'}`}>
                <span className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-destaque mb-3 leading-none block">
                  {stat.value}
                </span>
                <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-wider text-white/80 max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}
