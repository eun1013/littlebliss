// const [showPopup, setShowPopup] = useState(false);

//   {showPopup && (
  //     <Popup 
  //       mainText="메인 텍스트" 
  //       subText="서브 텍스트" 
  //       btnText="버튼 텍스트" // 기본값: "확인" (btnText 자체를 안 적으면 확인으로 나옵니다! "확인"이 아닐 경우에만 적어주시면 돼요)
  //       onClose={() => setShowPopup(false)}
  //     />
  //   )}

import { AiFillQuestionCircle } from "react-icons/ai";

const Popup = ( {mainText, subText, btnText = "취소",btnSubText = "확인", handleBtnClick}) => {
  return (
    <div className="popup">
      <div className="popup-box">
        <div className="popup-text">
          <AiFillQuestionCircle />
          <h4>{mainText}</h4>
          <div>{subText}</div> {/* p태그로 설정할 경우 여러줄 처리로 새로운 태그를 넣을수 없기때문에 div처리 */}
        </div>
        <div className="popup-btn">
        <button 
        className="btn-close"
        onClick={handleBtnClick}>{btnText}</button>
        <button className="btn-check">{btnSubText}</button>
        </div>
      </div>
    </div>
  );
};

export default Popup;