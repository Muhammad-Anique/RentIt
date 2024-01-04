import React from 'react'
import logo from  '../../Assets/logo.png'

import {Link} from 'react-router-dom'

function Navbar(props) {
  var fullName = null;
  var nameParts = null;
  var lastName = 'hello';
  if(props.user) 
  {
    fullName = props.user.name;
    nameParts = fullName.split(' ');
    lastName = nameParts[nameParts.length - 1];

  }



  return (
    <nav className='bg-white h-[60px] w-full shadow-md  px-7 py-2 flex items-center justify-between z-10 absolute'>
    <Link to="/"><img src={logo} className='h-[45px]' alt="" /></Link> 
    <div className='flex flex-row gap-2'> 
    <div className='w-[200px] h-[40px] border-[2.5px] hover:bg-[#0A1048] hover:text-white cursor-pointer  border-[#0A1048] flex items-center justify-center'>
        <p className='text-center font-bold'>How It Works</p>
    </div>

    {
       props.loggedIn!==1 ? ( <Link to={'/login'} className='w-[200px] h-[40px] border-[2.5px] hover:bg-[#0A1048] hover:text-white cursor-pointer  border-[#0A1048] flex items-center justify-center'>  
       {
        <p className='text-center font-bold'>Login</p>
       }   
        
     </Link>) : (
      <div className='w-[200px] h-[40px] border-[2.5px] hover:bg-[#0A1048] hover:text-white cursor-pointer  border-[#0A1048] flex items-center justify-center'>  
      {
        <h1>Hello <span className='font-bold'>{lastName}</span> </h1>
      }   
       
    </div>
     )
    }
   

    </div>
   
    </nav>
  )
}

export default Navbar
