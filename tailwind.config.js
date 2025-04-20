import { merge, tail } from 'lodash'
import coreTailwindConfig from './core/tailwind.config.js'

/** @type {import('tailwindcss').Config} */
const tailwindConfig = {
    content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {}
    },
    plugins: []
}

export default merge(tailwindConfig, coreTailwindConfig)
