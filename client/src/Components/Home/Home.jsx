import React from 'react'
import Login from '../User/Login'
import logo from  '../../Assets/logo.png'
import clouds from '../../Assets/clouds.png'
import ItemHome from './ItemHome'
import Navbar from '../NavBar/Navbar'
import ItemList from '../Item/ItemList'
// import cloud1 from '../../Assets/cloud1.png'
// import cloud2 from '../../Assets/cloud2.png'

// bg-[#0A1048] 

function Home() {
    return (
        <div className='relative w-full h-screen'>  
    
        {/* <img src={clouds} className='absolute -z-0 bottom-0 w-full' alt="" /> */}
        {/* <img src={cloud1} className='absolute -z-0 w-[140px] top-[180px] left-[250px]' alt="" />
        <img src={cloud2} className='absolute -z-0 top-[180px] right-[250px]' alt="" /> */}
        {/* <Navbar/> */}
        <ItemList/>
        </div>
      )
}

export default Home



//    <div className='bg-[#fffff] w-screen h-screen flex items-center flex-col relative object-cover'>  
    
//         {/* <img src={clouds} className='absolute -z-0 bottom-0 w-full' alt="" /> */}
//         {/* <img src={cloud1} className='absolute -z-0 w-[140px] top-[180px] left-[250px]' alt="" />
//         <img src={cloud2} className='absolute -z-0 top-[180px] right-[250px]' alt="" /> */}
//         <Navbar/>
//         <ItemHome/>
//         </div>
