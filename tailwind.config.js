/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'primary': '#0d0d0d',
        'brand': '#b7ab98',
        'accent': '#bf680c'
      },
      bg: {
        'primary': '#b7ab98'
      },
      borderWidth: {
        DEFAULT: '1px',
      '0': '0',
      '0.5':'0.5px',
      '2': '2px',
      '2.5': '2.5px',
      '3': '3px',
      '4': '4px',
      '6': '6px',
      '8': '8px',
      }
    }
  },
  plugins: []
};