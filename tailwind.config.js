/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: '#09090B',
          elevated: '#101013',
          surface: '#16161A',
          card: '#1B1B20',
        },
        line: {
          DEFAULT: '#26262C',
          subtle: '#1E1E23',
          strong: '#3A3A42',
        },
        ink: {
          DEFAULT: '#F4F4F5',
          muted: '#A1A1AA',
          dim: '#71717A',
          faint: '#52525B',
        },
        accent: {
          cyan: '#22D3EE',
          'cyan-dim': '#0891B2',
          violet: '#8B5CF6',
          'violet-dim': '#6D28D9',
        },
        signal: {
          success: '#10B981',
          warning: '#F59E0B',
          danger: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        display: ['"Space Grotesk"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      fontSize: {
        '2xs': ['0.6875rem', { lineHeight: '1rem' }],
      },
      borderRadius: {
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 60px -10px rgba(34, 211, 238, 0.25)',
        'glow-violet': '0 0 60px -10px rgba(139, 92, 246, 0.3)',
        'card': '0 1px 0 0 rgba(255,255,255,0.04) inset, 0 8px 24px -12px rgba(0,0,0,0.6)',
      },
      backgroundImage: {
        'grid-dim': "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(to right, rgba(255,255,255,0.025) 1px, transparent 1px)",
        'radial-fade': 'radial-gradient(ellipse 80% 50% at 50% -20%, rgba(139, 92, 246, 0.18), transparent 60%)',
      },
      animation: {
        'fade-in': 'fadeIn 600ms ease-out both',
        'slide-up': 'slideUp 600ms cubic-bezier(0.16, 1, 0.3, 1) both',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: 0 }, '100%': { opacity: 1 } },
        slideUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
}
