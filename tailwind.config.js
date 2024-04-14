
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: 'var(--primary-color)',
        primaryHover: 'var(--primary-color-hover)',
        secondary: 'var(--secondary-color)',
        secondaryHover: 'var(--secondary-color-hover)',
        white: 'var(--color-white)',
        light: 'var(--color-light)',
        dark: 'var(--color-dark)',
      },
      textColor: {
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
        white: 'var(--color-white)',
        light: 'var(--color-light)',
        gray: 'var(--color-gray)',
        dark: 'var(--color-dark)',
      },
      borderColor: {
        custom: 'var(--border-color)',
      },
    },
  },
  plugins: [],
}