import type { Config } from "tailwindcss"

const config = {
	darkMode: ["class"],
	content: [
		'./modules/**/*.{ts,tsx}',
		'./components/**/*.{ts,tsx}',
		'./app/**/*.{ts,tsx}',
	],
	prefix: "",
	theme: {
		container: {
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				ash: '#f4f7f6',
				black: '#161816',
				yellow: '#f5e800',
				green: '#7eed5e'
			},
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config