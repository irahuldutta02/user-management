/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#070F2B",
        secondary: "#1B1A55",
        accent: "#535C91",
        "accent-2": "#9290C3",
      },
    },
  },
  plugins: [],
};
