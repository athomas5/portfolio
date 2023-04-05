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
        'fade-in': 'fade-in 0.7s ease',
        'slide-up': 'slide-up 0.7s ease',
        'slide-down': 'slide-down 0.7s ease',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        'slide-up': {
          '0%': { opacity: 0, transform: 'translateY(50%)' },
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
