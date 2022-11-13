/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      mobile: "0px",
      tablet: "768px",
      laptop: "1024px",
      desktop: "1200px",
    },
    colors: {
      primary: {
        violet: "#9e7f66",
        lightViolet: "#939BF4",
        veryDarkBlue: "#19202D",
        midnight: "#121721",
      },
      secondary: {
        white: "#FFFFFF",
        lightGrey: "#F4F6F8",
        gray: "#9DAEC2",
        darkGrey: "#6E8098",
      },
    },
    fontFamily: {
      base: ["Kumbh Sans", "ui-sans-serif", "system-ui"],
    },
    fontSize: {
      h4: ["0.875rem", { lineHeight: "1.125rem" }],
      p: ["1 rem", { lineHeight: "1.625rem" }],
      h3: ["1.25rem", { lineHeight: "1.5rem" }],
      h2: ["1.5rem", { lineHeight: "1.813rem" }],
      h1: ["1.75rem", { lineHeight: "2.125rem" }],
    },
    extend: {
      backgroundImage: {
        headerImage: "url('/assets/desktop/bg-pattern-header.svg')",
        footerImage: "url('/assets/desktop/bg-pattern-detail-footer.svg')"
      }
    },
  },
  plugins: [],
};
