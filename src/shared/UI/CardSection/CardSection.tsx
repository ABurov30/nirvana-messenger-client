import React from 'react'

import { CardSectionProps } from './type'

import { observer } from 'mobx-react-lite'
import styles from './CardSection.module.scss'

const CardSection = observer(({ children }: CardSectionProps) => {
	const childrenWithProps = React.Children.map(children, child => {
		if (React.isValidElement(child)) {
			return React.cloneElement(child, {} as React.Attributes)
		}
		return child
	})
	return <div className={styles.CardSection}>{childrenWithProps}</div>
})

export default CardSection
