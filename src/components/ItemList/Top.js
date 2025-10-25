import { useEffect, useState } from "react";
import top from "../../assets/Top.json";
import Popup from "../Popup";
import Popup2 from "../Popup2";


const Top = ({ handleAddToCart }) => {
  const [hoveredle, setHoveredle] = useState(null);
  const [showPopup, setShowPopup] = useState(false);
  const [showPopup2, setShowPopup2] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemPerPage] = useState(10);
  const [currentItem, setCurrentItem] = useState(null);
  const [option, setOption] = useState('신상품');

  const handleItemAddToCart = () => {
    if (currentItem) {
      handleAddToCart(currentItem)
    }
    setShowPopup(false);
    setShowPopup2(true);
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

  // 상품 정렬 함수
  const getSelectOption = () => {
    const productItems = [...top];
    switch (option) {
      case '높은 가격순':
        return productItems.sort((a, b) => b.price - a.price);
      case '낮은 가격순':
        return productItems.sort((a, b) => a.price - b.price);
      case '신상품':
      default:
        return productItems.sort((a, b) => {
          if (a.label === 'new' && b.label !== 'new') return -1;
          if (a.label !== 'new' && b.label === 'new') return 1;
          return 0;
        });
    }
  };

  // 정렬된 상품 가져오기
  const sortedItems = getSelectOption();
  const totalPage = Math.ceil(sortedItems.length / itemsPerPage);
  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentItems = sortedItems.slice(startIdx, startIdx + itemsPerPage);
  return (
    <div className="NewArrival">
      <h1 className="newarrival-big-title">TOP</h1>
      <div className="sort-options">
        <select
          className="sort-select"
          value={option}
          onChange={(e) => {
            setOption(e.target.value);
            setCurrentPage(1); // 정렬 변경 시 1페이지로 초기화
          }}
        >
          <option value="신상품">신상품</option>
          <option value="높은 가격순">높은 가격순</option>
          <option value="낮은 가격순">낮은 가격순</option>
        </select>
      </div>
      <ul className="newarrival-list">
        {currentItems.map((item) => {
          return (
            <li
              key={item.id}
              className="newarrival-item"
              onMouseEnter={() => { setHoveredle(item.id) }}
              onMouseLeave={() => { setHoveredle(null) }}
            >
              <div className="newarrival-container">
                <img
                  loading="lazy"
                  src={item.imageDefault}
                  alt={item.alt}
                  className="product-img default-img" />
                <img
                  loading="lazy"
                  src={item.imageHover}
                  alt={item.alt}
                  className={`product-img hover-img ${hoveredle === item.id ? 'active' : ''}`}
                />
                {item.label && <span className="product-label">{item.label}</span>}
              </div>
              <div className="newarrival-product">
                <div className="newarrival-info">
                  <h3 className="newarrival-title">{item.title}</h3>
                  <p className="newarrival-price">￦{item.price.toLocaleString()}원</p>
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
      {showPopup2 && (
        <Popup2
          mainText="Little Bliss 아이템이 장바구니에 담겼어요!💖"
          handleConfirmClick={() => setShowPopup2(false)}
        />)}
    </div>
  );
};

export default Top;
