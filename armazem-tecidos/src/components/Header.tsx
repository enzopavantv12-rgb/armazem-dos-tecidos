import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedThemeToggle } from './ui/AnimatedThemeToggle'

const WA_URL =
  'https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Armaz%C3%A9m%20dos%20Tecidos%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20conhecer%20as%20melhores%20oportunidades%20de%20compra.'

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <header className="site-header">
        <div className="site-header__inner">
          <a href="#" className="logo" aria-label="Armazém dos Tecidos — início">
            <img src="./img/logos/armazem-logo-1.png" alt="" className="logo__mark" />
            <span className="logo__type">
              <strong>ARMAZÉM</strong>
              <small>dos tecidos</small>
            </span>
          </a>

          <nav className="site-nav">
            <a href="#tecidos">Tecidos</a>
            <a href="#diferenciais">O Armazém</a>
            <a href="#como-comprar">Como Comprar</a>
            <a href="#contato">Contato</a>
          </nav>

          <div className="site-header__actions">
            <AnimatedThemeToggle className="theme-toggle" />
            
            <a className="btn-whatsapp" href={WA_URL} target="_blank" rel="noopener noreferrer">
              <img src="./icones_social/whatsapp%20(1).svg" alt="" aria-hidden="true" className="w-[15px] h-[15px]" />
              <span>WhatsApp</span>
            </a>
            
            <img
              src="./icones_social/brasilia.svg"
              alt="Idioma: português (Brasil)"
              className="lang-flag h-5 w-7 rounded-sm shadow-sm"
            />
          </div>

          <button
            className={`nav-toggle ${open ? 'is-open' : ''}`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
            type="button"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer (Breakpoint: 900px) */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: 'easeInOut' }}
            className="min-[901px]:hidden fixed top-[var(--header-height)] left-0 right-0 z-40 overflow-hidden bg-primaria-escura border-b border-white/10 shadow-lg"
          >
            <div className="px-6 py-6 flex flex-col gap-6">
              <nav className="flex flex-col gap-4">
                <a
                  href="#tecidos"
                  className="text-white/80 hover:text-destaque text-sm font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Tecidos
                </a>
                <a
                  href="#diferenciais"
                  className="text-white/80 hover:text-destaque text-sm font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  O Armazém
                </a>
                <a
                  href="#como-comprar"
                  className="text-white/80 hover:text-destaque text-sm font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Como Comprar
                </a>
                <a
                  href="#contato"
                  className="text-white/80 hover:text-destaque text-sm font-medium transition-colors"
                  onClick={() => setOpen(false)}
                >
                  Contato
                </a>
              </nav>
              <div className="flex items-center justify-between pt-4 border-t border-white/5 gap-4">
                <a
                  className="btn-whatsapp flex items-center justify-center gap-2 bg-destaque text-primaria-escura font-bold py-3 px-6 rounded-full text-xs hover:brightness-108 transition-all flex-1"
                  href={WA_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setOpen(false)}
                >
                  <img src="./icones_social/whatsapp%20(1).svg" alt="" aria-hidden="true" className="w-[15px] h-[15px]" />
                  <span>WhatsApp</span>
                </a>
                
                {/* Visual items like theme toggle for quick mobile access */}
                <div className="flex items-center gap-3">
                  <AnimatedThemeToggle className="theme-toggle flex min-[901px]:hidden" />
                  <img
                    src="./icones_social/brasilia.svg"
                    alt="Idioma: português (Brasil)"
                    className="h-5 w-7 rounded-sm shadow-sm"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
