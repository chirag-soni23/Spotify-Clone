import React, { useState } from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { UserData } from '../context/User';

const Register = () => {
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");

    const {registerUser,btnLoading} = UserData();
    const navigate = useNavigate("/");
  
    function submitHandler(e){
      e.preventDefault();
      registerUser(name,email,password,navigate);
    }
    return (
      <div className='flex items-center justify-center min-h-screen'>
        <div className="bg-black text-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className='text-3xl font-semibold text-center mb-8'>Register to Spotify</h2>   
          <form className='mt-8' onSubmit={submitHandler}>
          <div className="mb-4">
              <label className='block text-sm font-medium mb-1'>Name</label>
              <input value={name} onChange={(e)=>setName(e.target.value)} className='auth-input' type="text" placeholder='Your name' required/>
              </div>
            <div className="mb-4">
              <label className='block text-sm font-medium mb-1'>Email or username</label>
              <input value={email} onChange={(e)=>setEmail(e.target.value)} className='auth-input' type="email" placeholder='Email or username' required/>
              </div>
            <div className="mb-4">
              <label className='block text-sm font-medium mb-1'>Password</label>
              <input value={password} onChange={(e)=>setPassword(e.target.value)} className='auth-input' type="password" placeholder='Password' required/>
              </div>
              <button disabled={btnLoading} className='auth-button'>{btnLoading?"Please Wait....":"Register"}</button>
              </form>  
              <div className="text-center mt-6">
                <Link to="/login" className='text-sm text-green-400 hover:text-green-300'>have account?</Link>
                </div>   
          </div>      
      
      </div>
  )
}
 
export default Register