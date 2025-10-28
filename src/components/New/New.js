
import { useState } from "react";
import NewList from "../../assets/NewList.json";
import { BsStars } from "react-icons/bs";
import Popup from "../Popup";
import Popup2 from "../Popup2";
import { useNavigate } from "react-router-dom";

const New = ({ handleAddToCart }) => {
  const [hoveredle, setHoveredle] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const navigat = useNavigate('');

  const handleItemAddToCart = () => {
    if (currentItem) {
      handleAddToCart(currentItem)
    }
    setShowPopup(false);
    setShowPopup2(true);
  }

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
                  loading="lazy"
                  src={`${process.env.PUBLIC_URL}/${item.imageDefault}`}
                  alt={item.alt}
                  className="product-img default-img"
                  onClick={()=>{navigat('/productPage')}}
                  />
                <img
                  loading="lazy"
                  src={`${process.env.PUBLIC_URL}/${item.imageHover}`}
                  alt={item.alt}
                  onClick={()=>{navigat('/productPage')}}
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
                    onClick={() => {
                      setCurrentItem(item)
                      setShowPopup(true)
                    }}
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
      {showPopup2 && (
        <Popup2
          mainText="Little Bliss 아이템이 장바구니에 담겼어요!💖"
          handleConfirmClick={() => setShowPopup2(false)}
        />)}
    </div>
  );
};

export default New;