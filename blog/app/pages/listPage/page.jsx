import React from 'react'
import List from './components/List';
import { style } from '@/components/literar/style/style';
//리스트 페이지 ( 랜더링 컴포넌트, 서버 컴포넌트 )
function page () {
  const listPageStyle = style.pages.listPage.page
  return (
    <div className={listPageStyle.div}>
      <List />
    </div>
  )
}
  
export default page;
