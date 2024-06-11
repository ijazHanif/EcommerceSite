import React, { useState } from 'react'

function Registration() {

  const [name , setname] = useState();
  const [email , setemail] = useState();
  const [pass , setpass] = useState();

   let handleSubmit=(e)=>{
    e.preventDefault();
    localStorage.setItem('auth' ,JSON.stringify({name , email , pass}))
    setname('');
    setemail('');
    setpass('');
   }

  return (
    <>
      <div className='bg-gray-100 flex justify-center h-screen items-center'>
        <form className='bg-white shadow-xl rounded-lg p-10 w-1/3' onSubmit={handleSubmit}>
            <h1 className='text-center text-4xl pb-4 font-semibold'>Sign up</h1>
            <div className='my-6'>
                <div className='mb-2'>
                <label className='text-2xl '>Enter user name:</label>
                </div>
                <input type='text' required placeholder='Enter user name' className='border px-2 py-1 text-xl 
                outline-none w-full' value={name} onChange={(e)=>{setname(e.target.value)}}/>
            </div>
            <div className='my-6'>
                <div className='mb-2'>
                <label className='text-2xl '>Enter Email:</label>
                </div>
                <input type='email' required placeholder='Enter the Password' className='border px-2 py-1 text-xl 
                outline-none w-full'value={email} onChange={(e)=>{setemail(e.target.value)}}/>
            </div>
            <div className='my-6'>
                <div className='mb-2'>
                <label className='text-2xl '>Enter Password:</label>
                </div>
                <input type='password' required placeholder='Enter the Password' className='border px-2 py-1 text-xl 
                outline-none w-full'value={pass} onChange={(e)=>{setpass(e.target.value)}}/>
            </div>
                <div className='flex justify-center'>
                <button type='submit' className='bg-orange-400 hover:bg-orange-600 px-4 py-1 text-white text-xl rounded-lg'>Sign up</button>
                </div>
            <div className='flex justify-end'>
                <p className='italic underline text-lg cursor-pointer'>Login here</p>
            </div>
        </form>
      </div> 
    </>
  )
}

export default Registration
