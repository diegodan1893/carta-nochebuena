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
				aperitivos: "url(./resources/aperitivos.png)",
				entrantes: "url(./resources/entrantes.png)",
				principales: "url(./resources/principales.png)",
				acompañamientos: "url(./resources/acompañamientos.png)",
				postres: "url(./resources/postres.png)",
				bebidas: "url(./resources/bebidas.png)",
				dia: "url(./resources/dia.png)",
				hora: "url(./resources/hora.png)",
				localizacion: "url(./resources/localizacion.png)",
				cubiertos: "url(./resources/cubiertos.png)",
				palabra: "url(./resources/palabra.png)",
				autodestruccion: "url(./resources/autodestruccion.png)",
				legal: "url(./resources/legal.png)",
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
