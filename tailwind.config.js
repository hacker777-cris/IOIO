/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#2C3E50',
          light: '#3D5A73',
          dark: '#1A2530',
        },
        secondary: {
          DEFAULT: '#E74C3C',
          light: '#F16A5C',
          dark: '#C0392B',
        },
        accent: {
          DEFAULT: '#3498DB',
          light: '#5DADE2',
          dark: '#2980B9',
        },
        success: {
          DEFAULT: '#27AE60',
          light: '#2ECC71',
          dark: '#219653',
        },
        warning: {
          DEFAULT: '#F39C12',
          light: '#F7B731',
          dark: '#D68910',
        },
        error: {
          DEFAULT: '#E74C3C',
          light: '#EC7063',
          dark: '#C0392B',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      spacing: {
        '72': '18rem',
        '84': '21rem',
        '96': '24rem',
      },
      borderRadius: {
        'xl': '1rem',
        '2xl': '1.5rem',
      },
      boxShadow: {
        'soft': '0 4px 20px rgba(0, 0, 0, 0.05)',
        'hover': '0 10px 30px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};