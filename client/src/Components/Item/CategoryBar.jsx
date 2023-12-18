import React from 'react'
import '../Home/fonts.css'
import Categories from './Categories'; // Update the path as needed

function CategoryBar() {
 const electronicsCategory = Categories['Electronics & Home Appliances'];
 function splitTextByLimit(text, limit) {
    if (text.length <= limit) {
      return text;
    }
    
    // Find the index to split the text
    let splitIndex = limit;
    while (splitIndex > 0 && text[splitIndex] !== ' ') {
      splitIndex--;
    }
  
    // If no space found, split at the limit directly
    if (splitIndex === 0) {
      splitIndex = limit;
    }
  
    // Split the text
    const firstPart = text.slice(0, splitIndex);
    const secondPart = text.slice(splitIndex + 1);
  
    return (
        <>
        {firstPart}
        <br/>
        {secondPart}
        </>
    );
  }
  
  return (
    <div className=' w-full h-[75px] border-b-[#eeeeee] border-b-2 flex flex-row items-center justify-center shadow-sm gap-7 py-4'>
        {/* <div className='flex justify-center items-center flex-col text-[#4b4b4b] hover:text-[#295CD3] cursor-pointer  '>
            <span class="material-symbols-outlined">
            photo_camera
            </span>
            <h1 className=' text-xs text-center mt-1 lh_ '> Camera & <br/> Assceroies</h1>
        </div>

        <div className='flex justify-center items-center flex-col text-[#4b4b4b] hover:text-[#295CD3] cursor-pointer '>
        <span class="material-symbols-outlined">
            kitchen
            </span>
            <h1 className='text-xs text-center mt-1 lh_ '> Kitchen <br/> Appliances</h1>
        </div>


        <div className='flex justify-center items-center flex-col text-[#4b4b4b] hover:text-[#295CD3] cursor-pointer '>
        <span class="material-symbols-outlined">
            bolt
            </span>
            <h1 className='text-xs text-center mt-1 lh_ '> Kitchen <br/> Appliances</h1>
        </div>
         */}

    <div className='flex justify-center items-center flex-row gap-5'>
      {electronicsCategory.map((subCategory, index) => (
        <div key={index} className='flex justify-center items-center flex-col  text-[#4b4b4b] hover:text-[#295CD3] cursor-pointer'>
          {Object.keys(subCategory).map((title, titleIndex) => (
            <div key={titleIndex} className='flex justify-center items-center flex-col '>
              <span className="material-symbols-outlined">{subCategory[title]}</span> 
              <h1 className='text-xs text-center mt-1 lh_'>{splitTextByLimit(title, 10)}</h1>
            </div>
          ))}
        </div>
      ))}
    </div>
      
    </div>
  )
}

export default CategoryBar
