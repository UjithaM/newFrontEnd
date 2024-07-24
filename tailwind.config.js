// tailwind.config.js


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./contacUsPage.tsx.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'custom-gradient': 'linear-gradient(301deg, rgba(79,140,127,1) 0%, rgba(227,227,227,1) 46%, rgba(79,140,127,1) 100%)',
      },
      boxShadow: {
        'ImgCard': '0px 4px 19px -6px rgba(0, 0, 0, 0.45)',
      },
      colors: {
        customGreen: '#4F8C7F',
      },
      fontFamily: {
        rajdhani: ['Rajdhani', 'sans-serif'],
        darker_grotesque: ['Darker Grotesque', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        impact: ['Impact', 'sans-serif'],
      },

    },
  },
  darkMode: "class",
  plugins: [
    require('daisyui'),
  ],
  daisyui: {
    themes: ["light"],
  },
}

