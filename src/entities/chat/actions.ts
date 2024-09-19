import { cancelProcess } from '../app/actions'
import { appStore } from '../app/store'
import { chatStore } from './store'
import { Chat } from './types'

export const updateChat = (chat: Chat) => {
	const { socket, setActiveChat } = appStore
	const { update: updateChatsList } = chatStore

	socket.emit('update chat', chat)

	updateChatsList(chat)
	setActiveChat(chat)
	cancelProcess()
}
