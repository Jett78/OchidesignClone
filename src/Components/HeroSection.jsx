import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

const HeroSection = () => {
  return (
    <div className="w-full h-screen bg-black pt-1">
      <div className="px-16 mt-40">
        {["WE CREATE", "EYE OPENING", "PRESENTATION"].map((item, index) => (
          <div className="masker" key={index}>
            <div className="flex items-end">
                {index===1 && (<div className="w-24 h-[4.5vw] bg-red-200"></div>)}
            <h2 className=' text-8xl font-bold  font-["Founders_Grotesk] tracking-tighter'> {item} </h2>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between px-16 py-4 mt-32 border-t border-zinc-700">
          {["For public and private companies","From the first pitch to IPO"].map((item,index)=>(
            <p key={index} className="text-md leading-none tracking-tight uppercase">{item}</p>
          ))}
          <div className="flex items-center gap-2">
            <button className="border border-white rounded-2xl px-4 py-1">START THE PROJECT</button>
            <div className="border rounded-full p-2 rotate-[45deg]">
            <FaArrowUpLong />
            </div>
          </div>
      </div>
    </div>
  );
};

export default HeroSection;
