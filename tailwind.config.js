/** @type {import('tailwindcss').Config} */
export default {
    content: [
        // Example content paths...
        './public/**/*.html',
        './src/**/*.{js,jsx,ts,tsx,vue}',
    ],
    theme: {
        extend: {
            screens: {
                'media1530': '1530px',
                'media918': '918px'
            },
            width: {
                '100': '32rem'
            },
            colors: {
                'vd-gray': 'rgb(8, 17, 32)'
            }
        },
    },
    plugins: [],
}