import React from 'react';

const DitailInfo = () => {
  return (
    <div className='DitailInfo'>
      <img
        className='itme-ditailInfo' loading="lazy"
        src={process.env.PUBLIC_URL + "/images/product/productPage.webp"} alt="브라운 롱 슬리브 바디수트 상세 내역 이미지"/>
    </div>
  );
};

export default DitailInfo;