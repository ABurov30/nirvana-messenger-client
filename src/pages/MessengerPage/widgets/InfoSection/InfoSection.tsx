import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { Avatar } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { appStore } from '../../../../entities/app/store'
import { CancelButton } from '../../../../shared/UI/Buttons/CancelButton'
import { EditButton } from '../../../../shared/UI/Buttons/EditButton'

import { Card } from '../../../../shared/UI/Card/Card'
import styles from './InfoSection.module.scss'

const InfoSection = observer(() => {
	const { isInfoSectionOpen, setIsInfoSectionOpen, activeChat } = appStore

	return (
		<>
			{isInfoSectionOpen && (
				<div className={styles.container}>
					<div className={styles.header}>
						<CancelButton
							onClick={() => setIsInfoSectionOpen(false)}
						/>
						<Typography
							text={'Info'}
							fontSize="1.2em"
							weight="semibold"
						/>
						<EditButton onClick={() => {}} />
					</div>
					<div className={styles.avatarContainer}>
						<Avatar
							sx={{ width: '90%', height: '90%' }}
							alt={activeChat?.name}
							variant="rounded"
						>
							{activeChat?.name ? activeChat?.name[0] : ''}
						</Avatar>
					</div>
					<div className={styles.nameContainer}>
						<AlternateEmailIcon />
						<div className={styles.nameContainerText}>
							<Typography
								text={activeChat?.name}
								fontSize="1.2em"
								weight="semibold"
							/>
							<Typography
								text={'Name'}
								fontSize="0.8em"
								weight="regular"
							/>
						</div>
					</div>
					<div className={styles.membersContainer}>
						<Typography
							text={'Members'}
							fontSize="1em"
							weight="semibold"
						/>
						<div className={styles.members}>
							{activeChat?.members.map(member => (
								<Card entity={member} title={member.nickname} />
							))}
						</div>
					</div>
				</div>
			)}
		</>
	)
})

export default InfoSection
