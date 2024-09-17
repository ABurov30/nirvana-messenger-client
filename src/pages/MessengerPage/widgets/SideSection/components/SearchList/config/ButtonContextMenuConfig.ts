import { addContact } from '../../../../../../../entities/contact/actions'
import { User } from '../../../../../../../entities/user/types'
import { Button } from '../../../../../../../shared/UI/ContextMenu/types'

export const ButtonsContextMenuConfig = (user: User): Button[] | undefined => {
	console.log(user, '0000000')
	return [
		{
			text: 'Add contact',
			handler: () => addContact(user),
			conditionToShow: true
		}
	]
}
