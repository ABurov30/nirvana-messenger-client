import { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import { appStore } from '../../../../../entities/app/store'
import { chatStore } from '../../../../../entities/chat/store'
import { Message } from '../../../../../entities/message/types'

export const useGetMessage = (socket: Socket) => {
	const { getMessage, entities: chatList } = chatStore
	const { activeChat, setActiveChat } = appStore
	return useEffect(() => {
		socket.on('get message', async (data: Message) => {
			try {
				console.log('run socket')
				getMessage(data)

				// if (updatedChat.id === activeChat?.id) {
				// 	setActiveChat(updatedChat)
				// }d
			} catch (e) {
				console.error(e)
			}
		})
	}, [socket])
}
