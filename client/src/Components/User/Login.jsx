import React from 'react'
import logo from  '../../Assets/logo.png'
import clouds from '../../'


function Login() {
  return (
    <div className='bg-[#0A1048] w-screen h-screen flex items-center flex-col'>  
     <nav className='bg-white h-[70px] w-screen shadow-md  px-7 py-2 flex items-center justify-between'>
        <img src={logo} className='h-[45px]' alt="" />
        <div className='w-[250px] h-[40px] border-[3.5px] border-[#0A1048] flex items-center justify-center'>
            <p className='text-center font-bold'>How It Works</p>
        </div>
     </nav>


    <div className='bg-white rounded-3xl w-[500px] h-[600px] my-auto flex flex-col justify-between items-center py-20'>
        <h1 className='text-center font-bold text-[#0A1048] text-4xl '>Welcome to <br /> RentIt</h1>

        <div className='w-[70%] flex flex-col justify-center items-center gap-2'>
        <div className='border-2 font-normal w-full h-[45px] flex flex-row justify-center items-center hover:bg-[#e6e6e9] '>

            <p>Continue with Google</p>
        </div>
        <div className='border-2 font-normal w-full h-[45px] flex flex-row justify-center items-center hover:bg-[#e6e6e9]'>
            <p>Continue with email</p>
        </div>
        </div>


        <p>Already have an account? <a className='text-[#0A1048] font-bold' href="">Login</a> </p>

       
      

    </div>




     
    </div>
  )
}

export default Login
