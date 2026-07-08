import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      manifest: {
        name: 'Günün Projeleri',
        short_name: 'Günün Projeleri',
        description: 'GitHub Trending — Türkçe derin analiz ve jargon sözlüğü',
        lang: 'tr',
        display: 'standalone',
        start_url: '/',
        theme_color: '#0a0a0b',
        background_color: '#0a0a0b',
        icons: [
          { src: '/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icon-512.png', sizes: '512x512', type: 'image/png', purpose: 'any maskable' },
        ],
      },
    }),
  ],
})
