import React from 'react'
import { easeInOut, motion } from "framer-motion"
//Assets
import firstImg from "../../Assets/Logo.png"
import secondImg from "../../Assets/imgLogo.webp"
import thirdImg from "../../Assets/logo2.svg"

function ProjectsSection() {
  return (
    <div className='my-44 flex items-center justify-center flex-col space-y-12'>
      <div>
        <h1 className='font-semibold text-[75px]'>My recent <span className='text-[#00ADB5]'>works</span></h1>
      </div>
      <div className='flex gap-24 bg-[#393E46] px-44 py-24 rounded-3xl'>

        

        <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{transition: easeInOut}}
        className='p-6 bg-[#e2e2e2] rounded-3xl flex items-center justify-center'>
             <a href="https://stonecrete-frontend.vercel.app" target='_blank' rel='noreferrer'>
                <img className='w-[200px]' src={secondImg} alt="item" />
             </a>
             
        </motion.div>

        <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{transition: easeInOut}}
        className='px-16 bg-[#e2e2e2] rounded-3xl flex items-center justify-center'>
            <a href="https://first-ecommerceapp.vercel.app" target='_blank' rel='noreferrer'>
             <img src={firstImg} alt="item" />
            </a>
            
        </motion.div>

        <motion.div
        whileHover={{ scale: 1.1 }}
        animate={{transition: easeInOut}}
        className='p-6 bg-[#e2e2e2] rounded-3xl flex items-center justify-center'>
            <a href="https://first-ecommerceapp.vercel.app">
              <img  className='w-[200px]' src={thirdImg} alt="item" />
            </a>
            
        </motion.div>


      </div>
      <div>
        <a className='bg-[#00ADB5] px-12 py-2 text-[22px] font-light rounded-3xl' href="https://github.com/KowyXYZ?tab=repositories" target='_blank' rel='noreferrer'>
          See more...
        </a>
      </div>
    </div>
  )
}

export default ProjectsSection
