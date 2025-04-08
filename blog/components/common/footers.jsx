import React from "react";
import CopyBoards from "@/util/CopyBoards";
import { style } from "../literar/style/style";

//footer 프레젠트 컴포넌트
function Footers() {
  const footerStyle = style.components.common.footer

  return (
    <div className={footerStyle.div}>
      <p>email: cosmoyj7733@gmail.com</p>
      <p className={footerStyle.p1}>github: https://github.com/hotline404/paskal_blog/tree/main/blog</p>
    </div>
  );
}

export default Footers;
