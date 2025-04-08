import React from "react";
import CustomLogo from "../UI/CustomLogo";
import Footers from "./Footers.jsx";
import TagBox from "../tagBox/TagBox";
import { style } from "../literar/style/style";

//헤더 컴포넌트: 사이드바로 들어갑니다.

function Headers() {
  const headerStyle = style.components.common.header
  return (
    <div className={headerStyle.div}>
      <CustomLogo className="">paskal's blog</CustomLogo>
      <TagBox className=""/>
      <Footers className={headerStyle.footer} />
    </div>
  );
}

export default Headers;
// 야발...
