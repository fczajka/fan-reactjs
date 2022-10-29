/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                "calc-mobile": "calc(100vw - 16rem)",
                "calc-desktop": "calc(100vw - 20rem)",
            },
            minHeight: {
                mobile: "calc(100vh - 8rem)",
                desktop: "calc(100vh - 10rem)",
            },
            height: {
                "calc-mobile": "var(--calc-height-mobile)",
                "calc-desktop": "var(--calc-height-desktop)",
            },
            fontFamily: {
                "crimson-text": ["Crimson Text", "serif"],
                lato: ["Lato", "sans-serif"],
            },
        },
    },
    plugins: [],
};
