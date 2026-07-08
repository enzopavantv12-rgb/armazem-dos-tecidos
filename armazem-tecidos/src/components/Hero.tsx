import { motion } from "framer-motion"

const WA_URL =
  "https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Armaz%C3%A9m%20dos%20Tecidos%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20conhecer%20as%20melhores%20oportunidades%20de%20compra."

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] bg-primaria-escura flex items-center justify-center pt-32 pb-20 md:pt-44 md:pb-28 overflow-visible">
      
      {/* Texturas de fundo: blobs discretos para profundidade */}
      <div className="absolute inset-0 pointer-events-none select-none z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[-10%] w-[450px] h-[450px] bg-primaria/8 rounded-full blur-[80px]" />
        <div className="absolute bottom-[5%] right-[-15%] w-[550px] h-[550px] bg-primaria-clara/6 rounded-full blur-[100px]" />
      </div>

      <div className="w-full mx-auto max-w-[1300px] px-6 lg:px-8 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12 lg:gap-16">
        
        {/* Coluna da Esquerda: Cartão Flutuante (~40%) */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }}
          className="w-full md:w-[40%] flex justify-center mt-[-40px] md:mt-[-90px] lg:mt-[-130px] z-10 px-2 md:px-0"
        >
          {/* Cartão Bege Linho */}
          <div className="relative w-full aspect-[4/5] max-w-sm bg-secundaria/15 border border-white/10 rounded-[32px] md:rounded-[40px] shadow-2xl flex items-center justify-center overflow-hidden p-6 hover:border-destaque/30 transition-colors duration-500 group">
            
            {/* Monograma "A" Gigante ao Fundo */}
            <span className="absolute inset-0 flex items-center justify-center font-sans font-black text-[220px] md:text-[280px] lg:text-[340px] text-primaria/[0.16] dark:text-primaria/[0.25] select-none pointer-events-none leading-none transform -translate-y-4 transition-transform duration-700 group-hover:scale-105">
              A
            </span>

            {/* Foto do Produto Centralizada com cantos arredondados */}
            <div className="relative w-[75%] h-[80%] rounded-2xl md:rounded-[24px] overflow-hidden shadow-lg border border-white/15 z-10">
              <img
                src="./img/foto-hero-armazem-optimized.webp"
                alt="Rolos de tecidos organizados e tecidos no galpão"
                className="w-full h-full object-cover object-center transform group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                loading="eager"
              />
              {/* Overlay sutil na foto */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent pointer-events-none" />
            </div>

          </div>
        </motion.div>

        {/* Coluna da Direita: Painel de Texto (~60%) */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1], delay: 0.15 }}
          className="w-full md:w-[60%] flex flex-col items-center md:items-start text-center md:text-left justify-center px-2 md:px-0"
        >
          {/* Título Itálico com Traço Destaque horizontal */}
          <h1 className="font-sans italic font-semibold text-white text-4xl md:text-5xl lg:text-[52px] leading-tight flex flex-col md:flex-row md:items-center gap-4 md:gap-6 mb-8 w-full justify-center md:justify-start">
            <span>Oportunidades</span>
            <span className="w-[140px] h-[1px] bg-destaque mt-2 md:mt-0" aria-hidden="true" />
          </h1>

          {/* Dois Parágrafos Curtos */}
          <div className="font-body text-white/85 text-base md:text-lg leading-relaxed space-y-6 max-w-xl mb-10">
            <p>
              Há mais de 30 anos abastecendo lojistas, confecções e revendedores em todo o Brasil com tecidos de qualidade, preço competitivo e pronta entrega.
            </p>
            <p>
              Estoque próprio, showroom físico em Belo Horizonte e uma equipe pronta para transformar cada pedido em uma parceria de longo prazo.
            </p>
          </div>

          {/* Botão CTA Outline Branco */}
          <div>
            <a
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-outline-white min-w-[220px]"
              aria-label="Solicite um orçamento pelo WhatsApp"
            >
              Solicite um orçamento
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  )
}
