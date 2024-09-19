import isEmpty from 'lodash.isempty'
import { appStore } from '../../../../../../../entities/app/store'
import { Chat } from '../../../../../../../entities/chat/types'

export const onChatSelection = (chat: Chat) => {
	if (isEmpty(chat)) return

	const { setInput, setActiveChat, setIsInfoSectionOpen } = appStore
	setIsInfoSectionOpen(false)
	setActiveChat(chat)
	setInput('')
}
