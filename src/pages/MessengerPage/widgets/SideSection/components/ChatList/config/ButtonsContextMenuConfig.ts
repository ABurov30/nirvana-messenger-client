//@ts-nocheck
import { v4 as uuidv4 } from 'uuid'
import { Button } from '../../../../../../../shared/UI/ContextMenu/types'

import { t } from 'i18next'
import { deleteChat } from '../../../../../../../entities/chat/actions'
import { Chat } from '../../../../../../../entities/chat/types'

export const ButtonsContextMenuConfig = (chat: Chat): Button[] => {
	return [
		{
			id: uuidv4(),
			text: t('delete'),
			handler: (e: Event) => deleteChat(chat?.id),
			conditionToShow: true
		}
	]
}
