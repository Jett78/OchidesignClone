import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Marquee from './Components/Marquee'
import About from './Components/About'
import Eyes from './Components/Eyes'
import Projects from './Components/Projects'

const App = () => {
  return (
  <div className='w-full min-h-screen bg-black text-white'>
    <Navbar/>
    <HeroSection/>
   <Marquee/>
   <About/>
   <Eyes/>
   <Projects/>
  </div>
  )
}

export default App