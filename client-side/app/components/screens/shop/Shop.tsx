import React,{FC} from 'react'
import { IProductsPage } from '@/../pages';
import Layout from '@/layout/Layout';
import Column from '@/ui/grid/Column';

import Image from 'next/image'

const Shop:FC<IProductsPage> = ({products}) => {
    
    console.log(products);
    
  return (

    // <div>sa</div>
    <Layout
			title='Shop'
			description='Catalog clothing and accessories'>
			<div className='bg-dark-primary flex justify-center  '>
                {
                products.map((product) => (<Column key={product.id} size={6} isPadding={false}>
                    <div className='text-white'></div>
					<Image src={product.images[0]} alt={product.name} width={220} height={220}/>
                    <h2>{product.name}</h2>
                    <div>{product.price}</div>
                    <button>Add to cart</button>
				</Column>))
                }

				<Column size={5} isPadding={false} className="flex-col">
				{/* <HotSale/>
			    <HomeInformation/> */}
				</Column>
				</div>
			{/* </Row> */}
			
		</Layout>
  )
}

export default Shop