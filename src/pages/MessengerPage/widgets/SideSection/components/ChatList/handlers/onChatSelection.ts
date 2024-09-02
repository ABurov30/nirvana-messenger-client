import isEmpty from 'lodash.isempty'
import { appStore } from '../../../../../../../entities/app/store'
import { chatStore } from '../../../../../../../entities/chat/store'
import { Chat } from '../../../../../../../entities/chat/types'

export const onChatSelection = (chat: Chat) => {
	if (isEmpty(chat)) return
	const { setActiveChat } = chatStore
	const { setInput } = appStore
	setActiveChat(chat?.id)
	setInput('')
}
