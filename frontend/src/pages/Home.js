import React from 'react'
import Navbar from '../components/Navbar.js'
import HeroSection from '../components/herosection/HeroSection.js'
import WorkingFlow from '../components/workingFlow/WorkingFlow.js'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorkingFlow />
    </div>
  )
}

export default Home
