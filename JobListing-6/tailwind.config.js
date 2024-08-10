/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
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

      colors : {
        titleColor: '#25324B',
        grayParagraph: '#7C8493',
      },
      fontSize : {
        32 : '32px',
      }

    },
  },
  plugins: [
    require('daisyui'),
  ],
};
