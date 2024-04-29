export interface ChatSectionProps extends React.HTMLProps<HTMLDivElement> {
	children: React.ReactNode[] | React.ReactNode
	isCurrent?: boolean
	isNewMessage?: boolean
}
