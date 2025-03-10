import React from "react";

//button 프레젠트 컴포넌트
function CustomButton({ buttonName, type, disabled, onClickHandler }) {
  return (
    <button
      type={type || "button"}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {buttonName}
    </button>
  );
}

export default CustomButton;
