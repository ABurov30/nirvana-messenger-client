import { Suspense } from 'react'
import { Provider } from 'jotai'
import MainRoutes from './MainRoutes'
import { Spin } from 'antd'
import { ErrorBoundary } from '../shared/HOC/ErrorBoundary/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { store } from '../shared/store/store'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../shared/apolloClient/apolloClient'

function App(): JSX.Element {
	return (
		<>
			<ErrorBoundary>
				<Suspense fallback={<Spin />}>
					<ApolloProvider client={apolloClient}>
						<Provider store={store}>
							<BrowserRouter>
								<MainRoutes />
							</BrowserRouter>
						</Provider>
					</ApolloProvider>
				</Suspense>
			</ErrorBoundary>
		</>
	)
}

export default App
