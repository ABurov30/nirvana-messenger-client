import isEmpty from 'lodash.isempty'
import { toJS } from 'mobx'
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
			text: 'Edit',
			handler: (e: Event) => startUpdateContactProcess(contact),
			conditionToShow: true
		},
		{
			text: 'Delete',
			handler: (e: Event) => deleteContact(contact.id),
			conditionToShow: true
		}
	]
}
