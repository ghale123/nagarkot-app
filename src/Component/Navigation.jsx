import React from 'react'

const Navigation = () => {
  return (
    <nav className='left-0 w-full fixed top-0  bg-white shadow-md  z-50 flex justify-around  py-6'>
      <div className='logo'>
        <img src="/images/nagarkotLogo.png" alt="logo" className='h-[60px]'/>
      </div> 
      <ul className='flex items-center gap-9'>
        <li href="#">About Us</li>
        <li href="#">Highlights</li>
        <li href="#">Activities</li>
        <li href="#">Partners</li>
        <li href="#">Contact</li>
        </ul>
        <button className='bg-red-500 p-4 text-[15px] font-bold rounded-4xl text-white '>Book Your stay</button>
    </nav>
  )
}

export default Navigation;