import AnimatedSection from './AnimatedSection'

const WA_URL = 'https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20comprar%20tecidos%20no%20atacado.'

export default function CTAFinal() {
  return (
    <section className="bg-petroleo-fundo trama py-24 md:py-32">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center">

        <AnimatedSection>
          <p className="font-mono text-[11px] text-ambar tracking-[0.25em] uppercase mb-7">
            Pronto para comprar
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.1}>
          <h2
            className="font-display font-bold text-white leading-tight mb-7"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.8rem)' }}
          >
            Mais que uma empresa,<br className="hidden sm:block" /> um parceiro de oportunidades para o seu negócio.
          </h2>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <p className="text-petroleo-agua/65 text-lg leading-relaxed mb-12 max-w-[54ch] mx-auto">
            Tecidos para todos os negócios. Atacado e Varejo com condições especiais e envio para todo o Brasil. Entre em contato pelo WhatsApp e descubra um mundo de oportunidades.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.3}>
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-ambar text-on-ambar font-medium px-9 py-4 text-base hover:bg-ambar/90 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-petroleo-fundo"
            aria-label="Falar no WhatsApp do Armazém dos Tecidos"
          >
            <img src="./icones_social/whatsapp%20(1).svg" alt="" aria-hidden="true" className="w-5 h-5" />
            Falar no WhatsApp
          </a>
        </AnimatedSection>

        <AnimatedSection delay={0.4}>
          <div className="mt-12 pt-8 border-t border-white/10">
            <p className="font-mono text-[10px] text-white/30 tracking-[0.2em] uppercase">
              R. Nhanduti, 232 · Caiçara · Belo Horizonte, MG · (31) 99833-8543
            </p>
          </div>
        </AnimatedSection>

      </div>
    </section>
  )
}
