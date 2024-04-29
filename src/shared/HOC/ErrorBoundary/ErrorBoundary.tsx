import { Component, ErrorInfo, ReactNode } from 'react'


import { IProps, IState } from './types'
import { Alert } from 'antd'

export class ErrorBoundary extends Component<IProps, IState> {
	constructor(props: IProps) {
		super(props)
		this.state = { hasError: false, error: null }
	}

	static getDerivedStateFromError(error: Error) {
		return { hasError: true, error: error }
	}

	componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
		console.error({ Error: error, ErrorInfo: errorInfo })
	}

	render(): ReactNode {
		if (this.state.hasError) {
			return <Alert type='error' message='Something went wrong'/>
		}
		return this.props.children
	}
}
