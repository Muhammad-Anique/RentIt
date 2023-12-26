import React, { useState } from 'react'
import adven from '../../Assets/adven.png'
import '../../Assets/fonts.css'
import EandH from '../../Assets/EandH.jpg'
import Lahore from '../../Assets/Lahore.png'
import Multan from '../../Assets/Multan.png'
import Isl from '../../Assets/Islamabaad.png'
import Khi from '../../Assets/Karachi.png'
import Pwr from '../../Assets/Peshawar.png'
import Pr2 from '../../Assets/Pr2.svg'

import Pr1 from '../../Assets/Pr1.png'
import Navbar from '../NavBar/Navbar'
import Footer from '../Footer/Footer'
import { Link } from 'react-router-dom'



function Home() {
 


  return (
    <>
   


    <div className='flex flex-col w-full h-auto'>
        
        <div className='h-screen overflow-x-hidden relative '>
        <div className='absolute z-10 flex flex-col items-center justify-center ml-[17%] mt-[15%]'>
             <h1 className='text-[#0A1048] font-bold text-5xl text-center'>Rent <span className='gochi_ text-[#295CD3]'>Household </span> <br /> Item from People <br /> in your area </h1>
            <p className='text-[#4b4b4b] text-xl mt-5'>Borrow almost anything from people nearby <br /> for jobs at home, fun experiences or work.</p>
           <div className='relative'>
            <input type="text" className='w-[400px] h-[40px] border-2 rounded-full border-[#4b4b4b] mt-5 px-5 ' placeholder='Search'  ></input>
            <button className='absolute z-10 right-5 top-7'><span class="material-symbols-outlined text-[#295CD3]">search</span></button>
           </div>
        </div>
         <img src={adven} className='absolute z-0 right-0 w-[500px] bottom-0 ' alt="" /> 
        </div>




        <div className='bg-white w-full h-auto flex flex-col justify-center items-center px-10 py-[100px] gap-[100px]'>

            <div className='w-full h-auto flex flex-col justify-center items-center px-10 py-10'>
            <div className=' w-[80%] relative'> 
             <h1 className=' font-bold text-xl'>Browse by Category</h1>
             <div className='bg-[#295CD3] opacity-10 w-[180px] h-[15px] absolute translate-y-[-10px] translate-x-[20px]'></div>
            </div>
          
            <div className='flex flex-row w-[80%] items-center justify-center gap-7 mt-10'>
            <Link to='/Category/Id/1' className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15] ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px]  overflow-hidden bg-white rounded-t-2xl'>
                <img src={EandH} className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2 '>Electronics & <br /> Home Appliances</p>
            </Link>
           
            <Link to='/Category/Id/2' className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15]   ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://secure.touchnet.com/C20175_ustores/web/uploaded_images/store_54/Sports_Image.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Books, Hobbies & <br />Sports</p>
            </Link>


            <Link to='/Category/Id/3' className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15] ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://img.mensxp.com/media/content/2015/Dec/outrageous-reasons-why-clothes-from-high-street-brands-are-so-cheap980-1449570771.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Fashion & <br /> Beauty</p>
           
            </Link>


            <Link to='/Category/Id/4' className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15]  ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://static.vecteezy.com/system/resources/previews/022/819/321/non_2x/interior-background-of-living-room-with-stucco-wall-vase-with-twig-on-decorative-accent-coffee-table-empty-mock-up-wall-and-wooden-flooring-pendant-light-modern-home-decor-ai-generated-free-photo.jpeg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Furniture & <br /> Home Decor</p>
            </Link>


            <Link to='/Category/Id/5' className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl hover:scale-[1.15]  ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1659997704/hello-baby/Baby_Gear_Save_vs._Splurge.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Kids & <br /> BabyGear</p>
            </Link>
            </div>

            </div>



           <div className='flex w-full h-auto flex-row justify-center  items-center'>
            <div>
                <img src={Pr1} className='h-[450px] ' alt="" />
            </div>

            <div className='w-[500px] h-full ml-3'>
                <p className='text-3xl font-bold'>
                    Wanna Play <span className='text-[#295CD3]'>Sports</span>  and You Dont Have the Equipment? 
                </p>
                <p className='text-xl mt-4'> No need to worry. Find the perfect sports Equipment and Excel in Sports </p>
               
                <button className='bg-[#295CD3] mt-4 text-white px-6 py-2 font-bold'>Get Sports</button>


            </div>

           </div>



            <div className='w-full h-auto flex flex-col justify-center items-center px-10 py-10'>
            <div className=' w-[80%] relative'> 
             <h1 className=' font-bold text-xl'>Browse by Area</h1>
             <div className='bg-[#295CD3] opacity-10 w-[180px] h-[15px] absolute translate-y-[-10px] translate-x-[20px]'></div>
            </div>
          
            <div className='flex flex-row w-[80%] items-center justify-center gap-7 mt-5'>
            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  ease-in-out duration-300 hover:cursor-pointer'>
            <div
            className="w-[200px] h-[180px] overflow-hidden rounded-t-2xl relative"
            >
            <img
                src={Lahore} // Replace with your image source
                className='hover:opacity-50' 
                alt=""
            />
            </div>
            <p className='text-[#4b4b4b] text-center  '>Lahore</p>
            </div>
           


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl   ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[180px] rounded-t-2xl overflow-hidden bg-white'>
            <img
                src={Isl} // Replace with your image source
                className='hover:opacity-50' 
                alt=""
            />
            </div>
            <p className='text-[#4b4b4b] text-center'>Islamabad</p>
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[180px] rounded-t-2xl overflow-hidden bg-white'>
            <img
                src={Khi} // Replace with your image source
                className='hover:opacity-50' 
                alt=""
            />
            </div>
            <p className='text-[#4b4b4b] text-center '>Karachi</p>
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl    ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[180px] rounded-t-2xl overflow-hidden bg-white'>
            <img
                src={Multan} // Replace with your image source
                className='hover:opacity-50' 
                alt=""
            />
            </div>
            <p className='text-[#4b4b4b] text-center '>Multan</p>
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[180px] rounded-t-2xl overflow-hidden bg-white'>
            <img
                src={Pwr} // Replace with your image source
                className='hover:opacity-50' 
                alt=""
            />
            </div>
            <p className='text-[#4b4b4b] text-center '>Peshawar</p>
            </div>
            </div>
        </div>




        <div className='flex w-full h-auto flex-row justify-center mt-[50px]  items-center'>
           

            <div className='w-[500px] h-full ml-3'>
                <p className='text-3xl font-bold'>
                    Wanna Play <span className='text-[#295CD3]'>Sports</span>  and You Dont Have the Equipment? 
                </p>
                <p className='text-xl mt-4'> No need to worry. Find the perfect sports Equipment and Excel in Sports </p>
               
                <button className='bg-[#295CD3] mt-4 text-white px-6 py-2 font-bold'>Get Sports</button>


            </div>
            <div>
                <img src={Pr2} className='h-[450px] ' alt="" />
            </div>

        </div>



        
            
        </div>
    
            




       



        

    </div>
    </>
  )
}

export default Home
