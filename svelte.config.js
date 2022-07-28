import adapter from '@sveltejs/adapter-static'
import preprocess from 'svelte-preprocess'

import { mdsvex } from 'mdsvex'
import mdsvexConfig from './mdsvex.config.js'

/** @type {import('@sveltejs/kit').Config} */
export default {
	extensions: ['.svelte', ...mdsvexConfig.extensions],

	kit: {
		adapter: adapter(),
		prerender: {
			default: true
		}
	},

	preprocess: [
		preprocess({
			postcss: true
		}),
		mdsvex(mdsvexConfig)
	]
}
