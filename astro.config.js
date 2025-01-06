import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind'
import svelte from '@astrojs/svelte'
import Icons from 'unplugin-icons/vite'

export default defineConfig({
    site: 'https://plumppumusik.se',
    integrations: [tailwind(), svelte()],
    vite: {
        plugins: [
            // NOTE: Allow using icons in both Svelte and Astro components
            // Workaround for https://github.com/unplugin/unplugin-icons/issues/253
            Icons({ compiler: 'svelte', defaultClass: 'size-6' }),
            Icons({ compiler: 'astro', defaultClass: 'size-6' }),
        ],
    },
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp',
        },
    },
    devToolbar: {
        enabled: false,
    },
})
