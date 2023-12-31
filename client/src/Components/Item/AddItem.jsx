import React, { useEffect, useRef, useState } from 'react'
import '../../Assets/input.css'

import clouds from '../../Assets/clouds.png'

import cloud1 from '../../Assets/cloud1.png'
import cloud2 from '../../Assets/cloud2.png'

import Navbar from '../NavBar/Navbar'
import { Link, useNavigate } from 'react-router-dom'

import Select from 'react-select'







function AddItem() {

  



  const options0 = [
    { value: 'Electronics & Home Appliances', label: 'Electronics & Home Appliances' },
    { value: 'Books, Hobbies & Sports', label: 'Books, Hobbies & Sports' },
    { value: 'Furniture & Home Decor', label: 'Furniture & Home Decor' },
    { value: 'Fashion & Beauty', label: 'Fashion & Beauty' },
    { value: 'Kids', label: 'Kids' },
  ];

  
  
  const options1 = [
    { value: 'Kitchen Appliances', label: 'Kitchen Appliances' },
    { value: 'Computers Accessories', label: 'Computers Accessories' },
    { value: 'Video-Audios', label: 'Video-Audios' },
    { value: 'Home Appliances', label: 'Home Appliances' },
    { value: 'Power Solutions', label: 'Power Solutions' },
    { value: 'Cameras & Accessories', label: 'Cameras & Accessories' },
    { value: 'Games & Entertainment', label: 'Games & Entertainment' },
    { value: 'Refrigerators & Freezers', label: 'Refrigerators & Freezers' },
    { value: 'AC & Coolers', label: 'AC & Coolers' },
    { value: 'Televisions & Accessories', label: 'Televisions & Accessories' },
    { value: 'Washing Machines', label: 'Washing Machines' },
    { value: 'Heaters & Geysers', label: 'Heaters & Geysers' },
    { value: 'Microwaves & Ovens', label: 'Microwaves & Ovens' },
    { value: 'Fans', label: 'Fans' },
    { value: 'Sewing Machines', label: 'Sewing Machines' },
    { value: 'Water Dispensers', label: 'Water Dispensers' },
    { value: 'Irons & Steamers', label: 'Irons & Steamers' }
  ];


  const options2 = [
    { value: 'Books', label: 'Books' },
    { value: 'Magazines', label: 'Magazines' },
    { value: 'Sports Equipment', label: 'Sports Equipment' },
    { value: 'Travel Equipment', label: 'Travel Equipment' },
    { value: 'Gym & Fitness', label: 'Gym & Fitness' },
    { value: 'Musical Instruments', label: 'Musical Instruments' },
    { value: 'Gardening Equipment', label: 'Gardening Equipment' },
    { value: 'Outdoor Gear', label: 'Outdoor Gear' }
  ];
  

  const options3 = [
    { value: 'Sofa & Chairs', label: 'Sofa & Chairs' },
    { value: 'Beds & Wardrobes', label: 'Beds & Wardrobes' },
    { value: 'Home Decoration', label: 'Home Decoration' },
    { value: 'Tables & Dining', label: 'Tables & Dining' },
    { value: 'Office Furniture', label: 'Office Furniture' },
    { value: 'Garden & Outdoor', label: 'Garden & Outdoor' },
    { value: 'Curtains & Blinds', label: 'Curtains & Blinds' },
    { value: 'Rugs & Carpets', label: 'Rugs & Carpets' }
  ];


  const options4 = [
    { value: 'Clothes & Coats', label: 'Clothes & Coats' },
    { value: 'Wedding Dresses', label: 'Wedding Dresses' },
    { value: 'Watches & Braclets', label: 'Watches & Braclets' },
    { value: 'Footwear', label: 'Footwear' },
    { value: 'Jewellery & Accessories', label: 'Jewellery & Accessories' },
    { value: 'Bags & Clutches', label: 'Bags & Clutches' },
    { value: 'Fashion Accessories', label: 'Fashion Accessories' }
  ];
  

  const options5 = [
    { value: 'Kids Toys', label: 'Kids Toys' },
    { value: 'Kids Vehicles', label: 'Kids Vehicles' },
    { value: 'Kids Accessories', label: 'Kids Accessories' },
    { value: 'Kids Furniture', label: 'Kids Furniture' },
    { value: 'Baby Gear', label: 'Baby Gear' },
    { value: 'Kids Clothing', label: 'Kids Clothing' },
    { value: 'Swings & Slides', label: 'Swings & Slides' }
  ];
  
  const [subCat, setSubCat] =useState({value:"select", label:"Select"})
  const [typeCat, setTypeCat] = useState({value:"select", label:"Select"})
  const [mainCatVal, setMainCatval] =useState("")
  const [subCatVal, setSubCatVal] = useState({value:"select", label:"Select"})
  const [typeCatVal, setTypeCatVal] = useState({value:"select", label:"Select"})
  const [categoryId, setCategoryId] = useState(null)

  const handleOnChangeMain = selectedOption => {
    console.log('Selected:', selectedOption);
    if(selectedOption.value){
    setMainCatval(selectedOption.value)
    }
  
   
  };
  const handleOnChangeSub = selectedOption => {
    setSubCatVal({value:selectedOption.value, label:selectedOption.value})
  };
  const handleOnChangeType= selectedOption => {
    setTypeCatVal({value:selectedOption.value, label:selectedOption.label})
  };
  

 
  useEffect(()=>{
    setSubCatVal({value:"select", label:"Select"})
   
    if(mainCatVal==="Electronic & Home Appliances"){
      setSubCat(options1)
    }else if(mainCatVal==="Books, Hobbies & Sports"){
      setSubCat(options2)
    }
    else if(mainCatVal==="Furniture & Home Decor"){
      setSubCat(options3)
    }
    else if(mainCatVal==="Fashion & Beauty"){
      setSubCat(options4)
    }
    else if(mainCatVal==="Kids"){
      setSubCat(options5)
    }else{
      setSubCat({value:"select", label:"select"})

    }
  },[mainCatVal])


  useEffect(()=>{
    setTypeCatVal({value:"select", label:"Select"})
    const fetchData = async () => {
      try {
        // Replace this with your actual API endpoint and logic
        const Value = subCatVal.value.replace(/ /g, '-'); // Replace spaces with hyphens
        const response = await fetch(`http://localhost:8080/item/getType/${Value}`);
        const data = await response.json();
        console.log("here",data); // Use the fetched data as needed
        setTypeCat(data.map(item => ({
          value: item.categoryID,
          label: item.type
        })))

      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
  },[subCatVal])

  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [selectedImage4, setSelectedImage4] = useState(null);
  const [selectedImage5, setSelectedImage5] = useState(null);

  const [formValues, setFormValues] = useState({
    itemName: '',
    itemDescription: '',
    itemCondition: '',
    itemRent: '',
    itemLocation: '',
    itemUsage: '',
    itemKeywords: '',

  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value
    });
  };

  

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
  const handleImageChange2 = (event) => {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = () => {
            setSelectedImage2(reader.result);
        };
        reader.readAsDataURL(file);
    }
};
const handleImageChange3 = (event) => {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = () => {
          setSelectedImage3(reader.result);
      };
      reader.readAsDataURL(file);
  }
};
const handleImageChange4 = (event) => {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = () => {
          setSelectedImage4(reader.result);
      };
      reader.readAsDataURL(file);
  }
};
const handleImageChange5 = (event) => {
  const file = event.target.files[0];
  if (file) {
      const reader = new FileReader();
      reader.onload = () => {
          setSelectedImage5(reader.result);
      };
      reader.readAsDataURL(file);
  }
};

function handleSubmit(){
  
  console.log(formValues)
  console.log(selectedImage)
  console.log(typeCatVal.value)


 }


  return (
    
    <div className=' bg-[#0A1048] w-auto h-screen flex flex-center justify-center overflow-x-hidden'>  
    <img src={clouds} className='absolute -z-0 bottom-0 w-full' alt="" />
    <img src={cloud1} className='absolute -z-0 w-[140px] top-[180px] left-[250px]' alt="" />
    <img src={cloud2} className='absolute -z-0 top-[180px] right-[250px]' alt="" />
   
    <div className='bg-white rounded-3xl w-[1200px] h-[550px] my-auto flex flex-col  items-center py-10 z-10'>
      <h1>
        Add Item
      </h1>

      <div  className='flex flex-row justify-center w-[100%] items-center gap-[20px] px-[150px] py-5'>
        <div className='flex flex-col w-[350px] '>
         <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Name</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemName" value={formValues.itemName}
            onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>Item Name</span>
            </span>
          </div>


          <div class="field field_v1 w-full flex flex-col gap-2">
            <label for="name" class="ha-screen-reader">Name</label>
            <p className='mt-5'> <span className='text-red-500'>*</span>Description</p>
            <textarea id="name" rows={5}  style={{ height: '5em' }} className="field__input"  placeholder="Camera" name="itemDescription" value={formValues.itemDescription}
            onChange={handleInputChange} />
          </div>

          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Condition</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemCondition"  value={formValues.itemCondition}
            onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>Item Condition</span>
            </span>
          </div>


          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Item Rent</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemRent"  value={formValues.itemRent}
            onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>Item Rent</span>
            </span>
          </div>

          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Item Rent</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemLocation" value={formValues.itemLocation}
            onChange={handleInputChange} />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Location</span>
            </span>
          </div>


          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Item Rent</label>
            <input id="name" class="field__input" placeholder="Camera" name="itemUsage" value={formValues.itemUsage}
            onChange={handleInputChange} />
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Usage Details</span>
            </span>
          </div>

        </div>

        <div className='w-[2px] h-full bg-[#dfdfdf]'>

        </div>

        <div className='flex flex-col gap-2 w-[350px]'>
        <p className='mt-2 text-xs'> <span className='text-red-500'>*</span>Main category</p>
        <Select className='text-xs ' options={options0} onChange={handleOnChangeMain}  />
        <p className='mt-2 text-xs'> <span className='text-red-500'>*</span>Sub Category</p>
        <Select className='text-xs ' options={subCat} value={subCatVal}  onChange={handleOnChangeSub}/>
        <p className='mt-2 text-xs'> <span className='text-red-500'>*</span>Type</p>
        <Select className='text-xs ' options={typeCat} value={typeCatVal} onChange={handleOnChangeType} />
        <div className='h-[2px] w-full bg-[#d5d5d5]'>

        </div>
        <div class="field field_v1 w-full flex flex-col gap-2">
            <label for="name" class="ha-screen-reader">Name</label>
            <p className='mt-5'> <span className='text-red-500'>*</span>KeyWords</p>
            <textarea id="name" rows={5}  style={{ height: '5em' }} className="field__input"  placeholder="Camera" name="itemKeywords" value={formValues.itemKeywords}
            onChange={handleInputChange} />
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
                    onChange={handleImageChange2}
                    className="hidden"
                    id="fileInput2"
                />
                <label htmlFor="fileInput2" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage2 ? (
                        <img src={selectedImage2} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>
            <div className='w-[100px] h-[100px]'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange3}
                    className="hidden"
                    id="fileInput3"
                />
                <label htmlFor="fileInput3" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage3 ? (
                        <img src={selectedImage3} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>
            <div className='w-[100px] h-[100px]'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange4}
                    className="hidden"
                    id="fileInput4"
                />
                <label htmlFor="fileInput4" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage4 ? (
                        <img src={selectedImage4} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>
            <div className='w-[100px] h-[100px]'>
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange5}
                    className="hidden"
                    id="fileInput5"
                />
                <label htmlFor="fileInput5" className="border-2 border-gray-300 p-2 rounded-lg cursor-pointer w-full h-full flex items-center justify-center">
                    {selectedImage5 ? (
                        <img src={selectedImage5} alt="Uploaded" className="w-full h-full object-cover" />
                    ) : (
                        <span>+</span>
                    )}
                </label>
            </div>
            <button  onClick={()=>{handleSubmit()}} className='bg-[#0a1048] text-white rounded-lg w-[100px] h-[100px] hover:bg-[#0a1048e4]'>Add</button>
            
        </div>

       
     
      </div>

    
    </div>     
    </div>
  )
}

export default AddItem
