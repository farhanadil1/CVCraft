import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '../components/Navbar.js';
import HeroSection from '../components/home/herosection/HeroSection.js';
import WorkingFlow from '../components/home/workingFlow/WorkingFlow.js';
import ResumeSection from '../components/home/ResumeSection.js';
import Review from '../components/home/reviews/Review.js';
import FAQ from '../components/home/faq/FAQ.js';
import Footer from '../components/Footer.js';
import { Spinner } from '../components/Spinner.js'; 

const Home = () => {
  const [loading, setLoading] = useState(true);

  // images used in the homepage to preload
 

  useEffect(() => {
  const imagesToLoad = [
    './logo.png',
    './gradient.png',
    './iphone.png',
    './resumes.png',
    './security.png'
    
  ];

  let loadedCount = 0;

  imagesToLoad.forEach((src) => {
    const img = new Image();
    img.src = src;
    img.onload = img.onerror = () => {
      loadedCount++;
      if (loadedCount === imagesToLoad.length) {
        setLoading(false);
      }
    };
  });
}, []);

  // Framer Motion variants for scroll animation
  const fadeUp = {
    hidden: { opacity: 0, y: 50 },
    visible: (i = 1) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.2, duration: 0.6 },
    }),
  };

  if (loading) return <Spinner />; 

  return (
    <div>
      <Navbar />

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <HeroSection />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <WorkingFlow />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <ResumeSection />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <Review />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <FAQ />
      </motion.div>

      <Footer />
    </div>
  );
};

export default Home;
