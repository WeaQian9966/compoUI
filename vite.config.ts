import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
    plugins: [
        react(),
        dts({ include: ['src/components'] })
    ],
    build: {
        copyPublicDir: false,
        lib: {
            entry: {
                index: resolve(__dirname, 'src/components/index.ts'),
                vue: resolve(__dirname, 'src/vue/index.ts')
            },
            name: 'CompoUI',
            fileName: (format, entryName) => {
                if (entryName === 'vue') return `compo-ui-vue.${format}.js`;
                return `compo-ui.${format}.js`;
            },
        },
        rollupOptions: {
            external: ['react', 'react-dom', 'vue'],
            output: {
                globals: {
                    react: 'React',
                    'react-dom': 'ReactDOM',
                    vue: 'Vue'
                },
            },
        },
    },
})
