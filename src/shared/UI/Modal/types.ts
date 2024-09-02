export interface ModalProps {
	isModalOpen: boolean
	setIsModalOpen: (arg: boolean) => void
	onConfirm: (arg: Entity) => void
	entity: Entity
}
