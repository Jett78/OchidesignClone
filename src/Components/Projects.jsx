import { motion } from "framer-motion";
import React, { useState } from "react";

const Projects = () => {
    const[isHovering,setHovering] = useState(false)


  return (
    <div className="py-16">
      <h2 className="text-6xl px-16 tracking-tighter">Featured Projects</h2>
      <div className="w-full border border-zinc-700 mt-10 py-10 px-16 flex justify-between gap-16">
        <div 
        onMouseEnter={()=> setHovering(true)}
        onMouseLeave={()=> setHovering(false)}
        className="card-container relative bg-[#CCCCCD] w-1/2 h-[75vh]">
        <h2 className="absolute flex overflow-hidden z-10 left-full -translate-x-1/2 -translate-y-1/2 top-1/2 text-[#dafc5e] text-8xl font-bold tracking-tighter leading-none">
        {"FYDE".split("").map((item,index)=>(
                <motion.span
                initial={{y:"100%"}}
                animate={isHovering?{y:0}:{y:"100%"}}
                transition={{ease:"easeInOut",delay:index*0.1}}
                className="inline-block"
                >{item}</motion.span>
            )
        )}
            </h2>
          <div className="card w-full h-full  scale-50">
            <img
              className="w-full h-full bg-cover"
              src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
              alt="img"
            />
          </div>
        </div>
        <div className="relative card-container bg-[#19181E] w-1/2 h-[75vh]">
        <h2 className="absolute flex overflow-hidden right-full translate-x-1/3 -translate-y-1/2 top-1/2 text-[#dafc5e] text-8xl font-bold tracking-tighter leading-none">
            {"VISE".split("").map((item,index)=>(
                <motion.span
                initial={{y:"100%"}}
                animate={isHovering?{y:0}:{y:"100%"}}
                transition={{ease:"easeInOut",delay:index*0.1}}
                className="inline-block"
                >{item}</motion.span>
            )
        )}
            </h2>

          <div className="card w-full h-full scale-50 ">
            <img
              src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
              alt="img"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
