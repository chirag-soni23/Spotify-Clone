import React from 'react'
import { UserData } from '../context/User'
import { Link, useNavigate } from 'react-router-dom';

const Admin = () => {
    const {user} = UserData();
    const navigate = useNavigate();
    if(user && user.role !== "admin") return navigate("/")
  return (
    <div className='min-h-screen bg-[#212121] text-white p-8'>
    <Link to="/" className='bg-green-500 text-white font-bold py-2 px-4 rounded-full'>Go to Home page</Link>
    <h2 className='text-2xl  font-bold mb-6 mt-6'>Add Album</h2>
    <form className=''></form>
    </div>
  )
}

export default Admin
