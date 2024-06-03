import React, { useEffect, useState } from 'react'

const Eyes = () => {
    const[rotate,setRotate] = useState(0)
    useEffect(() => {
        window.addEventListener("mousemove",(e)=>{
            let mouseX = e.clientX;     //tracking co-ordinates of mouse
            let mouseY = e.clientY;

            let deltaX = mouseX-window.innerWidth/2;  //finding center point on screen
            let deltaY = mouseY-window.innerHeight/2;

            var angle = Math.atan2(deltaY,deltaX)*(180/Math.PI);
            setRotate(angle-180) //inverting

        })
    })
  return (
    <div className='w-full h-screen overflow-hidden'>
        <div className='relative w-full h-full bg-cover bg-center bg-[url("https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg")]'>
          <div className='absolute flex items-center gap-4 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]'>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
               <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
                <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                  <div className='w-10 h-10 rounded-full bg-white'></div>
                </div>
               </div>
            </div>
            <div className='flex items-center justify-center w-[15vw] h-[15vw] rounded-full bg-white'>
               <div className='relative w-2/3 h-2/3 rounded-full bg-zinc-900'>
               <div style={{transform:`translate(-50%,-50%) rotate(${rotate}deg)`}} className='absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] w-full h-10'>
                  <div className='w-10 h-10 rounded-full bg-white'></div>
                </div>
               </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Eyes