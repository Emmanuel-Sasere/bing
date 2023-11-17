import React from 'react'
import Logo from '../Assest/logo.png';






const Navbar = () => {
  return (
    <div className='w-screen   '>
    <nav className=' wraper sticky shadow-md pl-10 pr-10 pt-3 pb-3   w-full flex items-center justify-start'>
    <img className='w-4 mr-5' src={Logo} />
    <h3 className='font-normal'> Bing Mobile Experience </h3>
    </nav>
    </div>
  )
}

export default Navbar