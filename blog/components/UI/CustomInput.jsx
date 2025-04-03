import React from "react";

//input 프레젠트 컴포넌트
export default function CustomInput({input, onChange}, ref) {
  return (
    <div className="border-red-400 border p-1 rounded-2xl">
      <input
        className="focus:outline-none"
        ref={ref}
        onChange={onChange}
        {...input}
      />
    </div>
  );
}


