import React, { useState } from 'react';
// import { FaWindowClose } from "react-icons/fa";
import { ReactComponent as Close } from '../../icons/Close.svg';


const Menu = ({isOpen, setIsOpen}) => {
  const [close, setClose] = useState(true);

  const handleClick=()=>{
    setClose(false);
    setIsOpen(false);
  }
  return (
    <div className='Menu'>
      <div className='toggle-menu'>
      <button className='btn-close'
      onClick={handleClick}
      ><Close /></button>
      <h2 className='menu-logo'>Little Bliss</h2>
      <div className='none'></div>
      </div>
      <ul className='menu-list'>
        <li>HOME</li>
        <li>NEW ARRIVAL</li>
        <li>OUTER</li>
        <li>TOP</li>
        <li>BOTTOM</li>
        <li>ROMPER</li>
        <li>SALE</li>
        <li>Q&A</li>
      </ul>
    </div>
  );
};

export default Menu;