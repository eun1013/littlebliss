import React, { useState } from 'react';
import sale from "../../assets/Sale.json";
import { MdDiscount } from "react-icons/md";
import Popup from "../Popup";


const Sale = ({ handleAddToCart }) => {
  const [hoveredle, setHoveredle] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  
  const handleItemAddToCart = () => {
    if (currentItem) {
      handleAddToCart(currentItem)
    }
    setShowPopup(false);
  }

  return (
    <div className="Sale">
      <div className='category-new'>
        <p className="new-icon"><MdDiscount /></p>
        <h1 className="new-name">SALE</h1>
        <p className="new-ment">UP TO 70% 상품을 만나보세요!</p>
      </div>
      <ul className="product-list">
        {sale.map((item) => {
          return (
            <li
              key={item.id}
              className="product-sale-itme"
              onMouseEnter={() => { setHoveredle(item.id) }}
              onMouseLeave={() => { setHoveredle(null) }}
            >
              <div className="product-sale-container">
                <img
                  src={item.imageDefault}
                  alt={item.alt}
                  className="product-sale-img default-img" />
                <img
                  src={item.imageHover}
                  alt={item.alt}
                  className={`product-sale-img hover-img ${hoveredle === item.id ? 'active' : ''}`}
                />
                {item.label && <span className="product-label">{item.label}</span>}
              </div>
              <div className="product">
                <div className="product-info">
                  <h3 className="product-title">{item.title}</h3>
                  <p className="product-price">￦{item.price.toLocaleString()}원</p>
                  <div className='sale-price'>
                    <p className='product-sale'>%{item.sale}</p>
                    <p className="product-sale-price">￦{Math.round(item.price * (1 - item.sale / 100)).toLocaleString()}원</p>
                  </div>
                </div>
                <div className="btn-wrap">
                  <button
                    className="btn-add"
                    onClick={() => { 
                      setCurrentItem(item)
                      setShowPopup(true) }}
                  >ADD TO CART +</button>
                  <button className="btn-buy">BUY NOW</button>
                </div>
              </div>
            </li>
          )
        })}
      </ul>
      {showPopup && (
        <Popup
          mainText="이 상품을 장바구니에 담으시겠어요?"
          handleBtnClick={() => setShowPopup(false)}
          handleConfirmClick={handleItemAddToCart}
        />
      )}
    </div>
  );
};

export default Sale;