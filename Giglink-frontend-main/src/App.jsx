import React, { useState } from 'react'
import './App.css'
import AboutUs from './Components/AboutUs/AboutUs'
import Download from './Components/Download/Download'
import Hero from './Components/Hero/Hero'
import Navbar from './Components/NavBar/Navbar'
import Faqs from './Components/FAQ/Faqs'
import Support from './Components/Support/Support'
import Footer from './Components/Footer/Footer'
import Waitlist from './Components/Waitlist/Waitlist'
import { useEffect } from 'react'

function App() {
//   const [waitlist,setWaitlist] = useState(false)
// useEffect(()=>{
//   setTimeout(()=>{
//     setWaitlist(true)
//   },2000)
// },[])




  return (
    <>
    {
    // waitlist? 
    //   <div className=''>
    //   <Waitlist setWaitlist={setWaitlist}/>
    //   <Navbar/>
    //   <Hero/>
    //   </div>
    //   :
      <div className=''>
      <Navbar/>
      <Hero/>
      <AboutUs/>
      <Download/>
      <Faqs/>
      <Support/>
      <Footer/>
    </div>}
    </>
  )
}

export default App
