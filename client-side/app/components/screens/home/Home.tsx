import { FC } from 'react'

import Layout from '@/layout/Layout'
import { IProductsPage } from '@/../pages'
import Loader from '@/ui/loader/Loader';
import Row from '@/ui/grid/Row';
import Column from '@/ui/grid/Column';
import Image from 'next/image'
import HotSale from './hot-sale/HotSale';
import HomeInformation from './home-information/HomeInformation';

const Home: FC<IProductsPage> = ({ products }) => {
	return (
		<Layout
			title='Home'
			description='More than just great coffee. Explore the menu, sign up for Starbucks® Rewards, manage your gift card and more.'
		>
			
			{/* <Row className='bg-dark-primary '> */}
			<div className='bg-dark-primary flex justify-center  '>
				<Column size={6} isPadding={false}>
					<Image src='/images/main-4x.png' alt='img' width={857} height={717}/>
				</Column>

				<Column size={5} isPadding={false} className="flex-col">
				<HotSale/>
			    <HomeInformation/>
				</Column>
				</div>
			{/* </Row> */}
			
		</Layout>
	)
}

export default Home
