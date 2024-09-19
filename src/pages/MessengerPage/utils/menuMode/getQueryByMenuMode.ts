import { MenuMode } from '../../../../entities/app/types'
import { GET_ALL_CHATS_BY_USER } from '../../../../entities/chat/query'
import { GET_ALL_CONTACTS_BY_USER } from '../../../../entities/contact/query'

export const getQueryByMenuMode = (menuMode: MenuMode) => {
	switch (menuMode) {
		case MenuMode.contact:
			return GET_ALL_CONTACTS_BY_USER
		default:
			return GET_ALL_CHATS_BY_USER
	}
}
