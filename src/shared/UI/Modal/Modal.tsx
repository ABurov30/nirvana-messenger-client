import { Avatar } from '@mui/material'
import { Typography } from 'nirvana-uikit'
import { useState } from 'react'
import { CancelButton } from '../Buttons/CancelButton'
import { ConfirmButton } from '../Buttons/ConfirmButton'
import styles from './Modal.module.scss'
import { ModalProps } from './types'

export const Modal = ({
	isModalOpen,
	setIsModalOpen,
	entity,
	onConfirm
}: ModalProps) => {
	const [value, setValue] = useState(entity)

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
										onConfirm(value)
										setIsModalOpen(false)
									}}
								/>
							</div>
							<div className={styles.nameContainer}>
								<Avatar
									sx={{ padding: '10%' }}
									alt={entity?.name}
								>
									{entity?.name ? entity?.name[0] : ''}
								</Avatar>
								<div className={styles.inputContainer}>
									<Typography
										fontSize="1em"
										weight="semibold"
										text="Name"
									/>
									<input
										defaultValue={entity?.name}
										value={value?.name}
										onChange={e =>
											setValue(prev => ({
												...prev,
												name: e.target.value
											}))
										}
									/>
								</div>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	)
}
