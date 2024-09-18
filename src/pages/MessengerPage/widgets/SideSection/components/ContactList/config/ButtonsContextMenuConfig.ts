import isEmpty from 'lodash.isempty'
import { toJS } from 'mobx'
import { v4 as uuidv4 } from 'uuid'
import { deleteContact } from '../../../../../../../entities/contact/actions'
import { Contact } from '../../../../../../../entities/contact/types'
import { userStore } from '../../../../../../../entities/user/store'
import { Button } from '../../../../../../../shared/UI/ContextMenu/types'
import { startUpdateContactProcess } from '../handlers/startUpdateContactProcess'

export const ButtonsContextMenuConfig = (
	contact: Contact
): Button[] | undefined => {
	const { entity: user } = userStore
	if (isEmpty(toJS(user))) return []
	return [
		{
			id: uuidv4(),
			text: 'Edit',
			handler: (e: Event) => startUpdateContactProcess(contact),
			conditionToShow: true
		},
		{
			id: uuidv4(),
			text: 'Delete',
			handler: (e: Event) => deleteContact(contact.id),
			conditionToShow: true
		}
	]
}
