const iOSHeight = require("@rvxlab/tailwind-plugin-ios-full-height")

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{js,jsx,ts,tsx}"],
	theme: {
		extend: {
			fontFamily: {
				oswald: ["Oswald", "sans-serif"],
			},
			backgroundImage: {
				monte: "url('./resources/monte.png')",
				principales: "url(./resources/principales.png)",
				bebidas: "url(./resources/bebidas.png)",
				dia: "url(./resources/dia.png)",
				hora: "url(./resources/hora.png)",
			},
			keyframes: {
				float: {
					"0%, 100%": { transform: "translateY(-25%)" },
					"50%": { transform: "translateY(0)" },
				},
			},
			animation: {
				float: "float 5s ease-in-out infinite",
			},
		},
	},
	plugins: [iOSHeight],
}
