import { useEffect, useRef } from 'react'

export default function SilkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let time = 0
    let animationId: number
    const speed = 0.02
    const scale = 2
    const noiseIntensity = 0.8

    const resizeCanvas = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const noise = (x: number, y: number) => {
      const G = 2.71828
      const rx = G * Math.sin(G * x)
      const ry = G * Math.sin(G * y)
      return (rx * ry * (1 + x)) % 1
    }

    const animate = () => {
      const { width, height } = canvas

      // Gradiente em tons de Bege Linho (--secundaria) e Branco
      const gradient = ctx.createLinearGradient(0, 0, width, height)
      gradient.addColorStop(0, '#D9D2C3')
      gradient.addColorStop(0.5, '#FFFFFF')
      gradient.addColorStop(1, '#D9D2C3')
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, width, height)

      const imageData = ctx.createImageData(width, height)
      const data = imageData.data

      for (let x = 0; x < width; x += 2) {
        for (let y = 0; y < height; y += 2) {
          const u = (x / width) * scale
          const v = (y / height) * scale
          const tOffset = speed * time
          const tex_x = u
          const tex_y = v + 0.03 * Math.sin(8.0 * tex_x - tOffset)

          const pattern =
            0.6 +
            0.4 *
              Math.sin(
                5.0 *
                  (tex_x +
                    tex_y +
                    Math.cos(3.0 * tex_x + 5.0 * tex_y) +
                    0.02 * tOffset) +
                  Math.sin(20.0 * (tex_x + tex_y - 0.1 * tOffset))
              )

          const rnd = noise(x, y)
          const intensity = Math.max(0, pattern - (rnd / 15.0) * noiseIntensity)

          // Seda em tons brand-specific: Bege Linho #D9D2C3 → Branco #FFFFFF
          const r = Math.floor(217 + 38 * intensity)
          const g = Math.floor(210 + 45 * intensity)
          const b = Math.floor(195 + 60 * intensity)

          const index = (y * width + x) * 4
          if (index < data.length) {
            data[index] = r
            data[index + 1] = g
            data[index + 2] = b
            data[index + 3] = 255
          }
        }
      }

      ctx.putImageData(imageData, 0, 0)

      // Overlay radial muito suave para profundidade
      const overlayGradient = ctx.createRadialGradient(
        width / 2, height / 2, 0,
        width / 2, height / 2, Math.max(width, height) / 2
      )
      overlayGradient.addColorStop(0, 'rgba(255, 255, 255, 0.04)')
      overlayGradient.addColorStop(1, 'rgba(200, 195, 185, 0.06)')
      ctx.fillStyle = overlayGradient
      ctx.fillRect(0, 0, width, height)

      time += 1
      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      cancelAnimationFrame(animationId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="dark:hidden"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none' }}
    />
  )
}
