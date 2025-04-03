import React from "react";
import CustomLogo from "../UI/CustomLogo";
import Footers from "./Footers.jsx";
import TagBox from "../tagBox/TagBox";

//헤더 컴포넌트: 사이드바로 들어갑니다.

function Headers() {
  return (
    <div className="h-screen relative">
      <CustomLogo className="">paskal's blog</CustomLogo>
      <TagBox className=""/>
      <Footers className="fixed top-0" />
    </div>
  );
}

export default Headers;
// 야발...
