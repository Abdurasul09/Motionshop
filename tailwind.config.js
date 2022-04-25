module.exports = {
    mode: "jit",
    purge: ["./pages/**/*.js", "./src/components/**/*.js"],
    darkMode: false,
    theme: {
        extend: {},
        container: {
            padding: {
                default: '1rem',
                sm: '2rem',
                lg: '1rem',
                xl: '2rem',
            },
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
};