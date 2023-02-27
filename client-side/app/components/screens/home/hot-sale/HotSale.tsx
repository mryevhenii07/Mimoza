import { formatToCurrency } from '@/utils/format-to-currency';
import React,{FC} from 'react'

const HotSale:FC = () => {
  return (
    <div className='text-white  px-8 pt-40 pb-16'>
    <div className='text-sm'>HOT SALE</div>
    <h1 className='text-5xl font-medium mt-5 mb-10'>A RED DRESS WILL <br /> BRIGHTEN UP YOUR EVENING</h1>
    <div className='flex justify-between items-center'>
      <div>
        <span className='font-normal text-2xl mr-2'> {formatToCurrency(195)}</span>
        <span className='line-through opacity-50 text-sm'> {formatToCurrency(295)} </span>
      </div>
        <button className=' uppercase text-white border-b border-white/20'> Buy now</button>
    </div>
    </div>)
}

export default HotSale