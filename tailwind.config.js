/** @type {import('tailwindcss').Config} */
export default {
    mode: "jit",
    content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            animation: {
                "fade-in": "0.4s ease-in-out 1 both fade-in",
                rotation: "rotation 1s linear infinite",
            },
            colors: {
                //sky
                "primary-50": "#f0f9ff",
                "primary-100": "#e0f2fe",
                "primary-200": "#bae6fd",
                "primary-300": "#7dd3fc",
                "primary-400": "#38bdf8",
                "primary-500": "#0ea5e9",
                "primary-600": "#0284c7",
                "primary-700": "#0369a1",
                "primary-800": "#075985",
                "primary-900": "#0c4a6e",
                "primary-950": "#082f49",
                //amber
                "secondary-50": "#fffbeb",
                "secondary-100": "#fef3c7",
                "secondary-200": "#fde68a",
                "secondary-300": "#fcd34d",
                "secondary-400": "#fbbf24",
                "secondary-500": "#f59e0b",
                "secondary-600": "#d97706",
                "secondary-700": "#b45309",
                "secondary-800": "#92400e",
                "secondary-900": "#78350f",
                "secondary-950": "#451a03",
                //fuchsia
                "tertiary-50": "#fdf4ff",
                "tertiary-100": "#fae8ff",
                "tertiary-200": "#f5d0fe",
                "tertiary-300": "#f0abfc",
                "tertiary-400": "#e879f9",
                "tertiary-500": "#d946ef",
                "tertiary-600": "#c026d3",
                "tertiary-700": "#a21caf",
                "tertiary-800": "#86198f",
                "tertiary-900": "#701a75",
                "tertiary-950": "#4a044e",
            },
            borderRadius: {
                primary: "16px",
            },
            boxShadow: {
                custom: "0px 2px 6px 0px rgba(148, 163, 184, 1);",
            },
            fontFamily: {
                primary: ["roboto", "sans-serif"],
                secondary: ["Bree Serif", "serif"],
            },
            height: {
                "calc-mobile": "var(--calc-height-mobile)",
                "calc-desktop": "var(--calc-height-desktop)",
            },
            keyframes: {
                "fade-in": {
                    "0%": {
                        translate: "0px 10px",
                        opacity: 0,
                    },
                    "100%": {
                        translate: "0px 0px",
                        opacity: 1,
                    },
                },
                rotation: {
                    from: {
                        transform: "rotate(0deg)",
                    },
                    to: {
                        transform: "rotate(360deg)",
                    },
                },
            },
            maxWidth: {
                1920: "1920px",
            },
            padding: {
                primary: "0.5rem 1rem",
            },
            width: {
                110: "28rem",
            },
        },
    },
    plugins: [],
};
