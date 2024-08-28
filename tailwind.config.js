/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#DB4444",
        },
        secondary: {
          DEFAULT: "#F5F5F5",
          white: "FAFAFA",
        },
      },
    },
  },
  plugins: [],
};
