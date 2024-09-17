import { Avatar } from '@mui/material'
import { Typography } from 'nirvana-uikit'
import { MouseEvent, useState } from 'react'
import { ContextMenu } from '../ContextMenu/ContextMenu'
import { Modal } from '../Modal/Modal'
import styles from './Card.module.scss'
import { CardProps } from './types'

export const Card = ({
	title,
	subtitle,
	onSelection,
	entity,
	activeEntity,
	ButtonsContextMenuConfig,
	MenuPosition,
	isModalOpen,
	setIsModalOpen,
	onModalConfirm
}: CardProps) => {
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
	const onContextMenu = (e: MouseEvent<any>) => {
		e.preventDefault()
		setIsContextMenuOpen(prev => !prev)
	}
	return (
		<div
			className={`${styles.card} ${
				entity?.id === activeEntity?.id && styles.currentCard
			}`}
			onClick={onSelection}
			onContextMenu={e => onContextMenu(e)}
		>
			<Avatar sx={{ padding: '5px' }} alt={title}>
				{title[0]}
			</Avatar>
			<div className={styles.textContainer}>
				<div className={styles.titleContainer}>
					<Typography
						text={title}
						fontSize="1.2em"
						weight="semibold"
					/>
				</div>
				<div className={styles.subtitleContainer}>
					{subtitle ? (
						<Typography
							text={subtitle}
							fontSize="1em"
							weight="regular"
						/>
					) : null}
				</div>
				{isContextMenuOpen && ButtonsContextMenuConfig ? (
					<ContextMenu
						isModalOpen={isContextMenuOpen}
						setIsModalOpen={setIsContextMenuOpen}
						buttons={ButtonsContextMenuConfig(entity)}
						position={MenuPosition}
					/>
				) : null}
			</div>
			{isModalOpen ? (
				<Modal
					isModalOpen={isModalOpen}
					setIsModalOpen={setIsModalOpen}
					entity={entity}
					onConfirm={onModalConfirm}
				/>
			) : null}
		</div>
	)
}
