import { Chat } from '../../../../entities/chat/types'
import { Message } from '../../../../entities/message/types'

export const onChatSelection = ({
	chat,
	setActiveChat,
	setMessageList,
	updateChatsList
}: onChatSelectionArgs) => {
	setActiveChat(chat)
	updateChatsList({ ...chat, isCurrent: true })
	setMessageList(chat?.messages ? chat?.messages : [])
}

type onChatSelectionArgs = {
	chat: Chat
	setActiveChat: (chat: Chat) => void
	setMessageList: (chat: Message[]) => void
	updateChatsList: (chat: Chat) => void
}
