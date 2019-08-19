module.exports = {
    env: {
        browser: true,
        es6: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:prettier/recommended",
    ],
    globals: {
        Atomics: "readonly",
        SharedArrayBuffer: "readonly",
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 2018,
        sourceType: "module",
    },
    plugins: ["react", "prettier"],
    rules: {
        "prettier/prettier": ["error"],
        "react/prop-types": ["off"], // Disabled cause it's a playground. Enable it in prod
        "no-unused-vars": ["warn"], // Disabled cause it's a playground. Enable it in prod
    },
    settings: {
        react: {
            pragma: "React",
            version: "detect",
        },
    },
}
