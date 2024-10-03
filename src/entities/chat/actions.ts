//@ts-nocheck
import { apolloClient } from '../../shared/apollo/client'
import { appStore } from '../app/store'
import { userStore } from '../user/store'
import { ADD_CHAT } from './mutation'
import { chatStore } from './store'
import { Chat } from './types'

export const updateChat = (chat: Chat) => {
	const { socket, setActiveChat, cancelProcess } = appStore
	const { update: updateChatsList } = chatStore

	socket.emit('update chat', chat)

	updateChatsList(chat)
	setActiveChat(chat)
	cancelProcess()
}

export const addChat = async () => {
	const { add: addChat } = chatStore
	const { entity: user } = userStore
	const { cancelProcess } = appStore

	const { data } = await apolloClient.mutate({
		mutation: ADD_CHAT,
		variables: { userId: user?.id }
	})
	console.log('🚀 ~ addChat ~ data:', data)
	addChat(data.addChat.chat)
	cancelProcess()
}

export const deleteChat = (chatId: Chat['id']) => {
	const { socket, cancelProcess } = appStore
	const { deleteChat } = chatStore

	socket.emit('delete chat', { chatId })

	deleteChat(chatId)
	cancelProcess()
}
