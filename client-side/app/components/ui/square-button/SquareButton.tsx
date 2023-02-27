import React,{FC} from 'react'
import { IconType } from 'react-icons';
import {AiFillChrome} from 'react-icons/ai'

interface ISquareButton {
    Icon:IconType,
    onClick?:()=>void;
    number?:number
}

const SquareButton:FC<ISquareButton> = ({Icon,onClick,number}) => {
  return (
   
        <button onClick={onClick} className="h-10 w-10 bg-black flex justify-center items-center hover:bg-[#212121] transition-colors duration-200 relative"> 
      {!!number && (<span className=' flex h-4 w-4 items-center justify-center rounded-full bg-[red] p-0.5 text-[0.70rem] text-white absolute -top-1 -right-1'>{number}</span>)}
        <Icon color="7D7D7D" size={18}/> 
        </button>
       
    
  )
}

export default SquareButton