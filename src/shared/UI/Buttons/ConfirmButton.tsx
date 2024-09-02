import CheckIcon from '@mui/icons-material/Check'
import styles from './Button.module.scss'
import { ButtonProps } from './types'


export const ConfirmButton = ({ onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<CheckIcon />
		</button>
	)
}
