import React from 'react'

//Assets
import slika from '../../Assets/aboutImg.png'

function AboutSection() {
  return (
    <div className='flex justify-between items-center mt-24 flex-col-reverse md:flex-row-reverse '>
      <div className='items-center justify-center flex flex-col  '>
        <h1 className='font-semibold text-[35px] md:text-[75px] my-12'>About <span className='text-[#00ADB5]'>Me</span></h1>
        <p className='text-center w-[300px] md:w-[500px] font-light'>Hi there! My name is Pavle, and I'm a 18 year old FrontEnd Developer based in Serbia.
             I have always been fascinated by making websites and web apps, and I love to spend my free time making some projects.
             When I'm not working or pursuing my hobbies, I enjoy spending time in the gym or cooking.
              I also enjoy spending time with my friends and family, and I value their love and support.</p>
      </div>

      <div className='md:mx-0 mx-4'>
        <img src={slika} alt="hero about" />
      </div>
    </div>
  )
}

export default AboutSection
