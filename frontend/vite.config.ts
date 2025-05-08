import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'
import proxyOptions from './proxyOptions';
import tailwindcss from "@tailwindcss/vite"

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react(), tailwindcss()],
	resolve: {
	  alias: {
		"@": path.resolve(__dirname, "./src"),
	  },
	},
	server: {
		port: 8080,
		host: '0.0.0.0',
		proxy: proxyOptions
	},
	build: {
		outDir: '../fredy_crm/public/frontend',
		emptyOutDir: true,
		target: 'es2015',
	},
});
