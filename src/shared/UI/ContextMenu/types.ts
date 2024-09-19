export interface ContextMenuProps {
	isOpen?: boolean
	setIsOpen?: (arg: boolean) => void
	buttons: Button[]
	position?: ContextMenuPosition
}

export interface Button {
	id: string
	text: string
	handler: (e: Event) => void
	conditionToShow: boolean
}

export enum ContextMenuPosition {
	left = 'left',
	right = 'right',
	top = 'top',
	bottom = 'bottom'
}
