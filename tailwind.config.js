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
            backgroundImage: {
                yellow: "url('./assets/images/yellowStripes.png')",
            },
            maxWidth: {
                1920: "1920px",
            },
            minHeight: {
                desktop: "calc(100vh - 6rem)",
            },
            height: {
                "calc-mobile": "var(--calc-height-mobile)",
                "calc-desktop": "var(--calc-height-desktop)",
            },
            fontFamily: {
                "bree-serif": ["Bree Serif", "serif"],
                roboto: ["roboto", "sans-serif"],
            },
        },
    },
    plugins: [],
};
