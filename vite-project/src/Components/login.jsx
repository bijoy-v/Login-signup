import React from 'react'
import { useState } from 'react'



function Login()  {
   
  const[action , setaction] = useState("Sign up");
  return (


    <>

    <form className="max-w-md mx-auto  p-10 bg-white rounded-md shadow-md">
      <div className="block text-black text-3xl  font-bold mb-2">{action}</div>


      <div className="mb-4">
        <label htmlFor="username" className="block text-black text-sm font-bold mb-2">
          Username
        </label>
        <input
          type="text"
          id="username"
          name="username"
          placeholder="Username"
          className="shadow appearance-none border border-black-500  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          
        
        />
      </div>

    <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="email">
          Email
        </label>
        <input
          className="shadow appearance-none border border-black-500  rounded w-full py-2 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="email"
          type="email"
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-4">
        <label className="block text-black text-sm font-bold mb-2" htmlFor="password">
          Password
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 mb-3 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="password"
          type="password"
          placeholder="Enter your password"
        />
      </div>
     
      <div className="flex justify-between ">
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4  rounded focus:outline-none focus:shadow-outline "
        type="submit"
        // {action==="Sign up"?"submit gray":"submit"} 
        >
        Login
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        type="submit"
        
          // {action==="Login"?"submit gray":"submit"} 
          >
        Signup
      </button>
      </div>
    </form>
    </>
  )
}

export default Login
