module.exports = {
  content: ['./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primaryColors: {
          100: '#FFFAF1',
          200: '#F7F9F9',
          300: '#D2E9DC',
          400: '#BAE9D0',
          500: '#458C6B',
          600: '#367362',
        },
        secondaryColors: {
          400: '#495057',
          500: '#212529',
        },
        complementaryColors: {
          300: "rgba(255,186,124,0.15)",
          400: "rgba(255,186,124,0.5)",
          500: "#FFBA7C",
          501: "rgba(255,186,124,0.8)",
          600: "#E49052",
          700: "#919974"
        }
      },
    },
  },
  plugins: [],
};
