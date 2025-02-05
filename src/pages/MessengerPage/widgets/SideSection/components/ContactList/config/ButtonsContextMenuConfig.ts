//@ts-nocheck
import { v4 as uuidv4 } from 'uuid'
import { deleteContact } from '../../../../../../../entities/contact/actions'
import { Contact } from '../../../../../../../entities/contact/types'
import { Button } from '../../../../../../../shared/UI/ContextMenu/types'

import { t } from 'i18next'
import { appStore } from '../../../../../../../entities/app/store'

export const ButtonsContextMenuConfig = (contact: Contact): Button[] => {
	const { startUpdateContactProcess } = appStore

	return [
		{
			id: uuidv4(),
			text: t('edit'),
			handler: (e: Event) => startUpdateContactProcess(contact),
			conditionToShow: true
		},
		{
			id: uuidv4(),
			text: t('delete'),
			handler: (e: Event) => deleteContact(contact?.id),
			conditionToShow: true
		}
	]
}
