import React from 'react'
import governmentImg from '../assets/images/government.png';  
import changunarayanImg from '../assets/images/changunarayan.jpg';
import ntbImg from '../assets/images/ntb.jpg';
import dcaImg from '../assets/images/dca.jpg';
import friendsImg from '../assets/images/friends.jpg';
import communityImg from '../assets/images/community.png';
import homestayImg from '../assets/images/homestay.jpg';
import homestaydevelopmentImg from '../assets/images/homestaydevelopment.jpg';

const Partner = () => {
  return (
    <div className='px-8 py-10 mt-7'>
      <div className='mb-8'>
        <h1 className='text-2xl md:text-3xl font-bold mb-2'>
          Partners
        </h1>
        <p className='text-gray-500'>
          Building bridges with trusted partners across the Global South.
        </p>
      </div>

      <div className='flex flex-wrap justify-center w-full h-full gap-6'>
        <div className="border  border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src={governmentImg} alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src={changunarayanImg} alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border  border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src={ntbImg} alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src={dcaImg} alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm ">
          <img src={friendsImg} alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src={communityImg} alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src={homestayImg} alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm ">
          <img src={homestaydevelopmentImg} alt="logo" className='h-20 w-40 object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Partner