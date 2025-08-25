import tailwindcssAnimate from 'tailwindcss-animate'
import typography from '@tailwindcss/typography'

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  darkMode: ['selector', '[data-theme="dark"]'],
  plugins: [tailwindcssAnimate, typography],
  prefix: '',
  safelist: [
    'lg:col-span-4',
    'lg:col-span-6',
    'lg:col-span-8',
    'lg:col-span-12',
    'border-border',
    'bg-card',
    'border-error',
    'bg-error/30',
    'border-success',
    'bg-success/30',
    'border-warning',
    'bg-warning/30',
  ],
  theme: {
    container: {
      padding: {
        '2xl': '2rem',
        DEFAULT: '1rem',
        lg: '2rem',
        md: '2rem',
        sm: '1rem',
        xl: '2rem',
      },
      screens: {
        '2xl': '86rem',
        lg: '64rem',
        md: '48rem',
        sm: '40rem',
        xl: '80rem',
      },
    },
    extend: {
      animation: {
        marquee: 'marquee 45s linear infinite',
        marquee2: 'marquee2 45s linear infinite',
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      colors: {
        ash: '#1E1E1E',
        'paper-100': '#FFFBF4',
        'paper-200': '#FFF2DF',
        pumpkin: '#E06500',
        marigold: '#FBAF3B',
        'marigold-dark': '#E68C02',
        feather: '#BEBEBE',
        background: 'var(--background)',
        border: 'hsla(var(--border))',
        foreground: 'var(--foreground)',
      },
      fontFamily: {
        acid: ['var(--font-acid-grotesk)'],
        inter: ['var(--font-inter)'],
      },
      transitionDuration: {
        scale: '0.4s',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
        marquee2: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      typography: () => ({
        DEFAULT: {
          css: [
            {
              '--tw-prose-body': 'var(--text)',
              '--tw-prose-headings': 'var(--text)',
              h1: {
                fontWeight: 'normal',
                marginBottom: '0.25em',
                fontSize: '1.5rem',
                lineHeight: '120%',
              },
              p: {
                fontSize: '1rem',
                lineHeight: '140%',
              },
            },
          ],
        },
        base: {
          css: [
            {
              h1: {
                fontSize: '2rem',
              },
              h2: {
                fontSize: '1.25rem',
                fontWeight: 600,
              },
            },
          ],
        },
        md: {
          css: [
            {
              h1: {
                fontSize: '3.5rem',
              },
              h2: {
                fontSize: '2.5rem',
              },
              h3: {
                fontSize: '2rem',
                lineHeight: '120%',
                fontWeight: 400,
              },
              p: {
                fontSize: '1.25rem',
              },
            },
          ],
        },
      }),
    },
  },
}

export default config
