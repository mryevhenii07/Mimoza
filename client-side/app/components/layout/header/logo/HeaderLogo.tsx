import Column from '@/ui/grid/Column';
import Link from 'next/link';
import Image from 'next/image';
import React from 'react'

const HeaderLogo = () => {
  return (
    <Column size={2}  > 
 
    {/* <div className='border-2 border-black border-solid flex justify-center items-center'> */}
    <Link href='/' className='flex items-center pl-13 '>
				<Image 
					src='/images/logo.svg'
					width={100}
					height={100}
					alt='Xmas shop'
          className='mr-2'
				/>
			</Link>
            <span>
                <span className='text-white  block font-light tracking-[0.1em] '>MIMOZA</span>
                <span className='tracking-[0.4em] text-m text-dark-gray block font-extralight'>STORE</span>
            </span>
      
    </Column>
  )
}

export default HeaderLogo