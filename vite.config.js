import { defineConfig } from 'vite'
import { sveltekit } from '@sveltejs/kit/vite'
import { imagetools } from 'vite-imagetools'

export default defineConfig({
	plugins: [
		imagetools(),
		sveltekit()
	],
	css: {
		transformer: 'lightningcss',
		lightningcss: {
			drafts: {
				nesting: true,
				customMedia: true
			}
		}
	}
})
