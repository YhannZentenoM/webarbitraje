/** @type {import('tailwindcss').Config} */
import animations from '@midudev/tailwind-animations'
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'primary': '#023a77',
        'secondary': '#a1a7ad',
        'tertiary': '#BC1F28',
        'text-primary': '#182D45',
        'text-secondary': '#B4BEC6',
      },
    },
  },
  plugins: [animations],
}

