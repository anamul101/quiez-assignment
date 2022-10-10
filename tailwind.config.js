/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#502ded",
        
"secondary": "#07844a",
        
"accent": "#f759d7",
        
"neutral": "#1B252D",
        
"base-100": "#EDEDEE",
        
"info": "#72A3EE",
        
"success": "#18917D",
        
"warning": "#9F6109",
        
"error": "#F4534E",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}
