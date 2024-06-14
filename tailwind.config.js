module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'slate': {
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        },
        'teal': {
          400: '#2dd4bf',
          600: '#0f766e',
        },
        'purple': {
          900: '#4c1d95',
        },
        'gray': {
          200: '#e5e7eb',
        },
      },
      fontFamily: {
        'mono': ['Courier New', 'Courier', 'monospace'],
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
}
