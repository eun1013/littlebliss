import { AiFillQuestionCircle } from "react-icons/ai";

const Popup = ({ 
  mainText, 
  subText, 
  btnText = "취소",
  btnSubText = "확인", 
  handleBtnClick,
  handleConfirmClick // 확인 버튼 클릭 이벤트 추가!
}) => {
  return (
    <div className="popup">
      <div className="popup-box">
        <div className="popup-text">
          <AiFillQuestionCircle />
          <h4>{mainText}</h4>
          <div>{subText}</div> 
        </div>
        <div className="popup-btn">
          <button 
            className="btn-close"
            onClick={handleBtnClick}
          >
            {btnText}
          </button>
          <button 
            className="btn-check"
            onClick={handleConfirmClick} 
          >
            {btnSubText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;