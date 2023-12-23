import React from 'react'
import adven from '../../Assets/adven.png'
import '../Home/fonts.css'
import EandH from '../../Assets/EandH.jpg'
function ItemHome() {
  return (
    // <div className='flex flex-col justify-center w-screen items-center overflow-x-hidden '>
    // <div className='h-screen overflow-x-hidden'>
    //     <img src={adven} className='absolute z-0 right-0 w-[500px] bottom-0 ' alt="" /> 
    // </div>
    // <div className=' bg-red-200 h-screen overflow-x-hidden'>
    //     <h1>eoimeodiemodiemdomio</h1>

    // </div>
    // </div>
   


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




        <div className='bg-white w-full h-screen flex flex-col justify-center items-center px-10 py-10'>
            <div className=' w-[80%] relative'> 
             <h1 className=' font-bold text-xl'>Browse by Category</h1>
             <div className='bg-[#295CD3] opacity-10 w-[180px] h-[15px] absolute translate-y-[-10px] translate-x-[20px]'></div>
            </div>
          
            <div className='flex flex-row w-[80%] items-center justify-center gap-7 mt-10'>
            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15] ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px]  overflow-hidden bg-white rounded-t-2xl'>
                <img src={EandH} className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2 '>Electronics & <br /> Home Appliances</p>
            </div>
           
            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15]   ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://secure.touchnet.com/C20175_ustores/web/uploaded_images/store_54/Sports_Image.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Books, Hobbies & <br />Sports</p>
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15] ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://img.mensxp.com/media/content/2015/Dec/outrageous-reasons-why-clothes-from-high-street-brands-are-so-cheap980-1449570771.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Fashion & <br /> Beauty</p>
           
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15]  ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://static.vecteezy.com/system/resources/previews/022/819/321/non_2x/interior-background-of-living-room-with-stucco-wall-vase-with-twig-on-decorative-accent-coffee-table-empty-mock-up-wall-and-wooden-flooring-pendant-light-modern-home-decor-ai-generated-free-photo.jpeg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Furniture & <br /> Home Decor</p>
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl hover:scale-[1.15]  ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1659997704/hello-baby/Baby_Gear_Save_vs._Splurge.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Kids & <br /> BabyGear</p>
            </div>
            </div>
        </div>




        <div className='bg-white w-full h-screen flex flex-col justify-center items-center px-10 py-10'>
            <div className=' w-[80%] relative'> 
             <h1 className=' font-bold text-xl'>Browse by Area</h1>
             <div className='bg-[#295CD3] opacity-10 w-[180px] h-[15px] absolute translate-y-[-10px] translate-x-[20px]'></div>
            </div>
          
            <div className='flex flex-row w-[80%] items-center justify-center gap-7 mt-5'>
            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15] ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px]  overflow-hidden bg-white rounded-t-2xl'>
                <img src={EandH} className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2 '>Lahore</p>
            </div>
           
            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15]   ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://secure.touchnet.com/C20175_ustores/web/uploaded_images/store_54/Sports_Image.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Islamabad</p>
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15] ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://img.mensxp.com/media/content/2015/Dec/outrageous-reasons-why-clothes-from-high-street-brands-are-so-cheap980-1449570771.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Karachi</p>
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl  hover:scale-[1.15]  ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://static.vecteezy.com/system/resources/previews/022/819/321/non_2x/interior-background-of-living-room-with-stucco-wall-vase-with-twig-on-decorative-accent-coffee-table-empty-mock-up-wall-and-wooden-flooring-pendant-light-modern-home-decor-ai-generated-free-photo.jpeg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Quetta</p>
            </div>


            <div className='flex flex-col justify-center items-center shadow-md pb-2 rounded-b-2xl hover:scale-[1.15]  ease-in-out duration-300 hover:cursor-pointer'>
            <div className='w-[200px] h-[200px] rounded-t-2xl overflow-hidden bg-white'>
                <img src="https://res.cloudinary.com/babylist/image/upload/f_auto,q_auto:best,c_scale,w_768/v1659997704/hello-baby/Baby_Gear_Save_vs._Splurge.jpg" className='object-cover scale-[2.2] translate-y-[55px]' alt="" />         
            </div>
            <p className='text-[#4b4b4b] text-center mt-2'>Peshawar</p>
            </div>
            </div>
        </div>



        

    </div>
  )
}

export default ItemHome
