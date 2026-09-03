/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // <--- THIS IS CRITICAL
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        serif: ['"Instrument Serif"', 'Georgia', 'serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      colors: {
        // Pure monochrome palette
        canvas: {
          light: '#fafafa',
          dark: '#09090b',
        }
      }
    },
  },
  plugins: [],
}
