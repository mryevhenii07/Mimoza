import Column from '@/ui/grid/Column';
import Row from '@/ui/grid/Row';
import React from 'react'

const HomeInformation = () => {
  return (
    <div className="flex w-full justify-between h-111  " >
      <Column size={4} className=" px-20 py-5 grid  border-t-2 border-r-2 solid border-black" >
        <div className='font-medium text-2xl text-white'>100k</div>
        <div className='text-gray text-sm'>Customers</div>
      </Column>
      <div className="border-t-2 solid  flex-col    border-black w-full p-7">
        <h3 className='text-white'>New collections</h3>
        <div className='text-sm mt-2'>The red dress was inspired by love of fashion</div>
      </div>
    </div>
  )
}

export default HomeInformation