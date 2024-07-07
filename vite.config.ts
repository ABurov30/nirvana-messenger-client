import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import federation from '@originjs/vite-plugin-federation'
import viteTsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig({
	plugins: [
		react(),
		viteTsconfigPaths(),
		federation({
			name: 'messengerApp',
			filename: 'remoteEntry.js',
			exposes: {
				'./main': './src/entry.js'
			}
		})
	],
	server: {
		port: 5174,
		open: true,
		strictPort: true
	}
})
