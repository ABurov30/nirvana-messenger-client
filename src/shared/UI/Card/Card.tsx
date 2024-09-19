import { Avatar } from '@mui/material'
import { Typography } from 'nirvana-uikit'
import React, { MouseEvent, useState } from 'react'

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
	children
}: CardProps) => {
	const [isContextMenuOpen, setIsContextMenuOpen] = useState(false)
	const onContextMenu = (e: MouseEvent<any>) => {
		e.preventDefault()
		setIsContextMenuOpen(prev => !prev)
	}

	const contextMenu = React.Children.toArray(children).find(
		child => child.type === ContextMenu
	)

	const contextMenuWithProps = React.isValidElement(contextMenu)
		? React.cloneElement(contextMenu, {
				isOpen: isContextMenuOpen,
				setIsOpen: setIsContextMenuOpen
		  } as React.Attributes)
		: contextMenu

	const modal = React.Children.toArray(children).find(
		child => child.type === Modal
	)

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
				{/* {isContextMenuOpen && ButtonsContextMenuConfig ? (
					<ContextMenu
						isModalOpen={isContextMenuOpen}
						setIsModalOpen={setIsContextMenuOpen}
						buttons={ButtonsContextMenuConfig(entity)}
						position={MenuPosition}
					/>
				) : null} */}
				{contextMenuWithProps}
			</div>
			{modal}
		</div>
	)
}
