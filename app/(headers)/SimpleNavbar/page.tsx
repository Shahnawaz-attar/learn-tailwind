'use client'

import React from "react"
const SimpleNavbar = () =>{
  return (
   <div className="bg-orange-800 p-4">
    <div className="container m-auto">
      <div className="flex justify-between items-center">
          <nav className="text-white font-bold text-2xl">Logo</nav>
          <div className="space-x-3">
          <a href='' className='text-white'>
              Home
            </a>
            <a href='' className='text-white'>
              Product
            </a>
            <a href='' className='text-white'>
              Blogs
            </a>
            <a href='' className='text-white'>
              About us
            </a>
            <a href='' className='text-white'>
              Contact us
            </a>
          </div>
          <div>
            <a  className="text-white" href="">Profile</a>
          </div>
      </div>
    </div>
   </div>
  )

}

export default SimpleNavbar 