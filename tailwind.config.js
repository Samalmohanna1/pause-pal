/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		container: {
			center: true,
		},
		extend: {
			fontFamily: {
				UbuntuMonoRegular: ['UbuntuMono-Regular'],
				UbuntuMonoBold: ['UbuntuMono-Bold'],
			},
			colors: {
				pauseplayGray: ['#1e1e1e'],
			},
		},
	},
	plugins: [],
}
