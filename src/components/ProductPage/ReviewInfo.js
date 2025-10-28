import React from 'react';
import { FaStar } from "react-icons/fa6";
import { RiNotification3Line } from "react-icons/ri";
import { MdOutlineModeComment } from "react-icons/md";

const ReviewInfo = () => {
  return (
    <div className='ReviewInfo'>
      <h1>상품만족도</h1>
      <h1><span><FaStar /> 5.0</span> · 리뷰 95개</h1>
      <div className='review-img-wrap'>
        <img
        className='review-img' loading="lazy"
        src={process.env.PUBLIC_URL + "/images/product/review01.webp"} alt="구매자 리뷰 이미지"/>
        <img
        className='review-img' loading="lazy"
        src={process.env.PUBLIC_URL + "/images/product/review02.webp"} alt="구매자 리뷰 이미지"/>
        <img
        className='review-img' loading="lazy"
        src={process.env.PUBLIC_URL + "/images/product/review03.webp"} alt="구매자 리뷰 이미지"/>
      </div>
      <div className='review-btn-wrap'>
        <button className='review-btn01' >추천순</button>
        <button className='review-btn02'>최신순</button>
        <button className='review-btn03'>별점 높은 순</button>
      </div>
      <div className='review'>
        <div className='review-info'>
        <div className='review-star'>
        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
        <p className='review-star2'>5.0</p>
        </div>
        <div className='review-user'>
          <p className='review-user01'>4497767948**</p>
          <p>2025-10-25</p>
        </div>
        </div>
        <p className='review-info01'>색상 = 브라운, 사이즈 = 12M</p>
        <p className='review-ment'>아기한테 너무 잘 어울리고, 소재도 모달이라 안심하고 입힐 수 있어서 좋아요!</p>
      <div className='review-comment'>
      <p><RiNotification3Line /> 신고 · 차단</p>
      <p><MdOutlineModeComment /> 댓글 0</p>
      </div>
      </div>
      <div className='review'>
        <div className='review-info'>
        <div className='review-star'>
        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
        <p className='review-star2'>5.0</p>
        </div>
        <div className='review-user'>
          <p className='review-user01'>4497767482**</p>
          <p>2025-10-17</p>
        </div>
        </div>
        <p className='review-info01'>색상 = 브라운, 사이즈 = 6M</p>
        <p className='review-ment'>선물용으로도 강추! 이모들이 보더니 다들 어디서 샀냐고 물어보네요 ㅎㅎ</p>
      <div className='review-comment'>
      <p><RiNotification3Line /> 신고 · 차단</p>
      <p><MdOutlineModeComment /> 댓글 0</p>
      </div>
      </div>
      <div className='review'>
        <div className='review-info'>
        <div className='review-star'>
        <p><FaStar /><FaStar /><FaStar /><FaStar /><FaStar /></p>
        <p className='review-star2'>5.0</p>
        </div>
        <div className='review-user'>
          <p className='review-user01'>4497767268**</p>
          <p>2025-10-09</p>
        </div>
        </div>
        <p className='review-info01'>색상 = 브라운, 사이즈 = 6M</p>
        <p className='review-ment'>입는 순간 포근함이 느껴지는지, 아기가 하루 종일 칭얼거림 없이 편안해 보이네요!</p>
      <div className='review-comment'>
      <p><RiNotification3Line /> 신고 · 차단</p>
      <p><MdOutlineModeComment />  댓글 0</p>
      </div>
      </div>
      <button className='review-btn'>리뷰 작성하기</button>
    </div>
  );
};

export default ReviewInfo;