/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
      },
      center: true,
    },
    extend: {
      screens: {
        lgp: 'calc(1024px + 4rem)',
      },
      minHeight: {
        'screen-no-header': 'calc(100vh - 64px)',
        'screen-no-footer': 'calc(100vh - 224px)',
        'screen-no-header-footer': 'calc(100vh - 64px - 224px)',
      },
      transitionTimingFunction: {
        'bounce-out': 'cubic-bezier(.56,-0.04,.22,1.47)',
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: '#6F7592',
      'gray-light': '#EFF1F5',
      'gray-dark': '#22232C',
      blue: '#6100FD',
      'blue-light': '#C7E0F3',
      red: '#E41568',
    },
    fontFamily: {
      sans: ['Nunito', 'sans-serif'],
    },
  },
  plugins: [],
};
