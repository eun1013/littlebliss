import React, { useEffect, useState } from 'react';
import { RiStarSmileFill } from "react-icons/ri";
import BestList from "../../assets/BestList.json";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { useNavigate } from 'react-router-dom';


const Best = () => {
  const [hoveredle, setHoveredle] = useState(null);
  const navigate = useNavigate('');

  const sliderSettings = {
    dots: false,
    infinite: false,
    speed: 500, // 슬라이드 전환 속도 (밀리초)
    slidesToShow: 1, //모바일에서는 1개 보여주기
    slidesToScroll: 1, // 한 번에 1개씩 넘기기
    arrows: true, // 좌우 화살표 버튼 표시

    responsive: [
      {
        breakpoint: 768, // 767px 이하일 때
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 9999, // 768px 이상일 때
        settings: {
          slidesToShow: 2, // 2개 보여주기
          slidesToScroll: 2, // 한 번에 2개씩 넘기기
        }
      }
    ]
  }

  return (
    <div>
      <div className="Best-wrap">
        <div className='category-new'>
          <p className="new-icon"><RiStarSmileFill /></p>
          <h1 className="new-name">BEST</h1>
          <p className="new-ment">지금 리틀 블리스에서 가장 인기 있는 상품!</p>
        </div>

        <div className="best-slider-container">
          <Slider {...sliderSettings} className="best-products-slider">
            {BestList.map((item) => (
              <div
                key={item.id}
                className="best-item-wrapper"
                onMouseEnter={() => { setHoveredle(item.id) }}
                onMouseLeave={() => { setHoveredle(null) }}
              >
                <div className="best-container">
                  <img
                    loading="lazy"
                    src={`${process.env.PUBLIC_URL}/${item.imageDefault}`}
                    alt={item.alt}
                    className="best-img default-img"
                    onClick={() => { navigate('/productPage') }}
                  />
                  <img
                    loading="lazy"
                    src={`${process.env.PUBLIC_URL}/${item.imageHover}`}
                    alt={item.alt}
                    className={`best-img hover-img ${hoveredle === item.id ? 'active' : ''}`}
                    onClick={() => { navigate('/productPage') }}
                  />
                </div>
                <div className="best">
                  <div className="best-info">
                    <h3 className="best-title">{item.title}</h3>
                    <p className="best-price">￦{item.price.toLocaleString()}원</p>
                  </div>
                  <div className="best-btn-wrap">
                    <button className="btn-go">상품 보러 가기</button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Best;