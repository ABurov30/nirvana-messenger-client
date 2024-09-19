import { useQuery } from '@apollo/client'
import { appStore } from '../../../../entities/app/store'
import { userStore } from '../../../../entities/user/store'
import { getQueryByMenuMode } from './getQueryByMenuMode'

export const useQueryByMenuMode = () => {
	const { entity: user } = userStore
	const { menuMode } = appStore

	const { id = '' } = user

	const { data, loading } = useQuery(getQueryByMenuMode(menuMode), {
		variables: {
			id
		}
	})

	return { data, loading }
}
