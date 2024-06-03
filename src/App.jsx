import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Marquee from './Components/Marquee'
import About from './Components/About'

const App = () => {
  return (
  <div className='w-full min-h-screen bg-black text-white'>
    <Navbar/>
    <HeroSection/>
   <Marquee/>
   <About/>
  </div>
  )
}

export default App