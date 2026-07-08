/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        // RGB-channel format enables opacity modifiers (text-carvao/60) AND dark-mode switching via CSS vars
        petroleo: {
          DEFAULT: 'rgb(var(--petroleo-ch) / <alpha-value>)',
          fundo: 'rgb(var(--petroleo-fundo-ch) / <alpha-value>)',
          agua: 'rgb(var(--petroleo-agua-ch) / <alpha-value>)',
        },
        'branco-quente': 'rgb(var(--branco-quente-ch) / <alpha-value>)',
        carvao: 'rgb(var(--carvao-ch) / <alpha-value>)',
        ambar: 'rgb(var(--ambar-ch) / <alpha-value>)',
        areia: 'rgb(var(--areia-ch) / <alpha-value>)',
        'on-ambar': 'rgb(var(--on-ambar-ch) / <alpha-value>)',
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
