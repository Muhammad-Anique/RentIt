import React from 'react'
import CategoryBar from '../CategoryBar/CategoryBar'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'



function CategoryPage() {
    const { categoryId } =useParams()
  return (

    <>
    <CategoryBar Id={categoryId}/>    
    <div  className='flex flex-wrap flex-row justify-center items-center w-full  gap-5 p-7 py-12  '>
    <Item />
    </div> 
      
    </>
  )
}

export default CategoryPage
