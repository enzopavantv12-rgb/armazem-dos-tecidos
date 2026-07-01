/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        petroleo: {
          DEFAULT: '#0E5A66',
          fundo: '#093E47',
          agua: '#E6F0F1',
        },
        'branco-quente': '#FAF8F3',
        carvao: '#16201F',
        ambar: '#E6A02E',
        areia: '#E7DECF',
      },
      fontFamily: {
        sans: ['Satoshi', 'system-ui', 'sans-serif'],
        display: ['Satoshi', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"DM Mono"', 'ui-monospace', 'monospace'],
      },
      animation: {
        marquee: 'marquee var(--duration, 25s) infinite linear',
        'marquee-vertical': 'marquee-vertical var(--duration, 25s) linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(calc(-100% - var(--gap, 1rem)))' },
        },
        'marquee-vertical': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(calc(-100% - var(--gap, 1rem)))' },
        },
      },
    },
  },
  plugins: [],
}

