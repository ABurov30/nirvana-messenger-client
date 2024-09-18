import { ApolloProvider } from '@apollo/client'
import { injectStores } from '@mobx-devtools/tools'
import { GoogleOAuthProvider } from '@react-oauth/google'
import { Spin } from 'antd'
import { Suspense } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { userStore } from '../entities/user/store'
import { apolloClient } from '../shared/apollo/client'
import { ErrorBoundary } from '../shared/HOC/ErrorBoundary/ErrorBoundary'
import MainRoutes from './MainRoutes'

import { appStore } from '../entities/app/store'
import { chatStore } from '../entities/chat/store'
import { contactStore } from '../entities/contact/store'

function App(): JSX.Element {
	injectStores({
		userStore,
		chatStore,
		contactStore,
		appStore
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
