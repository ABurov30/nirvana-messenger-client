import { useLayoutEffect } from 'react'
import { appStore } from '../../../../entities/app/store'
import { MenuMode } from '../../../../entities/app/types'
import { chatStore } from '../../../../entities/chat/store'
import { contactStore } from '../../../../entities/contact/store'

export const setEntityByMenuMode = (data: any, loading: boolean) => {
	const { set: setChatsList } = chatStore
	const { set: setContactList } = contactStore
	const { menuMode } = appStore

	useLayoutEffect(() => {
		if (!loading) {
			if (menuMode === MenuMode.chat) {
				setChatsList(data?.getChatsByUser?.chats)
			}
			if (menuMode === MenuMode.contact) {
				setContactList(data?.getContactsByUser?.contacts)
			}
		}
	}, [data])
}
