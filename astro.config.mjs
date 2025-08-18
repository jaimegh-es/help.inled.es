// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'Documentación Inled Group',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/Inled-Group/help.inled.es' }],
			sidebar: [
				{
					label: 'Documentación',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Bienvenido', slug: 'docs/lista' },
					],
				},

				{
					label: 'InSuite',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Inicio', slug: 'docs/insuite/insuite' },
						{ label: 'InMD', slug: 'docs/insuite/inmd' },
						{ label: 'InQR', slug: 'docs/insuite/inqr' },
						{ label: 'InDOC', slug: 'docs/insuite/indoc' },
					],
				},
				{
					label: 'Tabstacker',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Tabstacker', slug: 'docs/tabstacker/tabstacker' }
					],
				},
				{
					label: 'InledAI',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Acceso', slug: 'docs/ai/acceso' },
						{ label: 'Personalización IA', slug: 'docs/ai/personalizacion' },
						{ label: 'Chat público', slug: 'docs/ai/chat' },
					],
				},

				{
					label: 'Preguntas y respuestas',
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
