//@ts-nocheck
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail'
import { Avatar } from '@mui/material'
import { observer } from 'mobx-react-lite'
import { Typography } from 'nirvana-uikit'
import { appStore } from '../../../../entities/app/store'
import { CancelButton } from '../../../../shared/UI/Buttons/CancelButton'
import { EditButton } from '../../../../shared/UI/Buttons/EditButton'

import { t } from 'i18next'
import { chatStore } from '../../../../entities/chat/store'
import { userStore } from '../../../../entities/user/store'
import { AddButton } from '../../../../shared/UI/Buttons/AddButton'
import { DeleteMemberButton } from '../../../../shared/UI/Buttons/DeleteMemberButton'
import { Card } from '../../../../shared/UI/Card/Card'
import styles from './InfoSection.module.scss'

const InfoSection = observer(() => {
	const {
		isInfoSectionOpen,
		setIsInfoSectionOpen,
		activeChat,
		startAddMemberProcess,
		startUpdateChatProcess
	} = appStore
	const { deleteMember } = chatStore
	const { entity: user } = userStore
	return (
		<>
			{isInfoSectionOpen && (
				<div className={styles.container}>
					<div className={styles.header}>
						<CancelButton
							onClick={() => setIsInfoSectionOpen(false)}
						/>
						<Typography
							text={t('info')}
							fontSize="1.2em"
							weight="semibold"
						/>
						<EditButton
							onClick={() => startUpdateChatProcess(activeChat)}
						/>
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
								text={t('name')}
								fontSize="0.8em"
								weight="regular"
							/>
						</div>
					</div>
					<div className={styles.membersContainer}>
						<div className={styles.membersHeader}>
							<Typography
								text={t('members')}
								fontSize="1em"
								weight="semibold"
							/>
							<AddButton onClick={startAddMemberProcess} />
						</div>
						<div className={styles.members}>
							{activeChat?.members?.map(member => (
								<div key={member?.id} className={styles.member}>
									<Card
										entity={member}
										title={member.nickname}
									/>
									{member.id !== user?.id && (
										<DeleteMemberButton
											onClick={() =>
												deleteMember(member.id)
											}
										/>
									)}
								</div>
							))}
						</div>
					</div>
				</div>
			)}
		</>
	)
})

export default InfoSection
