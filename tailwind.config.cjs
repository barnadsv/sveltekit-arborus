const konstaConfig = require('konsta/config')

/** @type {import('tailwindcss').Config} */
module.exports = konstaConfig({
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'media',
  theme: {
    extend: {
      colors: {
        'primary': {
          light: "#a3e635",
          DEFAULT: "#65a30d",
          dark: "#4d7c0f",
        }
      }
    },
  },
  daisyui: {
    themes: [
      {
        arborus: {        
          "primary": "#65a30d",
          "secondary": "#3965BE",      
          "accent": "#fbbf24",
          "neutral": "#191D24",
          "base-100": "#2A303C",
          "info": "#60a5fa",
          "success": "#22c55e",
          "warning": "#f59e0b",
          "error": "#f87171",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
})
