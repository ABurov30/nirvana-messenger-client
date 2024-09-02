import { toJS } from 'mobx'

import { v4 as uuidv4 } from 'uuid'
import { appStore } from '../../../../../entities/app/store'
import { chatStore } from '../../../../../entities/chat/store'
import { userStore } from '../../../../../entities/user/store'

export const sendMessage = () => {
	const { update: updateChatsList, getActiveChat } = chatStore
	const { entity: user } = userStore
	const { input, setInput, socket } = appStore
	const activeChat = getActiveChat()
	if (!activeChat) return

	const newMessage = {
		id: uuidv4(),
		message: input,
		userId: user?.id,
		chatId: activeChat?.id,
		user: toJS(user)
	}

	socket.emit('send message', newMessage)
	const updatedChat = {
		...activeChat,
		messages: [...toJS(activeChat.messages), newMessage]
	}
	updateChatsList(updatedChat)
	setInput('')
}
