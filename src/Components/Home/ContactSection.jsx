import React from 'react'

import slika from '../../Assets/contactImg.png'

function ContactSection() {
  return (
    <div className='flex justify-between flex-col md:flex-row items-center mb-24'>
      <div className='flex justify-center items-center flex-col space-y-12'>
        <h1 className='text-[35px] md:text-[75px] font-semibold'>Got a project in <br/> <span className='text-[#00ADB5]'>mind?</span></h1>
        <img className='md:w-[300px]' src={slika} alt="pic" />
      </div>

      <div className='flex items-center justify-center'>
        <form className='flex justify-center flex-col'>
            <div className='flex items-center justify-center gap-10 pb-12 flex-col md:flex-row mt-12 md:mt-0 '>
                <div className='flex flex-col'>
                    <label>Your name</label>
                    <input className='px-3 py-2 text-[18px] text-black bg-[#393E4680] outline-none rounded-xl' placeholder='Name' type="text" />
                </div>
                <div className='flex flex-col'>
                    <label htmlFor="">Your email</label>
                    <input className='px-3 py-2 text-[18px] text-black bg-[#393E4680] outline-none rounded-xl' placeholder='Email' type="email" />
                </div>
            </div>

            <div className='flex flex-col'>
                <label htmlFor="">Your message</label>
                <textarea style={{resize: 'none'}}  className='px-3 py-2  text-[18px] text-black bg-[#393E4680] outline-none rounded-xl' placeholder='Message' type="text" />
            </div>
            <button className='py-2 px-4 bg-[#00ADB5] mt-12 rounded-3xl text-[18px] '>Send Message</button>
        </form>
      </div>
    </div>
  )
}

export default ContactSection
