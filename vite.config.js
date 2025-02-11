import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "" // ajouter le nom du depot github si on publie sur GH pages : "/exemple/"
})
