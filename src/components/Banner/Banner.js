import React, { useState } from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { useNavigate } from 'react-router-dom';


const Banner = () => {
  const [activeCategory, setActiveCategory] = useState('');
  const navigate = useNavigate('');

  const categories = [
    { name: 'NEW ARRIVAL', path: '/new-arrival' },
    { name: 'OUTER', path: '/outer' },
    { name: 'TOP', path: '/top' },
    { name: 'BOTTOM', path: '/bottom' },
    { name: 'ROMPER', path: '/romper' },
    { name: 'SALE', path: '/sale' },
  ]

  const bannerImages = [
    `${process.env.PUBLIC_URL}/images/Banner/banner01.webp`, // 첫 번째 배너 이미지
    `${process.env.PUBLIC_URL}/images/Banner/banner02.webp`, // 두 번째 배너 이미지
    `${process.env.PUBLIC_URL}/images/Banner/banner03.webp`, // 세 번째 배너 이미지
  ];
  const sliderSettings = {
    dots: true,           // 슬라이더 아래에 점(dot) 내비게이션 표시
    infinite: true,       // 슬라이드가 끝없이 반복되도록 설정
    speed: 400,           // 슬라이드 전환 속도 (밀리초)
    slidesToShow: 1,      // 한 번에 보여줄 슬라이드 개수
    slidesToScroll: 1,    // 한 번에 스크롤될 슬라이드 개수
    autoplay: true,       // 자동 재생 활성화
    autoplaySpeed: 5000,  // 각 슬라이드가 보여지는 시간 (3초)
    cssEase: "linear" ,    // 슬라이드 전환 애니메이션 효과
    arrows: false
  };
  
  const handleClick = (category)=>{
    setActiveCategory(category.name);
    navigate(category.path);
  }

  return (
    <>
      <ul className='menu-category'>
        {
          categories.map((category)=>{
            return (
              <li 
              key={category.name}
              className={activeCategory === category.name ? 'active':''}
              onClick={()=>{handleClick(category)}}
              >
                {category.name}
              </li>
            )
          })
        }
      </ul>
    <div className='Banner'>
      <div className='banner-slider'>
        <Slider
        className='slider' 
        {...sliderSettings}>
          {bannerImages.map((imgSrc,idx)=>{
            return (
            <div
            className='banner-container' 
            key={idx}>
              <img
              className='banner-poster'
              src={imgSrc}
              alt={`리틀 블리스 배너 이미지 ${idx + 1}`}
              />
            </div>
            )
          })}
        </Slider>
      </div>
      <img
        className='sale-poster' 
        src={`${process.env.PUBLIC_URL}/images/Banner/banner04.webp`} alt="가을 세일 포스터 이미지"/>
    </div>
    </>
  );
};

export default Banner;