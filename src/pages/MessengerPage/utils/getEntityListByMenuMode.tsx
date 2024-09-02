import { appStore } from '../../../entities/app/store'
import { MenuMode } from '../../../entities/app/types'
import ChatList from '../widgets/SideSection/components/ChatList/ChatList'
import ContactList from '../widgets/SideSection/components/ContactList/ContactList'
import SearchList from '../widgets/SideSection/components/SearchList/SearchList'

export const getEntityListByMenuMode = () => {
	const { menuMode } = appStore
	switch (menuMode) {
		case MenuMode.contact:
			return <ContactList />
		case MenuMode.search:
			return <SearchList />
		default:
			return <ChatList />
	}
}
