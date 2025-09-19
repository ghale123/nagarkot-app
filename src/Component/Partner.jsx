import React from 'react'

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
          <img src="/images/government.png" alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src="/images/cchangunarayan.jpg" alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border  border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src="/images/ntb.jpg" alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src="/images/dca.jpg" alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm ">
          <img src="/images/friends.jpg" alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src="/images/community.png" alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm">
          <img src="/images/homestay.jpg" alt="logo" className='h-20 w-40 object-contain' />
        </div>
        <div className="border border-white rounded-xl p-3 flex items-center justify-center shadow-sm ">
          <img src="/images/homestaydevelopment.jpg" alt="logo" className='h-20 w-40 object-contain' />
        </div>
      </div>
    </div>
  )
}

export default Partner
