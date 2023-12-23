import React from 'react'
import logo from  '../../Assets/logo.png'
import clouds from '../../Assets/clouds.png'

import cloud1 from '../../Assets/cloud1.png'
import cloud2 from '../../Assets/cloud2.png'


import google from '../../Assets/google_l.png'
import Navbar from '../NavBar/Navbar'

function Register() {
  return (
   


<div className=' bg-[#0A1048] w-screen h-screen flex flex-center justify-center'>  
    
<img src={clouds} className='absolute -z-0 bottom-0 w-full' alt="" />
<img src={cloud1} className='absolute -z-0 w-[140px] top-[180px] left-[250px]' alt="" />
<img src={cloud2} className='absolute -z-0 top-[180px] right-[250px]' alt="" />
<Navbar/>
<div className='bg-white rounded-3xl w-[450px] h-[520px] my-auto flex flex-col justify-between items-center py-20 z-10'>
        <h1 className='text-center font-bold text-[#0A1048] text-4xl '>Welcome to <br /> RentIt</h1>
        <div className='w-[70%] flex flex-col justify-center items-center gap-2'>
        <div className='border-2 font-normal w-full h-[45px] flex flex-row justify-center items-center hover:bg-[#e6e6e9] '>
            <img src={google} className="h-[23px]" alt="" />
            <p className='text-[#4b4b4b] ml-2'>SignUp with Google</p>
        </div>
        <div className='border-2 font-normal w-full h-[45px] flex flex-row justify-center items-center hover:bg-[#e6e6e9]'>
            <span class="material-symbols-outlined text-[#4b4b4b]">
                mail
            </span>
            <p className='text-[#4b4b4b] ml-2'>SignUp with email</p>
        </div>
        </div>
        <p>Already have an account? <a className='text-[#0A1048] font-bold' href="">Login</a> </p>
    </div>     
 
</div>
  )
}

export default Register
