import React from 'react'
import Navbar from '../components/Navbar.js'
import HeroSection from '../components/herosection/HeroSection.js'
import WorkingFlow from '../components/workingFlow/WorkingFlow.js'
import ResumeSection from '../components/ResumeSection.js'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorkingFlow />
      <ResumeSection />
    </div>
  )
}

export default Home
