import React, { useState } from 'react';
import { TiThMenu } from "react-icons/ti";
import { FaUserCircle } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { BsFillBagHeartFill } from "react-icons/bs";
import { data, useNavigate } from 'react-router-dom';
import Menu from "./Menu";

const TopHeader = ({isOpen,setIsOpen}) => {
	const [menu, setMenu] = useState(false);
	const navigate = useNavigate('');

	const handleClick = ()=>{
		setMenu(!menu);
		setIsOpen(!menu);
	}
	return (
		<div className='top-header'>
			<div className='menu-btn'>
				<button className='btn-menu'
				onClick={handleClick}
					><TiThMenu /></button>
				<button className='btn-home'
					onClick={() => { navigate('/') }}><IoHome /></button>
			</div>
			<h2 className='logo'>Little Bliss</h2>
			<div className='user-icons'>
				<button className='btn-user'><FaUserCircle /></button>
				<button className='btn-cart'><BsFillBagHeartFill /></button>
			</div>
		</div>
	);
};

export default TopHeader;