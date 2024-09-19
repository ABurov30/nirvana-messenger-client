import { ReactNode } from 'react'

export interface CardProps {
	title: string
	subtitle?: string
	onSelection?: () => void
	entity?: Entity
	activeEntity?: Entity
	// ButtonsContextMenuConfig?: (arg: Entity) => Button[]
	// onContextMenu: (e: MouseEvent<any>) => void
	// setIsContextMenuOpen?: (arg: boolean) => void
	// isContextMenuOpen?: boolean
	// MenuPosition?: ContextMenuPosition
	children?: ReactNode
}
