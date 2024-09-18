import isEmpty from 'lodash.isempty'

import { useEffect } from 'react'
import { Socket } from 'socket.io-client'
import { chatStore } from '../../../../../entities/chat/store'
import { Message } from '../../../../../entities/message/types'

export const useUpdatedMessage = (socket: Socket) => {
	const { updateMessage } = chatStore

	useEffect(() => {
		console.log('updated message')
		socket.on('updated message', async (data: Message) => {
			try {
				if (isEmpty(data)) return

				// updateMessage(data)
			} catch (e) {
				console.error(e)
			}
		})
	}, [socket])
}
