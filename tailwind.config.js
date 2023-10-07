/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	darkMode: 'class',
	theme: {
		extend: {
			colors: {
				white: '#f9f9f9',
				dark: '#262B3C',
			},
		},
	},
	plugins: [
		plugin(function ({ addBase, theme }) {
			addBase({
				h1: { fontSize: theme('fontSize.5xl') },
				h2: { fontSize: theme('fontSize.4xl') },
				h3: { fontSize: theme('fontSize.3xl') },
				p: { fontSize: theme('fontSize.base') },
			});
		}),
	],
};
