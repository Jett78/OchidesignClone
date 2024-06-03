import React from 'react'
import Navbar from './Components/Navbar'
import HeroSection from './Components/HeroSection'
import Marquee from './Components/Marquee'

const App = () => {
  return (
  <div className='w-full min-h-screen bg-black text-white'>
    <Navbar/>
    <HeroSection/>
   <Marquee/>
  </div>
  )
}

export default App