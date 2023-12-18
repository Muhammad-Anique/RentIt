import React from 'react'
import Navbar_ from '../NavBar/Navbar_'
import CategoryBar from './CategoryBar'
import Item from './Item'
import ItemDetailPage from './ItemDetailPage'


function ItemList() {
  return (
    <>
    
      <Navbar_/>
      <div className='w-full h-[80px]'></div>
      {/* <CategoryBar/>
     
      <div style={{ overflowY: 'scroll', height: 'calc(100vh - 160px)' }} className='flex flex-wrap flex-row justify-center items-center w-full  gap-5 p-7  '>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
        <Item/>
      </div> */}


      <ItemDetailPage/>
      </>


   
  )
}

export default ItemList
