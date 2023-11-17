import React, { useState } from 'react';
import Logo from '../Assest/logo.png';
import { Link } from 'react-router-dom';

const CardNavbar = () => {
  const [isHomePageOpen, setIsHomePageOpen] = useState(true);

  const handleLogoClicked = () => {
    // Toggle the state to open/close the home page
    setIsHomePageOpen(!isHomePageOpen);
  };

  return (
    <div className='w-screen'>
      <nav className='pl-10 pr-10 pt-3 pb-3 sticky shadow-md flex items-center justify-start'>
        <Link to={isHomePageOpen ? '/' : '/Closed'}>
          <img className='w-4 mr-5' src={Logo} alt="Logo" onClick={handleLogoClicked} />
        </Link>
        <h3 className='font-normal'> Bing Mobile Experience </h3>
      </nav>
    </div>
  );
}

export default CardNavbar;
