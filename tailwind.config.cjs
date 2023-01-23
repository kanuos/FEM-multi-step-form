/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{svelte}"],
  theme: {
    extend: {},
    fontFamily: {
      sans: "Ubuntu",
    },
    colors: {
      // primary colors
      "primary-1": "hsl(213, 96%, 18%)",
      "primary-2": "hsl(243, 100%, 62%)",
      "primary-3": "hsl(228, 100%, 84%)",
      "primary-4": "hsl(206, 94%, 87%)",
      "primary-5": "hsl(354, 84%, 57%)",

      // neutral colors
      "neutral-1": "hsl(231, 11%, 63%)",
      "neutral-2": "hsl(229, 24%, 87%)",
      "neutral-3": "hsl(217, 100%, 97%)",
      "neutral-4": "hsl(231, 100%, 99%)",
      "neutral-5": "hsl(0, 0%, 100%)",
    },
  },
  plugins: [],
};
