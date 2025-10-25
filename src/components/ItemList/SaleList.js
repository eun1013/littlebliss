import { useEffect, useState } from "react";
import sale from "../../assets/Sale.json";
import Popup from "../Popup";


const SaleList = ({ handleAddToCart }) => {
  const [hoveredle, setHoveredle] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [currentItem, setCurrentItem] = useState(null);

  const handleItemAddToCart = () => {
    if (currentItem) {
      handleAddToCart(currentItem)
    }
    setShowPopup(false);
  }

  useEffect(() => {
    const updateItemcard = () => {
      const width = window.innerWidth;
      if (width < 768) {
        setItemPerPage(10) // 모바일 설정
      } else if (width < 1024) {
        setItemPerPage(9) // 태블릿 설정
      } else {
        setItemPerPage(9) // 데스크탑 설정
      }
      setCurrentPage(1); //초기화 작업
    }
    updateItemcard();
    window.addEventListener("resize", updateItemcard);
    return () => window.removeEventListener("resize", updateItemcard);
  }, [])

  const totalPage = Math.ceil(sale.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = sale.slice(startIdx, startIdx + itemsPerPage);

  return (
    <div className="NewArrival">
      <h1 className="newarrival-big-title">SALE</h1>
      <ul className="product-list">
        {currentItems.map((item) => {
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
      {totalPage >= 1 && (
        <div className="pagination">
          {[...Array(totalPage)].map((_, index) => {
            const pageNumber = index + 1;
            return (
              <button
                key={pageNumber}
                onClick={() => setCurrentPage(pageNumber)}
                className={currentPage === pageNumber ? 'select' : ''}
              >
                {pageNumber}
              </button>
            );
          })}
        </div>
      )}
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

export default SaleList;
