/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                "crimson-text": ["Crimson Text", "serif"],
                lato: ["Lato", "sans-serif"],
            },
        },
    },
    plugins: [],
};
