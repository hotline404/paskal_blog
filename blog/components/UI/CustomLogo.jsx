import React from "react";

//로고 프레젠트 컴포넌트
function CustomLogo(props) {
  //이후 글리치 효과 적용 예정
  return (
    <div className="relative content-center"> 
      <h1 className="text-white text-[30px] top-[0rem] left-[5px] absolute font-bold z-50">
        {props.children}
      </h1>
      <h1 className="text-blue-800 text-[30px] top-[0.3rem] left-[10px] font-bold absolute z-0">
        {props.children}
      </h1>
      <h1 className="text-purple-800 text-[30px] top-[-0.2rem] left-[0px] font-bold absolute z-10">
        {props.children}
      </h1>
    </div>
  );
}

export default CustomLogo;
