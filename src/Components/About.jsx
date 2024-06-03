import React from "react";

const About = () => {
  return (
    <div className="w-full py-24  bg-[#CDEA68] rounded-tl-3xl rounded-tr-3xl text-black">
      <h1 className="px-16 font-normal text-5xl w-[22em] tracking-tighter">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to raise funds, sell prod­ucts, ex­plain com­plex ideas, and hire great
        peo­ple.
      </h1>
      <div className="mt-16 px-16 py-4 w-full border-y border-zinc-500 flex">
        <div className="w-1/2 ">
            <h2 className="text-5xl font-semibold text-zinc-800">Our approach:</h2>
            <button className="mt-6 px-12 py-4 bg-zinc-800 text-white rounded-3xl">
                READ MORE
            </button>
        </div>
        <figure className="h-[70vh] bg-red-600 rounded-lg w-1/2">

        </figure>
      </div>
    </div>
  );
};

export default About;
