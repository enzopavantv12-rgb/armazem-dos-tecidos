import { motion } from 'framer-motion'

const WA_URL = 'https://wa.me/5531998338543?text=Ol%C3%A1!%20Vim%20pelo%20site%20e%20quero%20comprar%20tecidos%20no%20atacado.'

export default function FloatingWhatsApp() {
  return (
    <motion.a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com o Armazém dos Tecidos via WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-petroleo flex items-center justify-center shadow-lg hover:bg-petroleo-fundo transition-colors focus:outline-none focus:ring-2 focus:ring-ambar focus:ring-offset-2"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1.5, duration: 0.4 }}
      whileHover={{ scale: 1.06 }}
    >
      <img src="./icones_social/whatsapp%20(2).svg" alt="" aria-hidden="true" className="w-6 h-6" />
    </motion.a>
  )
}
