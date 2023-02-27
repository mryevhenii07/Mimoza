import SquareButton from '@/ui/square-button/SquareButton';
import React from 'react'
import {BiUser} from 'react-icons/bi'

const HeaderProfile = () => {
  return (
    <div className=' flex items-center '>
      <SquareButton Icon={BiUser} />
      <div className='ml-3'>
        <div className='text-gray text-sm' >
          Alex Musin
        </div>
      </div>
    </div>
  )
}

export default HeaderProfile