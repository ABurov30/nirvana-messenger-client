import isEmpty from 'lodash.isempty'
import { toJS } from 'mobx'
import { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import { chatStore } from '../../../../../entities/chat/store'
import { Message } from '../../../../../entities/message/types'

export const useGetMessage = (socket: Socket) => {
	const { update: updateChatsList, entities: chatList } = chatStore

	useEffect(() => {
		socket.on('get message', async (data: Message) => {
			try {
				if (isEmpty(data)) return

				const chatToUpdate = toJS(chatList).find(
					el => el.id === data.chatId
				)

				const updatedChat = {
					...chatToUpdate,
					messages: [...toJS(chatToUpdate?.messages), data]
				}

				updateChatsList(updatedChat)
			} catch (e) {
				console.error(e)
			}
		})
	}, [socket])
}
