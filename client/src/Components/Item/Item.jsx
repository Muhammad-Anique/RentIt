import React from 'react'
import '../../Assets/fonts.css'

function Item(props) {
  return (
    <div className='w-[250px] h-[300px] hover:scale-105 ease-in-out duration-200  flex flex-col cursor-pointer' >
       <div class=' rounded-2xl w-full h-[70%] overflow-hidden'>
            <img src="https://img.mensxp.com/media/content/2015/Dec/outrageous-reasons-why-clothes-from-high-street-brands-are-so-cheap980-1449570771.jpg" 
                class='object-cover w-full h-full' 
                alt="" />
        </div>
        <div className='lh_ px-2 py-1 mt-2'>
            <div className='flex flex-row justify-between items-center'>
            <h1 className='font-medium line-clamp-4 text-xs'>The used winter clothes </h1>
            <p className='font-bold text-xs'>4.9</p>
            </div>
            <p className='text-[8px] text-[#4b4b4b] mt-[3px]'>Lahore, Punjab</p>
            <p className='text-[8px] text-[#4b4b4b] mt-[1.5px]'>26th Jan 2015</p>
            <p className='font-bold text-xs text-[#295CD3] mt-1'> Rs. 495/-</p>
        </div>
    </div>
  )
}

export default Item
