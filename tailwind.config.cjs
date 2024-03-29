/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      animation: {
        flash: "flash 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },
      keyframes: {
        flash: {
          "50%": { background: "black" },
        },
      },
    },
  },
  plugins: [],
};
