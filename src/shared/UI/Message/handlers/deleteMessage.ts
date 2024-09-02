import { appStore } from '../../../../entities/app/store'
import { chatStore } from '../../../../entities/chat/store'

import { Message } from '../../../../entities/message/types'
import { cancelProcess } from '../../../../pages/MessengerPage/widgets/Chat/handlers/cancelProcess'

export const deleteMessage = async (message: Message) => {
	const { deleteMessage } = chatStore
	const { socket } = appStore

	socket.emit('delete message', message)

	deleteMessage(message)

	cancelProcess()
}
