/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        emerald: {
          950: "#03281E",
          900: "#064E3B", // Deep Emerald Green
          800: "#065F46", // Forest Green
          700: "#047857",
          600: "#059669",
          500: "#10B981",
          100: "#D1FAE5",
          50: "#ECFDF5",
        },
        gold: {
          700: "#B8860B",
          600: "#C59B27",
          500: "#D4AF37", // Soft Gold
          400: "#E5C158",
          300: "#F3DC8E",
          100: "#FCF6E5",
          50: "#FEFAF0",
        },
        ivory: {
          50: "#FFFCF5",
          100: "#F8F5ED",
          200: "#EFE9D9",
        },
        dark: {
          900: "#0D1A16",
          800: "#172B25", // Dark Text
          700: "#223C34",
          600: "#36574D",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-playfair)", "Georgia", "serif"],
        arabic: ["var(--font-amiri)", "Traditional Arabic", "sans-serif"],
        urdu: ["var(--font-nastaliq)", "Jameel Noori Nastaleeq", "Noto Nastaliq Urdu", "serif"],
      },
      backgroundImage: {
        'islamic-pattern': "radial-gradient(#D4AF37 0.75px, transparent 0.75px), radial-gradient(#D4AF37 0.75px, #064E3B 0.75px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}
