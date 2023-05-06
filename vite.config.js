import { defineConfig } from 'vite'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
    plugins: [
        viteStaticCopy({
            targets: [
                {
                    src: 'img/[!.]*', // 1️⃣
                    dest: './img', // 2️⃣
                },
            ],
        }),
    ]
})