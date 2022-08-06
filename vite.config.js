import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
    if (mode === "production") return { base: "https://sammotta.github.io/ProjetoSocial/" }
    return { base: "/" }
})