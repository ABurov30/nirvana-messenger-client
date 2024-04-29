import { ApolloClient, InMemoryCache } from '@apollo/client'

export const apolloClient = new ApolloClient({
	uri: import.meta.env.VITE_APOLLO_BASE_URL,
	cache: new InMemoryCache()
})
