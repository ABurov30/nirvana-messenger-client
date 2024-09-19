import { Message } from '../../../../entities/message/types'
import { userStore } from '../../../../entities/user/store'
import { Button } from '../../ContextMenu/types'

import { v4 as uuidv4 } from 'uuid'
import { appStore } from '../../../../entities/app/store'
import { deleteMessage } from '../../../../entities/message/actions'

export const ButtonsContextMenuConfig = (message: Message): Button[] => {
	const { entity: user } = userStore
	const { startUpdateMessageProcess } = appStore

	return [
		{
			id: uuidv4(),
			text: 'Edit',
			handler: () => startUpdateMessageProcess(message),
			conditionToShow: user?.id === message.userId
		},
		{
			id: uuidv4(),
			text: 'Delete',
			handler: (e: Event) => deleteMessage(message),
			conditionToShow: user?.id === message.userId
		}
	]
}
