export interface CardSectionProps extends React.HTMLProps<HTMLDivElement> {
	children: React.ReactNode[] | React.ReactNode
	isCurrent?: boolean
	isNewMessage?: boolean
}
