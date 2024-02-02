/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        header_desktop: "url('/images/bg-header-desktop.svg')",
        header_mobile: "url('/images/bg-header-mobile.svg')",
      },
      colors: {
        primary: 'hsl(180, 29%, 50%)',
        neutral: {
          background: 'hsl(180, 52%, 96%)',
          filterTablets: 'hsl(180, 31%, 95%)',
          darkGrayishCyan: 'hsl(180, 8%, 52%)',
          veryDarkGrayishCyan: 'hsl(180, 14%, 20%)',
        },
      },
      screens: {
        mobile_sm: '377px',
      },
    },
    plugins: [],
  },
};
