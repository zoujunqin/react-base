import fs from 'fs'
import { resolve } from 'path'
import { defineConfig } from 'vite'

import Tailwindcss from 'tailwindcss'
import Autoprefixer from 'autoprefixer'

import React from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
    resolve: {
        alias: {
            '@': resolve(__dirname, 'src'),
            '@components': resolve(__dirname, 'src/components'),
            '@hooks': resolve(__dirname, 'src/hooks'),
            '@utils': resolve(__dirname, 'src/utils'),
            '@styles': resolve(__dirname, 'src/styles'),
            '@assets': resolve(__dirname, 'src/assets'),
            '@core': resolve(__dirname, 'core/src')
        }
    },

    server: {
        host: '0.0.0.0',
        https: {
            key: fs.readFileSync('./certs/localhost+3-key.pem'),
            cert: fs.readFileSync('./certs/localhost+3.pem')
        }
    },

    plugins: [React()],

    css: {
        postcss: {
            plugins: [Tailwindcss, Autoprefixer]
        }
    }
})
