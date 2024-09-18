import ChatIcon from '@mui/icons-material/Chat'
import ContactPageIcon from '@mui/icons-material/ContactPage'
import SearchIcon from '@mui/icons-material/Search'
import { Spin } from 'antd'
import { observer } from 'mobx-react-lite'
import { appStore } from '../../../../entities/app/store'
import { MenuMode } from '../../../../entities/app/types'
import CardSection from '../../../../shared/UI/CardSection/CardSection'
import { getEntityListByMenuMode } from '../../utils/getEntityListByMenuMode'
import { setEntityByMenuMode } from '../../utils/setEntityByMenuMode'
import { useQueryByMenuMode } from '../../utils/useQueryByMenuMode'
import styles from './SideSection.module.scss'

const SideSection = observer(() => {
	const { menuMode, setMenuMode } = appStore
	const { data, loading } = useQueryByMenuMode()

	setEntityByMenuMode(data, loading)
	console.log(loading, 'loading')
	return (
		<div className={styles.sideSection}>
			<CardSection>
				{loading ? <Spin /> : getEntityListByMenuMode()}
			</CardSection>
			<div className={styles.menuSection}>
				<button
					className={`${styles.menuButton} ${
						menuMode === MenuMode.contact
							? styles.currentMenuButton
							: ''
					}`}
					onClick={() => setMenuMode(MenuMode.contact)}
				>
					<ContactPageIcon />
				</button>
				<button
					className={`${styles.menuButton} ${
						menuMode === MenuMode.chat
							? styles.currentMenuButton
							: ''
					}`}
					onClick={() => setMenuMode(MenuMode.chat)}
				>
					<ChatIcon />
				</button>
				<button
					className={`${styles.menuButton} ${
						menuMode === MenuMode.search
							? styles.currentMenuButton
							: ''
					}`}
					onClick={() => setMenuMode(MenuMode.search)}
				>
					<SearchIcon />
				</button>
			</div>
		</div>
	)
})

export default SideSection
