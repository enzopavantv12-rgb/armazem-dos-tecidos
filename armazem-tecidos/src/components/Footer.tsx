import { Link2, MessageCircle } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-petroleo-fundo border-t border-white/10 py-14" id="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">

          {/* Brand */}
          <div>
            <p className="font-display font-bold text-white text-lg mb-3 leading-tight">
              ARMAZEM <span className="text-ambar">|</span> TECIDOS
            </p>
            <p className="text-white/45 text-sm leading-relaxed">
              Atacado de tecidos em Belo Horizonte.<br />
              Qualidade e confiança para suas compras.
            </p>
          </div>

          {/* Contato */}
          <div>
            <p className="font-mono text-[11px] text-white/35 tracking-[0.18em] uppercase mb-5">Contato</p>
            <div className="space-y-2.5 text-sm">
              <p className="text-white/65">R. Nhanduti, 232, Caiçara</p>
              <p className="text-white/65">Belo Horizonte, MG</p>
              <a
                href="https://wa.me/5531998338543"
                className="flex items-center gap-2 text-white/65 hover:text-ambar transition-colors focus:outline-none focus:ring-2 focus:ring-ambar"
                aria-label="Falar no WhatsApp: (31) 99833-8543"
              >
                <MessageCircle size={13} aria-hidden="true" />
                (31) 99833-8543
              </a>
            </div>
          </div>

          {/* Redes */}
          <div>
            <p className="font-mono text-[11px] text-white/35 tracking-[0.18em] uppercase mb-5">Redes sociais</p>
            <div className="flex flex-col gap-3.5">
              <a
                href="https://instagram.com/armazemdostecidos_"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/65 hover:text-ambar transition-colors focus:outline-none focus:ring-2 focus:ring-ambar"
                aria-label="Instagram: @armazemdostecidos_ (20,9 mil seguidores)"
              >
                <img src="./icones_social/instagram.svg" alt="" aria-hidden="true" className="w-[14px] h-[14px]" />
                @armazemdostecidos_
              </a>
              <a
                href="https://linktr.ee/armazemtextil23"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-white/65 hover:text-ambar transition-colors focus:outline-none focus:ring-2 focus:ring-ambar"
                aria-label="Linktree do Armazém dos Tecidos"
              >
                <Link2 size={14} aria-hidden="true" />
                linktr.ee/armazemtextil23
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2">
          <p className="font-mono text-[10px] text-white/25 tracking-widest uppercase">
            © 2025 Armazem dos Tecidos · Todos os direitos reservados
          </p>
          <p className="font-mono text-[10px] text-white/20 tracking-wider">
            BH, MG · Instagram: 20,9 mil seguidores
          </p>
        </div>
      </div>
    </footer>
  )
}
