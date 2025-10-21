import React, { useState } from 'react';
import TopHeader from './TopHeader';
import Menu from './Menu';


const TopMenu = () => {
  //메뉴바 상태관리
    const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
    <TopHeader isOpen={isOpen} setIsOpen={setIsOpen}/>
    {isOpen && <Menu isOpen={isOpen} setIsOpen={setIsOpen} />}
    </div>
  );
};

export default TopMenu;