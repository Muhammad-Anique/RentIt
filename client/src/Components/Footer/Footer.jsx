import React from 'react'

function Footer() {
  return (
   

    <div className='w-full h-[500px] bg-[#f5f5f5] flex flex-col justify-between px-[200px] py-[60px]'>

    <div className='w-full flex flex-row items-baseline justify-between'>
        
    <div className='flex flex-col justify-center'>
        <p className='font-bold'>RentIt</p>
        <a className='text-sm mt-2' href="">Home</a>
        <a className='text-sm'  href="">About</a>
        <a className='text-sm' href="">Contact</a>
        <a className='text-sm' href="">Terms & Condition</a>
        <a className='text-sm' href="">Privacy</a>
       
    </div>
    <div className='flex flex-col justify-center'>
        <p className='font-bold'>Locations</p>
        <a className='text-sm mt-2' href="">Lahore</a>
        <a className='text-sm' href="">Karachi</a>
        <a className='text-sm' href="">Islamabad</a>
        <a  className='text-sm' href="">Multan</a>
        <a  className='text-sm' href="">Peshawar</a>
    </div>
   
    <div className='flex flex-col justify-center'>
        <p className='font-bold'>Categories</p>
        <a className='text-sm mt-2'  href="">Electronic & Home Apliances</a>
        <a className='text-sm'  href="">Books, Hobbies & Sports</a>
        <a className='text-sm'  href="">Fashion & Beauty</a>
        <a className='text-sm'  href="">Furniture & Home Decor</a>
        <a  className='text-sm' href="">Kids & BabyGear</a>
       
    </div>
    <div className='flex flex-col justify-center'>
        <p className='font-bold'>Explore</p>
        <a className='text-sm mt-2'  href="">Camera Equipment</a>
        <a className='text-sm'  href="">Sports Equipment</a>
        <a className='text-sm'  href="">Baby Gear</a>
        <a className='text-sm'  href="">Books & Magazines</a>
        <a  className='text-sm' href="">Clothes</a>
       
    </div>

    <div className='flex flex-col justify-center'>
        <p className='font-bold'>FYP Details</p>
        <a className='text-sm mt-2'  href=""> Muhammad Anique</a>
        <a className='text-sm'  href="">Kaashaan Ali Karim</a>
        <a className='text-sm'  href="">Hammad Zahoor</a>
        <a className='text-sm'  href="">FYP-1 Prototype</a>
  
       
    </div>

    </div>


    <div className='w-[full] h-[2px] mt-10 bg-gray-200'>
      

      </div>

      <p className='text-center text-sm mt-1'>
         &#169;2023 RentIt. All copyrights reserved by team RentIt
      </p>

    


</div>

  )
}

export default Footer
