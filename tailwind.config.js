/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        'brand-orange': '#F7A01B',
        'brand-yellow': '#FCD512',
        'brand-purple': '#7152a1',
        'brand-blue': '#00A1DF',
      },
    },
    screens: {
      xxs: "385px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "960px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}