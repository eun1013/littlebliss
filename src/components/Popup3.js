import React from 'react';
import { IoClose } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';

const PopUp3 = () => {
  
  const navigate = useNavigate('');

  return (
    <div className='popup3'>
      <div className='popup3-wrap'>
        <div className='popup3-nav'>
      <h1>사이즈 가이드</h1>
      <button
      className='onClose'
      onClick={()=>{navigate('/productPage')}}
      ><IoClose /></button>
      </div>
      <div className='popup-img-wrap'>
      <img
        className='sizeGuide' loading="lazy"
        src={process.env.PUBLIC_URL + "/images/product/sizeGuide.webp"} alt="사이즈 가이드 표"/>
      </div>
      </div>
    </div>
  );
};

export default PopUp3;