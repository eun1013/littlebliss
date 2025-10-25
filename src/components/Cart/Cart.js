import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MdDelete } from "react-icons/md";
import Popup from '../Popup';

const Cart = ({ cart, onDelete, onUpdate }) => {
  const navigate = useNavigate('');
  const [hoveredle, setHoveredle] = useState(null);
  const [checkedItems, setCheckedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  //체크박스 선택 처리
  const handleCheck = (itemId) => {
    if (checkedItems.includes(itemId)) {
      // 이미 선택된 상품이면 선택 해제
      setCheckedItems(checkedItems.filter(id => id !== itemId));
      setSelectAll(false); // 하나라도 해제되면 전체 선택 해제
    } else {
      //선택되지 않은 상품이면 선택 추가
      setCheckedItems([...checkedItems, itemId]);
      // 모든 상품이 선택 되었는지 확인
      if (checkedItems.length + 1 === cart.length) {
        setSelectAll(true);
      }
    }
  };

  // 전체 선택 및 해제 처리
  const handleSelectAll = () => {
    if (selectAll) {
      setCheckedItems([]);
    } else {
      const allItemlds = cart.map(item => item.id ||
        item.product_id);
      setCheckedItems(allItemlds);
    }
    setSelectAll(!selectAll);
    setShowPopup(true);
  }

  //전체 상품 금액 계산
  const selectAllPrice = cart.reduce((sum, item) => {
    return sum + (item.price * item.count);
  }, 0);

  //선택된 상품 금액 계산
  const selectedTotalPrice = cart
    .filter(item => checkedItems.includes(item.id ||
      item.product_id))
    .reduce((sum, item) => {
      return sum + (item.price * item.count)
    }, 0);

  const totalPrice = cart.reduce((sum, item) => {
    return sum + (item.price * item.count);
  }, 0);

  return (
    <div className='cart'>
      <h1 className="cart-title">MY CART</h1>
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h3 className='empty-cart-title'>아직 담은 상품이 없어요!</h3>
          <p className='empty-cart-description'>마음에 드는 상품을 지금 바로 담아보세요!👶💖</p>
          <button
            className="home"
            onClick={() => navigate('/')}
          >
            Shop Now
          </button>
        </div>
      ) : (
        <div className='cart-warp'>
          <ul className='cart-list'>
            {cart.map((item) => {
              const itemId = item.id || item.product_id;

              return (
                <li
                  className='cart-list-warp'
                  key={itemId}
                  onMouseEnter={() => { setHoveredle(itemId) }}
                  onMouseLeave={() => { setHoveredle(null); }}
                >
                  <input
                    type='checkbox'
                    checked={checkedItems.includes(itemId)}
                    onChange={() => handleCheck(itemId)}
                  />
                  <div className="cart-img-container">
                    <img
                      src={`${process.env.PUBLIC_URL}${item.imageDefault}`}
                      alt={item.alt}
                      className="cart-img default-img"
                    />
                    {item.imageHover && (
                      <img
                        src={`${process.env.PUBLIC_URL}${item.imageHover}`}
                        alt={item.alt}
                        className={`cart-img hover-img ${hoveredle === itemId ? 'active' : ''}`}
                      />
                    )}
                  </div>

                  <div className="item-info">
                    <div className="item-up">
                      <h4 className='item-title'><span className='itme-title-title'>상품명</span><br />{item.title}</h4>
                      <MdDelete
                        className="delete-icon"
                        onClick={() => onDelete(itemId)}
                      />
                    </div>
                    <div className="quantity-controls">
                      <div className='controls-wrap'>
                        <div className='controls-wrap2'>
                          <p className='quantity'>수량</p>
                          <div className='controls-btn-wrap'>
                            <button
                              onClick={() => onUpdate(itemId, item.count - 1)}
                              disabled={item.count <= 1}
                              className="quantity-btn decrease"
                            >
                              -
                            </button>
                            <span className="quantity-display">{item.count}</span>
                            <button
                              onClick={() => onUpdate(itemId, item.count + 1)}
                              className="quantity-btn increase"
                            >
                              +
                            </button>
                          </div>
                        </div>
                      </div>
                      {item.isSale ? (
                        <div className="price-container">
                          <div className="sale-price-wrap">
                            <p className="original-price"><span className="original-price-title">금액</span><br />￦{item.originalPrice.toLocaleString()}원</p>
                            <div className='sale-wrap'>
                              <p className="sale-percent">{item.salePercent}%</p>
                              <h3 className="sale-price">￦{(item.price * item.count).toLocaleString()}원</h3>
                            </div>
                          </div>
                        </div>
                      ) : (
                        <h3 className='origin-price'><span className="origin-price-title">금액</span><br />￦{(item.price * item.count).toLocaleString()}원</h3>
                      )}
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>
          <div className='cart-payment-wrap'>
          <div className="cart-summary">
            <div className="summary-price">
              <p className='summary-title'>상품 금액</p>
              <h3 className='summary-total'>{totalPrice.toLocaleString()}원</h3>
            </div>
            <div className="summary-price">
              <p className='summary-title'>배송비</p>
              <h3 className='summary-total'>무료 배송</h3>
            </div>
            <hr/>
              <div className="summary-price">
              <p className='summary-title payment-total'>결제 예정 금액</p>
              <h3 className='summary-total payment-total'>{selectedTotalPrice.toLocaleString()}원</h3>
            </div>
            </div>
            <div className='order-btn-wrap'>
            <button
              onClick={() => handleSelectAll()}
              className="order-all-btn"

            >
              전체 상품 주문
            </button>
            <button
              onClick={() => {setShowPopup(true)}}
              disabled={checkedItems.length === 0}
              className={`order-selected-btn ${checkedItems.length === 0 ? 'disabled' : ''}`}
            >
              선택 상품 주문
            </button>
          </div>
        </div>
        </div>
      )}
        {showPopup && (
        <Popup
          mainText="상품을 주문하시겠어요?"
          handleBtnClick={() => setShowPopup(false)}
          handleConfirmClick={()=>navigate("/")}
        />
      )}
    </div>
  );
};

export default Cart;

