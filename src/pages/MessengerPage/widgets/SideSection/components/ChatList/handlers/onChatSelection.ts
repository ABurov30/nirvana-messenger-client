//@ts-nocheck
import isEmpty from 'lodash.isempty'
import { appStore } from '../../../../../../../entities/app/store'
import { chatStore } from '../../../../../../../entities/chat/store'
import { Chat } from '../../../../../../../entities/chat/types'

export const onChatSelection = (chat: Chat) => {
	if (isEmpty(chat)) return

	const { setInput, setActiveChat, setIsInfoSectionOpen } = appStore
	const { entities: chats } = chatStore
	if (chats.find(el => el.id === chat.id)) {
		setActiveChat(chat)
	} else {
		setActiveChat({})
	}
	setIsInfoSectionOpen(false)
	setInput('')
}
