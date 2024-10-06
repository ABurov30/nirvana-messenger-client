//@ts-nocheck
import { Avatar } from '@mui/material'
import { t } from 'i18next'
import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { appStore } from '../../../../../entities/app/store'
import styles from './EditChatForm.module.scss'

export const EditChatForm = observer(() => {
	const { entityToUpdate, setEntityToUpdate } = appStore
	return (
		<div className={styles.nameContainer}>
			<Avatar sx={{ padding: '10%' }} alt={entityToUpdate?.name}>
				{entityToUpdate?.name ? entityToUpdate?.name[0] : ''}
			</Avatar>
			<div className={styles.inputContainer}>
				<Typography fontSize="1em" weight="semibold" text={t('name')} />
				<input
					value={entityToUpdate?.name}
					onChange={e => {
						setEntityToUpdate({
							...entityToUpdate,
							name: e.target.value
						})
					}}
				/>
			</div>
		</div>
	)
})
