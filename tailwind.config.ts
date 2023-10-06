import type { Config } from 'tailwindcss'

const config: Config = {
    'tailwindCSS.experimental.classRegex': [
        ['clsx\\(([^)]*)\\)', "(?:'|\"|`)([^']*)(?:'|\"|`)"],
    ],
    content: [
        './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
        './src/components/**/*.{js,ts,jsx,tsx,mdx}',
        './src/app/**/*.{js,ts,jsx,tsx,mdx}',
        './node_modules/flowbite-react/**/*.js',
        './public/**/*.html',
    ],

    theme: {
        extend: {},
    },
    plugins: [require('flowbite/plugin')],
}
export default config
