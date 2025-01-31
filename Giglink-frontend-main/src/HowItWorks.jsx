import React from 'react'
import Download from './Components/Download/Download'
import Footer from './Components/Footer/Footer'
import Hero from './Components/HowItWorks/Hero'
import How from './Components/HowItWorks/How'
import Navbar from './Components/NavBar/Navbar'


function HowItWorks() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <How/>
      <Download/>
      <Footer/>
    </>
  )
}

export default HowItWorks