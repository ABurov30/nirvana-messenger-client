import { Button, ContextMenuPosition } from '../ContextMenu/types'

export interface CardProps {
	title: string
	subtitle?: string
	onSelection?: () => void
	entity?: Entity
	activeEntity?: Entity
	ButtonsContextMenuConfig?: (arg: Entity) => Button[]
	onContextMenu: (e: Event) => void
	setIsContextMenuOpen?: (arg: boolean) => void
	isContextMenuOpen?: boolean
	MenuPosition?: ContextMenuPosition
	isModalOpen?: boolean
	setIsModalOpen?: (arg: boolean) => void
	onModalConfirm?: (arg: Entity) => Promise<void>
}
