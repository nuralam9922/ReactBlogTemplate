/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				textPrimary: '#1A1A1A',
				textSecondary: '#6941C6',
				textAscent: '#667085',
				backBackground: '#090D1F',
				background: '#ffff',
			},
			screens: {
				custom: { min: '890px' },
			},
		},
	},
	plugins: [],
};
