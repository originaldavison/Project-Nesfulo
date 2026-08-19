/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#0A0E1A",
        "dark-2": "#10162B",
        "dark-3": "#1A2140",
        blue: "#2C5CFF",
        "blue-deep": "#1638C7",
        red: "#E11D3C",
        "red-deep": "#A80F28",
        ink: "#F4F6FC",
        mute: "#8C93B8",
        line: "rgba(255,255,255,0.08)",
      },
      fontFamily: {
        poppins: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};
