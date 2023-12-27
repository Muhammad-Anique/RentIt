import React, { useEffect, useState } from 'react'
import CategoryBar from '../CategoryBar/CategoryBar'
import Item from '../Item/Item'
import { useParams } from 'react-router-dom'



function CategoryPage() {
    
    let {mainCategory,subCategory, type } = useParams();
    console.log("in idp M = ", mainCategory," S =  ", subCategory, " T = ", type)

    const [data, setData] = useState([]);

    var apiEndpoint = ''
    if(mainCategory!=="a" && subCategory==="a"){
      apiEndpoint = `http://localhost:8080/item/getbycategory/${mainCategory}`;

    }
    else if(mainCategory!=="a" && subCategory!=="a"){
      apiEndpoint = `http://localhost:8080/item/getbysubcategory/${mainCategory}/${subCategory}`;

    }
    

    useEffect(()=>{
      console.log("itemData",data)

    },[data])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(apiEndpoint);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [apiEndpoint]); // Include the variable in the dependency array if it may change

    
  
  return (

    <>
    <CategoryBar />    
    <div  className='flex flex-wrap flex-row justify-center items-center w-full  gap-5 p-7 py-12  '>
    {data && data.length === 0 ? (
                <h2 className='text-[#4c4c4c] font-bold'>Sorry, No Products Found</h2>
            ) : (
                data.map((item, index) => (
                    <Item
                        key={index}
                        item_={item}
                    />
                ))
            )}
    </div> 
    </>
  )
}

export default CategoryPage
