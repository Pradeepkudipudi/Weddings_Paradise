import React, { useContext, useState } from 'react'
import { AdminContext } from '../context/AdminContext'
//import {assets} from '../assets/assets'
import axios from 'axios'
import { toast } from 'react-toastify'

const Login = () => {
    const [state,setState] = useState('Admin')
const [email,setEmail] = useState('')
const  [password,setPassword] =  useState('')
    const {setAToken,backendUrl} = useContext(AdminContext)

    const onSubmitHandler = async (event) =>{
      console.log("Before preventDefault"); // 1
event.preventDefault()
console.log('Form submitted 🚀');


console.log("backendUrl:", backendUrl);
console.log("setAToken exists:", typeof setAToken === "function");
try{
    if(state==='Admin'){
        
  const {data} = await axios.post(backendUrl + '/api/admin/login',{email,password})
      if(data.success){
        console.log(data.token)
        // console.log("Email:", email);
        // console.log("Password:", password);
        // console.log("State:", state);
        
console.log("Full response data:", data);
        localStorage.setItem('aToken',data.token)
        setAToken(data.token);
        console.log("Token:", data);

      } 


      if (!backendUrl) {
        console.error("Backend URL is missing");
        return;
      }
      
     } //else {

    // }


}catch(error){
  

  // If backend sent a specific message
  const errorMessage = error.response?.data?.message || "Login failed. Please try again.";
  console.log("Error message from backend:", errorMessage);

  // Show the toast
  toast.error(error?.response?.data?.message || "Something went wrong");
  // toast.error(errorMessage);
}

    }

  return (
    <form onSubmit={onSubmitHandler} className='min-h-[80vh] flex items-center'>
        <div className='flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border rounded-xl text-[#5E5E5E] text-sm shadow-lg'>
            <p className='text-2xl font-semibold m-auto '><span className='text-primary'>{state}</span>Login</p>
            <div className='w-full'>
                <p>Email</p>
                <input  onChange={(e)=>setEmail(e.target.value)} value={email} className='border border-[#DADADA] rounded w-full p-2 mt-1 ' type="email" required/>
            </div>
            <div className='w-full'>
            <p>Password</p>
            <input   onChange={(e)=>setPassword(e.target.value)} value={password} className='border border-[#DADADA] rounded w-full p-2 mt-1 ' type="password" required/>
            </div>
            <button type="submit" className='bg-primary text-white w-full py-2 rounded-md text-base'>Login</button>
       {
        state==='Admin' ?
        <p>Venuer login ? <span className='  text-primary underline cursor-pointer' onClick={()=>setState('Venuer')}>Click here</span> </p>
        : <p>Admin login ? <span className='text-primary underline cursor-pointer' onClick={()=>setState('Admin')}>Click here</span> </p>
       }
       
        </div>

    </form>
  )
}

export default Login