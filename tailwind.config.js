/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        loginBg: "url('/src/assets/images/loginBg.png')",
      },
      colors: {
        primary: "#F4CE14",
        secondary: "#F7F7F7",
        black: "#0C0E10",
      },
    },
  },
};
