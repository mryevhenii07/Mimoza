import SquareButton from '@/ui/square-button/SquareButton';
import React from 'react'

import {FaBell,FaShoppingCart,FaSearch} from 'react-icons/fa'

const HeaderButtons = () => {
  return (
    <div className='grid gap-3 grid-cols-3  '>
      <SquareButton Icon={FaSearch} onClick={()=>{}}/>
      <SquareButton Icon={FaBell} onClick={()=>{}}/>
      <SquareButton Icon={FaShoppingCart} onClick={()=>{}} number={1}/>
    </div>
  )
}

export default HeaderButtons