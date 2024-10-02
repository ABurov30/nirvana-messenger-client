import { v4 as uuidv4 } from 'uuid'
import { deleteContact } from '../../../../../../../entities/contact/actions'
import { Button } from '../../../../../../../shared/UI/ContextMenu/types'

import { Chat } from '../../../../../../../entities/chat/types'
import { deleteChat } from '../../../../../../../entities/chat/actions'

export const ButtonsContextMenuConfig = (chat: Chat): Button[] => {
	return [
		{
			id: uuidv4(),
			text: 'Delete',
			handler: (e: Event) => deleteChat(chat?.id),
			conditionToShow: true
		}
	]
}
