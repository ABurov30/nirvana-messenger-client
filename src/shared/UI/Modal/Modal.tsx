import { CancelButton } from '../Buttons/CancelButton'
import { ConfirmButton } from '../Buttons/ConfirmButton'
import styles from './Modal.module.scss'
import { ModalProps } from './types'

export const Modal = ({
	isModalOpen,
	setIsModalOpen,
	onConfirm,
	children
}: ModalProps) => {
	return (
		<>
			{isModalOpen && (
				<>
					<div className={styles.shadow}></div>
					<div className={styles.container}>
						<div className={styles.form}>
							<div className={styles.header}>
								<CancelButton
									onClick={() => setIsModalOpen(false)}
								/>
								<ConfirmButton
									onClick={e => {
										onConfirm()
										setIsModalOpen(false)
									}}
								/>
							</div>
							{children}
						</div>
					</div>
				</>
			)}
		</>
	)
}
