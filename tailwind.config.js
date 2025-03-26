/** @type {import('tailwindcss').Config} */
export default {
    content: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                neonBlue: "#00FFFF",
                neonGreen: "#00FF00",
                deepPurple: "#1A002D",
            },
            boxShadow: {
                "neon-blue": "0px 0px 15px #00FFFF",
                "neon-green": "0px 0px 15px #00FF00",
            },
        },
    },
    plugins: [],
};
