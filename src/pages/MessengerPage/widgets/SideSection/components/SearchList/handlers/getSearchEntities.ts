//@ts-nocheck
import { GET_SEARCH_ENTITIES } from '../../../../../../../entities/app/query'
import { appStore } from '../../../../../../../entities/app/store'
import { userStore } from '../../../../../../../entities/user/store'
import { apolloClient } from '../../../../../../../shared/apollo/client'

export const getSearchEntities = async (input: string) => {
	const { entity: user } = userStore
	const { data } = await apolloClient.query({
		query: GET_SEARCH_ENTITIES,
		variables: { input, userId: user?.id }
	})

	const { getSearchEntities } = data
	const { chats, messages, users } = getSearchEntities

	const { setSearchEntities } = appStore
	setSearchEntities({ chats, messages, users })
}
