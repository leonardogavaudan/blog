module.exports = {
    content: [
        './src/app/**/*.{js,ts,jsx,tsx}',
        './src/components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            typography: {
                DEFAULT: {
                    css: {
                        color: '#ffffff',
                        a: {
                            color: '#60a5fa',
                            '&:hover': {
                                color: '#93c5fd',
                            },
                        },
                        h1: {
                            color: '#ffffff',
                        },
                        h2: {
                            color: '#ffffff',
                        },
                        h3: {
                            color: '#ffffff',
                        },
                        h4: {
                            color: '#ffffff',
                        },
                        strong: {
                            color: '#ffffff',
                        },
                        code: {
                            color: '#ffffff',
                        },
                        blockquote: {
                            color: '#d1d5db',
                            borderLeftColor: '#4b5563',
                        },
                    },
                },
            },
        },
    },
    plugins: [require('@tailwindcss/typography')],
};
