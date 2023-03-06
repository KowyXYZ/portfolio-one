import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div className='flex justify-center md:justify-between items-center pt-6'>
      <div>
        <Link to='/'>
            <h1 className='text-[25px] font-bold'>Kowy</h1>
        </Link>
      </div>

      <div className='hidden md:flex space-x-12 text-[18px] font-light'>
        <NavLink className='transition-all delay-75 ease-in-out rounded-3xl px-4 py-2' to='/'>Home</NavLink>
        <NavLink className='transition-all delay-75 ease-in-out rounded-3xl px-4 py-2' to='/about'>About Me</NavLink>
        <NavLink className='transition-all delay-75 ease-in-out rounded-3xl px-4 py-2' to='/contact'>Contact</NavLink>
      </div>
      


    </div>
  )
}

export default Navbar
