import { ChevronRight } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const WA_URL =
  'https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20comprar%20tecidos%20no%20atacado.'

export default function Diferenciais() {
  return (
    <section className="py-24 lg:py-32" id="diferenciais">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Cabeçalho centralizado */}
        <AnimatedSection>
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <p className="font-mono text-[11px] text-petroleo tracking-[0.22em] uppercase mb-4">
              Por que comprar aqui
            </p>
            <h2
              className="font-display font-bold text-carvao uppercase leading-tight"
              style={{ fontSize: 'clamp(1.9rem, 3.5vw, 3rem)' }}
            >
              O armazém para quem compra com seriedade
            </h2>
          </div>
        </AnimatedSection>

        {/* Bento: card destaque (col 1) + grade de diferenciais (col 2–3) */}
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

          {/* CARD DESTAQUE — Atendimento direto (tem CTA) */}
          <AnimatedSection
            className="flex flex-col rounded-[32px] bg-areia overflow-hidden"
            delay={0.05}
          >
            {/* Bloco de texto: padding próprio, a imagem fica fora dele */}
            <div className="p-8 lg:p-10">
              <h3
                className="font-display font-bold text-carvao mb-4"
                style={{ fontSize: 'clamp(1.6rem, 2.5vw, 2.2rem)' }}
              >
                Atendimento direto
              </h3>
              <p className="font-body text-carvao/65 text-base leading-relaxed mb-8">
                Fale direto com quem conhece cada rolo do armazém. Atendimento pelo WhatsApp, sem intermediários.
              </p>

              {/* CTA existente — pill */}
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-ambar text-carvao font-medium px-6 py-3 text-sm hover:bg-ambar/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ambar focus:ring-offset-2 focus:ring-offset-areia"
                aria-label="Falar no WhatsApp do Armazém dos Tecidos"
              >
                <img
                  src="./icones_social/whatsapp%20(1).svg"
                  alt=""
                  aria-hidden="true"
                  className="w-4 h-4"
                />
                Falar no WhatsApp
              </a>
            </div>

            {/* Imagem: sangra até as bordas; tl arredondado igual ao card; tr reto; bl+br pelo overflow-hidden do card */}
            <img
              src="./img/galeria-brim.jpg"
              alt="Tecidos no galpão do Armazém dos Tecidos, Belo Horizonte"
              className="w-full flex-1 min-h-[280px] object-cover rounded-tl-[32px]"
              loading="lazy"
            />
          </AnimatedSection>

          {/* GRADE 2×2 — 4 diferenciais, items-start elimina o esticamento */}
          <div className="grid grid-cols-1 gap-x-12 gap-y-10 sm:grid-cols-2 items-start lg:col-span-2">

            {/* 01 — Atacado por KG */}
            <AnimatedSection className="p-1" delay={0.1}>
              <h3 className="font-display font-semibold text-carvao text-xl mb-3">
                Atacado por KG
              </h3>
              <p className="font-body text-carvao/65 text-sm leading-relaxed mb-4">
                Compre na quantidade certa para o seu negócio. Pedidos por KG com preço de atacado de verdade, sem franquia mínima por item e sem pagar a mais por volume.
              </p>
              <a
                href="#como-comprar"
                className="inline-flex items-center gap-1 text-sm font-medium text-petroleo hover:text-petroleo-fundo transition-colors"
              >
                Saiba mais <ChevronRight size={15} aria-hidden="true" />
              </a>
            </AnimatedSection>

            {/* 02 — Variedade de linhas */}
            <AnimatedSection className="p-1" delay={0.15}>
              <h3 className="font-display font-semibold text-carvao text-xl mb-3">
                Variedade de linhas
              </h3>
              <p className="font-body text-carvao/65 text-sm leading-relaxed mb-4">
                Tricoline, viscose, malha, brim e retalhos, nacionais e importados. Variedade pra atender confecção, lojista e ateliê, tudo no mesmo galpão.
              </p>
              <a
                href="#tecidos"
                className="inline-flex items-center gap-1 text-sm font-medium text-petroleo hover:text-petroleo-fundo transition-colors"
              >
                Saiba mais <ChevronRight size={15} aria-hidden="true" />
              </a>
            </AnimatedSection>

            {/* 03 — Envio para todo o Brasil: único bloco com fundo */}
            <AnimatedSection
              className="rounded-3xl bg-petroleo-agua p-7"
              delay={0.2}
            >
              <h3 className="font-display font-semibold text-carvao text-xl mb-3">
                Envio para todo o Brasil
              </h3>
              <p className="font-body text-carvao/65 text-sm leading-relaxed mb-4">
                Do nosso galpão em Belo Horizonte direto para qualquer estado do país. Cuidamos da expedição com agilidade pra sua compra chegar onde você estiver.
              </p>
              <a
                href="#como-comprar"
                className="inline-flex items-center gap-1 text-sm font-medium text-petroleo hover:text-petroleo-fundo transition-colors"
              >
                Saiba mais <ChevronRight size={15} aria-hidden="true" />
              </a>
            </AnimatedSection>

            {/* 04 — Pronta entrega */}
            <AnimatedSection className="p-1" delay={0.25}>
              <h3 className="font-display font-semibold text-carvao text-xl mb-3">
                Pronta entrega
              </h3>
              <p className="font-body text-carvao/65 text-sm leading-relaxed mb-4">
                Estoque próprio no galpão, sem depender de terceiros. Seu pedido sai rápido, sem espera e sem aquela promessa de prazo que não se cumpre.
              </p>
              <a
                href="#como-comprar"
                className="inline-flex items-center gap-1 text-sm font-medium text-petroleo hover:text-petroleo-fundo transition-colors"
              >
                Saiba mais <ChevronRight size={15} aria-hidden="true" />
              </a>
            </AnimatedSection>

          </div>
        </div>
      </div>
    </section>
  )
}
