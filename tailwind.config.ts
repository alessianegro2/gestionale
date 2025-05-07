import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}', // Include tutte le pagine e componenti
    './src/components/**/*.{js,ts,jsx,tsx}', // Include i componenti
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

export default config;
