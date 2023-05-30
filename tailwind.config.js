/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.tsx', './lib/**/*.tsx', '.storybook/preview.tsx'],
  theme: {
    fontFamily: {
      display: 'var(--font-display)',
      body: 'var(--font-body)',
    },
    colors: ({ colors }) => {
      delete colors['lightBlue']
      delete colors['warmGray']
      delete colors['trueGray']
      delete colors['coolGray']
      delete colors['blueGray']

      return {
        ...colors,
        // https://uicolors.app/edit?sv1=woodsmoke:50-e1e7ea/100-c8cfda/200-a6b0c5/300-7b8ca7/400-5b6780/500-424e66/600-32394e/700-272c3a/800-20232d/900-0b0c0f
        gray: {
          50: '#c3cfd5',
          100: '#a9b4c6',
          200: '#8795b0',
          300: '#607190',
          400: '#464f62',
          500: '#2e3647',
          600: '#1e222f',
          700: '#12151c',
          800: '#0b0c0f',
          900: '#000000',
        },
        primary: colors.rose,
        secondary: colors.rose,
      }
    },
    extend: {
      gridTemplateColumns: {
        gallery: 'repeat(auto-fit, minmax(18rem, 1fr))',
      },
    },
  },
  plugins: [require('@tailwindcss/container-queries')],
}
