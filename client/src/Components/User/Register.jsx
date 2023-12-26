import React, { useEffect, useState } from 'react'
import logo from  '../../Assets/logo.png'
import clouds from '../../Assets/clouds.png'

import cloud1 from '../../Assets/cloud1.png'
import cloud2 from '../../Assets/cloud2.png'
import '../../Assets/input.css'

import google from '../../Assets/google_l.png'
import Navbar from '../NavBar/Navbar'
import { Link, useNavigate } from 'react-router-dom'
import { ToastContainer , toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';




function Register() {
  const navigate = useNavigate()
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

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    dob: '',
    cnic: '',
    password: '',
    confirmPassword: '',
  });


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  useEffect(()=>{

    console.log(formData)

  },[formData])

  function validateInputs(name, email, dob, cnic, password, confirmPassword) {
    const emailRegex = /^[^\s@]+@[^@\s]+\.(?:com|org|net|edu|gov|co|io|info|...)$/i;

  
    // Check if any field is empty
    if (!name || !email || !dob || !cnic || !password || !confirmPassword) {
      return "All fields are required.";
    }
  
    // Validate email format
    if (!emailRegex.test(email)) {
      return "Invalid email format. Email must end with @example.com.";
    }
  
    // Validate password and confirmPassword match
    if (password !== confirmPassword) {
      return "Password and Confirm Password do not match.";
    }
  
    // Validate date of birth (dob not below 2010)
    const dobYear = new Date(dob).getFullYear();
    if (dobYear > 2010) {
      return "Date of birth must not be above 2010.";
    }
  
    // Validate CNIC (must contain 15 digits only)
    const cnicRegex = /^\d{13}$/;
    if (!cnicRegex.test(cnic)) {
      return "CNIC must contain 15 digits only.";
    }
  
    // All validations passed
    return true;
  }
  
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    if(validateInputs(formData.name, formData.email,formData.dob,formData.cnic,formData.password, formData.confirmPassword)===true){
      try {
        const response = await fetch('http://localhost:8080/register', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(formData),
        });
  
        if (response.ok) {
          // Handle successful API call
          console.log('Data submitted successfully!');
          notifyS('Registeration Successful')
          navigate('/login')
          
        } else {
          // Handle error response
          console.error('Error submitting data');
        }
      } catch (error) {
        // Handle network errors
        console.error('Network error:', error);
      }
        
    }else{
      console.log("Failed")
      console.log(validateInputs(formData.name, formData.email,formData.dob,formData.cnic,formData.password, formData.confirmPassword))
      notifyF(validateInputs(formData.name, formData.email,formData.dob,formData.cnic,formData.password, formData.confirmPassword))
    }

   
  };



  return (
   


<div className=' bg-[#0A1048] w-screen h-screen flex flex-center justify-center '>  
    
<img src={clouds} className='absolute -z-0 bottom-0 w-full' alt="" />
<img src={cloud1} className='absolute -z-0 w-[140px] top-[180px] left-[250px]' alt="" />
<img src={cloud2} className='absolute -z-0 top-[180px] right-[250px]' alt="" />
<Navbar/>
<div className='flex flex-col justify-center'>
  
<div className='w-full h-[65px]'></div>
<div className='bg-white rounded-3xl w-[430px] h-[620px] my-auto flex flex-col justify-baseline items-center py-10 z-10 '>
        <h1 className='text-center font-bold text-[#0A1048] text-4xl mt-3 '>Welcome to <br /> RentIt</h1>
        <div className='w-[70%]  flex flex-col justify-center items-center gap-1 mt-5'>
          <form onSubmit={handleSubmit} className='flex flex-col justify-center items-center gap-1 w-full'>

          <div class="field field_v1 w-full">
            <label for="name" class="ha-screen-reader">Name</label>
            <input id="name" class="field__input" placeholder="Muhammad Anique" name="name" value={formData.name}
        onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>Name</span>
            </span>
          </div>

          <div class="field field_v1 w-full">
            <label for="first-name" class="ha-screen-reader">Email</label>
            <input id="first-name" class="field__input" placeholder="email@example.com" name="email"  value={formData.email}
        onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>Email</span>
            </span>
          </div>

          <div class="field field_v1 w-full">
            <label for="first-name" class="ha-screen-reader">CNIC</label>
            <input id="first-name" class="field__input" placeholder="xxxxx-xxxxxxx-x" name="cnic"   value={formData.cnic}
        onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>CNIC</span>
            </span>
          </div>

          <div class="field field_v1 w-full">
            <label for="first-name" class="ha-screen-reader">DOB</label>
            <input id="first-name" type='date' class="field__input" name="dob" placeholder=" "  value={formData.dob}
        onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label"><span className='text-red-500'>*</span>DOB</span>
            </span>
          </div>


          <div class="field field_v1 w-full">
            <label for="first-name" class="ha-screen-reader">Password</label>
            <input id="first-name" class="field__input" placeholder=" " name="password"  value={formData.password}
        onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Password</span>
            </span>
          </div>


          <div class="field field_v1 w-full">
            <label for="first-name" class="ha-screen-reader">Confirm Password</label>
            <input id="first-name" class="field__input" placeholder=" "  name="confirmPassword" value={formData.confirmPassword}
        onChange={handleInputChange}/>
            <span class="field__label-wrap" aria-hidden="true">
              <span class="field__label">Confirm Password</span>
            </span>
          </div>


          <button type="submit" className=' text-white  px-10 py-2 mt-7 w-full bg-[#041048]'>Register</button>
           
          </form>
       
          <ToastContainer position="top-right" autoClose={3000} />
        </div>

        <Link to="/login" className='text-xs mt-4'>Already have an account? <span className='text-[#0A1048] text-xs font-bold ' href="">Login</span> </Link>
    </div>     
    </div>

</div>
 
  )
}

export default Register
