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
				'./MessengerApp': './src/app/App.tsx'
			},
			shared: [
				'react',
				'react-dom',
				'graphql',
				'socket.io-client',
				'mobx',
				'@apollo/client',	
				'mobx-react-lite',
				'react-router-dom'
			]
		})
	],
	server: {
		port: 5174,
		strictPort: true
	},
	build: {
		modulePreload: false,
		target: 'esnext',
		minify: false,
		cssCodeSplit: false
	}
})
