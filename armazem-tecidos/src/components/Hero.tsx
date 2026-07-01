import { ArrowUpRight } from "lucide-react"

const WA_URL =
  "https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20comprar%20tecidos%20no%20atacado."

export default function Hero() {
  return (
    <section className="relative flex h-screen w-full items-center justify-center">

      {/* Decorative 12-column grid overlay */}
      <div className="absolute inset-0 z-10 size-full pointer-events-none" aria-hidden="true">
        <div className="grid w-full h-full grid-cols-12 divide-x divide-white/10">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="col-span-1 h-screen" />
          ))}
        </div>
      </div>

      {/* Background: hero photo + dark overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url(./img/hero-galpao.jpg)" }}
      >
        <div className="absolute inset-0 bg-black/55" />
      </div>

      {/* Content */}
      <div className="relative z-20 w-full max-w-5xl px-6 text-center text-white">

        <p className="font-mono text-[11px] text-ambar tracking-[0.22em] uppercase mb-8">
          Atacado de Tecidos · Belo Horizonte, MG
        </p>

        <h1 className="font-display font-semibold text-white tracking-tight text-5xl leading-[1.12] md:text-7xl lg:text-8xl mb-8">
          Qualidade e confiança<br className="hidden md:block" /> para suas compras
        </h1>

        <p className="mx-auto mb-12 max-w-2xl font-light text-lg text-white/75 md:text-xl leading-loose">
          Tricoline, Viscose, Malha e mais. Venda por KG com envio para todo o Brasil.
        </p>

        {/* Split-pill CTA */}
        <div className="flex justify-center">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Comprar via WhatsApp"
            className="group flex cursor-pointer items-center justify-center gap-0 rounded-full focus:outline-none focus-visible:ring-2 focus-visible:ring-ambar focus-visible:ring-offset-2 focus-visible:ring-offset-black"
          >
            <span className="rounded-full bg-ambar px-6 py-3 font-medium text-carvao duration-500 ease-in-out group-hover:bg-petroleo-fundo group-hover:text-ambar flex items-center gap-2">
              <img
                src="./icones_social/whatsapp%20(1).svg"
                alt=""
                aria-hidden="true"
                className="w-[18px] h-[18px] transition-all duration-500 group-hover:brightness-0 group-hover:invert"
              />
              Comprar via WhatsApp
            </span>
            <div className="relative flex h-fit cursor-pointer items-center overflow-hidden rounded-full bg-ambar p-5 text-carvao duration-500 ease-in-out group-hover:bg-petroleo-fundo group-hover:text-ambar">
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
      </div>
    </section>
  )
}
