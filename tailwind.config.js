/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        bg: '#F8FAFC',
        section: '#F1F5F9',
        card: '#FFFFFF',
        border: '#E2E8F0',
        primary: '#2563EB',
        primaryHover: '#1D4ED8',
        text: '#0F172A',
        muted: '#64748B'
      },
      boxShadow: {
        card: '0 10px 25px rgba(2,6,23,0.08)'
      },
      borderRadius: {
        xl2: '16px'
      }
    }
  },
  plugins: []
};