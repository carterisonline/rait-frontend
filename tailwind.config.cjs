/* eslint-disable @typescript-eslint/no-var-requires */
const colors = require('tailwindcss/colors');
const plugin = require('tailwindcss/plugin');

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			textShadow: {
				sm: '0 1px 2px var(--tw-shadow-color)',
				md: '0 2px 4px var(--tw-shadow-color)',
				lg: '0 4px 12px var(--tw-shadow-color)',
				xl: '0 16px 32px var(--tw-shadow-color)',
			},
			colors: {
				neutral: colors.slate,
				positive: colors.green,
				urge: colors.violet,
				warning: colors.yellow,
				info: colors.blue,
				critical: colors.red,
			},
		},
	},
	plugins: [
		require('a17t'),
		require('tailwindcss-fluid-type'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
				{
					'text-shadow': value => ({
						textShadow: value,
					}),
				},
				{ values: theme('textShadow') }
			);
		}),
	],
};
