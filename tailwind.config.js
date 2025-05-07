/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Corretto percorso per app
    "./src/components/**/*.{js,ts,jsx,tsx}", // Corretto percorso per components
    "./src/styles.css", // Assicuriamo di includere anche il file CSS
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
