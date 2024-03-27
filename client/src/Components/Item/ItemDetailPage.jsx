import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


import { useDispatch, useSelector } from 'react-redux';

import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function ItemDetailPage() {
    let {itemId} = useParams();
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const id = useSelector(state => state.auth.id)

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


      useEffect(()=>{
        setDisplayImage(item.image1)
      },[item])
    


    const [displayImg, setDisplayImage] =useState()
    const [isButtonDisabled, setIsButtonDisabled] = useState(false);

    const notifyF = (msg) => {
        toast.error(msg, {
          position : toast.POSITION.TOP_RIGHT,  // Change position to BOTTOM_RIGHT
          autoClose: 3000,
        });
      };
      const notifyS = (msg) => {
        toast.success(msg, {
          position: toast.POSITION.TOP_RIGHT, // Set the position of the toast
          autoClose: 3000, // Set auto-close time in milliseconds
        });
      };
        
  const handleAddConversation = async () => {
    setIsButtonDisabled(true)
    try {
      const response = await fetch('http://localhost:8080/chat/addconv', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ participant1:id, participant2:item.OwnerId, unReadCount:0, status:"pending", message:`###item:${item.itemId}###`})
      });

      if (!response.ok) {
        throw new Error('Failed to add conversation');
      }

      const data = await response.json();
      console.log('Conversation added successfully:', data);
      notifyS("chat inserted")
      
      navigate(`/home/${id}/chat`)
      setIsButtonDisabled(false)
      // Do something with the response, such as displaying a success message or updating state
    } catch (error) {
      console.error('Error adding conversation:', error);
      setIsButtonDisabled(false)
      // Handle error, such as displaying an error message to the user
    }


    
  };
    

    
  
  return (
    <div className='w-full h-auto flex flex-col items-center justify-center'>
       <div className='w-[70%]  h-auto py-2 px-2 font-medium mt-[85px]'>
            <h1 className='text-md '> {item.mainCategory}  &gt; {item.subCategory}  &gt; {item.type}</h1> 
           <div className='flex flex-row justify-center items-center h-[400px] bg-[#ffffff] p-3 rounded-md mt-4 relative'>
            <div className='w-[100%] bg-black shadow-md flex items-center justify-center  h-full rounded-lg overflow-hidden '>
                <img className='object-fit' src={displayImg}  alt="" />
            </div>
            <div className=' h-[100px]  p-1 w-[300px] rounded-md absolute bottom-0 right-15 flex flex-row gap-3 items-center justify-center'>
            <img src={item.image1} onClick={()=>{setDisplayImage(item.image1)}} className=' object-cover rounded-md w-[75px] h-auto shadow-lg cursor-pointer hover:scale-[1.2] ease-in-out duration-200 ' alt="" />
            <img src={item.image2} onClick={()=>{setDisplayImage(item.image2)}} className=' object-cover rounded-md w-[75px] h-auto shadow-lg cursor-pointer hover:scale-[1.2] ease-in-out duration-200 ' alt="" />
            <img src={item.image3} onClick={()=>{setDisplayImage(item.image3)}} className=' object-cover rounded-md w-[75px] h-auto shadow-lg cursor-pointer hover:scale-[1.2] ease-in-out duration-200 ' alt="" />
            <img src={item.image4} onClick={()=>{setDisplayImage(item.image4)}} className=' object-cover rounded-md w-[75px] h-auto shadow-lg cursor-pointer hover:scale-[1.2] ease-in-out duration-200 ' alt="" />
            <img src={item.image5} onClick={()=>{setDisplayImage(item.image5)}} className=' object-cover rounded-md w-[75px] h-auto shadow-lg cursor-pointer hover:scale-[1.2] ease-in-out duration-200 ' alt="" />

            </div>

            {/* <div className='w-[50%] h-full flex flex-col gap-2 px-2 '>

                <div className='shadow-md  flex flex-row w-full gap-2 h-[50%]'>
                <div className='w-[50%] h-full  overflow-hidden '>
                <img className='object-fit' src={item.image2} alt="" />
                </div>
                <div className='w-[50%] h-full overflow-hidden '>
                <img className='object-cover' src={item.image3}  alt="" />
                </div>

                </div>
               
                <div className='flex shadow-md  flex-row w-full gap-2 h-[50%]'>
                <div className='w-[50%] h-full  overflow-hidden '>
                <img className='object-cover' src={item.image4}  alt="" />
                </div>
                <div className='w-[50%] h-full  overflow-hidden flex items-center justify-center '>
                <img className='object-cover' src={item.image5}  alt="" />
                </div>
                </div>
               
            </div> */}
           </div>
           <div className=' w-full h-auto flex flex-row justify-between gap-10 mt-5'>
                <div className='flex flex-col mt-3 w-[50%]'>
                    <h1 className='text-xl font-bold'>{item.itemName}</h1>
                    <p className='text-xs text-[#4b4b4b] mt-2'>{item.keywords}</p>
                    <div className='flex flex-row gap-3'>
                        <p className='text-xs font-bold'>4.96</p>
                        <p className='text-xs font-bold'>3 Reviews</p>
                    </div>

                 <hr className='w-[100%] bg-[#c2c2c2] h-[1px] mt-5'/>
                 <a href={`/home/${item.userId}/profile`} className='flex flex-row hover:underline ease-in-out duration-300  items-center mt-5 '>
                    <img className="rounded-full w-[45px] h-[45px]" src={item.profilePic} alt="" />
                    <div className='ml-5 '>
                        <h1 className='text-xs'>{item.name}</h1>
                        <p className='text-[9px] text-[#4b4b4b]'>{item.dateCreated}</p>
                    </div>
                 </a>
              
                 <hr className='w-[100%] bg-[#c2c2c2] h-[1px] mt-5'/>
                 <p className='text-xs text-[#6c6c6c] mt-3'>
                  {item.itemDescription}</p>
                 <hr className='w-[100%] bg-[#c2c2c2] h-[1px] mt-5'/>

                 <img src="https://firebasestorage.googleapis.com/v0/b/rentit-e521b.appspot.com/o/s1.PNG?alt=media&token=ee2f2eee-94ca-454d-9bf0-851688c80e6b" alt="" />
                 <img src="https://firebasestorage.googleapis.com/v0/b/rentit-e521b.appspot.com/o/s2.PNG?alt=media&token=63659dc8-362c-4e2d-af05-aa5b53fe6946" alt="" />
                </div>


              

                <div className='w-[45%] h-[600px] p-10 '>
                    <div className='bg-white shadow-lg w-full h-full rounded-lg  items-center flex border-[1px] border-[#ededed]  flex-col p-10'>
                        <div className='w-full h-[50%] flex flex-col justify-start items-center '>
                        <h1>Renting Details</h1>
                        <div className='border-2 border-[#dcdcdc] h-[130px] w-[100%] flex flex-col justify-between  rounded-lg mt-5'>
                            <div className='flex flex-row justify-center gap-7 px-2 items-center   h-[50%]'>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='text-sm font-bold'>
                                        From
                                    </h1>
                                    <input type="date" className='text-xs' />
                                </div>
                                <div className='w-[1.5px] bg-[#dcdcdc] h-full'>

                                </div>
                                <div className='flex flex-col justify-center items-center'>
                                    <h1 className='text-sm font-bold'>
                                       To
                                    </h1>
                                    <input type="date" className='text-xs cursor-pointer' />


                                </div>

                            </div>
                            <div className='h-[1.5px] bg-[#dcdcdc] w-full'>

                                </div>
                            <div className='flex justify-center items-center h-[50%]'>

                                <h1 className='font-medium'>Avaliability</h1>

                            </div>

                        </div>

                        </div>
                        <div className='w-full h-[50%]  flex flex-col justify-end'>
                            <p className='text-[12px] text-[#7c7c7c]'>
                           Item should be used carefully.
                           </p>
                          
                            <hr className='bg-[#4b4b4b] mt-5' />
                            <div className='flex flex-row mt-5 justify-between items-center'>
                                <h1 className='text-xl text-[#295Dc3] font-bold'>
                                    Rent per day

                                </h1>
                                <h1>
                                   {item.itemRent}/-

                                </h1>
                            </div>
                            <div className='flex flex-row mt-2 justify-between items-center'>
                                <h1 className='text-md text-[#6d6d6d]'>
                                    Security Deposit 
                                </h1>
                                <h1>
                                   {300}/-

                                </h1>
                            </div>                      
                        </div>
                    </div>
                    <button onClick={()=>{handleAddConversation()}} disabled={isButtonDisabled} className='text-white w-full bg-[#295cd3] px-3 py-2 h-[50px] mt-[20px] rounded-lg hover:bg-pr1'>
                        Chat
                    </button>



                </div>
            </div>
            <div className='h-[90px] w-full'>

        </div>
        </div>


       
        
        <div className='h-auto flex flex-col items-center rounded-xl shadow-sm overflow-hidden w-full '>
            <h1 className='font-bold text-2xl'>Location</h1>
            <img className='object-cover rounded-xl mt-3 w-[70%]' src="https://firebasestorage.googleapis.com/v0/b/rentit-e521b.appspot.com/o/maps5.PNG?alt=media&token=f1bd53d0-048b-41e9-a26c-10138eeb4b42" alt="" />    
        </div>

        <div className='h-auto flex flex-col px-10 mt-[30px]  items-center rounded-xl shadow-sm overflow-hidden w-3/4 '>
            <h1 className='font-bold text-2xl mt-3 '>Reviews</h1>
            <div className='w-full h-auto flex flex-row items-center mt-3 justify-between'>
            <img className='object-cover rounded-sm w-[270px]' src="https://firebasestorage.googleapis.com/v0/b/rentit-e521b.appspot.com/o/s3.PNG?alt=media&token=26add358-b26a-4744-a88c-194e19b12e37" alt="" />    
            <img className='object-cover rounded-sm w-[265px]' src="https://firebasestorage.googleapis.com/v0/b/rentit-e521b.appspot.com/o/s4.PNG?alt=media&token=777b914c-9b18-42bb-b6e8-ccba2aeb3278" alt="" />    
            <img className='object-cover rounded-sm w-[280px]' src="https://firebasestorage.googleapis.com/v0/b/rentit-e521b.appspot.com/o/s5.PNG?alt=media&token=7ea099d2-4ded-466e-a4fe-bfd16331063e" alt="" />    
           

            </div>
        </div>
        <div className='w-full h-[70px]'>

        </div>
        <ToastContainer position="top-right" autoClose={3000} />

    </div>
  )
}

export default ItemDetailPage
