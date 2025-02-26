// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.assetick.com/docs',
	base: 'docs',
	integrations: [
		starlight({
			title: 'Documentation',
			logo: {
				src: './src/assets/assetick.png',
				replacesTitle: true
			},
			social: {
				twitter: 'https://x.com/assetick',
			},
			customCss: [
				'./src/styles/global.css',
			],
			sidebar: [
				{ label: 'Overview', slug: 'overview' },
				{ label: 'Getting started', slug: 'getting-started' },
				{
					label: 'Setup guides',
					autogenerate: { directory: 'guides' },
				},
				{
					label: 'Manage',
					autogenerate: { directory: 'manage' },
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],

	vite: {
		plugins: [tailwindcss()],
	},
});