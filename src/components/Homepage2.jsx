import React from 'react'
import Mobile from '../Assest/mobile.png';
import Arrow from '../Assest/Arrow.png';
import LinkedInQRCode from './Qrcode';




const Homepage2 = () => {
  return (
    <div className='pl-8 mt-8 space-x-16 pr-8 flex item-center justify-center'>
    <img className='animate-bounce object-contain' src={Mobile} />
    
    <img className=' object-contain animate-leftToRight 'src={Arrow} />
    

   <div className='animate-bounce object-contain'>
   
   <LinkedInQRCode />
   </div> 
    </div>
  )
}

export default Homepage2