import React from 'react'
import logo from  '../../Assets/logo.png'
function Navbar() {
  return (
    <nav className='bg-white h-[60px] w-full shadow-md  px-7 py-2 flex items-center justify-between z-10 absolute'>
    <img src={logo} className='h-[45px]' alt="" />
    <div className='w-[250px] h-[40px] border-[3.5px] border-[#0A1048] flex items-center justify-center'>
        <p className='text-center font-bold'>How It Works</p>
    </div>
    </nav>
  )
}

export default Navbar
