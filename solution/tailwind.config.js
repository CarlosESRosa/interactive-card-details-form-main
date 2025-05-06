/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          gradientStart: 'hsl(249, 99%, 64%)',
          gradientEnd: 'hsl(278, 94%, 30%)',
          error: 'hsl(0, 100%, 66%)',
        },
        neutral: {
          white: 'hsl(0, 0%, 100%)',
          light: 'hsl(270, 3%, 87%)',
          dark: 'hsl(279, 6%, 55%)',
          verydark: 'hsl(278, 68%, 11%)',
        },
      },
      fontFamily: {
        sans: ['"Space Grotesk"', 'sans-serif'],
      },
      fontSize: {
        base: '18px',
      },
    },
  },
  plugins: [],
} 