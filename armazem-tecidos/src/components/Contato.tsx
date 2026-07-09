import { useState } from 'react'

const WHATSAPP_NUMBER = '5531998338543'

export default function Contato() {
  const [nome, setNome] = useState('')
  const [whats, setWhats] = useState('')
  const [procura, setProcura] = useState('')

  const enviar = () => {
    const endpoint = import.meta.env.VITE_LEADS_ENDPOINT
    const leadData = {
      nome: nome || '(não informado)',
      whats: whats || '(não informado)',
      procura: procura || 'tecidos no atacado',
      timestamp: new Date().toISOString()
    }

    if (endpoint) {
      fetch(endpoint, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(leadData),
      }).catch((err) => {
        console.error('Erro ao registrar lead:', err)
      })
    }

    const msg =
      `Olá! Meu nome é ${leadData.nome}. ` +
      `WhatsApp: ${leadData.whats}. ` +
      `Procuro: ${leadData.procura}.`
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`,
      '_blank'
    )
  }

  const inputClass =
    'w-full rounded-full border border-carvao/20 bg-transparent px-6 py-4 font-body text-carvao placeholder:text-carvao/40 focus:border-petroleo focus:outline-none focus:ring-2 focus:ring-petroleo/20 transition-colors'

  return (
    <section id="contato" className="py-24 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">

        {/* Imagem com recorte orgânico — esquerda no desktop, depois no mobile */}
        <div className="order-2 lg:order-1">
          <img
            src="./img/Foto%20equipe%20armaz%C3%A9m.webp"
            alt="Equipe da Armazém dos Tecidos na indústria em Belo Horizonte"
            className="h-[520px] w-full object-cover object-center rounded-tl-[130px] rounded-tr-[130px] rounded-br-[130px] rounded-bl-[40px]"
            loading="lazy"
          />
        </div>

        {/* Formulário — direita no desktop, primeiro no mobile */}
        <div className="order-1 lg:order-2">
          <span className="font-mono text-[11px] uppercase tracking-[0.25em] text-carvao/60">
            Fale conosco
          </span>

          <h2
            className="mt-3 font-display font-bold uppercase leading-[0.95] text-petroleo"
            style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)' }}
          >
            Seu pedido começa com uma conversa
          </h2>

          <p className="mt-5 font-body text-base text-carvao/70 leading-relaxed max-w-[42ch]">
            Preencha e a gente te chama no WhatsApp com preço e disponibilidade.
          </p>

          <div className="mt-8 space-y-4">
            <input
              type="text"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              placeholder="Nome"
              className={inputClass}
            />
            <input
              type="tel"
              value={whats}
              onChange={(e) => setWhats(e.target.value)}
              placeholder="WhatsApp"
              className={inputClass}
            />
            <input
              type="text"
              value={procura}
              onChange={(e) => setProcura(e.target.value)}
              placeholder="O que você procura? (ex: tricoline, malha, retalhos)"
              className={inputClass}
            />

            <button
              type="button"
              onClick={enviar}
              className="rounded-full bg-ambar px-8 py-4 font-body font-medium text-on-ambar transition-colors duration-300 hover:bg-petroleo hover:text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-petroleo focus-visible:ring-offset-2"
            >
              Enviar no WhatsApp
            </button>
          </div>

          <p className="mt-4 font-body text-xs text-carvao/50">
            Ao enviar, você será direcionado ao WhatsApp para concluir o atendimento.
          </p>
        </div>

      </div>
    </section>
  )
}
