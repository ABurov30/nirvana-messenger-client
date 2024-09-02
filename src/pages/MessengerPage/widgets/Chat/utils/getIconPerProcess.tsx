
import EditIcon from '@mui/icons-material/Edit'
import { appStore } from '../../../../../entities/app/store'
import { Process } from '../../../../../entities/app/types'

export const getIconPerProcess = () => {
	const { process } = appStore
	switch (process) {
		case Process.editMessage:
			return <EditIcon />
		default:
			return
	}
}
