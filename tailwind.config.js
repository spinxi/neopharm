/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: '#F0FDF4',   // Soft Herbal Mint Accent
          100: '#DCFCE7',
          200: '#BBF7D0',
          300: '#86EFAC',
          400: '#4ADE80',
          500: '#22C55E',  // Neopharmi Leaf Green
          600: '#16A34A',  // Neopharmi Primary Green
          700: '#15803D',  // Deep Forest Green
          800: '#166534',
          900: '#14532D',  // Neopharmi Dark Green
          950: '#052E16',
        },
        clinical: {
          50: '#F0FDF4',
          100: '#DCFCE7',
          600: '#16A34A',
          700: '#15803D',
        },
        herbal: {
          light: '#D6F8D0',
          soft: '#E9F8D0',
          sage: '#E0EAD9',
          cream: '#F8FAF5',
        },
        navy: {
          900: '#0F172A',
          800: '#1E293B',
          700: '#334155',
          600: '#475569',
        },
        surface: {
          bg: '#F9FBF8', // Subtle natural herbal off-white tint
          card: '#FFFFFF',
        },
        prescription: {
          amberBg: '#FFFBEB',
          amberBorder: '#FDE68A',
          amberText: '#B45309',
        }
      },
      fontFamily: {
        sans: ['"Noto Sans Georgian"', 'Inter', 'system-ui', 'sans-serif'],
        handwritten: ['"Caveat"', '"Noto Sans Georgian"', 'cursive', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
