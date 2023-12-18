import React from 'react'
import logo from  '../../Assets/logo.png'
function Navbar_() {
  return (
    <nav className='bg-white h-[80px] w-full  px-[90px] py-2 flex items-center justify-between z-100 absolute border-b-2 border-b-[#eeeee]'>
    <div className='w-[20%]'>
    <img src={logo} className='h-[45px] ' alt="" />
    </div>
    
    <div className='w-[32%] h-[52px] relative'>
    <input type="text" className='text-black border-[2px] border-[#eeeeee] shadow-sm rounded-full w-full px-6 py-3 ml-7 bg-white' />
    <button className='absolute z-10 right-0 top-3 translate-x-2 scale-105'><span class="material-symbols-outlined rounded-full  p-1  text-[#295CD3]">search</span></button>
    </div>
  
   <div className='w-[20%]  flex justify-end'>

        <div className='text-[#4b4b4b] scale-125 '>
        <span class="material-symbols-outlined">
        account_circle
        </span>
        </div>
  
   </div>
    </nav>
  )
}

export default Navbar_
