import { FC, useEffect } from 'react'

import Layout from '@/layout/Layout'

// import Heading from '@/ui/heading/Heading'
// import Heading from '../../layout/'

import { useActions } from '@/hooks/useActions'

const Thanks: FC = () => {
	const { reset } = useActions()

	useEffect(() => {
		reset()
	}, [])

	return (
		<Layout title='Thanks'>
			{/* <Heading>Thanks for payment!</Heading> */}
		</Layout>
	)
}

export default Thanks
