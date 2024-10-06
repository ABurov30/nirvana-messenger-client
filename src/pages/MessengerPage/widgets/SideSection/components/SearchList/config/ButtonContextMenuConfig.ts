//@ts-nocheck
import { t } from 'i18next'
import { v4 as uuidv4 } from 'uuid'
import { addContact } from '../../../../../../../entities/contact/actions'
import { User } from '../../../../../../../entities/user/types'
import { Button } from '../../../../../../../shared/UI/ContextMenu/types'

export const ButtonsContextMenuConfig = (user: User): Button[] => {
	return [
		{
			id: uuidv4(),
			text: t('addContact'),
			handler: () => addContact(user),
			conditionToShow: true
		}
	]
}
