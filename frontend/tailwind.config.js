/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        brown: {
          50: "#f9f4f2",
          100: "#e8dedb",
          200: "#d3bdb6",
          300: "#b59d8d",
          400: "#8f7766",
          500: "#73594b",
          600: "#5b4539",
          700: "#45332b",
          800: "#2d211d",
          900: "#1a1312",
        },
      },
    },
  },
  plugins: [],
};
