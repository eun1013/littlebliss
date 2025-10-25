import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import "./App.scss";
import TopMenu from "./components/TopMenu/TopMenu";
import MainPage from "./components/MainPage/MainPage";
import NewArrival from "./components/NewArrival/NewArrival";
import Outer from "./components/ItemList/Outer";
import Top from "./components/ItemList/Top";
import Bottom from "./components/ItemList/Bottom";
import Romper from "./components/ItemList/Romper";
import Cart from "./components/Cart/Cart";
import { useEffect, useState } from "react";
import SaleList from "./components/ItemList/SaleList";


const App = () => {
  //장바구니 함수 관리
  const [cart, setCart] = useState(() => {
    //로컬 스토리지 저장
    const savedCart = localStorage.getItem('USER');
    return savedCart ? JSON.parse(savedCart) : []
  })

  // 상태가 변경될 때마다 로컬에 저장
  useEffect(() => {
    localStorage.setItem('USER', JSON.stringify(cart));
  }, [cart]);

  //장바구니에 추가하기 (세일 상품인지 확인)
  const handleAddToCart = (item) => {
    const itemWithProductId = {
      ...item,
      product_id: item.id || item.product_id || Date.now() // id가 있으면 그걸 사용, 없으면 타임스탬프로 고유값 생성
    };

    // 세일 상품 처리
    const discountedPrice = itemWithProductId.sale && itemWithProductId.sale > 0
      ? Math.round(itemWithProductId.price * (1 - itemWithProductId.sale / 100))
      : itemWithProductId.price;

    // 세일 정보 포함해서 cartItem 생성
    const cartItem = {
      ...itemWithProductId,
      originalPrice: itemWithProductId.price,
      price: discountedPrice,
      isSale: itemWithProductId.sale && itemWithProductId.sale > 0 ? true : false,
      salePercent: itemWithProductId.sale || 0
    };

    // 기존 장바구니에 동일 상품이 있는지 확인
    const existingItem = cart.find(cartItem =>
      cartItem.product_id === itemWithProductId.product_id
    );

    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.product_id === itemWithProductId.product_id
          ? { ...cartItem, count: cartItem.count + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...cartItem, count: 1 }]);
    }
  }

  //장바구니 삭제
  const handleDelete = (itemId) => {
    setCart(cart.filter(item =>
      item.product_id !== itemId && item.id !== itemId
    ));
  };

  //장바구니 수량 업데이트
  const handleUpdate = (itemId, newCount) => {
    if (newCount <= 0) {
      handleDelete(itemId); // 수량이 0이면 삭제처리
      return;
    }
    setCart(cart.map(item =>
      (item.product_id === itemId || item.id === itemId)
        ? { ...item, count: newCount }
        : item
    ));
  };

  //주문 후 장바구니 비우기
  const handleClearCart = ()=>{
    setCart([]);
    localStorage.removeItem('cart');
  }

  return (
    <HashRouter>
      <TopMenu />
      <div>
        <Routes>
          <Route path="/" element={<MainPage handleAddToCart={handleAddToCart} />} />
          <Route path="/NewArrival" element={<NewArrival handleAddToCart={handleAddToCart} />} />
          <Route path="/Outer" element={<Outer handleAddToCart={handleAddToCart} />} />
          <Route path="/Top" element={<Top handleAddToCart={handleAddToCart} />} />
          <Route path="/Bottom" element={<Bottom handleAddToCart={handleAddToCart} />} />
          <Route path="/Romper" element={<Romper handleAddToCart={handleAddToCart} />} />
          <Route path="/Sale" element={<SaleList handleAddToCart={handleAddToCart} />} />
          <Route path="/Cart" element={<Cart cart={cart} onDelete={handleDelete} onUpdate={handleUpdate}  onClearCart={handleClearCart}/>} />
        </Routes>
      </div>
    </HashRouter>
  );
};

export default App;