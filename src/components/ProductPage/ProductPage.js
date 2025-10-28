import React, { useState } from 'react';
import { FaBell } from "react-icons/fa6";
import { IoMdHeart } from "react-icons/io";
import DitailInfo from './DitailInfo';
import Footer from '../Footer/Footer';
import PurchaseInfo from './PurchaseInfo';
import ReviewInfo from './ReviewInfo';
import { useNavigate } from 'react-router-dom';

const ProductPage = () => {
  const defaultImgSrc = process.env.PUBLIC_URL + "/images/all/img1.webp";
  const hoverImgSrc = process.env.PUBLIC_URL + "/images/all/img2.webp";

  const [currentImg, setCurrentImg] = useState(defaultImgSrc);
  const [activeTab, setActiveTab] = useState('상세정보')
  const navigate=useNavigate('');

  const handleMouseEnter = () => {
    setCurrentImg(hoverImgSrc);
  };

  const handleMouseLeave = () => {
    setCurrentImg(defaultImgSrc);
  };

  return (
    <>
    <div className='product-page'>
      <div className='product-container'>
        <div
          className='page-img-container'
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            className='page-main-img'
            src={currentImg}
            alt="브라운색 긴팔 바디수트를 입고, 잠이 든 아기"
          />
        </div>
        <div className='page-info-wrap'>
                <div className='page-info01'>
          <div className='info01-title'>
            <h2 className='info01-name'>Brown Long-Sleeve Bodysuit</h2>
            <p className='info01-price'>￦25,000원</p>
          </div>
          <p className='info01-label'>new</p>
        </div>
        <div className='page-info02'>
          <div className='info02'>
            <div className='info02-color-title'>
            <h4 className='info02-title'>색상</h4>
            <p className='info02-option'>옵션을 선택해주세요</p>
            </div>
            <p className='color-caption'>1개 컬러</p>
          </div>
          <button 
          className='info02-btn'/>
          <div className='info02'>
            <div className='info02-color-title'>
            <h4 className='info02-title'>사이즈</h4>
            <p className='info02-option'>옵션을 선택해주세요</p>
            </div>
            <p className='color-caption size-caption'
            onClick={()=>{navigate('/popup3')}}
            >사이즈 가이드</p>
          </div>
          <div className='info02-btn2-wrap'>
          <button className='info02-btn2'>6M</button>
          <button className='info02-btn2'>12M</button>
          </div>
          <div className='product-report'>
            <div className='report-wrap'>
            <p className='report-icon'><FaBell /></p>
            <p className='report-cation'>원하는 사이즈가 품절인가요?</p>
            </div>
            <p className='report-option'>재입고 알림 신청 ＞</p>
          </div>
          <div className='productPage-price'>
            <h3 className='productPage-price-info'>총 상품 금액</h3>
            <p className='productPage-price-total'>25,000원</p>
          </div>
          <div className='productPage-btn-wrap'>
            <button className='productPage-btn-icon'><IoMdHeart /></button>
            <button className='productPage-btn-go'>구매하기</button>
          </div>
        </div>
        </div>
      </div>
<div className='detail-btn-wrap'>
        <button 
          className={activeTab === '상세정보' ? 'active' : ''}
          onClick={() => setActiveTab('상세정보')}
        >
          상세정보
        </button>
        <button 
          className={activeTab === '리뷰(95)' ? 'active' : ''}
          onClick={() => setActiveTab('리뷰(95)')}
        >
          리뷰(95)
        </button>
        <button 
          className={activeTab === '구매정보' ? 'active' : ''}
          onClick={() => setActiveTab('구매정보')}
        >
          구매정보
        </button>
      </div>

      <div className='tab-content'>
        {activeTab === '상세정보' && <DitailInfo />}
        {activeTab === '리뷰(95)' && <ReviewInfo />}
        {activeTab === '구매정보' && <PurchaseInfo />}
      </div>
    </div>
<Footer/>
</>
  );
};


export default ProductPage;