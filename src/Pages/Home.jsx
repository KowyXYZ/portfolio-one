import React from 'react'
import AboutSection from '../Components/Home/AboutSection'
import ContactSection from '../Components/Home/ContactSection'
import HeroSection from '../Components/Home/HeroSection'
import ProjectsSection from '../Components/Home/ProjectsSection'

function Home() {
  return (
    <div>
      <HeroSection/>
      <AboutSection/>
      <ProjectsSection/>
      <ContactSection/>
    </div>
  )
}

export default Home
