/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1F373D",
        secondary: "#F6F5F4",
        footerNavHeader: "#919EB1",
      },
      fontSize: {
        logo: "1.75rem",
        mainHeader: "3.6rem",
        tiny: "12px",
        gigantic: "12rem",
      },
      backgroundImage: {
        heroImage: "./src/images/hero.png",
      },
      height: {
        heightHero: "620px",
        aboveMedium: "4.5rem",
      },
      maxHeight: {
        heightHero: "95vh",
      },
      width: {
        heroWidth: "75%",
        card: "350px",
        footerHeader: "500px",
      },
      maxWidth: {
        heroWidth: "60rem",
      },
      container: {
        padding: {
          xl: "5.5rem",
          sm: "1rem",
        },
        margin: {
          xl: "2rem",
          sm: "1rem",
        },
      },
    },
  },
  plugins: [],
};
