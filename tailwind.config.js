/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",

  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ["DM Sans", "sans-serif"],
      sansPro: ["Source Sans Pro", "sans-serif"],
      Inter: ["Inter", "sans-serif"]
    },
    extend: {
      colors: {
        primary: "#272d3e",
        secondary: "#00BAC7",
        thirdty:"#EDFCFD",
        fourty:"#C6F4F8",
        fivety:"#001533"
      },
      backgroundImage: {
        'hero-pattern': "url('/bg/bg-hero.png')",
        'benefit-book': "url('/bg/benefit-book.png')",
        'benefit-vector': "url('/bg/benefit-vector.png')",
        'pricing': "url('/bg/bg-pricing.png')"
      }
    },
  },
  plugins: [],
};
