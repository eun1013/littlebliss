import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsFillBagHeartFill } from "react-icons/bs";
import { data, useNavigate } from 'react-router-dom';

const TopHeader = ({ isOpen, setIsOpen }) => {
	const [menu, setMenu] = useState(false);
	const [activeCategory, setActiveCategory] = useState('');
	const navigate = useNavigate('');

	const categories = [
		{ name: 'NEW ARRIVAL', path: '/NewArrival' },
		{ name: 'OUTER', path: '/Outer' },
		{ name: 'TOP', path: '/Top' },
		{ name: 'BOTTOM', path: '/Bottom' },
		{ name: 'ROMPER', path: '/Romper' },
		{ name: 'SALE', path: '/Sale' },
	]

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
			{menu && (
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