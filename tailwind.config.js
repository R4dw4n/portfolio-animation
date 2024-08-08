/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      height: {
        '100vh_100px': 'calc(100vh - 100px)',
      },
      width: {
        '100vh_100px': 'calc(100vh - 100px)',
      },
      padding: {
        '100vh_100px': 'calc(100vh - 80px)',
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      black: "#000",
      white: "#fff",
      orange: '#ffa500',
      gray: "#808080",
      transparent: 'transparent',
    }
  },
  plugins: [],
};
