import React, { useEffect, useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsFillBagHeartFill } from "react-icons/bs";
import { data, useLocation, useNavigate } from 'react-router-dom';

const TopHeader = ({ isOpen, setIsOpen }) => {
	const [menu, setMenu] = useState(false);
	const [activeCategory, setActiveCategory] = useState('');
	const [isDesktop, setIsDesktop] = useState(false);
	const navigate = useNavigate('');
	const location = useLocation();

	const isCartPage = location.pathname === '/Cart';
	const isProductPage = location.pathname === '/productPage';

	const categories = [
		{ name: 'NEW ARRIVAL', path: '/NewArrival' },
		{ name: 'OUTER', path: '/Outer' },
		{ name: 'TOP', path: '/Top' },
		{ name: 'BOTTOM', path: '/Bottom' },
		{ name: 'ROMPER', path: '/Romper' },
		{ name: 'SALE', path: '/Sale' },
	]

	  useEffect(() => {
    const checkIfDesktop = () => {
      setIsDesktop(window.innerWidth >= 768); // 768px 이상이면으로 설정
    };
    // 초기 로드 시 실행
    checkIfDesktop();
    // 화면 크기 변경 시 실행
    window.addEventListener('resize', checkIfDesktop);
    return () => window.removeEventListener('resize', checkIfDesktop);
  }, []);

  // 메뉴 상태 업데이트
  useEffect(() => {
    if (isDesktop && !isCartPage && !isProductPage) {
      setMenu(true);
    } else if (isCartPage || isProductPage){
			setMenu(false);
		}
  }, [isDesktop,isCartPage,isProductPage]);

	const handleCategoryClick = (category) => {
		setActiveCategory(category.name);
		navigate(category.path);
	}

	const handleClick = () => {
		setMenu(!menu);
		setIsOpen(!menu);
	}

	const handleCartClick = () => {
		navigate('/Cart');
		setMenu(false);
	};

	return (
		<>
			<div className='top-header'>
				<div className='menu-btn'>
					<button className='btn-menu'
						onClick={handleClick}
					><TiThMenu /></button>
					<button className='btn-home'
						onClick={() => {
							navigate('/');
							setActiveCategory('');
						}}><IoHome /></button>
				</div>
				<h2 className='logo'>Little Bliss</h2>
				<div className='user-icons'>
					<button className='btn-user'><FaUserCircle /></button>
					<button className='btn-cart'
						onClick={handleCartClick}><BsFillBagHeartFill /></button>
				</div>
			</div>
			{menu && !isCartPage && !isProductPage && (
				<ul className='menu-category'>
					{categories.map((category) => (
						<li
							key={category.name}
							className={activeCategory === category.name ? 'active' : ''}
							onClick={() => handleCategoryClick(category)}
						>
							{category.name}
						</li>
					))}
				</ul>
			)}
		</>
	);
};

export default TopHeader;