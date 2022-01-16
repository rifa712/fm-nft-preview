module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary-sb': 'hsl(215, 51%, 70%)',
        'primary-cyan': 'hsl(215, 51%, 70%)',
        'main-bg': 'hsl(217, 54%, 11%)',
        'card-bg': 'hsl(216, 50%, 16%)',
        line: 'hsl(215, 32%, 27%)',
        white: 'hsl(0, 0%, 100%)',
      },
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
      },
      fontWeight: {
        300: '300',
        400: '400',
        600: '600',
      },
      fontSize: {
        paragraph: '18px',
      },
    },
  },
  plugins: [],
}