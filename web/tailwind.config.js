const tailwindui = require(`@tailwindcss/ui`)
const tailwindforms = require(`@tailwindcss/custom-forms`)
module.exports = {
	theme: {
		container: {
			center: true,
			padding: {
				default: '1rem',
				sm: '2rem',
				lg: '3rem',
				xl: '4rem',
			},
		},
		extend: {
			// screens: {
			// 	'dark': {'raw': '(prefers-color-scheme: dark)'},
			// },
			colors: {
				'gray-50': '#f9fafb',
				'gray-150': '#f4f5f7',
				'gray-250': '#e5e7eb',
				'gray-350': '#d2d6dc',
				'gray-450': '#9fa6b2',
				'gray-550': '#6b7280',
				'gray-650': '#4b5563',
				'gray-750': '#374151',
				'gray-850': '#252f3f',
				'gray-850': '#161e2e',
				'cool-gray-50': '#f8fafc',
				'cool-gray-100': '#f1f5f9',
				'cool-gray-200': '#e2e8f0',
				'cool-gray-300': '#cfd8e3',
				'cool-gray-400': '#97a6ba',
				'cool-gray-500': '#64748b',
				'cool-gray-600': '#475569',
				'cool-gray-700': '#364152',
				'cool-gray-800': '#27303f',
				'cool-gray-900': '#1a202e',

			},
			fontFamily: {
				display: ["Yeseva One", "serif"],
				body: ["Roboto", "sans-serif"],
				lato: ["Lato", "sans-serif"],
				oswald: ["Oswald", "serif"]
			},
			height: {
				'1/4': '25vh',
				'1/3': '33vh',
				'1/2': '50vh',
				'3/4': '75vh',
				'in': 'inherit'
			},

			fontSize: {
				'7xl': '5rem',
				'8xl': '6rem',
			}
		},
		variants: {},
		plugins: [
			tailwindui
		],
	},

}