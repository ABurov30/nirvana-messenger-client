import isEmpty from 'lodash.isempty'
import { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import { chatStore } from '../../../../../entities/chat/store'
import { Message } from '../../../../../entities/message/types'

export const useDeletedMessage = (socket: Socket) => {
	const { deleteMessage } = chatStore

	useEffect(() => {
		socket.on('deleted message', async (data: Message) => {
			try {
				if (isEmpty(data)) return

				deleteMessage(data)
			} catch (e) {
				console.error(e)
			}
		})
	}, [socket])
}
