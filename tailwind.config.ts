import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {},
      screens: {
        desktop: '1280px',
        tablet: '600px',
      },
      width: {},
      height: {},
      colors: {
        primary: {
          black: '#1A1A1A',
          blue: '#1346AC',
          red: '#D63B29',
          green: '#246234',
        },
        neutral: {
          60: '#CCCECC',
        },
        green: {
          90: '#F0FAF3',
          10: '#163C20',
        },
        khaki: {
          60: '#DADA9F',
          70: '#E7E7C0',
          80: '#EFEFD6',
          90: '#F6F6EC',
          99: '#F9F9F6',
        },
      },
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        scroll:
          'scroll var(--animation-duration, 40s) var(--animation-direction, forwards) linear infinite',
      },
      keyframes: {
        scroll: {
          to: {
            transform: 'translate(calc(-50% - 0.5rem))',
          },
        },
      },
      content: {},
    },
  },
  plugins: [],
}
export default config
