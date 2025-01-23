import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [vue(), vueJsx()],
    resolve: {
        extensions: ['.js', '.scss', '.sass', '.css', '.vue'],
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    }
})
