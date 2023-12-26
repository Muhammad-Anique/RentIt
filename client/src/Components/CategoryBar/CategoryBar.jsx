import React from 'react'
import '../../Assets/fonts.css'
import '../../Assets/scrollbar.css'

import Categories from './Categories'; // Update the path as needed
import { Link } from 'react-router-dom';

function CategoryBar(props) {

 var Cat= "Electronics & Home Appliances";

 if(props.Id == 1 || props.Id >=1000 &&  props.Id <2000 ){
  Cat= "Electronics & Home Appliances";
 }
 else if(props.Id == 2 || props.Id >=2000 &&  props.Id <3000 ){
  Cat= "Books, Hobbies & Sports";
 } 
 else if(props.Id == 3 || props.Id >=3000 &&  props.Id <4000 ){
  Cat= "Fashion & Beauty";}

 else if(props.Id == 4 || props.Id >=4000 &&  props.Id <5000 ){
  Cat= "Furniture & Home Decor";
 }
 else if(props.Id == 5 || props.Id >=5000 &&  props.Id <6000 ){
  Cat= "Kids";
 }
 
 const Category = Categories[Cat];
 
  
  return (
    <div className=' w-full h-[95px]  border-b-[#eeeeee] border-b-2 flex flex-row items-center justify-center shadow-sm gap-7 px-6  mt-[80px]'>

      {
        props.Id==999999  ? (<div className='w-full scroll-container overflow-y-hidden h-full py-5 flex justify-center items-center flex-row gap-5'>
    
    <Link to='/' className='hover:text-[#295cd3] mt-2'>
       <div className='flex flex-row gap-3 items-center'>
       <span class="material-symbols-outlined">
       Kitchen
       </span>
         <p>Electronics & Home Appliances</p>
       </div>
       </Link>
 
 
       <Link to='/' className='hover:text-[#295cd3]'>
       <div className='flex flex-row gap-3 items-center'>
       <span class="material-symbols-outlined">
      sports_basketball
       </span>
         <p>Books, Hobbies & Sports</p>
       </div>
       </Link>
 
 
       <Link to='/' className='hover:text-[#295cd3]'>
       <div className='flex flex-row gap-3 items-center'>
       <span class="material-symbols-outlined">
      apparel
       </span>
         <p>Fashion & Beauty</p>
       </div>
       </Link>
 
 
 
       <Link to='/' className='hover:text-[#295cd3]'>
       <div className='flex flex-row gap-3 items-center'>
       <span class="material-symbols-outlined">
      chair
       </span>
         <p>Furniture & Home Decor</p>
       </div>
       </Link>
 
 
       <Link to='/' className='hover:text-[#295cd3]'>
       <div className='flex flex-row gap-3 items-center'>
       <span class="material-symbols-outlined">
       stroller
       </span>
         <p>Furniture & Home Decor</p>
       </div>
       </Link>
      
      
     </div>) : (<div className='w-full scroll-container overflow-y-hidden h-full py-5 flex justify-center items-center flex-row gap-5'>
        {Category.map((subCategory, index) => (
          <div key={index} className='flex justify-center items-center  text-[#4b4b4b] hover:text-[#295CD3] cursor-pointer'>
              <Link to={subCategory.link} className='flex justify-center items-center flex-col '>
                <span className="material-symbols-outlined">{subCategory.gIcon}</span> 
                <p className='text-xs text-center mt-1 lh_'>{subCategory.name}</p>
              </Link>
          </div>
        ))}
      </div>) 
      }   
    </div>
  )
}

export default CategoryBar
