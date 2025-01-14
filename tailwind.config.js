/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        'home-full':"url('https://juspay.io/images/bg-footer.svg')",
        'home-full-cinemala':"url('https://images.unsplash.com/photo-1559613671-dfe2fb6a7680?q=80&w=3270&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      },
      boxShadow: {
        glow: "0 0 5px rgba(255, 255, 255, 0.8), 0 0 10px rgba(255, 255, 255, 0.8), 0 0 20px rgba(255, 255, 0, 0.8), 0 0 30px rgba(255, 255, 0, 0.8)",
      },
    },
  },
  plugins: [
    require("@designbycode/tailwindcss-text-shadow"),
  ],
}

