import { toJS } from 'mobx'

import { v4 as uuidv4 } from 'uuid'
import { cancelProcess } from '../app/actions'
import { chatStore } from '../chat/store'
import { userStore } from '../user/store'
import { appStore } from '../app/store'
import { Message } from './types'

export const deleteMessage = async (message: Message) => {
	const { deleteMessage } = chatStore
	const { socket, setActiveChat } = appStore

	socket.emit('delete message', message)

	const updatedChat = deleteMessage(message)
	setActiveChat(updatedChat)
	cancelProcess()
}

export const sendMessage = () => {
	const { update: updateChatsList } = chatStore
	const { entity: user } = userStore
	const { input, setInput, socket, activeChat, setActiveChat } = appStore

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
	setActiveChat(updatedChat)
	setInput('')
}

export const updateMessage = () => {
	const { entity: user } = userStore
	const { currentMessage, input, socket, setActiveChat } = appStore

	const { updateMessage } = chatStore

	const obj = {
		message: input,
		id: toJS(currentMessage?.id),
		chatId: toJS(currentMessage?.chatId),
		userId: toJS(currentMessage?.userId),
		user: user
	} as Message

	socket.emit('update message', obj)

	const updatedChat = updateMessage(obj)
	setActiveChat(updatedChat)
	cancelProcess()
}
