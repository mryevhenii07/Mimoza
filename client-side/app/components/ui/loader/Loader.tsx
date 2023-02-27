
import { FC } from 'react'
import spinnerImg from './spinner.svg'
import { COLORS } from '@/config/color.config'

const Loader: FC = () => {
	return (
		<img src={spinnerImg.src} alt="spinner" width={200} height={200}/>
	)
}

export default Loader
