import React, { useEffect, useState } from 'react'
import {logo} from '../../Assets/logo.png'
import Navbar_ from '../NavBar/Navbar_'
import { useParams } from 'react-router-dom';

import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditItem from '../Item/EditItem';



function Profile() {
    
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

      
    function Item(props){
        const [isDeleting, setIsDeleting] = useState(false);
        const [isEditor, setIsEditor] =useState(false)
        const handleClick = () => {
            setIsDeleting(true);
            fetch(`http://localhost:8080/item/delete/${props.itemId}`, {
              method: 'DELETE'
            })
              .then(response => {
                if (!response.ok) {
                  throw new Error('Failed to delete item');
                }
                console.log('Item deleted successfully');
                notifyS("Item Deleted Successfully")
                // Optionally, you can perform any additional actions after successful deletion
              })
              .catch(error => {
                console.error('Error deleting item:', error);
                // Optionally, you can handle errors or display error messages
              })
              .finally(() => {
                setIsDeleting(false);
              });
          };
        return(
            <>
              <div className='w-full h-auto bg-[#cdd5f63d]  py-4  rounded-md flex flex-row justify-between px-5 '>
            <div className='flex flex-row items-center gap-5 '>
                <div className='w-[55px] h-[55px] rounded-md overflow-hidden items-center justify-center bg-pr1 flex'>
                <img className='object-cover' src={props.image} alt="" />
                </div>
                <div className='flex items-center flex-row gap-[50px]'>
                <h1 className='font-bold w-[250px] overflow-hidden'>{props.title}</h1>
                <h1 className=' w-[400px] overflow-hidden'>{props.description}</h1>
                <h1 className='font-bold w-[100px] overflow-hidden'>Mr. Ali </h1>
                <h1 className='font-medium text-green-600 w-[100px] overflow-hidden'>{props.status} </h1>
 
                <h1 className='font-medium text-red-600 w-[100px] overflow-hidden'>1 day </h1>
                <h1 className='font-bold w-[100px] overflow-hidden'>{props.price}/- </h1>
                </div>
               
            </div>
            <div className='flex flex-row gap-4 items-center'>

            <button onClick={handleClick} disabled={isDeleting}>
            <span className="material-symbols-outlined hover:text-red-500">
                 Delete
            </span>
            </button>
                
           <button onClick={()=>{setIsEditor(!isEditor)}}>
           <span class="material-symbols-outlined hover:text-pr2">
            edit
            </span>
           </button>
            </div>
            <ToastContainer position="top-right" autoClose={3000} />

           
        </div>
        {isEditor ? (   <EditItem item={props.item}/>) : (<></>)}
          
            </>
          
        )
    }
      
    let {id} = useParams();
    const [user, setUser] = useState(null);
    const [items, setItems] = useState(null);

    useEffect(()=>{

        console.log("user->", user)
        console.log("items->", items)
    },[user, items])

  
    useEffect(() => {
      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/users/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch user data');
          }
          const userData = await response.json();
          setUser(userData);
        } catch (error) {
          console.error('Error fetching user data:', error);
        }
      };



  
      const fetchItemsData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/get/user/items/${id}`);
          if (!response.ok) {
            throw new Error('Failed to fetch items data');
          }
          const itemsData = await response.json();
          setItems(itemsData);
        } catch (error) {
          console.error('Error fetching items data:', error);
        }
      };
  
      fetchUserData();
      fetchItemsData();
    }, []); // Empty dependency array to run effect only once when component mounts
  



    
  return (
    
    <><Navbar_/>
    {user && items ? 
    
    (<div className='bg-pr1 min-h-screen mt-[60px] w-[100%] h-auto flex flex-col p-10 relative'>
    <div className='flex-row flex p-5 gap-4'>

        
        <div className='bg-white  w-[60%] h-[270px] flex flex-row items-center p-5 gap-6 '>
        
            <div className='w-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center bg-black'>
                {user.profilePic ? (                <img className='object-cover ' src={user.profilePic} alt="" />
            ) : (                <img className='object-cover' src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1710446491~exp=1710447091~hmac=92ac61329ac478561262a3ba0612dce1386d787e5306bebc76e63ced6ea740cb" alt="" />
            )}
             
            <p className=' absolute leading-[19px] mt-2 translate-y-24 bg-green-600 w-[80px] font-bold p-1 text-xs items-center justify-center flex rounded-full text-white'>{user.status}</p>
            </div>
            <div className='flex flex-col w-auto h-auto '>
                <div className='absolute z-10  hover:bg-pr1 text-white self-end translate-x-[630px] bg-pr2 w-[35px] h-[35px] flex items-center justify-center rounded-full'><span class="material-symbols-outlined">
                edit
                </span>
                </div>
                <h1 className='font-bold text-2xl'>{user.name}</h1>
                <p className='leading-[14px] mt-2 '>{user.email}</p>
                <p className='leading-[19px] mt-2'> <span className='font-bold'>Phone :</span> {user.phone}</p>
                <p className='leading-[19px] mt-2'> <span className='font-bold'>CNIC :</span> {user.cnic}</p>
                <p className='mt-4 bg-[#3b3b3b16] p-2 rounded-md'>this is my bio details.this is my bio details.this is my bio details.this is my bio details</p>

            </div>
           
           

        </div>
        <div className='bg-white  w-[40%] h-[270px] flex flex-col items-center p-1 gap-1'>
            <p className='w-full text-center p-3'>Profile Overview</p>

            <div className='flex flex-row flex-wrap w-full  h-full justify-center items-center gap-5'>
                <div className='flex flex-col justify-center items-center bg-[#c5d7ff49] p-4 rounded-lg'>
                <h1 className='font-bold text-5xl'>23</h1>
                <p className='leading-[15px] text-center mt-2 text-sm'>Product <br /> Added</p>

                </div>

                <div className='flex flex-col justify-center items-center bg-[#c5d7ff49] p-4 rounded-lg'>
                <h1 className='font-bold text-5xl'>2.0</h1>
                <p className='leading-[15px] text-center mt-2 text-sm'>Product <br /> Added</p>

                </div>

                <div className='flex flex-col justify-center items-center bg-[#c5d7ff49] p-4 rounded-lg'>
                <h1 className='font-bold text-5xl'>2+</h1>
                <p className='leading-[15px] text-center mt-2 text-sm'>Product <br /> Added</p>

                </div>

                <div className='flex flex-col justify-center items-center bg-[#c5d7ff49] p-4 rounded-lg'>
                <h1 className='font-bold text-5xl'>23</h1>
                <p className='leading-[15px] text-center mt-2 text-sm'>Product <br /> Added</p>

                </div>
   
            </div>
        </div>

    </div>
    <div className=' w-full h-auto p-5 flex flex-col'>
        <div className='flex bg-white flex-col w-full p-2 gap-1 '>
            <div className='w-full h-[35px] bg-[#cdd5f671] rounded-md flex flex-row justify-between px-2 '>
                
                <div className='flex flex-row items-center gap-5'>
                <h1 className='w-[40px]'></h1>
                <div className='flex flex-row gap-[100px]'>
                <h1 className='font-bold'>Title </h1>
                    <h1 className='font-bold'>Description</h1>
                    <h1 className='font-bold'>Renter</h1>
                    <h1 className='font-bold'>Status</h1>
                    <h1 className='font-bold'>Day Left</h1>
                    <h1 className='font-bold'>Price</h1>
                </div>
                   
                </div>
                
            </div>
            {items.map(item => (
            <Item
                key={item.itemId} // Assuming itemName is unique, use a unique key for each item
                title={item.itemName}
                description={item.itemDescription}
                price={item.itemRent}
                status={item.isAvailable ? 'Available' : 'Not Available'}
                image={item.image1}
                itemId={item.itemId}
                item={item}
            />
        ))}


          


        
        </div>

    </div>
</div>) : 
    
    
    (<></>)
}
    
    </>
  )
}

export default Profile
