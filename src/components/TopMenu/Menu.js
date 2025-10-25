import React, { useState } from 'react';
// import { FaWindowClose } from "react-icons/fa";
import { ReactComponent as Close } from '../../icons/Close.svg';
import { useNavigate } from 'react-router-dom';


const Menu = ({isOpen, setIsOpen}) => {
  const [close, setClose] = useState(true);
  const navigate = useNavigate('');

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
        <li
        onClick={()=>{navigate('/') 
        setIsOpen(false)}}>HOME</li>
        <li
        onClick={()=>{navigate('/NewArrival')
          setIsOpen(false);
        }}>NEW ARRIVAL</li>
        <li
        onClick={()=>{navigate('/Outer')
          setIsOpen(false);
        }}>OUTER</li>
        <li
        onClick={()=>{navigate('/Top')
          setIsOpen(false);
        }}>TOP</li>
        <li
        onClick={()=>{navigate('/Bottom')
          setIsOpen(false);
        }}>BOTTOM</li>
        <li
        onClick={()=>{navigate('/Romper')
          setIsOpen(false);
        }}>ROMPER</li>
        <li
        onClick={()=>{navigate('/Sale')
          setIsOpen(false);
        }}>SALE</li>
        <li>Q&A</li>
      </ul>
    </div>
  );
};

export default Menu;