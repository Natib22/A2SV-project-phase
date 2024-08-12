import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        1350: "1350px",
      },
      width: {
        919: "919px",
      },

      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        epilogue: ['Epilogue', 'sans-serif'],
      },

      colors: {
        titleColor: '#25324B',
        grayParagraph: '#7C8493',
      },
      fontSize: {
        32: '32px',
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
};
export default config;
