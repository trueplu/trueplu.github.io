import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'
import typographyPlugin from '@tailwindcss/typography'

export default {
    content: ['./src/**/*.{astro,html,js,md,mdx,svelte,ts}'],
    theme: {
        screens: {
            '2xs': '375px',
            xs: '475px',
            ...defaultTheme.screens,
        },
        extend: {
            fontFamily: {
                sans: ['Nunito Variable', ...defaultTheme.fontFamily.sans],
            },
            colors: {
                brand: '#fde68a',
                yellow: '#FBEC5D',
            },
        },
    },
    plugins: [typographyPlugin],
} satisfies Config
