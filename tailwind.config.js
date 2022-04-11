module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dancing-script": ["Dancing Script", "cursive"],
        "indie-flower": ["Indie Flower", "cursive"],
        "chakra-petch": ["Chakra Petch", "sans-serif"],
      },
      backgroundImage: {
        "lala-home": `url('/src/public/photos/bghome1.jpg')`,
      },
      backgroundColor: (theme) => ({
        ...theme("colors"),
        coklat: "#f5c993",
      }),
    },
  },
  variants: {
    extend: {
      backgroundColor: ["active"],
    },
  },
  plugins: [],
};
