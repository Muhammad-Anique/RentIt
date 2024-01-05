import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'




function ItemDetailPage() {
    let {itemId} = useParams();
    

    const [item, setItem] =useState(" ")
    const [user, setUser] =useState(null)


    useEffect(() => {
        console.log("Item Details: ", itemId);
        const fetchData = async () => {
          try {
            const response = await fetch(`http://localhost:8080/item/${itemId}`);
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            const result = await response.json();
            console.log("Fetched data:", result);
      
            if (result && result.length > 0 && result[0].itemName) {
              setItem(result[0]);
            } else {
              console.error('Invalid data structure or empty result');
            }
          } catch (error) {
            console.error('Error fetching data:', error);
          }
        };
      
        fetchData();
      }, [itemId]);

    


    
    

    
  
  return (
    <div className='w-full h-auto flex items-center justify-center'>
       <div className='w-[70%]  h-auto py-2 px-2 font-medium mt-[85px]'>
            <h1 className='text-xl font-bold '> {item.itemName}</h1> 
           <div className='flex flex-row justify-center items-center h-[400px] mt-4'>
            <div className='w-[50%] h-full rounded-l-lg overflow-hidden '>
                <img className='object-cover' src={item.image1}  alt="" />
            </div>

            <div className='w-[50%] h-full flex flex-col  gap-2 px-2 '>

                <div className=' flex flex-row w-full gap-2 h-[50%]'>
                <div className='w-[50%] h-full  overflow-hidden '>
                <img className='object-cover' src={item.image2} alt="" />
                </div>
                <div className='w-[50%] h-full overflow-hidden '>
                <img className='object-cover' src={item.image3}  alt="" />
                </div>

                </div>
               
                <div className='flex flex-row w-full gap-2 h-[50%]'>
                <div className='w-[50%] h-full  overflow-hidden '>
                <img className='object-cover' src={item.image4}  alt="" />
                </div>
                <div className='w-[50%] h-full  overflow-hidden flex items-center justify-center '>
                <img className='object-cover' src={item.image5}  alt="" />
                </div>
                </div>
               
            </div>
           </div>
           <div className=' w-full h-auto flex flex-row justify-between gap-10 mt-5'>
                <div className='flex flex-col mt-3 w-[50%]'>
                    <h1>{item.itemName}</h1>
                    <p className='text-xs text-[#4b4b4b]'>{item.keywords}</p>
                    <div className='flex flex-row gap-3'>
                        <p className='text-xs font-bold'>4.96</p>
                        <p className='text-xs font-bold'>3 Review</p>
                    </div>

                 <hr className='w-[100%] bg-[#c2c2c2] h-[1px] mt-5'/>
                 <div className='flex flex-row  items-center mt-5 '>
                    <img className="rounded-full w-[45px] h-[45px]" src="data:image/jpeg;base64,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" alt="" />
                    <div className='ml-5 '>
                        <h1 className='text-xs'>{item.name}</h1>
                        <p className='text-[9px] text-[#4b4b4b]'>{item.dateCreated}</p>
                    </div>
                 </div>
              
                 <hr className='w-[100%] bg-[#c2c2c2] h-[1px] mt-5'/>
                 <p className='text-xs text-[#6c6c6c] mt-3'>
                  {item.itemDescription}</p>
                 <hr className='w-[100%] bg-[#c2c2c2] h-[1px] mt-5'/>
                </div>

                <div className='w-[45%] h-[600px] p-10 '>
                    <div className='bg-white shadow-lg w-full h-full rounded-lg  items-center flex border-[1px] border-[#ededed]  flex-col p-10'>
                        <div className='w-full h-[50%] flex flex-col justify-start items-center '>
                        <h1>Renting Details</h1>
                        <div className='border-2 border-[#dcdcdc] h-[130px] w-[90%] flex flex-col justify-between  rounded-lg mt-5'>
                            <div className='flex flex-row justify-center gap-7 px-2 items-center   h-[50%]'>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='text-xs'>
                                        From
                                    </h1>
                                    <p className='text-[15px]'>
                                        23-Oct-2013
                                    </p>
                                </div>
                                <div className='w-[1.5px] bg-[#dcdcdc] h-full'>

                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='text-xs'>
                                       To
                                    </h1>
                                    <p className='text-[15px]'>
                                        31-Dec-2023
                                
                                    </p>

                                </div>

                            </div>
                            <div className='h-[1.5px] bg-[#dcdcdc] w-full'>

                                </div>
                            <div className='flex justify-center items-center h-[50%]'>

                                <h1>Avaliability</h1>

                            </div>

                        </div>

                        </div>
                        <div className='w-full h-[50%]  flex flex-col justify-end'>
                            <p className='text-[9px] text-[#7c7c7c]'>
                            Clothes are garments or items worn on the body. They serve various purposes such as protection from the elements, modesty, and fashion. Clothes can be made from different materials like cotton, silk, wool, polyester, or blends of these materials. </p>
                            <hr className='bg-[#4b4b4b] mt-5' />
                            <div className='flex flex-row mt-5 justify-between items-center'>
                                <h1 className='text-xl text-[#295Dc3] font-bold'>
                                    Rent

                                </h1>
                                <h1>
                                   {item.itemRent}/-

                                </h1>
                            </div>
                         

                        </div>
                       
                       
                    </div>
                    <button className='text-white w-[100%] bg-[#295cd3] px-3 py-2 h-[50px] mt-[20px] rounded-lg'>
                                RentIt
                    </button>
                   



                </div>
            </div>
            <div className='h-[90px] w-full'>

        </div>
        </div>
        
      
    </div>
  )
}

export default ItemDetailPage
