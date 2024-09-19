import { ReactNode } from 'react'

export interface ModalProps {
	isModalOpen: boolean
	setIsModalOpen: (arg: boolean) => void
	onConfirm: ((arg: unknown) => void) | ((arg: unknown) => Promise<void>)
	children: ReactNode
}
