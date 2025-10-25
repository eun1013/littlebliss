import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-icon'>
        <p className='mail-icon'><IoMdMail /></p>
        <p className='ins-icon'><FaInstagram /></p>
      </div>
      <ul className='footer-info'>
        <li className='info-1'>이용약관</li>
        <li className='info-2'>개인정보처리방침</li>
        <li className='info-3'>사업자정보확인</li>
      </ul>
      <p className='info-4'>상호:  리틀 블리스 | 대표 : 장성은 | 개인정보관리책임자: 리틀 블리스 | 이메일 : littlebliss@aaaa.aaa </p>
      <p className='info-5'>주소 : 경기도 용인시 기흥구 신정로 25 | 사업자등록번호 : 173-01-01997 | 통신판매 :  2025-경기도 용인-1013</p>
    </div>
  );
};

export default Footer;