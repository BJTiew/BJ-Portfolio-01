/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ios: {
          bg: {
            light: '#F2F2F7',
            dark: '#1C1C1E'
          },
          primary: {
            light: '#007AFF',
            dark: '#0A84FF'
          },
          secondary: {
            light: '#5856D6',
            dark: '#5E5CE6'
          },
          gray: {
            light: '#8E8E93',
            dark: '#98989D'
          },
          card: {
            light: '#FFFFFF',
            dark: '#2C2C2E'
          },
          text: {
            light: '#000000',
            dark: '#FFFFFF'
          }
        }
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'xs': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1536px',
      },
      aspectRatio: {
        'portrait': '2/3',
        'landscape': '3/2',
      },
    },
  },
  plugins: [],
};
