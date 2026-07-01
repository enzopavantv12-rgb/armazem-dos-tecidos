import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const WA_URL = 'https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20comprar%20tecidos%20no%20atacado.'

const navLinks = [
  { href: '#tecidos', label: 'Tecidos' },
  { href: '#diferenciais', label: 'O Armazém' },
  { href: '#como-comprar', label: 'Como Comprar' },
  { href: '#contato', label: 'Contato' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80)
    window.addEventListener('scroll', handler, { passive: true })
    handler()
    return () => window.removeEventListener('scroll', handler)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled
          ? 'bg-branco-quente/90 backdrop-blur-md border-b border-carvao/10 shadow-sm'
          : 'bg-transparent border-b border-white/10'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">

        <a href="#" className="flex items-center" aria-label="ARMAZEM TECIDOS — página inicial">
          <span
            className={`font-display font-bold text-lg md:text-xl tracking-tight leading-none transition-colors duration-500 ${
              scrolled ? 'text-petroleo' : 'text-white'
            }`}
          >
            ARMAZEM <span className="text-ambar">|</span> TECIDOS
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-7" aria-label="Navegação principal">
          {navLinks.map(link => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors duration-500 ${
                scrolled
                  ? 'text-carvao/70 hover:text-petroleo'
                  : 'text-white/70 hover:text-white'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={WA_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 bg-ambar text-carvao text-sm font-medium px-4 py-2 rounded-full hover:bg-ambar/90 transition-colors focus:outline-none focus:ring-2 focus:ring-ambar focus:ring-offset-2"
            aria-label="Falar no WhatsApp"
          >
            <img src="./icones_social/whatsapp%20(1).svg" alt="" aria-hidden="true" className="w-[15px] h-[15px]" />
            WhatsApp
          </a>

          <img
            src="./icones_social/brasilia.svg"
            alt="Idioma: português (Brasil)"
            className="hidden md:block h-5 w-7 rounded-sm shadow-sm"
          />

          <button
            className={`md:hidden p-2 transition-colors duration-500 focus:outline-none focus:ring-2 focus:ring-ambar ${
              scrolled ? 'text-carvao hover:text-petroleo' : 'text-white hover:text-white/80'
            }`}
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={open}
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.22 }}
            className="md:hidden overflow-hidden bg-petroleo-fundo/96 backdrop-blur-md border-t border-white/10"
          >
            <div className="px-4 pb-6 pt-4">
              <nav className="flex flex-col gap-5 mb-6" aria-label="Navegação mobile">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    className="text-base font-medium text-white/70 hover:text-ambar transition-colors"
                    onClick={() => setOpen(false)}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
              <a
                href={WA_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 bg-ambar text-carvao font-medium px-4 py-3 w-full rounded-full hover:bg-ambar/90 transition-colors"
                aria-label="Falar no WhatsApp"
                onClick={() => setOpen(false)}
              >
                <img src="./icones_social/whatsapp%20(1).svg" alt="" aria-hidden="true" className="w-4 h-4" />
                Falar no WhatsApp
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
