/** @type {import('tailwindcss').Config} */
export default {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}'
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                primary: '#1a0726',
                ivory: '#FDFAF6',
            }
        }
    },
    plugins: []
};
