import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        night: '#071A13',
        deep: '#0B2A20',
        forest: '#0E3D2E',
        moss: '#2C5A48',
        ink: '#12271F',
        body: '#3A4741',
        paper: '#F1F0EC',
        gold: { DEFAULT: '#B8862E', mid: '#D9A63B', light: '#F5DE84' },
      },
      fontFamily: {
        serif: ['var(--font-serif)', 'Georgia', 'serif'],
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        marquee: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        cue: { '0%,100%': { transform: 'scaleY(0.3)', transformOrigin: 'top' }, '50%': { transform: 'scaleY(1)', transformOrigin: 'top' } },
      },
      animation: {
        marquee: 'marquee 48s linear infinite',
        cue: 'cue 2.4s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};

export default config;
