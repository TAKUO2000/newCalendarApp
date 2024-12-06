import defaultTheme from "tailwindcss/defaultTheme";
import forms from "@tailwindcss/forms";

/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php",
        "./storage/framework/views/*.php",
        "./resources/views/**/*.blade.php",
        "./resources/js/**/*.jsx",
    ],

    theme: {
        extend: {
            fontFamily: {
                body: ["Graphik", "sans-serif"],
            },
            fontSize: {
                base: [
                    "1rem",
                    { lineHeight: "1.5rem", letterSpacing: "0.03em" },
                ],
                title: [
                    "1.5rem",
                    { lineHeight: "2rem", letterSpacing: "0.03em" },
                ],
            },
        },
    },

    plugins: [forms],
};
