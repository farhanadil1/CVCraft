import React from 'react'
import Navbar from '../components/Navbar.js'
import HeroSection from '../components/herosection/HeroSection.js'
import WorkingFlow from '../components/workingFlow/WorkingFlow.js'
import ResumeSection from '../components/ResumeSection.js'
import Review from '../components/reviews/Review.js'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorkingFlow />
      <ResumeSection />
      <Review />
    </div>
  )
}

export default Home
