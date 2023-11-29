import plugin from "tailwindcss/plugin";
import aspectRatio from "@tailwindcss/aspect-ratio";
import formPlugin from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
    theme: {
        extend: {
            screens: {},
            animation: {},
            keyframes: {},
            colors: {},
            fontFamily: {
                roboto: ["Roboto", "sans-serif"],
            },
            fontSize: {},
            spacing: {},
            maxWidth: {},
            lineHeight: {},
        },
    },
    plugins: [
        aspectRatio,
        formPlugin,
        plugin(({ addUtilities }) => {
            addUtilities({});
        }),
    ],
};
