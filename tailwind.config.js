/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      fontFamily: {
        'vazir': ['Vazirmatn', 'system-ui', 'sans-serif']
      },
      animation: {
        'float': 'float 15s infinite ease-in-out',
        'pulse': 'pulse 8s infinite alternate',
        'twinkle': 'twinkle 5s infinite alternate',
        'slideUp': 'slideUp 0.8s ease forwards',
      },
      keyframes: {
        float: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '50%': { transform: 'translateY(-15px) rotate(2deg)' },
          '100%': { transform: 'translateY(0) rotate(0deg)' },
        },
        pulse: {
          '0%': { opacity: '0.4' },
          '100%': { opacity: '0.8' },
        },
        twinkle: {
          '0%': { opacity: '0.3', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.2)' },
          '100%': { opacity: '0.5', transform: 'scale(1)' },
        },
        slideUp: {
          'from': { opacity: '0', transform: 'translateY(30px)' },
          'to': { opacity: '1', transform: 'translateY(0)' },
        }
      },
      backdropBlur: {
        'md': '10px',
      },
      backgroundImage: {
        'space-gradient': 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
        'moon-gradient': 'linear-gradient(135deg, #e6e6e6, #c9c9c9)',
      },
      boxShadow: {
        'star': '0 0 4px 1px rgba(255, 255, 255, 0.7)',
        'moon': '0 0 30px 5px rgba(255, 255, 255, 0.4)',
        'card-hover-dark': '0 20px 25px -5px rgba(139, 92, 246, 0.25)',
        'card-hover-light': '0 20px 25px -5px rgba(129, 140, 248, 0.25)',
        'nav-active': '0 2px 10px #a855f7',
      },
      colors: {
        'space': {
          dark: 'rgba(30, 27, 75, 0.4)',
          light: 'rgba(255, 255, 255, 0.7)',
        },
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light", "dark"],
  },
}