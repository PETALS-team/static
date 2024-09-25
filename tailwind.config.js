/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["css/*.css"],
    theme: {
        extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
        themes: ["light", "dark"],
    },
}
