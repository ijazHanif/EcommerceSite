import React, { useState } from 'react'

function Login() {
 const [email , setemail] = useState();
 
 const [pass, setpass] = useState();

 const submitform = (e)=>{
    e.preventDefault();
    const loggedIn = JSON.parse(localStorage.getItem('auth'));
     if(loggedIn.email === email && loggedIn.pass === pass){
        console.log('Successfully Logged In')
     }
     else{
        alert('Invalid Email or Password')
     }
     setemail('');
     setpass('');
 }

  return (
    <>
      <div className='flex justify-center h-screen items-center bg-gray-100'>
        <form onSubmit={submitform} className='bg-white shadow-xl rounded-lg p-10 w-1/3'>
            <h1 className='text-center text-4xl font-semibold'>Login</h1>
            <div  className='my-4'>
                <div className='my-1'>
                   <label className='text-xl'>Enter Email:</label>
                </div>
              <input type='email' placeholder='Enter email' required className='border px-2 py-1 text-xl w-full
               outline-none' value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className='my-4'>
                <div className='my-1'>
                   <label className='text-xl'>Enter Password:</label>
                </div>
              <input type='password' placeholder='Enter password' required className='border px-2 py-1 text-xl w-full 
              outline-none' value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
            </div>
            <div className='flex justify-center mt-6'>
                <button type='submit' className='bg-orange-400 hover:bg-orange-600 text-xl text-white rounded-lg px-4 py-1'>Login</button>
            </div>
            <div className='flex justify-end'>
                <p className='underline italic text-lg cursor-pointer'>Register here</p>
            </div>
        </form>
      </div>
    </>
  )
}

export default Login
