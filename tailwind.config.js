/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: 'class',
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
                serif: ['var(--font-serif)', 'Georgia', 'serif'],
            },
            keyframes: {
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(16px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
            },
            animation: {
                'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
            },
            typography: {
                DEFAULT: {
                    css: {
                        '--tw-prose-body': 'var(--text-primary)',
                        '--tw-prose-headings': 'var(--text-primary)',
                        '--tw-prose-links': 'var(--accent)',
                        '--tw-prose-bold': 'var(--text-primary)',
                        '--tw-prose-code': 'var(--text-primary)',
                        '--tw-prose-quotes': 'var(--text-secondary)',
                        '--tw-prose-quote-borders': 'var(--border)',
                        '--tw-prose-counters': 'var(--text-secondary)',
                        '--tw-prose-bullets': 'var(--text-secondary)',
                        '--tw-prose-hr': 'var(--border)',
                        '--tw-prose-th-borders': 'var(--border)',
                        '--tw-prose-td-borders': 'var(--border)',
                        color: 'var(--text-primary)',
                        a: {
                            color: 'var(--accent)',
                            '&:hover': {
                                color: 'var(--accent-hover)',
                            },
                        },
                        h1: { color: 'var(--text-primary)' },
                        h2: { color: 'var(--text-primary)' },
                        h3: { color: 'var(--text-primary)' },
                        h4: { color: 'var(--text-primary)' },
                        strong: { color: 'var(--text-primary)' },
                        code: { color: 'var(--text-primary)' },
                        blockquote: {
                            color: 'var(--text-secondary)',
                            borderLeftColor: 'var(--border)',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
