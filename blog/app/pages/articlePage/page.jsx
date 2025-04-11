import React from "react";
import Post from "./components/Post";
import PostHeader from "./components/PostHeader";
import { style } from "@/components/literar/style/style";

const dummy_data = {
  tags: ["asdf", "테크", "헿", "히힣"],
  date: "2003.04.13",
  title: "못생겨도 괜찮다",
  post: "별자리가 될 수 있다면..."
}


//아티클 페이지
function page() {
  const data = dummy_data
  const articlePageStyle = style.pages.articlePage.page
  return (
    <div className={articlePageStyle.div1}>
      <div className={articlePageStyle.div2}>
        <PostHeader date={data.date} title={data.title} tags={data.tags}/>
        <Post post={data.post}/>
      </div>
    </div>
  );
}

export default page;
