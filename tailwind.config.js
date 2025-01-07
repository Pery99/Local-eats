/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFEB00",
        secondary: "#577BC1",
        accent: "#344CB7",
        dark: "#000957",
      },
    },
  },
  plugins: [],
};
