import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'desktop': "url('../assets/img/bgMainDesktop.png')",
        'frontCard': "url('../assets/img/bg-card-front.png')",
        'backCard': "url('../assets/img/bg-card-back.png')",
      },

      fontFamily: {
        'space': ['Space Grotesk', 'sans-serif'],
      },

      colors: {
        'darkgray': 'hsl(279, 6%, 55%)',
        'lighgray': 'hsl(270, 3%, 87%)',
        'darkviolet': 'hsl(278, 68%, 11%)',
      }
    },
  },
  plugins: [],
}
export default config
