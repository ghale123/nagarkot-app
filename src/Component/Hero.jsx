import React from 'react'
import valleyImage from '../assets/images/valleyImage.jpg'; 

const Hero = () => {
  return (
    <div className='mt-27'>
  <div className=" relative px-16 w-full h-full">
      <img
        src={valleyImage}
        alt="Valley"
        className="w-full h-full  object-cover rounded-lg"
      />
      <div className="absolute top-16 left-25 w-[450px] p-14 bg-white/20 rounded-lg backdrop-blur-none">
        <h1 className="text-lg md:text-xl text-gray-700 mt-2">
          Trusted by over 
          <span className='text-emerald-500'>+20k Peoples</span>
           & Event Partners
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 leading-tight">
          Preserving Culture and Empowering Communities{' '}
          <span className="text-orange-500">with Homestays</span>
        </h2>
        <button className="mt-4 px-6 py-2 bg-orange-500 text-black font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
          Explore More
        </button>
      </div>
    </div>
    </div>


  )
}

export default Hero