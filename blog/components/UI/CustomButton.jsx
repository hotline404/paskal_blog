import React from "react";

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
