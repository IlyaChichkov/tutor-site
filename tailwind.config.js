/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,tsx,jsx,css,scss}'
    ],
    theme: {
        extend: {
            colors: {
                'page-white': '#E6F0FD',
                'textMain': '#070B2D',
                'textTitle': '#3847CC',
                'main': '#5667FA',
                'secondary': '#9BC9FF',
                'gd-section-100': '#8EDDFF',
                'gd-section-200': '#83BCFF',
                'gd-section-300': '#6AC5F8',
            },
        },
        fontFamily: {
            raleway: ['Raleway', 'sans-serif'],
            rb: ['Roboto', 'sans-serif'],
            rbMono: ['Roboto Mono', 'monospace'],
            rubik: ['Rubik', 'sans-serif'],
        }
    },
    plugins: [],
}
