import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite';
=======
import react from '@vitejs/plugin-react';
import tailwindcss from "@tailwindcss/vite";
>>>>>>> 38d99ed8d20ae5d2c905ea66f8f59b93220fcd34

export default defineConfig({
    plugins: [
        laravel({
<<<<<<< HEAD
            input: ['resources/css/app.css', 'resources/js/app.js'],
            refresh: true,
        }),
        tailwindcss(),
=======
            input: [
                'resources/sass/app.scss',
                'resources/js/app.js',
            ],
            refresh: true,
        }),
        react(),
        tailwindcss()
>>>>>>> 38d99ed8d20ae5d2c905ea66f8f59b93220fcd34
    ],
});
