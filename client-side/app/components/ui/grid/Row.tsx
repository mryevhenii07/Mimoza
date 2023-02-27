import React,{FC,PropsWithChildren} from 'react'
import cn from 'clsx'

interface IRow {
  // isBorder?:boolean
  className:string
}

const Row:FC<PropsWithChildren<IRow>> = ({children,className}) => {
  return (
    <div className={cn('border-b-2 border-black border-solid    ',className)}>
        {children}
    </div>
  )
}

export default Row