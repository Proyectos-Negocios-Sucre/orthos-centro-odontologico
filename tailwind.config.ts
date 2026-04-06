import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#448e99',
        secondary: '#ba5831',
        'light-bg': '#f8f9fa',
        'dark-bg': '#1a1a1a',
        'dark-card': '#2c2c2c',
        'text-light': '#2c3e50',
        'text-dark': '#ecf0f1',
      },
      fontFamily: {
        sans: ['var(--font-sans)', 'sans-serif'],
      },
    },
  },
  darkMode: 'class',
  plugins: [],
}

export default config
