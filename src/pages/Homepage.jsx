import React from 'react'
import Navbar from '../components/Navbar'
import HomeSection from '../components/HomeSection'
import Features from '../components/Features'
import Usable from '../components/Usable'
import Footer from '../components/Footer'




const Homepage = () => {
  return (
    <div>
      <Navbar />
      <HomeSection />
      <Features />
      <Usable />
      <Footer />
    </div>
  )
}

export default Homepage