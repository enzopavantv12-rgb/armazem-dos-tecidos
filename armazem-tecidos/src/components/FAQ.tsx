import { useState } from 'react'
import { Plus } from 'lucide-react'

const WHATSAPP =
  'https://wa.me/5531998338543?text=' +
  encodeURIComponent('Olá! Vim pelo site e tenho uma dúvida sobre os tecidos.')

const faqs = [
  {
    q: 'Qual é o pedido mínimo no atacado?',
    a: 'Trabalhamos com quantidades pensadas para o atacado. Fale com a gente no WhatsApp que passamos o mínimo por tipo de tecido.',
  },
  {
    q: 'Vocês vendem por KG ou por metro?',
    a: 'Depende da linha. Boa parte do atacado sai por KG com preço de indústria, e alguns tecidos também por metro. A gente te orienta na hora do pedido.',
  },
  {
    q: 'Quais tecidos vocês trabalham?',
    a: 'Tricoline, viscose, malha, brim e retalhos, nacionais e importados. Tudo na mesma indústria.',
  },
  {
    q: 'Vocês entregam para todo o Brasil?',
    a: 'Sim. Enviamos da nossa indústria em Belo Horizonte para qualquer estado do país.',
  },
  {
    q: 'Quais são as formas de pagamento?',
    a: 'Aceitamos as principais formas de pagamento. Confirme as condições com nosso atendimento pelo WhatsApp.',
  },
  {
    q: 'Posso retirar na loja?',
    a: 'Pode. Estamos na R. Nhanduti, 232, Caiçara, Belo Horizonte. Combine a retirada pelo WhatsApp.',
  },
  {
    q: 'Trabalham com retalhos?',
    a: 'Sim, temos retalhos disponíveis. Ótima opção para quem quer variedade com bom custo.',
  },
]

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Accordion — esquerda no desktop, segunda no mobile */}
        <div className="order-2 lg:order-1">
          {faqs.map((item, i) => {
            const isOpen = open === i
            return (
              <div
                key={i}
                className={
                  isOpen
                    ? 'rounded-2xl bg-petroleo-agua px-5'
                    : 'border-b border-carvao/10'
                }
              >
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2"
                >
                  <span className="font-display text-base font-medium text-carvao sm:text-lg">
                    {item.q}
                  </span>
                  <Plus
                    aria-hidden="true"
                    className={`h-5 w-5 shrink-0 text-ambar transition-transform duration-300 ${
                      isOpen ? 'rotate-45' : ''
                    }`}
                  />
                </button>

                {/* Efeito CSS puro: grid-rows 0fr → 1fr */}
                <div
                  className={`grid transition-all duration-300 ease-out ${
                    isOpen
                      ? 'grid-rows-[1fr] opacity-100'
                      : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 font-body text-sm leading-relaxed text-carvao/70 sm:text-base">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Eyebrow + headline + botão + imagem — direita no desktop, primeira no mobile */}
        <div className="order-1 lg:order-2 lg:pl-8">
          <p className="font-mono text-[11px] uppercase tracking-[0.25em] text-carvao/60">
            FAQ
          </p>
          <h2
            className="mt-3 font-display font-bold uppercase leading-[0.95] text-carvao"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Dúvidas
            <br />
            frequentes
          </h2>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noreferrer"
            className="mt-6 inline-block rounded-full border border-carvao/20 px-6 py-3 font-body text-sm font-medium text-carvao transition-colors duration-300 hover:border-petroleo hover:text-petroleo focus:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2"
          >
            Ainda com dúvida? Fale no WhatsApp
          </a>

          <div className="mt-10">
            <img
              src="./img/imagem%20FAQ%20armaz%C3%A9m.jpeg"
              alt="Equipe do Armazém dos Tecidos organizando pedidos na indústria"
              loading="lazy"
              className="h-[420px] w-full rounded-tl-[100px] rounded-br-[100px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  )
}
