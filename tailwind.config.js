/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/app/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1D70A2',
        secondary: '#0B3C5D',
        accent: '#00A8E8',
        muted: '#F5F8FB',
      },
      boxShadow: {
        card: '0 10px 30px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
