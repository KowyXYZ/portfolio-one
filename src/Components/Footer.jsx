import React from 'react'

//assets

import home from './../Assets/home.png'
import user from './../Assets/user.png'
import phone from './../Assets/phone.png'

import fb from './../Assets/facebook.png'
import ig from './../Assets/instagram.png'
import tw from './../Assets/twitter.png'
import yt from './../Assets/youtube.png'

function Footer() {
  return (
    <div className='flex justify-center items-center flex-col mt-44'>
      <div className='md:flex-row flex-col flex items-center justify-center gap-24'>

        <div className='md:flex-row flex-col flex items-center justify-center gap-2'>
          <img src={home} alt="" />
          <p>Home</p>
        </div>
        <div className='md:flex-row flex-col flex items-center justify-center gap-2'>
          <img src={user} alt="" />
          <p>About Me</p>
        </div>
        <div className='md:flex-row flex-col flex items-center justify-center gap-2'>
         <img src={phone} alt="" />
         <p>Contact</p>
        </div>

      </div>

      <div className='flex mt-12 gap-4 items-center justify-center'>
        <div className='bg-[#393E46] p-4 rounded-full'>
          <img src={fb} alt="" />
        </div>


        <div className='bg-[#393E46] p-4 rounded-full'>
          <img src={ig} alt="" />
        </div>


        <div className='bg-[#393E46] p-4 rounded-full'>
          <img src={tw} alt="" />
        </div>


        <div className='bg-[#393E46] p-4 rounded-full'>
          <img src={yt} alt="" />
        </div>
      </div>

      <div className='my-12'>
        @Kowy
      </div>
    </div>
  )
}

export default Footer
