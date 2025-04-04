import React from "react";

//button 프레젠트 컴포넌트
function CustomButton({
  buttonName,
  type,
  disabled,
  onClickHandler,
  bgColor,
  textColor,
  margin,
  width,
}) {
  return (
    <button
      className={`${bgColor} ${margin} ${width} border-red-400 border p-2 rounded-2xl`}
      type={type || "button"}
      disabled={disabled}
      onClick={onClickHandler}
    >
      {buttonName}
    </button>
  );
}

export default CustomButton;
