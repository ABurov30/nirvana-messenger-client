import isEmpty from 'lodash.isempty'
import { toJS } from 'mobx'
import { Message } from '../../../../entities/message/types'
import { userStore } from '../../../../entities/user/store'
import { Button } from '../../ContextMenu/types'
import { deleteMessage } from '../handlers/deleteMessage'
import { startUpdateMessageProcess } from '../handlers/startUpdateMessageProcess'

export const ButtonsContextMenuConfig = (message: Message): Button[] | undefined => {
	const { entity: user } = userStore
	if (isEmpty(toJS(user))) return
	return [
		{
			text: 'Edit',
			handler: (e: Event) => startUpdateMessageProcess(e, message),
			conditionToShow: user.id === message.userId
		},
		{
			text: 'Delete',
			handler: (e: Event) => deleteMessage(message),
			conditionToShow: user.id === message.userId
		},
		{
			text: 'Reply',
			handler: (e: Event) => {},
			conditionToShow: true
		},
		{
			text: 'Forward',
			handler: (e: Event) => {},
			conditionToShow: true
		},
		{
			text: 'Select',
			handler: (e: Event) => {},
			conditionToShow: true
		},
		{
			text: 'Pin',
			handler: (e: Event) => {},
			conditionToShow: true
		}
	]
}
