import isEmpty from 'lodash.isempty'
import { toJS } from 'mobx'
import { Message } from '../../../../entities/message/types'
import { userStore } from '../../../../entities/user/store'
import { Button } from '../../ContextMenu/types'
import { startUpdateMessageProcess } from '../handlers/startUpdateMessageProcess'

import { v4 as uuidv4 } from 'uuid'
import { deleteMessage } from '../../../../entities/message/actions'

export const ButtonsContextMenuConfig = (
	message: Message
): Button[] | undefined => {
	const { entity: user } = userStore
	if (isEmpty(toJS(user))) return
	return [
		{
			id: uuidv4(),
			text: 'Edit',
			handler: (e: Event) => startUpdateMessageProcess(e, message),
			conditionToShow: user.id === message.userId
		},
		{
			id: uuidv4(),
			text: 'Delete',
			handler: (e: Event) => deleteMessage(message),
			conditionToShow: user.id === message.userId
		}
	]
}
