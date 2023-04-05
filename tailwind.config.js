/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1s ease-out',
        'slide-up-1': 'slide-up-1 1s ease-out',
        'slide-up-2': 'slide-up-2 1.25s ease-out',
        'slide-up-3': 'slide-up-3 1.5s ease-out',
        'slide-down': 'slide-down 0.7s ease-out',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up-1': {
          '0%': { opacity: 0, transform: 'translateY(30%)' },
          '25%': { opacity: 0, transform: 'translateY(30%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'slide-up-2': {
          '0%': { opacity: 0, transform: 'translateY(30%)' },
          '50%': { opacity: 0, transform: 'translateY(30%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'slide-up-3': {
          '0%': { opacity: 0, transform: 'translateY(30%)' },
          '75%': { opacity: 0, transform: 'translateY(30%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'slide-down': {
          '0%': { opacity: 0, transform: 'translateY(-220%)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
      },
      colors: {
        rausch: '#ff5a5f',
        babu: '#00a699',
        arches: '#fc642d',
        hof: '#484848',
        foggy: '#f7f7f7',
      },
    },
  },
  plugins: [],
}
