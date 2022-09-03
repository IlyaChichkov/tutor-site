/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './src/**/*.{js,ts,tsx,jsx,css}'
    ],
    theme: {
        extend: {
            colors: {
                'page-white': '#E6F0FD',
                'text-black': '#070B2D',
                'text-title': '#3847CC',
                'main': '#5667FA',
                'secondary': '#9BC9FF',
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
