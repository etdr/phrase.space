import { vitePreprocess } from '@sveltejs/kit/vite'
import adapter from '@sveltejs/adapter-auto'

/** @type {import('@sveltejs/kit').Config} */
export default {
  kit: {
    adapter: adapter(),
  },

  preprocess: [vitePreprocess({})]
}
