import React from 'react'

//assets
import heroImg from '../../Assets/HeroImg.png'
import downloadBtn from '../../Assets/download.png'
import { Link } from 'react-router-dom'

function HeroSection() {
  return (
    <div className='flex justify-between items-center mt-12 md:mt-24 flex-col-reverse md:flex-row md:mx-0 mx-12'>
      <div className='mb-30'>
        <div className='flex flex-col'>
            <h1 className='text-center md:text-start uppercase text-[35px] md:text-[80px] font-bold leading-none'>FRONTEND  <span className='text-[#00ADB5]'>Developer</span></h1>
            <div className='flex justify-betweeen  items-center gap-4 md:gap-10 mt-12'>
                <Link to='/contact' className='ml-6 md:ml-0 rounded-3xl border-2 border-[#00ADB5] bg-[#00ADB5] px-3 md:px-6 py-2'>Hire me</Link>
                <button className=' rounded-3xl border-2 border-[#393c41] bg-[#393c41] flex px-6 py-2' >
                  Download CV  <img src={downloadBtn} alt="slika" />
                </button>
            </div>
        </div>

        
      </div>

      <div>
            <img className='w-[650px]' draggable={false} src={heroImg} alt="" />
      </div>
    </div>
  )
}

export default HeroSection
