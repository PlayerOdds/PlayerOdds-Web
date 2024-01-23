/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-grass':'#17D475',
        'custom-emerald':'#046307',
        'custom-dark-green':'#033A0F',
        'darkslate': '#31333f',
        'darkgreen': '#000300',
        
      },
      backgroundImage: {
        'emerald-gradient': 'linear-gradient(to right, #0C6A3A, #033A0F)',
        'dg-gradient': 'linear-gradient(to right, #31333f, #000300)',
        'radial-at-center': 'radial-gradient(circle at center, var(--tw-gradient-stops))',
      
      },
      gradientColorStops: theme => ({
        ...theme('colors'),
        'start': '#31333f',
        'end': '#000300',
      }),
    },
  },
  plugins: [],
}

