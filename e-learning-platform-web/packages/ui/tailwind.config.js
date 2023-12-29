/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx,stories.js,stories.jsx,stories.ts,stories.tsx}",
    "./stories/**/*.{js,ts,jsx,tsx,mdx}",
    "./../../node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    fontFamily:{
      barlow:'Barlow',
      roboto:'Roboto',
      inter:'Inter'
    },
    // colors:{
    //   primary:'rgba(17, 138, 239, 0.8)'
    // },
    extend: {},
  },
  plugins: [require("tw-elements/dist/plugin")],
};
