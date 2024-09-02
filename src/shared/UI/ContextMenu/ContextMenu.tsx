import styles from './ContextMenu.module.scss'
import { ContextMenuProps } from './types'

export const ContextMenu = ({
	isModalOpen,
	setIsModalOpen,
	buttons,
	position
}: ContextMenuProps) => {
	console.log(position, 'position')
	return (
		<>
			{isModalOpen && (
				<div className={styles.modal + ' ' + `${styles[position]}`}>
					{buttons?.length &&
						buttons.map(({ conditionToShow, handler, text }) => (
							<>
								{conditionToShow && (
									<button
										onClick={e => {
											handler(e)
											setIsModalOpen(false)
										}}
										className={styles.buttonModal}
									>
										{text}
									</button>
								)}
							</>
						))}
				</div>
			)}
		</>
	)
}
