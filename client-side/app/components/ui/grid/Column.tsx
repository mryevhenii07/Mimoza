import React,{FC, PropsWithChildren} from 'react'
import cn from 'clsx';


interface IColumn {
  size:number
  isCenter?:boolean
  className?:string
  isPadding?:boolean
 

}

const Column:FC<PropsWithChildren<IColumn>> = ({size,isCenter=true,className,isPadding=true,children}) => {
  return (
    <div style={{gridColumn:`span${size} / span${size} `}}
    // <div style={{gridColumn:`span${size} / span${size} `}}
    className= {cn(" 'border-r-2  border-solid border-black' h-full flex justify-center items-center ",
    {
      'justify-center':isCenter.valueOf,
      'p-3':isPadding,
     }
      ,className)} 
  
    >
      {children}
      </div>
  )
}

export default Column