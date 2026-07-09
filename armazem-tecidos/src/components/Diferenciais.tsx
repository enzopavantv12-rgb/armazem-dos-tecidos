import { motion } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { useInView } from 'framer-motion'

// React-idiomatic animated counter that triggers when in viewport
function AnimatedCounter({
  target,
  prefix = '',
  suffix = '',
  duration = 1400,
}: {
  target: number
  prefix?: string
  suffix?: string
  duration?: number
}) {
  const [count, setCount] = useState(0)
  const ref = useRef<HTMLSpanElement>(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!isInView) return

    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // cubic ease-out
      setCount(Math.floor(eased * target))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      } else {
        setCount(target)
      }
    }
    window.requestAnimationFrame(step)
  }, [isInView, target, duration])

  return (
    <span ref={ref}>
      {prefix}
      {count.toLocaleString('pt-BR')}
      {suffix}
    </span>
  )
}

const stats = [
  { target: 30, prefix: '+', suffix: ' anos', label: 'de mercado' },
  { target: 35, prefix: '', suffix: '', label: 'colaboradores' },
  { target: 27, prefix: '', suffix: ' estados', label: 'atendidos em todo o Brasil' },
  { target: 10000, prefix: '+', suffix: ' m/mês', label: 'no maior cliente ativo' },
]

export default function Diferenciais() {
  const containerRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(containerRef, { once: true, amount: 0.1 })

  return (
    <section className="py-12 md:py-16 bg-secundaria/10 dark:bg-secundaria/5" id="stats">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" ref={containerRef}>
        
        {/* Barra de números/estatísticas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="bg-primaria text-white py-12 md:py-16 px-6 md:px-12 rounded-[32px] shadow-2xl relative overflow-hidden flex flex-col justify-center items-center"
        >
          {/* Trama de fundo sutil */}
          <div className="absolute inset-0 trama opacity-20 pointer-events-none" />
          
          <div className="relative z-10 w-full grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 text-center divide-y lg:divide-y-0 lg:divide-x divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className={`flex flex-col items-center justify-center p-4 ${i >= 2 ? 'pt-8 lg:pt-4' : 'pt-4'}`}>
                <span className="font-sans font-bold text-3xl md:text-4xl lg:text-5xl text-destaque mb-3 leading-none block">
                  <AnimatedCounter target={stat.target} prefix={stat.prefix} suffix={stat.suffix} />
                </span>
                <span className="font-sans text-xs md:text-sm font-medium uppercase tracking-wider text-white/80 max-w-[200px]">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  )
}

