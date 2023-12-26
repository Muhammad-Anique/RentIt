import React from 'react'

import clouds from '../../Assets/clouds.png'

import cloud1 from '../../Assets/cloud1.png'
import cloud2 from '../../Assets/cloud2.png'

import Navbar from '../NavBar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
function AddItem() {
  return (
    
    <div className=' bg-[#0A1048] w-auto h-screen flex flex-center justify-center overflow-x-hidden'>  
    <img src={clouds} className='absolute -z-0 bottom-0 w-full' alt="" />
    <img src={cloud1} className='absolute -z-0 w-[140px] top-[180px] left-[250px]' alt="" />
    <img src={cloud2} className='absolute -z-0 top-[180px] right-[250px]' alt="" />
   
    <div className='bg-white rounded-3xl w-[430px] h-[550px] my-auto flex flex-col justify-between items-center py-20 z-10'>
    
    </div>     
    </div>
  )
}

export default AddItem
