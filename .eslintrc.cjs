module.exports = {
    root: true,
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:react-hooks/recommended",
    ],
    ignorePatterns: [
        ".eslintrc.cjs",
        "package-lock.json",
        "package.json",
        "postcss.config.js",
        "tailwind.config.js",
        "**/public/*.js",
        "vite.config.ts",
        "tsconfig.json",
        "tsconfig.node.json",
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        "react/prop-types": 0,
        "react/react-in-jsx-scope": 0,
        "react-refresh/only-export-components": [
            "warn",
            { allowConstantExport: true },
        ],
    },
    plugins: [
        "react",
        "import",
        "jsx-a11y",
        "react-hooks",
        "react-refresh",
        "@typescript-eslint",
    ],
    parserOptions: {
        ecmaVersion: 2022,
        sourceType: "module",
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: { es2020: true, browser: true, node: true },
    settings: {
        react: {
            version: "detect",
        },
        "import/parsers": {
            "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
            typescript: {
                alwaysTryTypes: true,
            },
        },
    },
};
