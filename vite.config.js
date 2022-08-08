import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
    /** To test the production build on your machine, comment this if below, after that use yarn build 
     * DON'T FORGET TO UNCOMMENT THE CODE, WHEN YOU BUILD TO GITHUB PAGES
    */
    if (mode === "production") return { base: "https://sammotta.github.io/ProjetoSocial/" }
    return { base: "/" }
})