import { Suspense } from 'react'
import MainRoutes from './MainRoutes'
import { Spin } from 'antd'
import { ErrorBoundary } from '../shared/HOC/ErrorBoundary/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../shared/apollo/client'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { injectStores } from '@mobx-devtools/tools'
import { userStore } from '../entities/user/store'

import { chatStore } from '../entities/chat/store'

function App(): JSX.Element {
	injectStores({
		userStore,
		chatStore
	})
	return (
		<>
			<ErrorBoundary>
				<Suspense fallback={<Spin />}>
					<GoogleOAuthProvider
						clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
					>
						<ApolloProvider client={apolloClient}>
							<BrowserRouter>
								<MainRoutes />
							</BrowserRouter>
						</ApolloProvider>
					</GoogleOAuthProvider>
				</Suspense>
			</ErrorBoundary>
		</>
	)
}

export default App
