import React, { useState } from 'react'
import '../../Assets/input.css'

import clouds from '../../Assets/clouds.png'

import cloud1 from '../../Assets/cloud1.png'
import cloud2 from '../../Assets/cloud2.png'

import Navbar from '../NavBar/Navbar'
import { Link, useNavigate } from 'react-router-dom'

import Select from 'react-select'








function AddItem() {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
          const reader = new FileReader();
          reader.onload = () => {
              setSelectedImage(reader.result);
          };
          reader.readAsDataURL(file);
      }
  };


  return (
    
    <div className=' bg-[#0A1048] w-auto h-screen flex flex-center justify-center overflow-x-hidden'>  
    <img src={clouds} className='absolute -z-0 bottom-0 w-full' alt="" />
    <img src={cloud1} className='absolute -z-0 w-[140px] top-[180px] left-[250px]' alt="" />
    <img src={cloud2} className='absolute -z-0 top-[180px] right-[250px]' alt="" />
   
    <div className='bg-white rounded-3xl w-[1200px] h-[550px] my-auto flex flex-col  items-center py-10 z-10'>
      <h1>
        Add Item
      </h1>

      <form action="" className='flex flex-row justify-center w-[100%] items-center gap-[20px] px-[150px] py-5'>
        <div className='flex flex-col w-[350px] '>
         <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Name</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemName" />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>Item Name</span>
            </span>
          </div>


          <div class="field field_v1 w-full flex flex-col gap-2">
            <label for="name" class="ha-screen-reader">Name</label>
            <p className='mt-5'> <span className='text-red-500'>*</span>Description</p>
            <textarea id="name" rows={5}  style={{ height: '5em' }} className="field__input"  placeholder="Camera" name="itemDescription" />
          </div>

          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Condition</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemCondition" />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>Item Condition</span>
            </span>
          </div>


          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Item Rent</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemRent" />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>Item Rent</span>
            </span>
          </div>

          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Item Rent</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemTerms" />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Item Terms & Conditions</span>
            </span>
          </div>


          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Item Rent</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemTerms" />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Usage Details</span>
            </span>
          </div>

        </div>

        <div className='w-[2px] h-full bg-[#dfdfdf]'>

        </div>

        <div className='flex flex-col gap-2 w-[350px]'>
        <p className='mt-2 text-xs'> <span className='text-red-500'>*</span>Main category</p>
        <Select options={options} />
        <p className='mt-2 text-xs'> <span className='text-red-500'>*</span>Sub Category</p>
        <Select options={options} />
        <p className='mt-2 text-xs'> <span className='text-red-500'>*</span>Type</p>
        <Select options={options} />
        <div className='h-[2px] w-full bg-[#d5d5d5]'>

        </div>
        <div class="field field_v1 w-full flex flex-col gap-2">
            <label for="name" class="ha-screen-reader">Name</label>
            <p className='mt-5'> <span className='text-red-500'>*</span>KeyWords</p>
            <textarea id="name" rows={5}  style={{ height: '5em' }} className="field__input"  placeholder="Camera" name="itemDescription" />
          </div>
       
        </div>

        <div className='w-[2px] h-full bg-[#dfdfdf]'>

        </div>

        <div className='flex flex-row flex-wrap gap-5 w-[300px]'>
            <div className='w-[100px] h-[100px]'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>

            <div className='w-[100px] h-[100px]'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>
            <div className='w-[100px] h-[100px]'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>
            <div className='w-[100px] h-[100px]'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>
            <div className='w-[100px] h-[100px]'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    id="fileInput"
                />
                <label htmlFor="fileInput" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage ? (
                        <img src={selectedImage} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>
            
        </div>
     
      </form>

    
    </div>     
    </div>
  )
}

export default AddItem
