import React from 'react'
import Navbar from '../components/Navbar.js'
import HeroSection from '../components/herosection/HeroSection.js'
import WorkingFlow from '../components/workingFlow/WorkingFlow.js'
import ResumeSection from '../components/ResumeSection.js'
import Review from '../components/reviews/Review.js'
import FAQ from '../components/faq/FAQ.js'
import Footer from '../components/Footer.js'

const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <WorkingFlow />
      <ResumeSection />
      <Review />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home
