import React from "react";

//로고 프레젠트 컴포넌트
function CustomLogo(props) {
  //이후 글리치 효과 적용 예정
  return (
    <div>
      <h1 className="bg-white">{props.children}</h1>
    </div>
  );
}

export default CustomLogo;