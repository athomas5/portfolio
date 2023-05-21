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
        'fade-in': 'fade-in 375ms ease-out both 1500ms',
        'slide-up-1': 'slide-up-1 625ms ease-out both 375ms',
        'slide-up-2': 'slide-up-2 500ms ease-out both 750ms',
        'slide-up-3': 'slide-up-3 375ms ease-out both 1125ms',
        'slide-up-4': 'slide-up-3 375ms ease-out both 1500ms',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up-1': {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'slide-up-2': {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'slide-up-3': {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
          '100%': { opacity: 1, transform: 'translateY(0%)' },
        },
        'slide-up-4': {
          '0%': { opacity: 0, transform: 'translateY(50px)' },
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
