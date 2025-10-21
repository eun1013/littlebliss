
import { useState } from "react";
import NewList from "../../assets/NewList.json";
import { BsStars } from "react-icons/bs";
import Popup from "../Popup";

const New = () => {
  const [hoveredle, setHoveredle] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  return (
    <div className="New">
      <div className='category-new'>
        <p className="new-icon"><BsStars /></p>
        <h1 className="new-name">NEW</h1>
        <p className="new-ment">새로운 시즌을 만나보세요!</p>
      </div>
      <ul className="product-list">
        {NewList.map((item) => {
          return (
            <li
              key={item.id}
              className="product-item"
              onMouseEnter={() => { setHoveredle(item.id) }}
              onMouseLeave={() => { setHoveredle(null) }}
            >
              <div className="product-container">
                <img 
                  src={item.imageDefault}
                  alt={item.alt}
                  className="product-img default-img" />
                  <img
                  src={item.imageHover}
                  alt={item.alt}
                  className={`product-img hover-img ${hoveredle === item.id ? 'active' : ''}`} 
                  />
                {item.label && <span className="product-label">{item.label}</span>}
              </div>
              <div className="product">
              <div className="product-info">
                <h3 className="product-title">{item.title}</h3>
                <p className="product-price">￦{item.price.toLocaleString()}원</p>
              </div>
              <div className="btn-wrap">
              <button 
              className="btn-add"
              onClick={()=>{setShowPopup(true)}}
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
        btnText="취소"
        handleBtnClick={() => setShowPopup(false)}
      />
    )}
    </div>
  );
};

export default New;