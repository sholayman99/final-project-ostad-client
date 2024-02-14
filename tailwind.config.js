/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          "primary": "#000000",
          "base-100": "#ffffff",
          "error": "#dc2626"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}