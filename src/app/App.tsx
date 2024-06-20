import { Suspense } from 'react'
import MainRoutes from './MainRoutes'
import { Spin } from 'antd'
import { ErrorBoundary } from '../shared/HOC/ErrorBoundary/ErrorBoundary'
import { BrowserRouter } from 'react-router-dom'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../shared/apolloClient/apolloClient'
import './index.css'

function App(): JSX.Element {
	return (
		<>
			<ErrorBoundary>
				<Suspense fallback={<Spin />}>
					<ApolloProvider client={apolloClient}>
						<BrowserRouter>
							<MainRoutes />
						</BrowserRouter>
					</ApolloProvider>
				</Suspense>
			</ErrorBoundary>
		</>
	)
}

export default App
