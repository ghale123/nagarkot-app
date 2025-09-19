import React from 'react'

const Valley = () => {
  return (
    <div className='px-8 mt-10'>
    <div className="relative w-full h-[600px]">
      <img 
        src="/images/valleyImage.jpg" 
        alt="valley"  
        className="w-full h-full rounded-lg object-cover"
      />
      
      
      <div className="absolute top-10 left-10 max-w-3xl p-8 bg-lime-300/90 rounded-lg shadow">
        <h1 className="text-2xl font-bold text-black mb-4 gap-2 flex items-center">
          Impact Footprint
          <span className='flex-1 border-b border-blue-700'></span>
        </h1>
        <p className="text-black text-base">
          Women Empowerment: The homestay program has significantly boosted the confidence and independence of local women, empowering them to take on leadership roles within the community. 
          <br /><br />
          Economic Opportunity: The program has opened up new sources of revenue for locals, turning tourism into a significant economic driver for the community at Bastola Gaun.
          <br /><br />
          Local Engagement: Residents now participate actively in hosting and guiding, creating more direct benefits for the community than traditional tourism centred around hotels.
          <br /><br />
          Personal Hygiene & Cleanliness: Awareness around hygiene has increased, leading to cleaner living environments and healthier lifestyles. 
          <br /><br />
          Sustainable Agriculture: Home-cooked meals for guests emphasize the importance of planting and maintaining fields, promoting sustainable agricultural practices within the community.
        </p>
        <button className="mt-4 bg-white hover:bg-yellow-600 text-black font-semibold py-2 px-10 rounded-lg shadow">
          Book Now
        </button>
      </div>
    </div>
  </div>
  )
}

export default Valley
