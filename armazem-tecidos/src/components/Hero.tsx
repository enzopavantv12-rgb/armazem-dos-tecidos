import { ArrowUpRight, Package } from "lucide-react"

const WA_URL =
  "https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20comprar%20tecidos%20no%20atacado."

export default function Hero() {
  return (
    <section className="relative flex min-h-screen w-full flex-col overflow-hidden">

      {/* Fundo: foto do galpão */}
      <img
        src="./img/hero-galpao.jpg"
        alt="Rolos de tecido organizados no galpão do Armazém dos Tecidos, Belo Horizonte"
        className="absolute inset-0 h-full w-full object-cover object-center"
        loading="eager"
      />
      {/* Overlay para contraste */}
      <div className="absolute inset-0 bg-black/40" />

      {/* Conteúdo central — flex-1 empurra os cards para o rodapé */}
      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 pt-24 pb-10 text-center">

        <p className="font-mono text-[11px] text-ambar tracking-[0.22em] uppercase mb-7">
          Atacado de Tecidos · Belo Horizonte, MG
        </p>

        <h1 className="max-w-4xl font-display font-semibold tracking-tight text-white text-4xl leading-[1.1] sm:text-5xl lg:text-[5.25rem] mb-7">
          Qualidade e confiança<br className="hidden sm:block" /> em cada metro de tecido.
        </h1>

        <p className="max-w-xl font-body text-white/85 text-base sm:text-lg leading-loose mb-10">
          Tricoline, Viscose, Malha e mais. Atacado por KG com entrega para todo o Brasil.
        </p>

        {/* Split-pill CTA */}
        <a
          href={WA_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Comprar via WhatsApp"
          className="group inline-flex cursor-pointer items-center rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ambar focus-visible:ring-offset-2 focus-visible:ring-offset-black"
        >
            <span className="flex items-center gap-2 rounded-full bg-ambar px-6 py-3 font-medium text-on-ambar duration-500 ease-in-out group-hover:bg-petroleo-fundo group-hover:text-ambar">
              <img
                src="./icones_social/whatsapp%20(1).svg"
                alt=""
                aria-hidden="true"
                className="h-[18px] w-[18px] transition-all duration-500 group-hover:brightness-0 group-hover:invert"
              />
              Comprar via WhatsApp
            </span>
            <div className="relative flex h-fit items-center overflow-hidden rounded-full bg-ambar p-[14px] text-on-ambar duration-500 ease-in-out group-hover:bg-petroleo-fundo group-hover:text-ambar">
              <ArrowUpRight
                aria-hidden="true"
                className="absolute h-5 w-5 -translate-x-1/2 transition-all duration-500 ease-in-out group-hover:translate-x-10"
              />
              <ArrowUpRight
                aria-hidden="true"
                className="absolute h-5 w-5 -translate-x-10 transition-all duration-500 ease-in-out group-hover:-translate-x-1/2"
              />
            </div>
        </a>
      </div>

      {/* Cards nas pontas inferiores */}
      <div className="relative z-10 px-6 pb-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-end md:justify-between">

          {/* Card esquerdo — wrapper de entry + float no card */}
          <div className="hero-card-wrap-a">
            <div className="hero-card hero-card-float-a relative max-w-sm overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl backdrop-saturate-100 backdrop-brightness-105">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-white/5 to-transparent" />
              <div className="relative">
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-2xl bg-ambar shadow-sm">
                  <Package className="h-5 w-5 text-on-ambar" aria-hidden="true" />
                </div>
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  Atacado por KG, do jeito certo
                </h3>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  Compre a quantidade que o seu negócio precisa, sem franquia por item. Preço de galpão, direto para você.
                </p>
              </div>
              <span className="hero-card-sheen" aria-hidden="true" />
            </div>
          </div>

          {/* Card direito — wrapper de entry + float no card */}
          <div className="hero-card-wrap-b">
            <div className="hero-card hero-card-float-b relative max-w-sm overflow-hidden rounded-3xl border border-white/25 bg-white/10 p-6 shadow-[0_8px_32px_rgba(0,0,0,0.25),inset_0_1px_1px_rgba(255,255,255,0.5),inset_0_-1px_1px_rgba(255,255,255,0.1)] backdrop-blur-2xl backdrop-saturate-100 backdrop-brightness-105">
              <div className="pointer-events-none absolute inset-0 rounded-3xl bg-gradient-to-br from-white/30 via-white/5 to-transparent" />
              <div className="relative">
                <h3 className="font-display font-semibold text-white text-lg mb-2">
                  Do galpão para qualquer estado
                </h3>
                <p className="font-body text-sm text-white/75 leading-relaxed">
                  Belo Horizonte para o Brasil inteiro. Pedido confirmado pelo WhatsApp, entrega garantida onde você estiver.
                </p>
              </div>
              <span className="hero-card-sheen" aria-hidden="true" />
            </div>
          </div>

        </div>
      </div>
    </section>
  )
}
