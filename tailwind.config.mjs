/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#AA8315',      // Warm gold - main brand color
        secondary: '#6B5310',    // Deep brown - accents & borders
        accent: '#D4A574',       // Light gold - highlights & hover
        light: '#F5F3F0',        // Off-white/Cream - backgrounds
        dark: '#2C2416',         // Very dark brown - text & headings
        success: '#5FA55F',      // Muted green
        error: '#C85A54',        // Muted red
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        serif: ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        mono: ['Courier New', 'monospace'],
      },
      fontSize: {
        xs: 'var(--text-xs)',
        sm: 'var(--text-sm)',
        base: 'var(--text-base)',
        lg: 'var(--text-lg)',
        xl: 'var(--text-xl)',
        '2xl': 'var(--text-h4)',
        '3xl': 'var(--text-h3)',
        '4xl': 'var(--text-h2)',
        '5xl': 'var(--text-h1)',
        '6xl': 'var(--text-h1)',
      },
      fontWeight: {
        light: 'var(--font-light)',
        normal: 'var(--font-normal)',
        medium: 'var(--font-medium)',
        semibold: 'var(--font-semibold)',
        bold: 'var(--font-bold)',
      },
      lineHeight: {
        tight: 'var(--leading-tight)',
        normal: 'var(--leading-normal)',
        relaxed: 'var(--leading-relaxed)',
        loose: 'var(--leading-loose)',
      },
      spacing: {
        safe: 'max(env(safe-area-inset-left, 1rem), 1rem)',
      },
      borderRadius: {
        DEFAULT: '0.5rem',
        lg: '1rem',
        xl: '1.5rem',
      },
      transitionDuration: {
        DEFAULT: '300ms',
      },
      screens: {
        xs: '320px',
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
};
