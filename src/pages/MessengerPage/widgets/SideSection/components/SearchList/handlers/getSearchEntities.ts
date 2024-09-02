import { GET_SEARCH_ENTITIES } from '../../../../../../../entities/app/query'
import { appStore } from '../../../../../../../entities/app/store'
import { apolloClient } from '../../../../../../../shared/apollo/client'

export const getSearchEntities = async (input: string) => {
	const { data } = await apolloClient.query({
		query: GET_SEARCH_ENTITIES,
		variables: { input }
	})

	const { getSearchEntities } = data
	const { chats, messages, users } = getSearchEntities

	const { setSearchEntities } = appStore
	setSearchEntities({ chats, messages, users })
}
