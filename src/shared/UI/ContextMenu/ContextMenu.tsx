//@ts-nocheck
import styles from './ContextMenu.module.scss'
import { ContextMenuProps } from './types'

export const ContextMenu = ({
	isOpen,
	setIsOpen,
	buttons,
	position
}: ContextMenuProps) => {
	return (
		<>
			{isOpen && (
				<div className={styles.modal + ' ' + `${styles[position]}`}>
					{buttons?.length &&
						buttons.map(
							({ conditionToShow, handler, text, id }) => (
								<>
									{conditionToShow && (
										<button
											key={id}
											onClick={e => {
												handler(e)
												setIsOpen(false)
											}}
											className={styles.buttonModal}
										>
											{text}
										</button>
									)}
								</>
							)
						)}
				</div>
			)}
		</>
	)
}
