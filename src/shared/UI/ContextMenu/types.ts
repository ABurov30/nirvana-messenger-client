export interface ContextMenuProps {
	isModalOpen: boolean
	setIsModalOpen: (arg: boolean) => void
	buttons?: Button[]
	position: ContextMenuPosition
}

export interface Button {
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
