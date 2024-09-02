import EditIcon from '@mui/icons-material/Edit'
import styles from './Button.module.scss'
import { ButtonProps } from './types'

export const EditButton = ({ onClick }: ButtonProps) => {
	return (
		<button onClick={onClick} className={styles.button}>
			<EditIcon />
		</button>
	)
}
