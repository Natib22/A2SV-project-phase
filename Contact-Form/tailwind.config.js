/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customPink: "#A91079",
      },
      height: {
        200: "200px",
        400: "400px",
        500: "500px",
        600: "600px",
        800: "800px",
      },
    },
  },
  plugins: [],
};
