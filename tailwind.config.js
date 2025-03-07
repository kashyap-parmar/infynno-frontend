/** @type {import('tailwindcss').Config} */
module.exports = {
	content: [
		"./src/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			colors: {
				"primary-color": "#31393D",
				"secondary-color": "#33443C",
			},
			screens: {
				"3xl": "1800px"
			}
		}
	},
	plugins: [],
};