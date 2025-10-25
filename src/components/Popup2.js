import { FaCheckCircle } from "react-icons/fa";

const Popup = ({
  mainText,
  subText,
  btnText = "확인",
  handleConfirmClick // 확인 버튼 클릭 이벤트 추가!
}) => {
  return (
    <div className="popup">
      <div className="popup-box">
        <div className="popup-text">
          <FaCheckCircle />
          <h4>{mainText}</h4>
          <div>{subText}</div>
        </div>
        <div className="popup-btn">
          <button
            className="btn-check"
            onClick={handleConfirmClick}
          >
            {btnText}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Popup;