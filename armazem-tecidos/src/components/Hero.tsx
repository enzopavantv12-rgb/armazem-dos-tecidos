import { motion } from 'framer-motion'
import type { Variants } from 'framer-motion'

const WA_URL =
  "https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20da%20Armaz%C3%A9m%20dos%20Tecidos%20e%20gostaria%20de%20falar%20com%20um%20especialista%20para%20conhecer%20as%20melhores%20oportunidades%20de%20compra."

export default function Hero() {
  // Animation variants for container orchestrations
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants: Variants = {
    hidden: { y: 24, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: [0.215, 0.61, 0.355, 1.0], // cubic-bezier (easeOutCubic)
      },
    },
  }

  const dividerVariants: Variants = {
    hidden: { scaleX: 0, originX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 0.8,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section className="hero">
      <div className="hero__media">
        <motion.img
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: [0.25, 0.1, 0.25, 1] }}
          src="./img/Foto%20equipe%20armaz%C3%A9m.webp"
          alt="Equipe da Armazém dos Tecidos na indústria em Belo Horizonte"
          className="hero__image"
          loading="eager"
        />
      </div>

      <div className="hero__content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="hero__inner"
        >
          <motion.h1 variants={itemVariants} className="hero__title">
            <span className="hero__title-line hero__title-line--light">Oportunidades</span>
            <span className="hero__title-line hero__title-line--accent">em Tecidos</span>
          </motion.h1>

          <motion.span
            variants={dividerVariants}
            className="hero__divider"
            aria-hidden="true"
          />

          <motion.p variants={itemVariants} className="hero__text">
            Há mais de 30 anos abastecendo lojistas, confecções e revendedores em todo o Brasil
            com tecidos de qualidade, preço competitivo e pronta entrega.
          </motion.p>

          <motion.div variants={itemVariants}>
            <a
              className="hero__cta"
              href={WA_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              Solicite um orçamento
            </a>
          </motion.div>

          <motion.ul variants={itemVariants} className="hero__meta">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <path d="M3 12h18M12 3a15 15 0 0 1 0 18M12 3a15 15 0 0 0 0 18" />
              </svg>
              <a href="https://instagram.com/armazemdostecidos_" target="_blank" rel="noopener noreferrer" className="hover:text-destaque transition-colors">
                @armazemdostecidos_
              </a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M4 4h4l2 5-2.5 1.5a12 12 0 0 0 6 6L15 14l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 2 6a2 2 0 0 1 2-2z" />
              </svg>
              <a href={`https://wa.me/5531998338543`} target="_blank" rel="noopener noreferrer" className="hover:text-destaque transition-colors">
                (31) 99833-8543
              </a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                <path d="M12 21s7-6.6 7-11.5A7 7 0 0 0 5 9.5C5 14.4 12 21 12 21z" />
                <circle cx="12" cy="9.5" r="2.3" />
              </svg>
              <span>R. Nhanduti, 232, Caiçara, BH</span>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </section>
  )
}

