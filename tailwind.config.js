/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        sea:    { DEFAULT: '#1B6CA8', light: '#4A9FD5', dark: '#0D4A7A' },
        sand:   { DEFAULT: '#E8D5A3', light: '#F5EDD4', dark: '#C4A96B' },
        stone:  { DEFAULT: '#3D3D3D' },
        cream:  { DEFAULT: '#FAF8F3' },
      },
      fontFamily: {
        serif:  ['Playfair Display', 'Georgia', 'serif'],
        sans:   ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
