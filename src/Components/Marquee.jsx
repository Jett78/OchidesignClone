import React from "react";
import { motion } from "framer-motion";
const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.10"  className="w-full py-10 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
      <div className="flex whitespace-nowrap border-y overflow-hidden">
        <motion.h1 
        initial={{x:0}}
        animate={{x:"-100%"}}
        transition={{ease:"linear",repeat:Infinity,duration:10}}       //pr fixes the jitter in animation
        className="text-[20vw] font-bold leading-none tracking-tighter pr-20">WE ARE OCHI</motion.h1>
        <motion.h1 
        initial={{x:0}}
        animate={{x:"-100%"}}
        transition={{ease:"linear",repeat:Infinity,duration:10}}
        className="text-[20vw] font-bold leading-none tracking-tighter pr-20">WE ARE OCHI</motion.h1>
      </div>
    </div>
  );
};

export default Marquee;
