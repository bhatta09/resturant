/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html","./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    extend: {
      colors: {
        brightColor: "#FF00FF",
        backgroundColor: "#b7bca9",
        lightText: "#959595"
      },
    },
  },
  plugins: [],
}

