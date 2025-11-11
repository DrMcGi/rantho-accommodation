// tailwind.config.js
const config = {
  content: [
    './src/app/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        shake: {
          '0%, 100%': { transform: 'translateX(0)' },
          '15%': { transform: 'translateX(-4px)' },
          '30%': { transform: 'translateX(4px)' },
          '45%': { transform: 'translateX(-4px)' },
          '60%': { transform: 'translateX(4px)' },
          '75%': { transform: 'translateX(-2px)' },
          '90%': { transform: 'translateX(2px)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
        glowPulse: {
          '0%, 100%': { boxShadow: '0 0 0px rgba(16, 185, 129, 0)' },
          '50%': { boxShadow: '0 0 14px rgba(16, 185, 129, 0.75)' },
        },
      },
      animation: {
        shake: 'shake 0.45s ease-in-out',
        fadeIn: 'fadeIn 0.25s ease-in',
        glowPulse: 'glowPulse 1.6s infinite',
      },
    },
  },
  plugins: [],
};

export default config;
