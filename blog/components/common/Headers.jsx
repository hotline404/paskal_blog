import React from "react";
import CustomLogo from "../UI/CustomLogo";
import Footers from "./Footers.jsx";
import TagBox from "../tagBox/TagBox";

//헤더 컴포넌트: 사이드바로 들어갑니다.

function Headers() {
  return (
    <div className="h-screen justify-between  ">
      <div className="">
        <CustomLogo>paskal's blog</CustomLogo>
      </div>
      <TagBox />
      <Footers className="fixed top-0" />
    </div>
  );
}

export default Headers;
