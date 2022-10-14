/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: "jit",
    content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
    theme: {
        extend: {
            width: {
                "calc-mobile": "calc(100vw - 15rem)",
                "calc-desktop": "calc(100vw - 20rem)",
            },
            height: {
                mobile: "calc(100vh - 8rem)",
                desktop: "calc(100vh - 10rem)",
                "calc-mobile": "calc(100vh - 172px)",
                "calc-desktop": "calc(100vh - 200px)",
            },
            fontFamily: {
                "crimson-text": ["Crimson Text", "serif"],
                lato: ["Lato", "sans-serif"],
            },
        },
    },
    plugins: [],
};
