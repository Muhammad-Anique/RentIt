import React, { useDebugValue, useEffect, useState } from 'react'
import {logo} from '../../Assets/logo.png'
import Navbar_ from '../NavBar/Navbar_'
import { useParams } from 'react-router-dom';

import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import EditItem from '../Item/EditItem';
import { useSelector } from 'react-redux';


function Profile() {
    let {id} = useParams();

    const myId = useSelector(state=> state.auth.id)


    console.log("ID = >", id, myId)
    // alert("ID = ", id, "myid", myId)
    const [user, setUser] = useState(null);
    const [items, setItems] = useState(null);


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
                <h1 className='font-medium text-green-600 w-[100px] overflow-hidden'>{props.status} </h1>
                <h1 className='font-bold w-[100px] overflow-hidden'>{props.price}/- </h1>
                </div>
               
            </div>

            { id==myId ? (  <div className='flex flex-row gap-4 items-center'>

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
            </div>): (<></>)}
          
            <ToastContainer position="top-right" autoClose={3000} />

           
        </div>
        {isEditor ? (   <EditItem item={props.item}/>) : (<></>)}
          
            </>
          
        )
    }
      
  
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
          setBio(userData.bio);
          setPhone(userData.phone)
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
  


    const [rentings, setRentings] =useState(null)

    
    useEffect(()=>{
      const getRentingsByRenterId = async (renterId) => {
          try {
              const response = await fetch(`http://localhost:8080/item/rentings/get/${renterId}`);
              if (!response.ok) {
                  throw new Error('Failed to fetch rentings by renterId');
              }
              const data = await response.json();
              setRentings(data)
              return data;
          } catch (error) {
              console.error('Error:', error);
              // Handle error
          }
      };
      getRentingsByRenterId(myId)
    },[myId])



    const [prEdit, setprEdit] =useState(false)
    const [bio, setBio] = useState('');
    const [phone, setPhone] = useState('');
    const handleUpdate = () => {
      const url = `http://localhost:8080/update/profile/${myId}`;
      const requestOptions = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone: phone, bio: bio })
      };
  
      fetch(url, requestOptions)
        .then(response => {
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          return response.json();
        })
        .then(data => {
          console.log('Profile updated successfully:', data);
          setprEdit(false); // Close the edit profile section upon successful update
        })
        .catch(error => {
          console.error('Error updating profile:', error);
          // Handle error appropriately, e.g., display error message to the user
        });
    };
    
  return (
    
    <><Navbar_/>
   
    {user && items ? 
    
    (
    
    <>
      <div className={` ${prEdit ? 'absolute' : 'hidden'} w-[100%]  self-center h-[100%] bg-[#000000a6] z-30 flex items-center justify-center`}>
      <div className='bg-white rounded-xl w-[30%] h-[35%] p-5 flex flex-col gap-6'>
        <h1 className='font-bold text-xl'>Edit Profile</h1>
        <div className='flex flex-row items-center'>
          <p className='w-[100px]'>Phone</p>
          <input type="text" className='w-[400px] h-[40px] rounded-md border-2 border-gray-300 p-2 ' placeholder='phone' value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className='flex flex-row items-center'>
          <p className='w-[100px]'>Bio</p>
          <textarea className='w-[400px] h-[80px] rounded-md border-2 border-gray-300 p-2' placeholder='Bio' value={bio} onChange={(e) => setBio(e.target.value)} />
        </div>

        <div className='flex flex-row gap-3'>
          <button className='bg-pr1 hover:bg-pr2 text-white w-[130px] h-[40px] rounded-lg' onClick={handleUpdate}>Update</button>
          <button onClick={() => { setprEdit(false) }} className='bg-pr1 hover:bg-pr2 text-white w-[130px] h-[40px] rounded-lg'>Cancel</button>
        </div>
      </div>
    </div>


    <div className='bg-pr1 min-h-screen mt-[60px] w-[100%] h-auto flex flex-col p-10 relative'>

      
    <div className='flex-row flex p-5 gap-4'>

        
        <div className='bg-white  w-[60%] h-[270px] flex flex-row items-center p-5 gap-6 '>
        
            <div className='w-[200px] h-[200px] rounded-lg overflow-hidden flex items-center justify-center bg-black'>
                {user.profilePic ? (                <img className='object-cover ' src={user.profilePic} alt="" />
            ) : (                <img className='object-cover' src="https://img.freepik.com/free-psd/3d-illustration-human-avatar-profile_23-2150671142.jpg?w=740&t=st=1710446491~exp=1710447091~hmac=92ac61329ac478561262a3ba0612dce1386d787e5306bebc76e63ced6ea740cb" alt="" />
            )}
             
             { id==myId ? ( <button onClick={()=>{setprEdit(true)}} className=' absolute leading-[19px] mt-2 translate-y-24 bg-blue-600 w-[120px] font-bold p-1 text-xs items-center hover:bg-pr1 justify-center flex rounded-full text-white'>Edit Profile</button>
              ): (<></>)}
            </div>
            <div className='flex flex-col w-auto h-auto '>
               
                <h1 className='font-bold text-2xl'>{user.name}</h1>
                <p className='leading-[14px] mt-2 '>{user.email}</p>
                <p className='leading-[19px] mt-2'> <span className='font-bold'>Phone :</span> {phone}</p>
                <p className='leading-[19px] mt-2'> <span className='font-bold'>CNIC :</span> {user.cnic}</p>
                <p className='mt-4 bg-[#3b3b3b16] p-2 rounded-md'>{bio}</p>

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
      {items.length > 0 ? (  <div className='flex bg-white flex-col w-full p-2 gap-1 '>
        <h1 className='font-bold'>Postings</h1>
            <div className='w-full h-[35px] bg-[#cdd5f671] rounded-md flex flex-row justify-between px-2 '>
              
                <div className='flex flex-row items-center gap-5'>
                <h1 className='w-[70px]'></h1>
                <div className='flex flex-row gap-[50px]'>
                <h1 className='font-bold w-[250px]'>Title </h1>
                    <h1 className='font-bold w-[400px]'>Description</h1>
                    <h1 className='font-bold w-[100px]'>Status</h1>
                    <h1 className='font-bold w-[100px]'>Rent</h1>
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
) : (<></>)}
        {
          id==myId ? (<div className='flex bg-white  flex-col w-full p-2 gap-1 '>
          <h1 className='font-bold'>Rentings</h1>
              <div className='w-full h-[35px] bg-[#cdd5f671] rounded-md flex flex-row justify-between px-2 '>
                
                  <div className='flex flex-row items-center gap-5'>
                  <h1 className='w-[70px]'></h1>
                  <div className='flex flex-row gap-[50px]'>
                  <h1 className='font-bold w-[250px]'>Title </h1>
                      <h1 className='font-bold w-[400px]'>Description</h1>
                      <h1 className='font-bold w-[100px]'>Rent</h1>
                  </div>
                     
                  </div>
                  
              </div>
              {rentings && rentings.map(item => (
                <div key={item.itemId} className='w-full h-auto bg-[#cdd5f63d] py-4 rounded-md flex flex-row justify-between px-5'>
                  <div className='flex flex-row items-center gap-5'>
                    <div className='w-[55px] h-[55px] rounded-md overflow-hidden items-center justify-center bg-pr1 flex'>
                      {item.image1 && <img className='object-cover' src={item.image1} alt="" />}
                    </div>
                    <div className='flex items-center flex-row gap-[50px]'>
                      <h1 className='font-bold w-[250px] overflow-hidden'>{item.itemName || 'No Name'}</h1>
                      <h1 className='w-[400px] overflow-hidden'>{item.itemDescription || 'No Description'}</h1>
                      <h1 className='font-bold w-[100px] overflow-hidden'>{item.itemRent ? `${item.itemRent}/-` : 'No Rent'}</h1>
                    </div>
                  </div>
                </div>
              ))}

                    
          </div>) : (<></>)
        }
        

    </div>
</div></>) : 
    
    
    (<></>)
}
    
    </>
  )
}

export default Profile


