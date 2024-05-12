import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import jotaiDebugLabel from 'jotai/babel/plugin-debug-label'
import jotaiReactRefresh from 'jotai/babel/plugin-react-refresh'
import federation from '@originjs/vite-plugin-federation'

export default defineConfig({
	plugins: [
		react({ babel: { plugins: [jotaiDebugLabel, jotaiReactRefresh] } }),
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
