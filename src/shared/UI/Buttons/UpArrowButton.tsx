import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp'
import styles from './Button.module.scss'
import { ButtonProps } from './types'

export const UpArrowButton = ({ onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<KeyboardArrowUpIcon />
		</button>
	)
}
