import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Projects from './Components/Projects'
import Footer from './Components/Footer'
import LocomotiveScroll from "locomotive-scroll"

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();   //for smooth scrolling
  return (
  <div className='w-full min-h-screen bg-black text-white'>
    <Navbar/>
    <HeroSection/>
   <Marquee/>
   <About/>
   <Eyes/>
   <Projects/>
   <Footer/>
  </div>
  )
}

export default App