import React, { useEffect, useState } from 'react'
import logo from  '../../Assets/logo.png'
import { Link } from 'react-router-dom'
import '../../Assets/button.css'
import { useSelector } from 'react-redux';
import { selectUsername, selectPassword, selectIsAuthenticated } from '../../store/Slices/authSlice'; // Update with the correct path to your selectors file


function Navbar_() {

  const username = useSelector(selectUsername);
  const password = useSelector(selectPassword);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const [menu, setMenu] =useState('hidden')
  const [userMenu, setUserMenu] =useState('absolute')
  const [isOpen, setIsOpen] =useState(false)
  const [isOpenUM, setIsOpenUM] =useState(false)
  const [data, setData] =useState()
  const [username_, setUsername_] =useState(username)

  const [redirectAdd, setRedirectAdd] =useState('/login')

 
 useEffect(()=>{
  if(isAuthenticated)
  setRedirectAdd('/add')
else{
  setRedirectAdd('/login')
}

 },[])


  useEffect(() => {
    // Function to make the GET API call
    const fetchData = async () => {
      try {
        const response = await fetch(`http://localhost:8080/users/${username_}`); 
        if (response.ok) {
          const result = await response.json();
          setData(result); 

         console.log("Errror tis there")
          console.log(result)
        } else {
          throw new Error('Failed to fetch data');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData(); 

  }, [username_]); 





  function isCliked(){
    setIsOpen(!isOpen)
    if(menu==='absolute'){
      setMenu('hidden')
    }else if(menu==='hidden'){
      setMenu('absolute')
    }
  }


  function isClikedUM(){
    setIsOpenUM(!isOpen)
    if(userMenu==='absolute'){
      setUserMenu('hidden')
    }else if(userMenu==='hidden'){
      setUserMenu('absolute')
    }
  }



  return (
    <>
    <div className={`w-[320px] z-[10] text-sm h-[370px] bg-white border-2 text-[#414141] border-[#f5f5f5] gap-2 shadow-md rounded-md flex flex-col py-6 px-6 ${menu} transition-opacity ${isOpen ? 'opacity-100' : 'opacity-0 invisible'} ease-in-out duration-300 top-[70px] left-[35px]`}>
      
      {data ? (  <Link to={`/home/${data.userId}`} className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
        <span class="material-symbols-outlined">
        home
        </span>
        <p>Home</p>
      </div>
      </Link>): (<Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
        <span class="material-symbols-outlined">
        home
        </span>
        <p>Home</p>
      </div>
      </Link>) }
    

     


      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
      info
      </span>
        <p>About</p>
      </div>
      </Link>


      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
        question_mark
        </span>
        <p>How It Works</p>
      </div>
      </Link>


      <Link to='/home' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
      apps
      </span>
        <p>All categories</p>
      </div>
      </Link>


      <div className='w-full h-[2px] bg-[#78777726] mt-2'>

      </div>




      <Link to='/' className='hover:text-[#295cd3] mt-2'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
      Kitchen
      </span>
        <p>Electronics & Home Appliances</p>
      </div>
      </Link>


      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
     sports_basketball
      </span>
        <p>Books, Hobbies & Sports</p>
      </div>
      </Link>


      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
     apparel
      </span>
        <p>Fashion & Beauty</p>
      </div>
      </Link>



      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
     chair
      </span>
        <p>Furniture & Home Decor</p>
      </div>
      </Link>


      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
      stroller
      </span>
        <p>Kids</p>
      </div>
      </Link>
     

     


    </div>








    <div className={`w-[320px] z-[10] text-sm ${data ? 'h-[320px]' : 'h-[135px]'}  bg-white border-2 text-[#414141] border-[#f5f5f5] gap-2 shadow-md rounded-md flex flex-col py-6 px-6 ${userMenu} transition-opacity ${isOpenUM ? 'opacity-100' : 'opacity-0 invisible'} ease-in-out duration-300 top-[70px] right-[35px]`}>
       {data ? (<>  <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
        <div className='overflow-hidden w-[50px] h-[50px] rounded-full'>
        <img className='object-cover scale-125 translate-y-1' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLOuwxvhO9v43aPzKbcEGyRNyztwGAu0jz1kr7TqxUrMVYw5ecTY5dwZVM5p4TmaT1k1M&usqp=CAU" alt="" />
        </div>
        <div>
        <p>Hello! </p>
        <p className='font-bold'>{data.name}</p>
        </div>
      </div>
      </Link>

     


      <Link to='/' className='hover:text-[#295cd3] mt-3'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
      info
      </span>
        <p>Visit Profile</p>
      </div>
      </Link>


      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
        question_mark
        </span>
        <p>View History</p>
      </div>
      </Link>


      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
        message
        </span>
        <p>View Message</p>
      </div>
      </Link>


      <Link to='/' className='hover:text-[#295cd3]'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
        Settings
        </span>
        <p>Settings</p>
      </div>
      </Link>


      <div className='w-full h-[2px] bg-[#78777726] mt-2'>

      </div>


      <Link to='/' className='hover:text-[#295cd3] mt-2'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
      apps
      </span>
        <p>LogOut</p>
      </div>
      </Link>
      </>): (<>
      <Link to='/login' className='hover:text-[#295cd3] mt-2'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
        login
        </span>
        <p>login</p>
      </div>
      </Link>

      <Link to='/register' className='hover:text-[#295cd3] mt-2'>
      <div className='flex flex-row gap-3 items-center'>
      <span class="material-symbols-outlined">
        ballot
        </span>
        <p>Register</p>
      </div>
      </Link>

      </>)}
    
  

      





     


    </div>
   
    <nav className='bg-white h-[80px] w-full absolute z-[1] px-[40px] py-2 flex items-center justify-between  top-0 border-b-2 border-b-[#eeeee]'>
   
    <div className='w-[20%] flex flex-row gap-4 items-center '>
    <button onClick={()=>{isCliked()}}> <span class="material-symbols-outlined">
        menu
        </span></button>
    <Link to='/' ><img src={logo}  className='h-[45px] ' alt="" /></Link> 
    </div>
    
    <div className='w-[32%] h-[52px] relative'>
    <input type="text" className='text-black border-[2px] border-[#eeeeee] shadow-sm rounded-full w-full px-6 py-3 ml-7 bg-white' />
    <button className='absolute z-10 right-0 top-3 translate-x-2 scale-105'><span class="material-symbols-outlined rounded-full  p-1  text-[#295CD3]">search</span></button>
    </div>
  
   <div className='w-[20%]  flex items-center justify-end gap-4'>


        <Link to="/add" className="button-cover" role="button"><span className="text">Lend</span><span>Items!</span></Link>
        <button onClick={()=>{isClikedUM()}} className='text-[#4b4b4b] scale-125 hover:text-[#295cd3]  '>
        <span class="material-symbols-outlined">
        account_circle
        </span>
        </button>
  
   </div>


   
    </nav>
   

    </>
  )
}

export default Navbar_
